import { useContent } from '@/components/content-provider'

export function Logo({ onClick }: { onClick?: () => void }) {
  const { brand } = useContent()

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 text-left"
      aria-label="Vai alla home"
    >
<span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
          {brand.name.toUpperCase()}
        </span>
        <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.4em] text-terracotta">
          {brand.discipline}
        </span>
      </span>
    </button>
  )
}
