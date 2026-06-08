import { siteContent } from '@/lib/site-content'

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 text-left"
      aria-label="Vai alla home"
    >
      {/* Fiore di loto geometrico minimalista */}
      <span className="flex size-10 items-center justify-center rounded-full bg-sage-soft text-terracotta transition-colors group-hover:bg-sage/40">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-6"
          aria-hidden="true"
        >
          <path
            d="M12 3c1.6 1.9 2.4 3.8 2.4 5.7 0 1-.2 1.9-.6 2.7-.4-.8-.6-1.7-.6-2.7C13.2 6.8 12.6 4.9 12 3Z"
            fill="currentColor"
          />
          <path
            d="M12 13c-.9-1-2-1.6-3.2-2-.6 1.8-.4 3.4.3 4.8.7-1.4 1.7-2.3 2.9-2.8Zm0 0c.9-1 2-1.6 3.2-2 .6 1.8.4 3.4-.3 4.8-.7-1.4-1.7-2.3-2.9-2.8Z"
            fill="currentColor"
            opacity="0.85"
          />
          <path
            d="M5 9.5c.2 2 1 3.6 2.3 4.9C5.6 14.7 4 14 2.8 12.7 3.4 11.2 4.1 10.2 5 9.5Zm14 0c-.2 2-1 3.6-2.3 4.9 1.7-.3 3.3-1 4.5-2.3-.6-1.5-1.3-2.5-2.2-3.2Z"
            fill="currentColor"
            opacity="0.6"
          />
          <path
            d="M4 16c2.3 2.4 5 3.5 8 3.5s5.7-1.1 8-3.5c-.4 1.8-1.6 3.3-3.5 4.3-1.4.7-3 1-4.5 1s-3.1-.3-4.5-1C5.6 19.3 4.4 17.8 4 16Z"
            fill="currentColor"
            opacity="0.45"
          />
        </svg>
      </span>
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
