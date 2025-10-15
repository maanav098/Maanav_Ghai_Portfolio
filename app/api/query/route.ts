import { NextRequest, NextResponse } from 'next/server'
import { mkdir, readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'

interface QueryPayload {
  name?: string
  email?: string
  message?: string
  whatsapp?: string
  query?: string
}

const dataDir = join(process.cwd(), 'data')
const queriesFile = join(dataDir, 'queries.json')

async function readQueriesFile() {
  if (!existsSync(queriesFile)) {
    return []
  }

  const raw = await readFile(queriesFile, 'utf8')
  if (!raw.trim()) {
    return []
  }

  try {
    return JSON.parse(raw)
  } catch (error) {
    console.warn('Corrupted queries.json detected, reinitialising file')
    return []
  }
}

async function appendQuery(entry: unknown) {
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true })
  }

  const entries = await readQueriesFile()
  entries.push(entry)
  await writeFile(queriesFile, JSON.stringify(entries, null, 2))
}

function validateEmail(email: string) {
  return /.+@.+\..+/.test(email)
}

export async function GET() {
  try {
    const entries = await readQueriesFile()
    return NextResponse.json({ data: entries })
  } catch (error) {
    console.error('Failed to read queries file', error)
    return NextResponse.json({ error: 'Unable to load queries' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as QueryPayload
    const name = body.name?.trim()
    const email = body.email?.trim()?.toLowerCase()
    const message = (body.message ?? body.query)?.toString().trim()
    const whatsapp = body.whatsapp?.trim() || 'Not provided'

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? request.ip ?? 'Unknown'

    const entry = {
      timestamp: new Date().toISOString(),
      name,
      email,
      whatsapp,
      message,
      ip,
    }

    await appendQuery(entry)

    return NextResponse.json({ message: 'Query submitted successfully' })
  } catch (error) {
    console.error('Failed to save query', error)
    return NextResponse.json({ error: 'Something went wrong while saving your query' }, { status: 500 })
  }
}
