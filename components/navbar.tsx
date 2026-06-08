'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteContent, type PageId } from '@/lib/site-content'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export function Navbar({
  currentPage,
  setCurrentPage,
}: {
  currentPage: PageId
  setCurrentPage: (page: PageId) => void
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const go = (page: PageId) => {
    setCurrentPage(page)
    setMobileOpen(false)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Logo onClick={() => go('home')} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {siteContent.nav.map((item) => {
            const active = currentPage === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={cn(
                    'relative pb-1 text-sm font-medium transition-colors',
                    active
                      ? 'text-terracotta'
                      : 'text-foreground/70 hover:text-foreground',
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute inset-x-0 -bottom-0.5 h-px origin-left bg-terracotta transition-transform duration-300',
                      active ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-md p-2 text-foreground lg:hidden"
          aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out lg:hidden',
          mobileOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col px-5 py-2">
          {siteContent.nav.map((item) => {
            const active = currentPage === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={cn(
                    'w-full border-b border-border/40 py-3 text-left text-sm font-medium transition-colors',
                    active ? 'text-terracotta' : 'text-foreground/80',
                  )}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
