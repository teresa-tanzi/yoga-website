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
    { id: 'galleria', label: 'Galleria' },
    { id: 'calendario', label: 'Calendario & Eventi' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contatti', label: 'Contatti' },
  ],

  home: {
    hero: {
      image: '/images/hero-yoga-nature.jpg',
      imageAlt: 'Pratica di yoga nella natura alla luce dorata del mattino',
      title: 'Pratiche di Hatha, Vinyasa e Ashtanga Yoga',
      subtitle:
        'tra Lecco e Brianza',
      cta: 'Scopri i Corsi',
    },
    welcome: {
      eyebrow: 'La mia filosofia',
      text: "Credo in una pratica accessibile, oltre l'età o la flessibilità. Nelle mie lezioni non cerco la postura perfetta, ma la qualità dell'esperienza. Troverai uno spazio sicuro e senza giudizio dove esplorare movimento e respiro, attraverso pratiche che uniscono la tradizione dello yoga alla scienza dell'anatomia, nel pieno rispetto del tuo corpo.",
      image: '/images/welcome-detail.jpg',
      imageAlt: 'Mani in mudra di meditazione durante la pratica',
    },
    highlights: [
      {
        title: 'Tra Lecco e Brianza',
        text: 'Lezioni in studio e immerse nella natura, dai vigneti al lago.',
        link: 'natura',
      },
      {
        title: 'Tre stili, un percorso',
        text: 'Hatha dinamico, Vinyasa fluido e Ashtanga tradizionale.',
        link: 'stili',
      },
      {
        title: 'Approccio su misura',
        text: 'Adatto le pratiche al tuo corpo, al tuo respiro e alla tua storia.',
        link: 'contatti',
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
        text: "Ho iniziato a praticare yoga durante il quinto anno di liceo, in un periodo in cui molte domande sul futuro iniziavano a farsi spazio.\n\nCome accade a tanti ragazzi e ragazze della mia età, cercavo di capire quale direzione prendere, quali fossero davvero le mie passioni e che persona volessi diventare. In mezzo a tutte queste incertezze, lo yoga è diventato una delle poche certezze.\n\nQuella che all'inizio era semplicemente un'ora dedicata al movimento si è trasformata lentamente in uno spazio di calma, ascolto e chiarezza. Sul tappetino ho imparato a rallentare, a osservare ciò che accadeva dentro e fuori di me e ad accettare che non tutte le risposte debbano arrivare subito.\n\nNegli anni successivi la pratica mi ha accompagnata attraverso gli studi universitari, i cambiamenti e le esperienze che hanno contribuito a definire la persona che sono oggi. Per molto tempo lo yoga è rimasto un percorso profondamente personale, un luogo in cui tornare ogni volta che sentivo il bisogno di ritrovare equilibrio.\n\nNon immaginavo che un giorno sarebbe diventato anche parte del mio lavoro, ma guardando indietro mi accorgo che è sempre stato il filo conduttore della mia crescita.",
      },
      {
        title: "L'incontro con l'Ashtanga Yoga",
        text: "Dal 2019 pratico presso Yoga Nilaya a Lecco sotto la guida di Valentina Castelnuovo, un'insegnante che ha avuto un ruolo fondamentale nel mio percorso.\n\nCon lei ho scoperto l'Ashtanga Yoga e ho compreso che la pratica va ben oltre l'aspetto fisico. Mi ha insegnato il valore della costanza, della pazienza e della presenza quotidiana sul tappetino, anche nei giorni in cui tutto sembra più difficile.\n\nFin dall'inizio mi ha incoraggiata a guardare oltre il risultato, invitandomi a sviluppare ascolto, curiosità e rispetto per il mio percorso personale. Grazie al suo esempio ho capito che lo yoga non è qualcosa che si vive soltanto durante una lezione, ma un modo di relazionarsi a se stessi e agli altri.\n\nNegli anni mi ha accompagnata con competenza e sensibilità, sostenendo la mia crescita come praticante e alimentando il desiderio di approfondire sempre di più questa disciplina.\n\nMolto di ciò che oggi porto nelle mie classi nasce dall'esperienza vissuta nella sua shala: l'attenzione alla persona, il rispetto dei tempi individuali e la convinzione che la pratica debba essere prima di tutto uno strumento di crescita e consapevolezza.",
      },
      {
        title: "Dalla pratica personale all'insegnamento",
        text: "Per molti anni lo yoga è stato uno spazio esclusivamente mio. Non ho mai iniziato a praticare con l'idea di diventare insegnante. Salivo sul tappetino per stare bene, ritrovare equilibrio e continuare a conoscermi attraverso il movimento e il respiro.\n\nCon il tempo, però, mi sono resa conto che ciò che stavo imparando andava oltre la pratica fisica. Lo yoga aveva trasformato il mio modo di affrontare le difficoltà, ascoltare il corpo e gestire lo stress. Da questa consapevolezza è nato il desiderio di approfondire lo studio e acquisire gli strumenti necessari per condividere con altri ciò che per me era diventato una risorsa così preziosa.\n\nNel 2025 ho iniziato il percorso di Formazione Insegnanti Ashtanga Vinyasa Yoga RYT-200 presso Centrolistico APS. È stato un anno intenso, ricco di studio, pratica e confronto, che mi ha permesso di approfondire sia gli aspetti tecnici dell'insegnamento sia la responsabilità di guidare una classe in modo sicuro e rispettoso.\n\nAl termine del percorso ho conseguito il Diploma Nazionale con qualifica tecnica di insegnante di attività sportiva riconosciuto da Libertas e affiliato al CONI. Lo considero però non un punto di arrivo, ma una tappa all'interno di un percorso che continua ancora oggi attraverso lo studio, la pratica e la formazione continua.",
      },
    ],
    philosophy: {
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
    title: 'Le mie sedi',
    intro:
      'La natura è il cuore del mio modo di insegnare. Ogni luogo offre un\u2019esperienza unica, tra terra, acqua e profumi.',
    places: [
      {
        name: 'Ayre Studio',
        location: 'Oggiono',
        text: "Le lezioni settimanali di Hatha Yoga Dinamico e Vinyasa Yoga si svolgono presso Ayre Studio, uno spazio dedicato al movimento, al benessere e alla crescita personale.\n\nLa sala luminosa e l’atmosfera accogliente creano un ambiente ideale per praticare con continuità, sviluppare consapevolezza e ritagliarsi un momento di equilibrio nella vita quotidiana.\n\nLe classi sono aperte a tutti i livelli e pensate per offrire una pratica accessibile, inclusiva e rispettosa delle esigenze di ogni persona.",
        image: '/images/ayre-studio.jpeg',
        imageAlt: 'Interno luminoso dello studio Ayre a Oggiono',
        mapsUrl: 'https://maps.app.goo.gl/Ckpb5Nd1xywp6oUf6',
        active: true,
      },
      {
        name: 'Az. Agr. Dattilo Elisa',
        location: 'La Valletta Brianza',
        text: "Collaboro con Azienda Agricola Dattilo Elisa, una realtà del territorio impegnata nella valorizzazione delle coltivazioni locali.\n\nLe lezioni si svolgono all’aperto, tra filari di lavanda, rosmarino e altre essenze aromatiche, creando un’esperienza multisensoriale che coinvolge movimento, respirazione e percezione dell’ambiente circostante.\n\nI profumi della campagna, la luce del tramonto e il contatto diretto con la terra rendono ogni incontro un’occasione per rallentare, ascoltarsi e ritrovare benessere in modo semplice e naturale.\n\nLe pratiche sono aperte a tutti i livelli e rappresentano un’opportunità per vivere lo yoga in un contesto autentico e immerso nella natura.\n\nIl corso è attivo per i mesi di settembre e ottobre; riprenderà poi in primavera.",
        image: '/images/dattilo-elisa-farm.jpg',
        imageAlt: 'Lezione di yoga presso l’Azienda Agricola Dattilo Elisa',
        mapsUrl: 'https://maps.app.goo.gl/j87cvEfZAjj8mqYx5',
        active: true,
      },
      {
        name: 'Luma',
        location: 'Valmadrera',
        text: "Il mercoledì propongo lezioni di Vinyasa Yoga, Ashtanga Yoga e Ginnastica per uomini presso Luma, a Valmadrera.\n\nMaggiori dettagli arriveranno a breve.",
        image: '',
        imageAlt: 'Spazio Luma a Valmadrera',
        mapsUrl: 'https://maps.app.goo.gl/wWbiEkGwH74mJDKR7',
        active: true,
      },
      {
        name: 'alCUBO',
        location: 'Lecco',
        text: "Il venerdì sera propongo una lezione di Vinyasa Yoga presso alCUBO³, il nuovo hub giovanile all'interno del Centro Civico Pertini di Lecco.\n\nMaggiori dettagli arriveranno a breve.",
        image: '',
        imageAlt: 'alCUBO³ a Lecco',
        mapsUrl: 'https://maps.app.goo.gl/BQagw3RipGVWqXSs6',
        active: true,
      },
      {
        name: 'Agriturismo Polisena',
        location: 'Pontida',
        text: "Ogni sabato mattina collaboro con Polisena – L’Altro Agriturismo, una realtà legata alla sostenibilità, all’agricoltura biologica e all’ospitalità.\n\nLe lezioni si svolgono tra i vigneti che circondano la struttura, offrendo la possibilità di iniziare la giornata immersi nella natura attraverso una pratica di yoga accessibile e rigenerante.\n\nAl termine dell’esperienza viene proposto un pranzo leggero a base vegetale, preparato con ingredienti stagionali e del territorio.",
        image: '/images/vineyard-yoga.jpg',
        imageAlt: 'Pratica di yoga tra i vigneti di Polisena',
        mapsUrl: 'https://maps.app.goo.gl/sNvWgWoC2YtrSL6k9',
        active: false,
      },
      {
        name: 'Kayak',
        location: 'Oggiono',
        text: "Durante la stagione estiva conduco lezioni di Hatha Yoga Dinamico la domenica mattina presso il Kayak Oggiono.\n\nPraticare yoga all'aperto, affacciati sul suggestivo scenario del Lago di Annone, offre un'esperienza unica che unisce movimento, respirazione e contatto con la natura.\n\nIl silenzio del mattino, la luce che si riflette sull'acqua e il paesaggio circostante creano le condizioni ideali per rallentare, ritrovare energia e iniziare la giornata con equilibrio e serenità.\n\nLe lezioni sono accessibili a tutti i livelli e rappresentano un'occasione speciale per vivere lo yoga in un contesto naturale di grande bellezza.",
        image: '/images/lake-kayak-yoga.jpeg',
        imageAlt: 'Hatha yoga sul Lago di Annone con kayak sulla riva',
        mapsUrl: 'https://maps.app.goo.gl/nRQu9QmpyV8f16zG6',
        active: false,
      },
    ] as {
      name: string
      location: string
      text: string
      image: string
      imageAlt: string
      mapsUrl: string
      active?: boolean
    }[],
  },

  galleria: {
    eyebrow: 'Galleria',
    title: 'Immagini dalla pratica',
    intro:
      'Un piccolo assaggio visivo delle lezioni, degli spazi e dei luoghi in cui insegno.',
    photos: [
      {
        image: '/images/gallery-portrait-1.jpeg',
        imageAlt: 'Ritratto di Cecilia Tanzi, insegnante di yoga',
        caption: 'Cecilia Tanzi, insegnante di yoga',
      },
      {
        image: '/images/gallery-portrait-2.jpeg',
        imageAlt: 'Ritratto di Cecilia Tanzi, insegnante di yoga',
        caption: 'Cecilia Tanzi, insegnante di yoga',
      },
      {
        image: '/images/gallery-portrait-3.jpeg',
        imageAlt: 'Ritratto di Cecilia Tanzi, insegnante di yoga',
        caption: 'Cecilia Tanzi, insegnante di yoga',
      },
      {
        image: '/images/gallery-ayre-yoga-1.jpeg',
        imageAlt: 'Lezione di yoga presso Ayre Studio a Oggiono',
        caption: 'Lezione presso Ayre Studio, Oggiono',
      },
      {
        image: '/images/gallery-ayre-yoga-2.jpeg',
        imageAlt: 'Lezione di yoga presso Ayre Studio a Oggiono',
        caption: 'Lezione presso Ayre Studio, Oggiono',
      },
      {
        image: '/images/gallery-ayre-yoga-3.jpeg',
        imageAlt: 'Lezione di yoga presso Ayre Studio a Oggiono',
        caption: 'Lezione presso Ayre Studio, Oggiono',
      },
      {
        image: '/images/gallery-ayre-yoga-4.jpeg',
        imageAlt: 'Lezione di yoga presso Ayre Studio a Oggiono',
        caption: 'Lezione presso Ayre Studio, Oggiono',
      },
      {
        image: '/images/gallery-lake-yoga-1.jpeg',
        imageAlt: 'Yoga sul Lago di Annone presso il Kayak Oggiono',
        caption: 'Hatha Yoga sul lago, Kayak Oggiono',
      },
      {
        image: '/images/gallery-lake-yoga-2.jpeg',
        imageAlt: 'Yoga sul Lago di Annone presso il Kayak Oggiono',
        caption: 'Hatha Yoga sul lago, Kayak Oggiono',
      },
      {
        image: '/images/gallery-lake-yoga-3.jpeg',
        imageAlt: 'Yoga sul Lago di Annone presso il Kayak Oggiono',
        caption: 'Hatha Yoga sul lago, Kayak Oggiono',
      },
      {
        image: '/images/gallery-lake-yoga-4.jpeg',
        imageAlt: 'Yoga sul Lago di Annone presso il Kayak Oggiono',
        caption: 'Hatha Yoga sul lago, Kayak Oggiono',
      },
      {
        image: '/images/gallery-lake-yoga-5.jpeg',
        imageAlt: 'Yoga sul Lago di Annone presso il Kayak Oggiono',
        caption: 'Hatha Yoga sul lago, Kayak Oggiono',
      },
      {
        image: '/images/gallery-lake-yoga-6.jpeg',
        imageAlt: 'Yoga sul Lago di Annone presso il Kayak Oggiono',
        caption: 'Hatha Yoga sul lago, Kayak Oggiono',
      },
      {
        image: '/images/gallery-lake-yoga-7.jpeg',
        imageAlt: 'Yoga sul Lago di Annone presso il Kayak Oggiono',
        caption: 'Hatha Yoga sul lago, Kayak Oggiono',
      },
      {
        image: '/images/gallery-lavender-yoga-1.jpeg',
        imageAlt: 'Yoga tra i campi di lavanda dell’Azienda Agricola Dattilo Elisa',
        caption: 'Yoga al tramonto, Az. Agr. Dattilo Elisa',
      },
      {
        image: '/images/gallery-lavender-yoga-2.jpeg',
        imageAlt: 'Yoga tra i campi di lavanda dell’Azienda Agricola Dattilo Elisa',
        caption: 'Yoga al tramonto, Az. Agr. Dattilo Elisa',
      },
      {
        image: '/images/gallery-lavender-yoga-3.jpeg',
        imageAlt: 'Yoga tra i campi di lavanda dell’Azienda Agricola Dattilo Elisa',
        caption: 'Yoga al tramonto, Az. Agr. Dattilo Elisa',
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
      {
        place: 'Ayre Studio',
        location: 'Oggiono',
        mapsUrl: 'https://maps.app.goo.gl/ANdae8GyCWyb4JfL7',
        classes: [
          { day: 'Martedì', style: 'Vinyasa Yoga', time: '20:15 - 21:15' },
          { day: 'Giovedì', style: 'Hatha Yoga', time: '20:00 - 21:00' },
          { day: 'Domenica', style: 'Hatha Yoga', time: '09:30 - 10:30' },
        ],
      },
      {
        place: 'Luma',
        location: 'Valmadrera',
        mapsUrl: 'https://maps.app.goo.gl/wWbiEkGwH74mJDKR7',
        classes: [
          { day: 'Mercoledì', style: 'Vinyasa Yoga', time: '18:00 - 19:00' },
          { day: 'Mercoledì', style: 'Ashtanga Yoga', time: '19:00 - 20:00' },
          { day: 'Mercoledì', style: 'Ginnastica per uomini', time: '20:00 - 21:00' },
        ],
      },
      {
        place: 'alCUBO',
        location: 'Lecco',
        mapsUrl: 'https://maps.app.goo.gl/BQagw3RipGVWqXSs6',
        classes: [
          { day: 'Venerdì', style: 'Vinyasa Yoga', time: '19:00 - 20:00' },
        ],
      },
      {
        place: 'Az. Agr. Dattilo Elisa',
        location: 'La Valletta Brianza',
        mapsUrl: 'https://maps.app.goo.gl/j87cvEfZAjj8mqYx5',
        classes: [
          { day: 'Sabato', style: 'Hatha Yoga', time: '14:00 - 15:00', note: 'Corso attivo a settembre e ottobre, riprende in primavera' },
        ],
      },
    ] as {
      place: string
      location: string
      mapsUrl: string
      classes: { day: string; style: string; time: string; note?: string }[]
    }[],
    eventiTitle: 'Eventi',
    eventiIntro:
      'Progetti speciali e appuntamenti dedicati, oltre alla pratica settimanale.',
    eventi: [] as { badge: string; title: string; when: string; text: string }[],
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
      { label: 'Sedi', value: 'Oggiono · Lecco · Valmadrera · Pontida · La Valletta Brianza', href: null },
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
