import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { siteContent, type PageId } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function NaturaPage({ goTo }: { goTo: (page: PageId) => void }) {
  const { eyebrow, title, intro, places } = siteContent.natura

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

      <div className="mt-16 flex flex-col gap-16 md:gap-24">
        {places.map((place, i) => {
          const reversed = i % 2 === 1
          return (
            <div
              key={place.name}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div
                className={cn(
                  'relative aspect-[4/3] overflow-hidden rounded-3xl',
                  reversed && 'md:order-2',
                )}
              >
                <Image
                  src={place.image || '/placeholder.svg'}
                  alt={place.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={cn(reversed && 'md:order-1')}>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-terracotta transition-opacity hover:opacity-70"
                >
                  <MapPin className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest underline underline-offset-2">
                    {place.location}
                  </span>
                </a>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-foreground">
                  {place.name}
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {place.text.split('\n\n').map((p, i) => (
                    <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm text-muted-foreground">Vuoi unirti a una delle mie pratiche?</p>
        <button
          onClick={() => goTo('calendario')}
          className="mt-3 rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:bg-terracotta-dark hover:shadow-xl"
        >
          Scopri gli orari
        </button>
      </div>
    </section>
  )
}
