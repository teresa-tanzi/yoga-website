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

const siteUrl = 'https://cecilia-tanzi-yoga.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Cecilia Tanzi · Yoga | Hatha, Vinyasa & Ashtanga tra Lecco e Brianza',
  description:
    'Pratiche di Hatha, Vinyasa e Ashtanga Yoga con Cecilia Tanzi. Lezioni in studio e nella natura tra Lecco e Brianza: trova il tuo spazio, ritrova il tuo equilibrio.',
  keywords: [
    'yoga Lecco', 'yoga Brianza', 'yoga Oggiono', 'insegnante yoga Lecco',
    'Hatha yoga', 'Vinyasa yoga', 'Ashtanga yoga', 'Cecilia Tanzi yoga',
    'lezioni yoga Lecco', 'yoga natura Brianza',
  ],
  openGraph: {
    title: 'Cecilia Tanzi · Yoga | Hatha, Vinyasa & Ashtanga tra Lecco e Brianza',
    description:
      'Pratiche di Hatha, Vinyasa e Ashtanga Yoga con Cecilia Tanzi. Lezioni in studio e nella natura tra Lecco e Brianza.',
    url: siteUrl,
    siteName: 'Cecilia Tanzi Yoga',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/images/hero-yoga-nature.jpg',
        width: 1200,
        height: 630,
        alt: 'Cecilia Tanzi - Yoga tra Lecco e Brianza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cecilia Tanzi · Yoga | Hatha, Vinyasa & Ashtanga tra Lecco e Brianza',
    description:
      'Pratiche di Hatha, Vinyasa e Ashtanga Yoga con Cecilia Tanzi tra Lecco e Brianza.',
    images: ['/images/hero-yoga-nature.jpg'],
  },
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
  verification: {
    google: 'dRZnOCR2VGmZyc1ga9y4hcxkgKMa727DIDrGUleiDSQ',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                name: 'Cecilia Tanzi',
                jobTitle: 'Insegnante di Yoga',
                description: 'Insegnante di Hatha Yoga Dinamico, Vinyasa Yoga e Ashtanga Yoga tra Lecco e Brianza. RYT-200, Diploma CONI.',
                url: 'https://cecilia-tanzi-yoga.vercel.app',
                telephone: '+393489842081',
                email: 'cecilia_tanzi@yahoo.it',
                sameAs: ['https://www.instagram.com/cecilia_tanzi_yoga/'],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Oggiono',
                  addressRegion: 'LC',
                  addressCountry: 'IT',
                },
                knowsAbout: ['Hatha Yoga', 'Vinyasa Yoga', 'Ashtanga Yoga', 'Pranayama'],
                hasCredential: [
                  { '@type': 'EducationalOccupationalCredential', name: 'RYT-200' },
                  { '@type': 'EducationalOccupationalCredential', name: 'Diploma CONI' },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'Cecilia Tanzi Yoga',
                description: 'Pratiche di Hatha, Vinyasa e Ashtanga Yoga tra Lecco e Brianza. Lezioni in studio e nella natura.',
                url: 'https://cecilia-tanzi-yoga.vercel.app',
                telephone: '+393489842081',
                email: 'cecilia_tanzi@yahoo.it',
                priceRange: '€€',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Oggiono',
                  addressRegion: 'LC',
                  addressCountry: 'IT',
                },
                sameAs: ['https://www.instagram.com/cecilia_tanzi_yoga/'],
              },
            ],
          })}}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
