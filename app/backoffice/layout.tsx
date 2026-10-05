import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Area riservata — Cecilia Tanzi Yoga',
  robots: { index: false, follow: false },
}

export default function BackofficeLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-svh bg-background text-foreground">{children}</div>
}
