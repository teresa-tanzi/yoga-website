import Image from 'next/image'
import { siteContent } from '@/lib/site-content'

export function ChiSonoPage() {
  const { eyebrow, title, image, imageAlt, sections } =
    siteContent.chiSono

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
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

          <p className="text-sm font-medium uppercase tracking-widest text-terracotta">
            — {siteContent.brand.name}
          </p>
        </div>
      </div>
    </section>
  )
}
