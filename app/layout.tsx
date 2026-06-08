import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Fraunces, Nunito_Sans } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})
const nunitoSans = Nunito_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cecilia Tanzi · Yoga | Hatha, Vinyasa & Ashtanga tra Lecco e Brianza',
  description:
    'Pratiche di Hatha, Vinyasa e Ashtanga Yoga con Cecilia Tanzi. Lezioni in studio e nella natura tra Lecco e Brianza: trova il tuo spazio, ritrova il tuo equilibrio.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${fraunces.variable} ${nunitoSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
