import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { siteContent } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function NaturaPage() {
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
                <div className="flex items-center gap-2 text-terracotta">
                  <MapPin className="size-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {place.location}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-foreground">
                  {place.name}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {place.text}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
