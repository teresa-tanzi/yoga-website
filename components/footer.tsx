import { siteContent, type PageId } from '@/lib/site-content'
import { Logo } from '@/components/logo'

export function Footer({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <footer className="border-t border-border/60 bg-sage-soft/40 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo onClick={() => goTo('home')} />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {siteContent.footer.text}
          </p>
          <p className="mt-3 text-xs font-medium uppercase tracking-widest text-terracotta">
            {siteContent.footer.note}
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
          {siteContent.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="text-left text-sm text-muted-foreground transition-colors hover:text-terracotta"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteContent.brand.name} · {siteContent.brand.discipline}
      </div>
    </footer>
  )
}
