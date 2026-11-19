import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { profile } from '@/lib/data'

interface QueryPayload {
  name?: string
  email?: string
  message?: string
  whatsapp?: string
  query?: string
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  let body: QueryPayload
  try {
    body = (await request.json()) as QueryPayload
  } catch {
    return NextResponse.json({ error: 'Please submit a valid message.' }, { status: 400 })
  }

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

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.error('Contact form email is unavailable because SMTP is not configured.')
    return NextResponse.json(
      { error: `Contact form email is not configured. Please email ${profile.email} directly.` },
      { status: 503 },
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: SMTP_USER,
      to: profile.email,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `WhatsApp: ${whatsapp}`,
        '',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Failed to send contact form email', error)
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please email directly instead.' },
      { status: 502 },
    )
  }
}
