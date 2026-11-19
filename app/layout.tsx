import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Linkedin, Mail, MessageCircle, Phone } from 'lucide-react'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { profile } from '@/lib/data'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl),
  title: `${profile.name} | ${profile.headline}`,
  description: profile.summaryShort,
  keywords: ['Full-Stack AI Engineer', 'Spring Boot Engineer', 'Spring AI', 'RAG Engineer', 'Angular Developer', 'Java Engineer'],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.siteUrl,
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summaryShort,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.headline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summaryShort,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <div className="site-shell">
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <footer className="relative z-10 border-t border-white/10 bg-[#030916]/80 px-6 py-7 sm:px-8 lg:px-12">
            <div className="container-max flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">
                © {new Date().getFullYear()} {profile.name} · Open to roles in India and the UAE
              </p>
              <div className="flex flex-wrap gap-2">
                <a className="secondary-button min-h-11 px-3 py-2 text-sm" href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  {profile.email}
                </a>
                {profile.phone ? (
                  <>
                    <a className="secondary-button min-h-11 px-3 py-2 text-sm" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
                      <Phone aria-hidden="true" className="h-4 w-4" />
                      {profile.phone}
                    </a>
                    <a
                      className="secondary-button min-h-11 px-3 py-2 text-sm"
                      href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle aria-hidden="true" className="h-4 w-4" />
                      WhatsApp · {profile.phone}
                    </a>
                  </>
                ) : null}
                <a
                  className="secondary-button min-h-11 px-3 py-2 text-sm"
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin aria-hidden="true" className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </div>
        {process.env.VERCEL === '1' ? <Analytics /> : null}
      </body>
    </html>
  )
}
