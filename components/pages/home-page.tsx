import Image from 'next/image'
import { siteContent, type PageId } from '@/lib/site-content'

export function HomePage({ goTo }: { goTo: (page: PageId) => void }) {
  const { hero, welcome, highlights } = siteContent.home

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <Image
          src={hero.image || '/placeholder.svg'}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/30 to-foreground/55" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-background md:text-6xl">
            {hero.title.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/90">
            {hero.subtitle}
          </p>
          <button
            onClick={() => goTo('stili')}
            className="mt-9 rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:bg-terracotta-dark hover:shadow-xl"
          >
            {hero.cta}
          </button>
        </div>
      </section>

      {/* Welcome / quote */}
      <section className="bg-background px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.3fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={welcome.image || '/placeholder.svg'}
              alt={welcome.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
              {welcome.eyebrow}
            </span>
            <blockquote className="mt-5 text-balance font-serif text-2xl font-medium leading-snug text-foreground md:text-3xl">
              {'\u201C'}
              {welcome.quote}
              {'\u201D'}
            </blockquote>
            <p className="mt-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              — {welcome.author}
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-background px-6 pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border/70 bg-card p-7 text-center"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {h.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
