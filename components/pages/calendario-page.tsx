import { Sparkles, CalendarDays } from 'lucide-react'
import { siteContent } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function CalendarioPage() {
  const {
    eyebrow,
    title,
    intro,
    scheduleTitle,
    schedule,
    eventiTitle,
    eventiIntro,
    eventi,
  } = siteContent.calendario

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

      {/* Orari settimanali — sezione in evidenza */}
      <div className="mt-12">
        <div className="flex items-center gap-2.5">
          <CalendarDays className="size-5 text-terracotta" />
          <h3 className="font-serif text-2xl font-semibold text-foreground">
            {scheduleTitle}
          </h3>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-muted text-foreground">
                <th className="px-5 py-4 font-semibold">Giorno</th>
                <th className="px-5 py-4 font-semibold">Orario</th>
                <th className="px-5 py-4 font-semibold">Stile</th>
                <th className="hidden px-5 py-4 font-semibold sm:table-cell">
                  Luogo
                </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={`${row.day}-${row.time}`}
                  className={cn(
                    'border-t border-border',
                    i % 2 === 0 ? 'bg-muted/40' : 'bg-transparent',
                  )}
                >
                  <td className="px-5 py-4 font-medium text-foreground">
                    {row.day}
                  </td>
                  <td className="px-5 py-4 font-semibold text-terracotta">
                    {row.time}
                  </td>
                  <td className="px-5 py-4 text-foreground/90">{row.style}</td>
                  <td className="hidden px-5 py-4 sm:table-cell">
                    <a
                      href={row.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline underline-offset-2 transition-colors hover:text-terracotta"
                    >
                      {row.place}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Eventi */}
      <div className="mt-16">
        <h3 className="font-serif text-2xl font-semibold text-foreground">
          {eventiTitle}
        </h3>
        <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
          {eventiIntro}
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {eventi.map((ev) => (
            <article
              key={ev.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  <Sparkles className="size-3.5" />
                  {ev.badge}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                  {ev.when}
                </span>
              </div>
              <h4 className="font-serif text-2xl font-semibold text-foreground">
                {ev.title}
              </h4>
              <p className="leading-relaxed text-muted-foreground">{ev.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
