import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { FloatingElements } from '@/components/FloatingElements'
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.siteUrl,
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summaryShort,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summaryShort,
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
          <FloatingElements />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
