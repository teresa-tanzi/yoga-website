import { siteContent } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function StiliPage() {
  const { eyebrow, title, intro, cards } = siteContent.stili

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-terracotta/50"
          >
            <span
              className={cn(
                'w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
                card.tagColor === 'terracotta'
                  ? 'bg-terracotta/10 text-terracotta'
                  : 'bg-sage-soft text-secondary-foreground',
              )}
            >
              {card.tag}
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
              {card.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {card.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
