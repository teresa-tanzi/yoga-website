'use client'

import { useEffect, useState } from 'react'
import { pageMeta, siteContent, type PageId } from '@/lib/site-content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HomePage } from '@/components/pages/home-page'
import { ChiSonoPage } from '@/components/pages/chi-sono-page'
import { StiliDiYogaPage } from '@/components/pages/stili-di-yoga-page'
import { DoveInsegnoPage } from '@/components/pages/dove-insegno-page'
import { GalleriaPage } from '@/components/pages/galleria-page'
import { CalendarioPage } from '@/components/pages/calendario-page'
import { FaqPage } from '@/components/pages/faq-page'
import { ContattiPage } from '@/components/pages/contatti-page'

const PAGE_IDS = siteContent.nav.map((item) => item.id)

function pageIdFromHash(hash: string): PageId {
  const id = hash.replace(/^#/, '')
  return (PAGE_IDS as string[]).includes(id) ? (id as PageId) : 'home'
}

export default function Page() {
  const [currentPage, setCurrentPage] = useState<PageId>('home')

  // Inizializza dallo hash dell'URL (deep-link, es. /#calendario) e sincronizza avanti/indietro del browser.
  useEffect(() => {
    setCurrentPage(pageIdFromHash(window.location.hash))

    const onPopState = () => setCurrentPage(pageIdFromHash(window.location.hash))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Aggiorna title e meta description in base alla sezione visualizzata.
  useEffect(() => {
    const meta = pageMeta[currentPage]
    document.title = meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description)
  }, [currentPage])

  const goTo = (page: PageId) => {
    setCurrentPage(page)
    history.pushState(null, '', page === 'home' ? '/' : `#${page}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar currentPage={currentPage} setCurrentPage={goTo} />
      <main className="flex-1 pt-16">
        {currentPage === 'home' && <HomePage goTo={goTo} />}
        {currentPage === 'chi-sono' && <ChiSonoPage />}
        {currentPage === 'stili-di-yoga' && <StiliDiYogaPage goTo={goTo} />}
        {currentPage === 'dove-insegno' && <DoveInsegnoPage goTo={goTo} />}
        {currentPage === 'galleria' && <GalleriaPage />}
        {currentPage === 'calendario' && <CalendarioPage goTo={goTo} />}
        {currentPage === 'faq' && <FaqPage />}
        {currentPage === 'contatti' && <ContattiPage />}
      </main>
      <Footer goTo={goTo} />
    </div>
  )
}
