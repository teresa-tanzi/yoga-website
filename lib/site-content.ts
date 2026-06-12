// ============================================================================
//  OGGETTO DATI CENTRALIZZATO
//  Tutti i testi, gli orari, le FAQ e i percorsi delle immagini del sito.
//  Modifica QUI per aggiornare i contenuti (collegabile in futuro a un CMS).
// ============================================================================

export const siteContent = {
  brand: {
    name: 'Cecilia Tanzi',
    discipline: 'Yoga',
    tagline: 'Hatha · Vinyasa · Ashtanga',
  },

  nav: [
    { id: 'home', label: 'Home' },
    { id: 'chi-sono', label: 'Chi sono' },
    { id: 'stili', label: 'Stili di Yoga' },
    { id: 'natura', label: 'Dove insegno' },
    { id: 'calendario', label: 'Calendario & Eventi' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contatti', label: 'Contatti' },
  ],

  home: {
    hero: {
      image: '/images/hero-yoga-nature.jpg',
      imageAlt: 'Pratica di yoga nella natura alla luce dorata del mattino',
      title: 'Trova il tuo spazio.\nRitrova il tuo equilibrio.',
      subtitle:
        'Pratiche di Hatha, Vinyasa e Ashtanga Yoga tra Lecco e Brianza.',
      cta: 'Scopri i Corsi',
    },
    welcome: {
      eyebrow: 'La mia filosofia',
      quote:
        'Nelle mie lezioni non cerco la postura perfetta, ma la qualità dell\u2019esperienza. Ogni corpo è diverso e ogni persona porta con sé una storia unica.',
      author: 'Cecilia Tanzi',
      image: '/images/welcome-detail.png',
      imageAlt: 'Mani in mudra di meditazione durante la pratica',
    },
    highlights: [
      {
        title: 'Tra Lecco e Brianza',
        text: 'Lezioni in studio e immerse nella natura, dai vigneti al lago.',
      },
      {
        title: 'Tre stili, un percorso',
        text: 'Hatha dinamico, Vinyasa fluido e Ashtanga tradizionale.',
      },
      {
        title: 'Approccio su misura',
        text: 'Adatto le pratiche al tuo corpo, al tuo respiro e alla tua storia.',
      },
    ],
  },

  chiSono: {
    eyebrow: 'La mia storia',
    title: 'Chi sono',
    image: '/images/instructor-portrait.jpg',
    imageAlt: 'Ritratto di Cecilia Tanzi, istruttrice di yoga',
    sections: [
      {
        title: 'Il mio inizio al liceo',
        text: 'Ho incontrato lo yoga durante gli anni del liceo, in un periodo fatto di incertezze e domande. Sul tappetino ho trovato una certezza silenziosa: un luogo dove tornare a respirare, ascoltarmi e ritrovare stabilità quando tutto intorno sembrava in movimento.',
      },
      {
        title: 'L\u2019incontro con l\u2019Ashtanga',
        text: 'Con il tempo la pratica è diventata quotidiana. L\u2019Ashtanga mi ha insegnato disciplina, dedizione e gratitudine. Devo molto alla shala Yoga Nilaya, dove ho imparato a coltivare una pratica costante e profondamente personale.',
      },
      {
        title: 'Dalla pratica all\u2019insegnamento',
        text: 'Nel 2025 ho completato la formazione RYT-200 e ottenuto il diploma CONI, unendo un approccio scientifico al corpo alla ricchezza della tradizione. Oggi insegno con il desiderio di rendere lo yoga accessibile, sicuro e autentico per ogni persona.',
      },
    ],
    philosophy: {
      title: 'La mia filosofia',
      intro: 'Lo yoga non è una performance, ma un ascolto. Le mie lezioni sono pensate per:',
      points: [
        'Ridurre lo stress e ritrovare calma mentale',
        'Migliorare mobilità, postura ed equilibrio',
        'Coltivare la consapevolezza del respiro',
        'Accogliere ogni livello, dai principianti ai praticanti esperti',
        'Riconnettersi con il proprio corpo senza giudizio',
      ],
    },
  },

  stili: {
    eyebrow: 'Le pratiche',
    title: 'Stili di Yoga',
    intro:
      'Tre approcci complementari per accompagnarti dove ne hai bisogno: radicamento, fluidità e disciplina.',
    cards: [
      {
        name: 'Hatha Yoga Dinamico',
        tag: 'Equilibrio',
        tagColor: 'terracotta',
        text: 'Un equilibrio tra stabilità e movimento. Posizioni mantenute con consapevolezza, alternate a transizioni dolci per costruire forza, mobilità e presenza.',
        detail: "L'Hatha Yoga Dinamico rappresenta un equilibrio tra stabilità e movimento. Le lezioni combinano posture (asana), tecniche di respirazione (pranayama) e momenti di ascolto corporeo in una pratica fluida e accessibile.\n\nRispetto all'Hatha tradizionale, il ritmo è leggermente più sostenuto e le posture vengono collegate attraverso sequenze che sviluppano forza, mobilità, coordinazione ed equilibrio.\n\nQuesta pratica è particolarmente indicata per chi desidera:\n• migliorare la postura\n• aumentare mobilità e flessibilità\n• sviluppare forza funzionale\n• ridurre tensioni muscolari\n• migliorare la consapevolezza del corpo e del respiro\n\nLe lezioni sono adatte sia a principianti sia a praticanti con esperienza e prevedono sempre varianti per rispettare le esigenze individuali.",
      },
      {
        name: 'Vinyasa Yoga',
        tag: 'Fluido',
        tagColor: 'terracotta',
        text: 'La sincronizzazione di movimento e respiro. Sequenze fluide che scorrono come una danza, per sciogliere le tensioni e coltivare leggerezza.',
        detail: "Il Vinyasa Yoga è una pratica dinamica in cui il movimento viene sincronizzato con il respiro, creando una sequenza continua e armoniosa di posture.\n\nOgni lezione è costruita come un percorso progressivo che permette di sviluppare forza, resistenza, mobilità e concentrazione. Il flusso costante tra le posture rende la pratica energizzante e coinvolgente, favorendo al tempo stesso uno stato di presenza mentale e calma interiore.\n\nAttraverso il Vinyasa si lavora su:\n• coordinazione e fluidità del movimento\n• forza del core e stabilità articolare\n• mobilità della colonna vertebrale\n• equilibrio e concentrazione\n• gestione dello stress attraverso il respiro\n\nOgni pratica viene adattata al livello dei partecipanti, offrendo progressioni e modifiche per consentire a tutti di praticare in sicurezza.",
      },
      {
        name: 'Ashtanga Yoga',
        tag: 'Tradizionale',
        tagColor: 'terracotta',
        text: 'Il metodo tradizionale, rigoroso e trasformativo. Focus su respiro Ujjayi, sguardo Drishti e attivazione dei Bandha per una pratica meditativa in movimento.',
        detail: "L'Ashtanga Yoga è un metodo tradizionale e strutturato che segue una sequenza precisa di posture collegate tra loro attraverso il respiro e il movimento.\n\nQuesta disciplina si basa su tre elementi fondamentali:\n• il respiro (Ujjayi Pranayama)\n• i punti di focalizzazione dello sguardo (Drishti)\n• i sigilli energetici del corpo (Bandha)\n\nLa pratica sviluppa progressivamente:\n• forza e resistenza\n• mobilità articolare\n• concentrazione mentale\n• disciplina personale\n• consapevolezza corporea\n\nL'Ashtanga rappresenta il percorso che ha maggiormente influenzato la mia formazione personale. Attraverso anni di pratica costante ho imparato a conoscere in profondità questo metodo, che continua a essere una fonte di crescita, studio e ricerca.\n\nPur mantenendo il rispetto per la tradizione, propongo un approccio accessibile e graduale, adattando la pratica alle caratteristiche e alle necessità di ogni persona.",
      },
    ],
  },

  natura: {
    eyebrow: 'Dove insegno',
    title: 'Le mie sedi nella natura',
    intro:
      'La natura è il cuore del mio modo di insegnare. Ogni luogo offre un\u2019esperienza unica, tra terra, acqua e profumi.',
    places: [
      {
        name: 'Ayre Studio',
        location: 'Oggiono',
        text: 'La prima casa del mio insegnamento: uno spazio caldo e accogliente dove tutto è cominciato, ideale per la pratica regolare durante la settimana.',
        image: '/images/ayre-studio.jpeg',
        imageAlt: 'Interno luminoso dello studio Ayre a Oggiono',
        mapsUrl: 'https://maps.app.goo.gl/Ckpb5Nd1xywp6oUf6',
      },
      {
        name: 'Yoga tra i Vigneti',
        location: 'Polisena',
        text: 'Il sabato mattina tra i filari, seguito da un pranzo biologico a base vegetale dello chef Francesco Locatelli. Un risveglio dei sensi tra movimento e buon cibo.',
        image: '/images/vineyard-yoga.jpg',
        imageAlt: 'Pratica di yoga tra i vigneti di Polisena',
        mapsUrl: 'https://maps.app.goo.gl/sNvWgWoC2YtrSL6k9',
      },
      {
        name: 'Hatha Yoga sul Lago',
        location: 'Kayak Oggiono',
        text: 'La domenica mattina affacciati sul Lago di Annone. Una pratica dolce di Hatha cullata dal respiro dell\u2019acqua, per iniziare la settimana in pace.',
        image: '/images/lake-kayak-yoga.jpeg',
        imageAlt: 'Hatha yoga sul Lago di Annone con kayak sulla riva',
        mapsUrl: 'https://maps.app.goo.gl/nRQu9QmpyV8f16zG6',
      },
      {
        name: 'Tra Lavanda e Rosmarino',
        location: 'Az. Agr. Dattilo Elisa',
        text: 'Il venerdì sera, un\u2019esperienza multisensoriale tra campi di lavanda e rosmarino al tramonto. Profumi, colori e silenzio per lasciare andare la settimana.',
        image: '/images/lavender-yoga.webp',
        imageAlt: 'Yoga serale tra campi di lavanda e rosmarino al tramonto',
        mapsUrl: 'https://maps.app.goo.gl/j87cvEfZAjj8mqYx5',
      },
    ],
  },

  calendario: {
    eyebrow: 'Calendario & Eventi',
    title: 'Gli orari settimanali',
    intro:
      'Una settimana di pratica tra studio e natura. Scegli il giorno e lo stile che senti più tuo.',
    scheduleTitle: 'Orari settimanali',
    schedule: [
      { day: 'Martedì', time: '19:00', style: 'Vinyasa Yoga', place: 'Ayre Studio · Oggiono', mapsUrl: 'https://maps.app.goo.gl/Ckpb5Nd1xywp6oUf6' },
      { day: 'Venerdì', time: '18:30', style: 'Yoga Multisensoriale', place: 'Az. Agr. Dattilo Elisa', mapsUrl: 'https://maps.app.goo.gl/j87cvEfZAjj8mqYx5' },
      { day: 'Sabato', time: '09:30', style: 'Hatha Dinamico + Brunch', place: 'Vigneti · Polisena', mapsUrl: 'https://maps.app.goo.gl/sNvWgWoC2YtrSL6k9' },
      { day: 'Domenica', time: '09:00', style: 'Hatha Yoga sul Lago', place: 'Kayak · Oggiono', mapsUrl: 'https://maps.app.goo.gl/nRQu9QmpyV8f16zG6' },
      { day: 'Domenica', time: '18:00', style: 'Ashtanga Yoga', place: 'Ayre Studio · Oggiono', mapsUrl: 'https://maps.app.goo.gl/Ckpb5Nd1xywp6oUf6' },
    ],
    eventiTitle: 'Eventi',
    eventiIntro:
      'Progetti speciali e appuntamenti dedicati, oltre alla pratica settimanale.',
    eventi: [
      {
        badge: 'Progetto 2026',
        title: 'Yoga per i giovani al Cubo³ di Lecco',
        when: 'Da settembre 2026',
        text: 'Un progetto a me molto caro: portare lo yoga ai giovani negli spazi del Cubo³ di Lecco. Uno spazio sicuro dove respiro, movimento e consapevolezza diventano strumenti di crescita.',
      },
    ],
  },

  faq: {
    eyebrow: 'Domande frequenti',
    title: 'Tutto quello che vuoi sapere',
    items: [
      {
        q: 'Serve esperienza per iniziare?',
        a: 'No, le mie lezioni accolgono ogni livello. Se sei alle prime armi ti guiderò passo dopo passo, adattando la pratica alle tue esigenze e al tuo ritmo.',
      },
      {
        q: 'Devo essere flessibile?',
        a: 'Assolutamente no. La flessibilità è un risultato della pratica, non un requisito. Lo yoga lavora sul corpo che hai oggi, con rispetto e gradualità.',
      },
      {
        q: 'Cosa devo portare alla lezione?',
        a: 'Abbigliamento comodo, una bottiglia d\u2019acqua e, se ne hai uno, il tuo tappetino. Per le lezioni nella natura consiglio un piccolo telo e qualcosa per coprirti.',
      },
      {
        q: 'Tieni lezioni individuali?',
        a: 'Sì. Le lezioni individuali permettono un percorso completamente personalizzato, ideale per chi ha esigenze specifiche o desidera un\u2019attenzione dedicata. Scrivimi per organizzarne una.',
      },
    ],
  },

  contatti: {
    eyebrow: 'Contatti',
    title: 'Inizia il tuo percorso sul tappetino',
    intro:
      'Hai una domanda o vuoi prenotare la tua prima lezione? Scrivimi: sarò felice di accompagnarti.',
    details: [
      { label: 'Email', value: 'cecilia_tanzi@yahoo.it', href: 'mailto:cecilia_tanzi@yahoo.it' },
      { label: 'WhatsApp', value: '+39 348 984 2081', href: 'https://wa.me/393489842081?text=Ciao%20Cecilia%2C%20vorrei%20informazioni%20sui%20tuoi%20corsi%20di%20yoga' },
      { label: 'Instagram', value: '@cecilia_tanzi_yoga', href: 'https://www.instagram.com/cecilia_tanzi_yoga/' },
      { label: 'Sedi', value: 'Oggiono · Pontida · La Valletta Brianza (LC)', href: null },
    ],
    form: {
      nameLabel: 'Nome',
      emailLabel: 'Email',
      messageLabel: 'Messaggio',
      submit: 'Invia il messaggio',
      success: 'Grazie! Ti risponderò il prima possibile.',
    },
  },

  footer: {
    text: 'Pratiche di Hatha, Vinyasa e Ashtanga Yoga tra Lecco e Brianza.',
    note: 'RYT-200 · Diploma CONI',
  },
} as const

export type PageId = (typeof siteContent.nav)[number]['id']
