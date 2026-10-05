'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { ArrowDown, ArrowUp, ImagePlus, Plus, Trash2 } from 'lucide-react'
import { logout, save } from '@/app/backoffice/actions'
import { ARRAY_ITEM_TEMPLATES, type SiteContent } from '@/lib/content-schema'
import { siteContent } from '@/lib/site-content'
import { IMAGE_ACCEPT, uploadImage } from '@/lib/upload-image'
import { cn } from '@/lib/utils'

type Json = string | boolean | Json[] | { [key: string]: Json }

// ---------------------------------------------------------------------------
//  Etichette in italiano. Le chiavi non elencate qui vengono mostrate così come sono.
// ---------------------------------------------------------------------------

const SECTIONS: Record<string, string> = {
  brand: 'Nome e sigla',
  home: 'Home',
  chiSono: 'Chi sono',
  stiliDiYoga: 'Stili di yoga',
  doveInsegno: 'Dove insegno',
  galleria: 'Galleria',
  calendario: 'Calendario e orari',
  faq: 'FAQ',
  contatti: 'Contatti',
  footer: 'Piè di pagina',
}

const LABELS: Record<string, string> = {
  // gruppi e liste
  meta: 'Titolo e descrizione per Google',
  hero: 'Immagine principale',
  welcome: 'Introduzione',
  highlights: 'Tre punti in evidenza',
  philosophy: 'Filosofia',
  points: 'Punti elenco',
  sections: 'Parti della storia',
  cards: 'Stili',
  places: 'Sedi e corsi',
  photos: 'Foto',
  schedule: 'Orari per sede',
  classes: 'Lezioni',
  eventi: 'Eventi',
  items: 'Domande',
  details: 'Recapiti',
  form: 'Modulo di contatto',
  credit: 'Credito fotografico',
  // campi
  name: 'Nome',
  discipline: 'Disciplina',
  tagline: 'Slogan',
  title: 'Titolo',
  description: 'Descrizione',
  eyebrow: 'Sopratitolo',
  subtitle: 'Sottotitolo',
  intro: 'Introduzione',
  cta: 'Testo del pulsante',
  text: 'Testo',
  detail: 'Testo esteso',
  tag: 'Etichetta',
  link: 'Pagina a cui porta',
  image: 'Foto',
  imageAlt: 'Descrizione della foto (per chi non la vede)',
  location: 'Località',
  mapsUrl: 'Link Google Maps',
  active: 'Corsi attivi',
  caption: 'Didascalia',
  url: 'Indirizzo web (https://…)',
  place: 'Nome della sede',
  day: 'Giorno',
  style: 'Stile',
  time: 'Orario',
  note: 'Nota (facoltativa)',
  badge: 'Etichetta',
  when: 'Quando',
  q: 'Domanda',
  a: 'Risposta',
  label: 'Etichetta',
  value: 'Testo',
  href: 'Link (https://…, mailto:… o tel:…)',
  scheduleTitle: 'Titolo degli orari',
  eventiTitle: 'Titolo degli eventi',
  eventiIntro: 'Introduzione agli eventi',
  nameLabel: 'Etichetta del campo Nome',
  emailLabel: 'Etichetta del campo Email',
  messageLabel: 'Etichetta del campo Messaggio',
  submit: 'Testo del pulsante di invio',
  success: 'Messaggio dopo l’invio',
  vatNumber: 'Partita IVA',
}

// Come si chiama una voce di una lista (per il pulsante "Aggiungi …").
const ITEM_NAMES: Record<string, string> = {
  points: 'punto',
  sections: 'parte',
  cards: 'stile',
  places: 'sede o corso',
  photos: 'foto',
  schedule: 'sede',
  classes: 'lezione',
  eventi: 'evento',
  items: 'domanda',
  details: 'recapito',
  highlights: 'punto',
}

const HIDDEN_KEYS = new Set(['tagColor'])
const TEXTAREA_KEYS = new Set(['text', 'detail', 'a', 'intro', 'description'])
const PARAGRAPH_KEYS = new Set(['text', 'detail'])

const label = (k: string) => LABELS[k] ?? k
const lastKey = (path: string) => path.split('.').pop() ?? ''

function itemTitle(item: Json, index: number): string {
  if (typeof item === 'string') return item || `Punto ${index + 1}`
  if (typeof item !== 'object' || Array.isArray(item)) return `Voce ${index + 1}`
  const text = (k: string) => (typeof item[k] === 'string' ? (item[k] as string) : '')
  if (text('day') || text('time')) return [text('day'), text('time'), text('style')].filter(Boolean).join(' · ')
  return text('name') || text('title') || text('q') || text('place') || text('caption') || text('label') || text('badge') || `Voce ${index + 1}`
}

// ---------------------------------------------------------------------------
//  Campi
// ---------------------------------------------------------------------------

const inputClass =
  'mt-1.5 w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-base text-foreground outline-none focus:border-terracotta'
const smallButton =
  'inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-terracotta hover:text-terracotta disabled:pointer-events-none disabled:opacity-40'

function TextField({ k, value, onChange }: { k: string; value: string; onChange: (v: string) => void }) {
  const multiline = TEXTAREA_KEYS.has(k) || value.includes('\n') || value.length > 100
  return (
    <label className="block text-sm font-medium">
      {label(k)}
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={Math.min(20, Math.max(3, Math.ceil(value.length / 80) + (value.match(/\n/g)?.length ?? 0)))}
          className={cn(inputClass, 'field-sizing-content resize-y leading-relaxed')}
        />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />
      )}
      {PARAGRAPH_KEYS.has(k) && multiline && (
        <span className="mt-1 block text-xs font-normal text-muted-foreground">Una riga vuota separa i paragrafi.</span>
      )}
    </label>
  )
}

function ImageField({ value, onChange, removable }: { value: string; onChange: (v: string) => void; removable: boolean }) {
  const input = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function pick(file: File | undefined) {
    if (!file) return
    setBusy(true)
    setError('')
    try {
      onChange(await uploadImage(file))
    } catch (e) {
      setError((e as Error).message || 'Caricamento non riuscito.')
    } finally {
      setBusy(false)
      if (input.current) input.current.value = ''
    }
  }

  return (
    <div className="text-sm font-medium">
      Foto
      <div className="mt-1.5 flex items-center gap-4">
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="size-24 shrink-0 rounded-xl border border-border object-cover" />
        ) : (
          <div className="flex size-24 shrink-0 items-center justify-center rounded-xl border border-dashed border-border text-xs font-normal text-muted-foreground">
            Nessuna foto
          </div>
        )}
        <div className="flex flex-col items-start gap-2">
          <button type="button" disabled={busy} onClick={() => input.current?.click()} className={smallButton}>
            <ImagePlus className="size-4" />
            {busy ? 'Caricamento…' : value ? 'Cambia foto' : 'Scegli foto'}
          </button>
          {removable && value && !busy && (
            <button type="button" onClick={() => onChange('')} className="text-xs font-normal text-muted-foreground underline underline-offset-2 hover:text-destructive">
              Togli la foto
            </button>
          )}
          {error && <p role="alert" className="text-xs font-normal text-destructive">{error}</p>}
        </div>
      </div>
      <input ref={input} type="file" accept={IMAGE_ACCEPT} hidden onChange={(e) => pick(e.target.files?.[0])} />
    </div>
  )
}

function Toggle({ k, value, onChange }: { k: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm font-medium">
      <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="size-5 accent-terracotta" />
      {label(k)}
      <span className={cn('rounded-full px-2.5 py-0.5 text-xs font-semibold', value ? 'bg-terracotta/15 text-terracotta' : 'bg-muted text-muted-foreground')}>
        {value ? 'Sì' : 'No'}
      </span>
    </label>
  )
}

function Field({ k, value, onChange, schemaPath }: { k: string; value: Json; onChange: (v: Json) => void; schemaPath: string }) {
  if (HIDDEN_KEYS.has(k)) return null
  if (typeof value === 'boolean') return <Toggle k={k} value={value} onChange={onChange} />
  if (typeof value === 'string') {
    if (k === 'image') return <ImageField value={value} onChange={onChange} removable={schemaPath.startsWith('doveInsegno.places')} />
    if (k === 'link') {
      return (
        <label className="block text-sm font-medium">
          {label(k)}
          <select value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
            {siteContent.nav.map((n) => (
              <option key={n.id} value={n.id}>{n.label}</option>
            ))}
          </select>
        </label>
      )
    }
    return <TextField k={k} value={value} onChange={onChange} />
  }
  if (Array.isArray(value)) return <ListField k={k} items={value} onChange={onChange} schemaPath={schemaPath} />
  return (
    <fieldset className="rounded-2xl border border-border p-4 md:p-5">
      <legend className="px-2 font-serif text-lg font-semibold">{label(k)}</legend>
      <Fields value={value} onChange={onChange} schemaPath={schemaPath} />
    </fieldset>
  )
}

function Fields({ value, onChange, schemaPath }: { value: { [key: string]: Json }; onChange: (v: Json) => void; schemaPath: string }) {
  return (
    <div className="space-y-5">
      {Object.entries(value).map(([k, v]) => (
        <Field key={k} k={k} value={v} schemaPath={schemaPath ? `${schemaPath}.${k}` : k} onChange={(next) => onChange({ ...value, [k]: next })} />
      ))}
    </div>
  )
}

function ListField({ k, items, onChange, schemaPath }: { k: string; items: Json[]; onChange: (v: Json) => void; schemaPath: string }) {
  const [justAdded, setJustAdded] = useState<number | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const files = useRef<HTMLInputElement>(null)
  const isGallery = schemaPath === 'galleria.photos'
  const template = ARRAY_ITEM_TEMPLATES[schemaPath] as Json | undefined
  const itemName = ITEM_NAMES[k] ?? 'voce'

  const move = (i: number, to: number) => {
    const next = [...items]
    ;[next[i], next[to]] = [next[to], next[i]]
    setJustAdded(null)
    onChange(next)
  }
  const remove = (i: number) => {
    if (!window.confirm(`Eliminare «${itemTitle(items[i], i)}»? L’operazione si conferma poi con “Salva e pubblica”.`)) return
    setJustAdded(null)
    onChange(items.filter((_, j) => j !== i))
  }
  const add = () => {
    if (template === undefined) return
    setJustAdded(items.length)
    onChange([...items, structuredClone(template)])
  }

  async function addPhotos(list: FileList | null) {
    if (!list?.length) return
    setUploading(true)
    setError('')
    const added: Json[] = []
    for (const file of Array.from(list)) {
      try {
        const image = await uploadImage(file)
        added.push({ image, imageAlt: 'Foto dalle lezioni di yoga di Cecilia Tanzi', caption: '', credit: { name: '', url: '' } })
      } catch (e) {
        setError(`${file.name}: ${(e as Error).message}`)
      }
    }
    if (added.length) {
      setJustAdded(items.length)
      onChange([...items, ...added])
    }
    setUploading(false)
    if (files.current) files.current.value = ''
  }

  return (
    <div>
      <h3 className="font-serif text-lg font-semibold">
        {label(k)} <span className="font-sans text-sm font-normal text-muted-foreground">({items.length})</span>
      </h3>
      <ul className="mt-3 space-y-3">
        {items.map((item, i) => {
          const isString = typeof item === 'string'
          const obj = typeof item === 'object' && !Array.isArray(item) ? item : null
          const thumb = obj && typeof obj.image === 'string' ? obj.image : ''
          const inactive = obj?.active === false
          return (
            <li key={i} className="rounded-2xl border border-border bg-card">
              <details open={i === justAdded || undefined} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-3 pr-4 [&::-webkit-details-marker]:hidden">
                  {thumb && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumb} alt="" className="size-12 shrink-0 rounded-lg object-cover" />
                  )}
                  <span className="min-w-0 flex-1 truncate text-sm font-semibold">{itemTitle(item, i)}</span>
                  {inactive && <span className="shrink-0 rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">Non attivo</span>}
                  <span className="shrink-0 text-xs text-muted-foreground group-open:hidden">Modifica</span>
                  <span className="hidden shrink-0 text-xs text-muted-foreground group-open:inline">Chiudi</span>
                </summary>
                <div className="space-y-5 border-t border-border p-4">
                  {isString ? (
                    <TextField k="text" value={item} onChange={(v) => onChange(items.map((x, j) => (j === i ? v : x)))} />
                  ) : obj ? (
                    <Fields value={obj} schemaPath={schemaPath} onChange={(v) => onChange(items.map((x, j) => (j === i ? v : x)))} />
                  ) : null}
                  <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                    <button type="button" className={smallButton} disabled={i === 0} onClick={() => move(i, i - 1)}>
                      <ArrowUp className="size-4" /> Sposta su
                    </button>
                    <button type="button" className={smallButton} disabled={i === items.length - 1} onClick={() => move(i, i + 1)}>
                      <ArrowDown className="size-4" /> Sposta giù
                    </button>
                    <button type="button" className={cn(smallButton, 'hover:border-destructive hover:text-destructive')} onClick={() => remove(i)}>
                      <Trash2 className="size-4" /> Elimina
                    </button>
                  </div>
                </div>
              </details>
            </li>
          )
        })}
      </ul>
      <div className="mt-3">
        {isGallery ? (
          <>
            <button type="button" disabled={uploading} onClick={() => files.current?.click()} className={smallButton}>
              <ImagePlus className="size-4" /> {uploading ? 'Caricamento…' : 'Aggiungi foto'}
            </button>
            <input ref={files} type="file" accept={IMAGE_ACCEPT} multiple hidden onChange={(e) => addPhotos(e.target.files)} />
          </>
        ) : (
          template !== undefined && (
            <button type="button" onClick={add} className={smallButton}>
              <Plus className="size-4" /> Aggiungi {itemName}
            </button>
          )
        )}
        {error && <p role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
//  Editor
// ---------------------------------------------------------------------------

export function Editor({ initial }: { initial: SiteContent }) {
  const [content, setContent] = useState(initial)
  const [section, setSection] = useState(Object.keys(SECTIONS)[1])
  const [dirty, setDirty] = useState(false)
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null)
  const [pending, startTransition] = useTransition()

  // Avvisa se si chiude la scheda con modifiche non salvate.
  useEffect(() => {
    if (!dirty) return
    const warn = (e: BeforeUnloadEvent) => e.preventDefault()
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  const value = (content as unknown as Record<string, Json>)[section]

  function change(next: Json) {
    setContent({ ...content, [section]: next } as SiteContent)
    setDirty(true)
    setStatus(null)
  }

  function submit() {
    startTransition(async () => {
      const result = await save(content)
      if (result.ok) setDirty(false)
      setStatus(result.ok ? { ok: true, text: 'Pubblicato! Il sito è aggiornato.' } : { ok: false, text: result.error ?? 'Errore' })
    })
  }

  return (
    <div className="pb-28">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-5 py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">Area riservata</p>
          <h1 className="mt-2 font-serif text-3xl font-semibold">Modifica il sito</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Scegli una sezione, cambia testi e foto, poi premi «Salva e pubblica» in basso.
          </p>
        </div>
        <nav aria-label="Sezioni" className="mx-auto flex max-w-4xl gap-2 overflow-x-auto px-5 pb-4">
          {Object.entries(SECTIONS).map(([key, name]) => (
            <button
              key={key}
              type="button"
              aria-current={key === section}
              onClick={() => setSection(key)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                key === section ? 'border-terracotta bg-terracotta text-primary-foreground' : 'border-border bg-background hover:border-terracotta',
              )}
            >
              {name}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-8">
        <h2 className="mb-6 font-serif text-2xl font-semibold">{SECTIONS[section]}</h2>
        {typeof value === 'object' && !Array.isArray(value) && (
          <Fields key={section} value={value} schemaPath={section} onChange={change} />
        )}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
          <p role="status" className={cn('text-sm', status && !status.ok ? 'text-destructive' : 'text-muted-foreground')}>
            {status ? status.text : dirty ? 'Modifiche non ancora pubblicate' : 'Nessuna modifica da pubblicare.'}
          </p>
          <div className="flex items-center gap-2">
            <a href="/" target="_blank" rel="noreferrer" className={smallButton}>Vedi il sito</a>
            <form action={logout}>
              <button className={smallButton}>Esci</button>
            </form>
            <button
              type="button"
              onClick={submit}
              disabled={pending || !dirty}
              className="rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-terracotta-dark disabled:opacity-50"
            >
              {pending ? 'Salvataggio…' : 'Salva e pubblica'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
