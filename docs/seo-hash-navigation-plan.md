# Navigazione con hash (#) + title/description dinamici

## Contesto

Il sito è una single-page app: `app/page.tsx` tiene tutte le sezioni (Home, Chi sono, Stili,
Dove insegno, Galleria, Calendario, FAQ, Contatti) in uno stato React (`currentPage`), senza
mai cambiare l'URL. Erano state valutate due strade per migliorare la SEO:

- **Opzione A (route reali per sezione)** — la soluzione SEO completa, ma un refactor più
  ampio (route Next.js dedicate, metadata per pagina, sitemap con più URL). Rimandata per ora.
- **Opzione B (hash nell'URL + title dinamico)** — quella scelta per questo intervento: più
  leggera, non tocca l'architettura SPA, migliora condivisibilità e navigazione, ma **non
  risolve il problema centrale di indicizzazione**: Google in generale non tratta ciò che sta
  dopo `#` come URL distinti da rankare separatamente, quindi le sezioni continueranno a non
  comparire come risultati di ricerca indipendenti. È un miglioramento incrementale di
  UX/condivisibilità, non un sostituto della SEO vera e propria.

Questo piano copre solo l'Opzione B, ed è già stato implementato.

## Cosa è cambiato

### 1. `lib/site-content.ts`
Aggiunto a ciascuna sezione (`home`, `chiSono`, `stili`, `natura`, `galleria`, `calendario`,
`faq`, `contatti`) un campo `meta: { title, description }` con un title/description brevi e
specifici per quella sezione. Aggiunta anche `pageMeta`, una mappa `PageId -> meta` usata da
`app/page.tsx` per accedere al meta corretto a partire dall'id di sezione.

### 2. `app/page.tsx`
- **Stato iniziale da hash**: al mount, un `useEffect` legge `window.location.hash` e la
  mappa a un `PageId` valido (default `'home'` se assente o non valido).
- **`goTo(page)`**: oltre a `setCurrentPage(page)`, chiama
  `history.pushState(null, '', page === 'home' ? '/' : '#' + page)` — usa `pushState` (non
  `window.location.hash = ...`) per evitare il salto automatico del browser verso un elemento
  con quell'id e per aggiungere una entry nella cronologia (necessario per avanti/indietro).
- **Tasti avanti/indietro del browser**: un listener su `popstate` rilegge l'hash corrente e
  aggiorna `currentPage` di conseguenza.
- **Title/description dinamici**: un `useEffect` che, ad ogni cambio di `currentPage`, imposta
  `document.title` da `pageMeta[currentPage].title` e aggiorna il contenuto del tag
  `<meta name="description">` esistente.

### 3. Nessuna altra modifica
`Navbar`, `Footer`, `Logo`, `HomePage`, `StiliPage`, `NaturaPage`, `CalendarioPage` non sono
stati toccati: chiamano già `goTo(...)`, la cui implementazione è stata solo potenziata in
`app/page.tsx`. `app/sitemap.ts` e `app/robots.ts` non cambiano: i fragment `#...` non sono
URL indicizzabili separatamente, quindi non vanno aggiunti alla sitemap.

## Verifica eseguita
- `pnpm build` — compila senza errori (route `/`, `/robots.txt`, `/sitemap.xml` generate come
  prima; nessuna nuova route, come previsto per questa opzione).
- Verificato lato server che il title della home resti quello originale.

Da verificare manualmente in `pnpm dev`, se non già fatto:
1. Cliccare ogni voce di menu (desktop e mobile): l'URL deve mostrare `/#slug`, il title della
   tab del browser deve cambiare, lo stato attivo nel menu deve restare corretto.
2. Ricaricare la pagina su un URL con hash (es. `/#calendario`) — deve aprirsi direttamente su
   quella sezione.
3. Usare i tasti avanti/indietro del browser tra due o più sezioni visitate — deve funzionare
   la cronologia.

## Prossimo passo (non incluso qui)
Per far comparire le sezioni come risultati di ricerca separati su Google (es. "orari yoga
Lecco" → risultato diretto sul Calendario) resta necessaria l'Opzione A: convertire le sezioni
in route Next.js reali, ciascuna con il proprio title/description lato server e una sitemap
con più URL.
