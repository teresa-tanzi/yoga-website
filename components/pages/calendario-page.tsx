import { Sparkles, CalendarDays } from 'lucide-react'
import { siteContent, type PageId } from '@/lib/site-content'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function CalendarioPage({ goTo }: { goTo: (page: PageId) => void }) {
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
        <div className="mt-6 flex flex-col gap-8">
          {schedule.map((sede) => (
            <div
              key={sede.place}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border bg-muted px-5 py-4">
                <h4 className="font-serif text-lg font-semibold text-foreground">
                  {sede.place} <span className="font-sans text-sm font-normal text-muted-foreground">· {sede.location}</span>
                </h4>
                <a
                  href={sede.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-muted-foreground underline underline-offset-2 hover:text-terracotta"
                >
                  Apri in Maps
                </a>
              </div>
              <table className="w-full table-fixed text-left text-sm">
                <thead>
                  <tr className="text-foreground">
                    <th className="w-[28%] px-5 py-3 font-semibold">Giorno</th>
                    <th className="w-[42%] px-5 py-3 font-semibold">Stile</th>
                    <th className="w-[30%] px-5 py-3 font-semibold">Orario</th>
                  </tr>
                </thead>
                <tbody>
                  {sede.classes.map((row, i) => (
                    <tr
                      key={`${row.day}-${row.style}`}
                      className={cn(
                        'border-t border-border',
                        i % 2 === 0 ? 'bg-muted/40' : 'bg-transparent',
                      )}
                    >
                      <td className="px-5 py-4 font-medium text-foreground">
                        {row.day}
                        {row.note && '*'}
                      </td>
                      <td className="px-5 py-4 text-foreground/90">
                        {row.style}
                      </td>
                      <td className="px-5 py-4 font-semibold text-terracotta">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {sede.classes.some((row) => row.note) && (
                <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
                  {sede.classes
                    .filter((row) => row.note)
                    .map((row) => (
                      <p key={row.note}>* {row.note}</p>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Eventi */}
      {eventi.length > 0 && (
      <div className="mt-16">
        <SectionHeading title={eventiTitle} intro={eventiIntro} />
        <div className="mt-6 flex justify-center">
          {eventi.map((ev) => (
            <article
              key={ev.title}
              className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-card p-8"
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
              <div className="flex flex-col gap-3">
                {ev.text.split('\n\n').map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      )}

      <div className="mt-20 text-center">
        <p className="text-sm text-muted-foreground">Vuoi prenotare la tua lezione di prova?</p>
        <button
          onClick={() => goTo('contatti')}
          className="mt-3 rounded-full bg-terracotta px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:bg-terracotta-dark hover:shadow-xl"
        >
          Contattami
        </button>
      </div>
    </section>
  )
}
