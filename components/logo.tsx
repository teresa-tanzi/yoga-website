import { siteContent } from '@/lib/site-content'

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 text-left"
      aria-label="Vai alla home"
    >
<span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
          {siteContent.brand.name.toUpperCase()}
        </span>
        <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.4em] text-terracotta">
          {siteContent.brand.discipline}
        </span>
      </span>
    </button>
  )
}
