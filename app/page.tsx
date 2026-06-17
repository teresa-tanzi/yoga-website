'use client'

import { useState } from 'react'
import { type PageId } from '@/lib/site-content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HomePage } from '@/components/pages/home-page'
import { ChiSonoPage } from '@/components/pages/chi-sono-page'
import { StiliPage } from '@/components/pages/stili-page'
import { NaturaPage } from '@/components/pages/natura-page'
import { CalendarioPage } from '@/components/pages/calendario-page'
import { FaqPage } from '@/components/pages/faq-page'
import { ContattiPage } from '@/components/pages/contatti-page'

export default function Page() {
  const [currentPage, setCurrentPage] = useState<PageId>('home')

  const goTo = (page: PageId) => {
    setCurrentPage(page)
    if (typeof window !== 'undefined')
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 pt-16">
        {currentPage === 'home' && <HomePage goTo={goTo} />}
        {currentPage === 'chi-sono' && <ChiSonoPage />}
        {currentPage === 'stili' && <StiliPage goTo={goTo} />}
        {currentPage === 'natura' && <NaturaPage goTo={goTo} />}
        {currentPage === 'calendario' && <CalendarioPage />}
        {currentPage === 'faq' && <FaqPage />}
        {currentPage === 'contatti' && <ContattiPage />}
      </main>
      <Footer goTo={goTo} />
    </div>
  )
}
