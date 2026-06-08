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
    { id: 'natura', label: 'Yoga & Natura' },
    { id: 'calendario', label: 'Calendario' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contatti', label: 'Contatti' },
  ],

  home: {
    hero: {
      image: '/images/hero-yoga-nature.png',
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
    image: '/images/instructor-portrait.png',
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
        tagColor: 'sage',
        text: 'Un equilibrio tra stabilità e movimento. Posizioni mantenute con consapevolezza, alternate a transizioni dolci per costruire forza, mobilità e presenza.',
      },
      {
        name: 'Vinyasa Yoga',
        tag: 'Fluido',
        tagColor: 'terracotta',
        text: 'La sincronizzazione di movimento e respiro. Sequenze fluide che scorrono come una danza, per sciogliere le tensioni e coltivare leggerezza.',
      },
      {
        name: 'Ashtanga Yoga',
        tag: 'Tradizionale',
        tagColor: 'sage',
        text: 'Il metodo tradizionale, rigoroso e trasformativo. Focus su respiro Ujjayi, sguardo Drishti e attivazione dei Bandha per una pratica meditativa in movimento.',
      },
    ],
  },

  natura: {
    eyebrow: 'Yoga & Natura',
    title: 'Le mie sedi nella natura',
    intro:
      'La natura è il cuore del mio modo di insegnare. Ogni luogo offre un\u2019esperienza unica, tra terra, acqua e profumi.',
    places: [
      {
        name: 'Ayre Studio',
        location: 'Oggiono',
        text: 'La prima casa del mio insegnamento: uno spazio caldo e accogliente dove tutto è cominciato, ideale per la pratica regolare durante la settimana.',
        image: '/images/ayre-studio.png',
        imageAlt: 'Interno luminoso dello studio Ayre a Oggiono',
      },
      {
        name: 'Yoga tra i Vigneti',
        location: 'Polisena',
        text: 'Il sabato mattina tra i filari, seguito da un pranzo biologico a base vegetale dello chef Francesco Locatelli. Un risveglio dei sensi tra movimento e buon cibo.',
        image: '/images/vineyard-yoga.png',
        imageAlt: 'Pratica di yoga tra i vigneti di Polisena',
      },
      {
        name: 'Hatha Yoga sul Lago',
        location: 'Kayak Oggiono',
        text: 'La domenica mattina affacciati sul Lago di Annone. Una pratica dolce di Hatha cullata dal respiro dell\u2019acqua, per iniziare la settimana in pace.',
        image: '/images/lake-kayak-yoga.png',
        imageAlt: 'Hatha yoga sul Lago di Annone con kayak sulla riva',
      },
      {
        name: 'Tra Lavanda e Rosmarino',
        location: 'Az. Agr. Dattilo Elisa',
        text: 'Il venerdì sera, un\u2019esperienza multisensoriale tra campi di lavanda e rosmarino al tramonto. Profumi, colori e silenzio per lasciare andare la settimana.',
        image: '/images/lavender-yoga.png',
        imageAlt: 'Yoga serale tra campi di lavanda e rosmarino al tramonto',
      },
    ],
  },

  calendario: {
    eyebrow: 'Calendario',
    title: 'Gli orari settimanali',
    intro:
      'Una settimana di pratica tra studio e natura. Scegli il giorno e lo stile che senti più tuo.',
    scheduleTitle: 'Orari settimanali',
    schedule: [
      { day: 'Martedì', time: '19:00', style: 'Vinyasa Yoga', place: 'Ayre Studio · Oggiono' },
      { day: 'Venerdì', time: '18:30', style: 'Yoga Multisensoriale', place: 'Az. Agr. Dattilo Elisa' },
      { day: 'Sabato', time: '09:30', style: 'Hatha Dinamico + Brunch', place: 'Vigneti · Polisena' },
      { day: 'Domenica', time: '09:00', style: 'Hatha Yoga sul Lago', place: 'Kayak · Oggiono' },
      { day: 'Domenica', time: '18:00', style: 'Ashtanga Yoga', place: 'Ayre Studio · Oggiono' },
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
      { label: 'Telefono', value: '+39 333 123 4567', href: 'tel:+393331234567' },
      { label: 'Instagram', value: '@cecilia.tanzi.yoga', href: 'https://instagram.com' },
      { label: 'Sedi', value: 'Oggiono · Polisena · Lecco e Brianza', href: null },
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
