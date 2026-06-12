import Image from 'next/image'
import { Check } from 'lucide-react'
import { siteContent } from '@/lib/site-content'

export function ChiSonoPage() {
  const { eyebrow, title, image, imageAlt, sections, philosophy } =
    siteContent.chiSono

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
          {eyebrow}
        </span>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-foreground md:text-5xl">
          {title}
        </h1>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        {/* Foto verticale */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl md:sticky md:top-28 md:self-start">
          <Image
            src={image || '/placeholder.svg'}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Testo */}
        <div className="flex flex-col gap-9">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {s.title}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {s.text.split('\n\n').map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Box filosofia */}
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {philosophy.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
              {philosophy.intro}
            </p>
            <ul className="mt-4 space-y-2.5">
              {philosophy.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 size-4 shrink-0 text-terracotta" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
