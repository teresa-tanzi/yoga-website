'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { siteContent, type PageId } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function StiliDiYogaPage({ goTo }: { goTo: (page: PageId) => void }) {
  const { eyebrow, title, intro, cards } = siteContent.stiliDiYoga
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />

      <div className="mt-14 grid items-start gap-6 md:grid-cols-3">
        {cards.map((card) => {
          const isOpen = expanded.has(card.name)
          return (
            <article
              key={card.name}
              className={cn(
                'flex flex-col rounded-2xl border bg-card p-7 transition-colors',
                isOpen ? 'border-terracotta/50' : 'border-border hover:border-terracotta/50',
              )}
            >
              <span className="w-fit rounded-full bg-terracotta/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-terracotta">
                {card.tag}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                {card.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.text}
              </p>

              {/* Detail expandable */}
              <div
                className={cn(
                  'overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out',
                  isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0',
                )}
              >
                <div className="mt-4 flex flex-col gap-3 border-t border-border/60 pt-4">
                  {card.detail.split('\n\n').map((block, i) => {
                    const lines = block.split('\n')
                    const hasBullets = lines.some(l => l.startsWith('•'))
                    if (hasBullets) {
                      const intro = lines[0].startsWith('•') ? null : lines[0]
                      const items = lines.filter(l => l.startsWith('•')).map(l => l.slice(2))
                      return (
                        <div key={i}>
                          {intro && <p className="text-sm leading-relaxed text-muted-foreground">{intro}</p>}
                          <ul className="mt-1 space-y-1">
                            {items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracotta" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                    return (
                      <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                        {block}
                      </p>
                    )
                  })}
                </div>
              </div>

              <button
                onClick={() => setExpanded(prev => {
                  const next = new Set(prev)
                  isOpen ? next.delete(card.name) : next.add(card.name)
                  return next
                })}
                className="mt-4 flex items-center gap-1 self-start text-xs font-semibold text-terracotta transition-opacity hover:opacity-70"
              >
                {isOpen ? 'Mostra meno' : 'Scopri di più'}
                <ChevronDown
                  className={cn('size-3.5 transition-transform duration-300', isOpen && 'rotate-180')}
                />
              </button>
            </article>
          )
        })}
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm text-muted-foreground">Vuoi unirti a una delle mie pratiche?</p>
        <button
          onClick={() => goTo('calendario')}
          className="mt-3 rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:bg-terracotta-dark hover:shadow-xl"
        >
          Scopri le lezioni
        </button>
      </div>
    </section>
  )
}
