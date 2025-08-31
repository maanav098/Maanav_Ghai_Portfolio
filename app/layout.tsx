import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Navigation } from '@/components/Navigation'
import { Chatbot } from '@/components/Chatbot'
import { FloatingElements } from '@/components/FloatingElements'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maanav Ghai - Full-Stack & AI Engineer',
  description: 'Full-Stack & AI Engineer who builds fast, secure, human-friendly products. Experience with React, Next.js, Python, Flask, and machine learning.',
  keywords: ['Full-Stack Engineer', 'AI Engineer', 'React Developer', 'Python Developer', 'Machine Learning Engineer'],
  authors: [{ name: 'Maanav Ghai' }],
  creator: 'Maanav Ghai',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maanavghai.com',
    title: 'Maanav Ghai - Full-Stack & AI Engineer',
    description: 'Full-Stack & AI Engineer who builds fast, secure, human-friendly products.',
    siteName: 'Maanav Ghai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maanav Ghai - Full-Stack & AI Engineer',
    description: 'Full-Stack & AI Engineer who builds fast, secure, human-friendly products.',
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <FloatingElements />
          <Navigation />
          <main>
            {children}
          </main>
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
