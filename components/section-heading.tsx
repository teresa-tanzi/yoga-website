export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl text-left'
      }
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  )
}
