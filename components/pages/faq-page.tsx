'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { siteContent } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function FaqPage() {
  const { eyebrow, title, items } = siteContent.faq
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="mt-12 flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = open === i
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg font-medium text-foreground">
                  {item.q}
                </span>
                <span className="shrink-0 text-terracotta">
                  {isOpen ? (
                    <Minus className="size-5" />
                  ) : (
                    <Plus className="size-5" />
                  )}
                </span>
              </button>
              <div
                className={cn(
                  'grid transition-[grid-template-rows] duration-300 ease-in-out',
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
