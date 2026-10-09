import { NextResponse } from 'next/server'
import { profile } from '@/lib/data'

export const dynamic = 'force-dynamic'

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface GitHubCalendarResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number
          weeks: Array<{
            contributionDays: Array<{
              date: string
              contributionCount: number
              contributionLevel: string
            }>
          }>
        }
      } | null
    } | null
  }
  errors?: Array<{ message: string }>
}

const cacheHeaders = {
  'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
}

function utcDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

function levelFromGraphQL(level: string) {
  const match = level.match(/CONTRIBUTION_LEVEL_(\d)/)
  return match ? Math.min(4, Number(match[1])) : 0
}

function parseCalendarHtml(html: string) {
  const days = new Map<string, ContributionDay>()
  const cells = html.matchAll(/<td\b([^>]*\bdata-date="(\d{4}-\d{2}-\d{2})"[^>]*)>/g)

  for (const cell of cells) {
    const attributes = cell[1]
    const date = cell[2]
    const id = attributes.match(/\bid="([^"]+)"/)?.[1]
    const level = Number(attributes.match(/\bdata-level="(\d+)"/)?.[1] ?? 0)
    const tooltip = id
      ? html.match(new RegExp(`<tool-tip\\b(?=[^>]*\\bfor="${id}")[^>]*>([\\s\\S]*?)<\\/tool-tip>`))?.[1]
      : undefined
    const countMatch = tooltip?.replace(/<[^>]*>/g, '').match(/([\d,]+)\s+contributions?/i)
    const count = countMatch ? Number(countMatch[1].replace(/,/g, '')) : 0

    days.set(date, { date, count, level: Math.min(4, Math.max(0, level)) })
  }

  return days
}

async function fetchPublicContributions(from: string, to: string) {
  const username = new URL(profile.social.github).pathname.split('/').filter(Boolean)[0]
  const firstYear = Number(from.slice(0, 4))
  const lastYear = Number(to.slice(0, 4))
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, index) => firstYear + index)

  const calendars = await Promise.all(years.map(async (year) => {
    const url = new URL(`https://github.com/users/${encodeURIComponent(username)}/contributions`)
    url.searchParams.set('from', `${year}-01-01`)
    url.searchParams.set('to', `${year}-12-31`)

    const response = await fetch(url, {
      headers: {
        Accept: 'text/html',
        'User-Agent': 'Cursorfolio',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status} while loading the contribution calendar.`)
    }

    return parseCalendarHtml(await response.text())
  }))

  const days = new Map(calendars.flatMap((calendar) => Array.from(calendar.entries())))

  if (days.size === 0) {
    throw new Error('GitHub returned no contribution days; its calendar markup may have changed.')
  }

  return days
}

async function fetchAuthenticatedContributions(from: string, to: string, token: string) {
  const username = new URL(profile.social.github).pathname.split('/').filter(Boolean)[0]
  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
        from: `${from}T00:00:00Z`,
        to: `${to}T23:59:59Z`,
      },
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`GitHub GraphQL returned ${response.status} while loading contributions.`)
  }

  const payload = (await response.json()) as GitHubCalendarResponse
  const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar

  if (payload.errors?.length || !calendar) {
    throw new Error(payload.errors?.[0]?.message ?? 'GitHub did not return a contribution calendar.')
  }

  const days = new Map<string, ContributionDay>()

  for (const week of calendar.weeks) {
    for (const day of week.contributionDays) {
      days.set(day.date, {
        date: day.date,
        count: day.contributionCount,
        level: levelFromGraphQL(day.contributionLevel),
      })
    }
  }

  return { days, total: calendar.totalContributions }
}

export async function GET() {
  const endDate = new Date()
  const startDate = new Date(endDate)
  startDate.setUTCDate(startDate.getUTCDate() - 364)

  const from = utcDate(startDate)
  const to = utcDate(endDate)

  try {
    const token = process.env.GITHUB_TOKEN
    const calendar = token
      ? await fetchAuthenticatedContributions(from, to, token)
      : { days: await fetchPublicContributions(from, to), total: undefined }

    const gridStart = new Date(`${from}T00:00:00Z`)
    gridStart.setUTCDate(gridStart.getUTCDate() - gridStart.getUTCDay())
    const gridEnd = new Date(`${to}T00:00:00Z`)
    gridEnd.setUTCDate(gridEnd.getUTCDate() + (6 - gridEnd.getUTCDay()))
    const days: ContributionDay[] = []
    const cursor = new Date(gridStart)
    const lastDate = new Date(gridEnd)

    while (cursor <= lastDate) {
      const date = utcDate(cursor)
      days.push(calendar.days.get(date) ?? { date, count: 0, level: 0 })
      cursor.setUTCDate(cursor.getUTCDate() + 1)
    }

    const total = calendar.total ?? days
      .filter((day) => day.date >= from && day.date <= to)
      .reduce((sum, day) => sum + day.count, 0)

    return NextResponse.json({ total, days, from, to }, { headers: cacheHeaders })
  } catch (error) {
    console.error('Failed to load GitHub contribution calendar', error)
    return NextResponse.json(
      { error: 'Unable to load GitHub contributions right now.' },
      { status: 502, headers: { 'Cache-Control': 'no-store' } },
    )
  }
}
