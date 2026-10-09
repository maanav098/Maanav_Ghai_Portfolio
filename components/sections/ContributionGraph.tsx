'use client'

import { useCallback, useEffect, useState } from 'react'
import { profile } from '@/lib/data'

interface ContributionDay {
  date: string
  count: number
  level: number
}

interface ContributionData {
  total: number
  days: ContributionDay[]
  from: string
  to: string
}

const cellStyles = [
  'bg-[#1f2d36] border border-[#2d3b46]',
  'bg-[#2d4f46] border border-[#325c4f]',
  'bg-[#3c7c5d] border border-[#3d8a67]',
  'bg-[#4ea16d] border border-[#58b777]',
  'bg-[#7ad39f] border border-[#8fe9b2]',
]

const weekdayLabels = [
  { label: 'Mon', row: 1 },
  { label: 'Wed', row: 3 },
  { label: 'Fri', row: 5 },
]

function groupIntoWeeks(days: ContributionDay[]) {
  const weeks: ContributionDay[][] = []

  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7))
  }

  return weeks
}

function monthLabelsForWeeks(weeks: ContributionDay[][]) {
  return weeks.map((week, index) => {
    const firstOfMonth = week.find((day) => day.date.endsWith('-01'))
    const labelDate = firstOfMonth?.date ?? (index === 0 ? week[0]?.date : undefined)

    if (!labelDate) {
      return ''
    }

    return new Date(`${labelDate}T00:00:00Z`).toLocaleString('en-US', {
      month: 'short',
      timeZone: 'UTC',
    })
  })
}

export function ContributionGraph() {
  const [contributions, setContributions] = useState<ContributionData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const loadContributions = useCallback(async (signal?: AbortSignal) => {
    try {
      const response = await fetch('/api/github-contributions', {
        cache: 'no-store',
        signal,
      })

      if (!response.ok) {
        throw new Error('GitHub contributions could not be loaded. Please try again shortly.')
      }

      const data = (await response.json()) as ContributionData
      setContributions(data)
      setError(null)
    } catch (loadError) {
      if (loadError instanceof DOMException && loadError.name === 'AbortError') {
        return
      }

      setError(loadError instanceof Error ? loadError.message : 'Unable to load GitHub contributions.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    void loadContributions(controller.signal)

    const refreshInterval = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        void loadContributions()
      }
    }, 30 * 60 * 1000)

    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') {
        void loadContributions()
      }
    }

    document.addEventListener('visibilitychange', refreshWhenVisible)

    return () => {
      controller.abort()
      window.clearInterval(refreshInterval)
      document.removeEventListener('visibilitychange', refreshWhenVisible)
    }
  }, [loadContributions])

  const weeks = contributions ? groupIntoWeeks(contributions.days) : []
  const monthLabels = monthLabelsForWeeks(weeks)
  const gridTemplateColumns = `repeat(${weeks.length}, 12px)`

  return (
    <section id="contributions" className="section-shell section-atmosphere pt-12 sm:pt-16 lg:pt-20">
      <div className="section-inner">
        <div className="mb-10">
          <div className="section-kicker">Activity</div>
          <h2 className="mt-6 max-w-5xl font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-[5.25rem] lg:leading-[0.96]">
            Contribution <span className="text-[#9d3a30]">graph.</span>
          </h2>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#0f1720]/90 p-4 shadow-[0_18px_46px_rgba(2,8,23,0.32)] sm:p-6 lg:p-7">
          {loading && !contributions ? (
            <p className="py-8 text-sm text-slate-400" role="status">Loading GitHub activity…</p>
          ) : error && !contributions ? (
            <div className="flex flex-wrap items-center justify-between gap-3 py-5">
              <p className="text-sm text-slate-300" role="status">{error}</p>
              <button
                type="button"
                onClick={() => void loadContributions()}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/30"
              >
                Retry
              </button>
            </div>
          ) : contributions ? (
            <>
              <div className="overflow-x-auto pb-2">
                <div className="grid min-w-max grid-cols-[32px_auto] gap-x-2">
                  <div aria-hidden="true" />
                  <div className="grid gap-x-[3px] pb-2" style={{ gridTemplateColumns }}>
                    {monthLabels.map((month, index) => (
                      <span
                        key={`${month}-${index}`}
                        className="whitespace-nowrap text-[11px] font-medium text-slate-300 sm:text-xs"
                      >
                        {month}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-rows-[repeat(7,12px)] gap-y-[3px] text-[10px] text-slate-400">
                    {Array.from({ length: 7 }, (_, row) => {
                      const weekday = weekdayLabels.find((item) => item.row === row)
                      return <span key={row}>{weekday?.label ?? ''}</span>
                    })}
                  </div>

                  <div className="grid gap-x-[3px]" style={{ gridTemplateColumns }}>
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-rows-[repeat(7,12px)] gap-y-[3px]">
                        {week.map((day) => (
                          <span
                            key={day.date}
                            className={`h-3 w-3 rounded-[3px] ${cellStyles[day.level] ?? cellStyles[0]}`}
                            title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                            aria-label={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`}
                            role="img"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <span>
                  {contributions.total.toLocaleString()} contributions in the last year
                  {error ? <span className="ml-2 text-amber-300"> · Could not refresh just now</span> : null}
                </span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex items-center gap-1">
                    {cellStyles.map((style, index) => (
                      <span key={index} className={`h-3 w-3 rounded-[3px] ${style}`} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>

              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-slate-400 transition hover:text-white"
              >
                View GitHub profile
              </a>
            </>
          ) : null}
        </div>
      </div>
    </section>
  )
}
