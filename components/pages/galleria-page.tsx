'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteContent } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function GalleriaPage() {
  const { eyebrow, title, intro, photos } = siteContent.galleria
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)

  const showNext = () => {
    setDirection(1)
    setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length))
  }
  const showPrev = () => {
    setDirection(-1)
    setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
  }

  useEffect(() => {
    if (openIndex === null) return

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') showNext()
      if (e.key === 'ArrowLeft') showPrev()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex, photos.length])

  const active = openIndex === null ? null : photos[openIndex]

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
        {photos.map((photo, i) => (
          <button
            key={photo.image}
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.image}
              alt={photo.imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="p-4 text-left text-sm text-white">{photo.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Chiudi"
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:text-white md:right-8 md:top-8"
          >
            <X className="size-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Foto precedente"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:text-white md:left-6"
          >
            <ChevronLeft className="size-8" />
          </button>

          <div
            className="flex max-h-full max-w-4xl flex-col items-center gap-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              key={openIndex}
              className={cn(
                'relative h-[70vh] w-[90vw] max-w-3xl animate-in fade-in duration-300',
                direction === 1 ? 'slide-in-from-right-8' : 'slide-in-from-left-8',
              )}
            >
              <Image
                src={active.image}
                alt={active.imageAlt}
                fill
                className="object-contain"
              />
            </div>
            {(active.caption || active.credit) && (
              <div key={`caption-${openIndex}`} className="animate-in fade-in text-center duration-300">
                {active.caption && (
                  <p className="text-sm text-white/90">{active.caption}</p>
                )}
                {active.credit && (
                  <a
                    href={active.credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 inline-block text-xs text-white/60 underline underline-offset-2 hover:text-white"
                  >
                    Foto di {active.credit.name}
                  </a>
                )}
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Foto successiva"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/80 transition-colors hover:text-white md:right-6"
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </section>
  )
}
