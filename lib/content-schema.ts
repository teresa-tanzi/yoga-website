import { siteContent, type SiteContent } from '@/lib/site-content'

export type { SiteContent }

const MAX_TEXT = 8000
const MAX_ITEMS = 100
const IMAGE_KEYS = new Set(['image'])
const URL_KEYS = new Set(['mapsUrl', 'url', 'href'])
const NAV_IDS = new Set(siteContent.nav.map((item) => item.id as string))

// Forma di una voce NUOVA nelle liste, compresi i campi opzionali che nei contenuti di
// partenza possono mancare. Senza questo, `conform` scarterebbe campi come `note` o `active`.
export const ARRAY_ITEM_TEMPLATES: Record<string, unknown> = {
  'doveInsegno.places': { name: '', location: '', text: '', image: '', imageAlt: '', mapsUrl: '', active: true },
  'galleria.photos': { image: '', imageAlt: '', caption: '', credit: { name: '', url: '' } },
  'calendario.schedule': { place: '', location: '', mapsUrl: '', classes: [] },
  'calendario.schedule.classes': { day: '', style: '', time: '', note: '', active: true },
  'calendario.eventi': { badge: '', title: '', when: '', text: '' },
  'faq.items': { q: '', a: '' },
  'contatti.details': { label: '', value: '', href: '' },
  'chiSono.sections': { title: '', text: '' },
  'chiSono.philosophy.points': '',
  'stiliDiYoga.cards': { name: '', tag: '', tagColor: 'terracotta', text: '', detail: '' },
  'home.highlights': { title: '', text: '', link: 'contatti' },
}

// Riporta `input` alla forma di `template` (i default in lib/site-content.ts): scarta chiavi
// sconosciute, forza i tipi e usa il valore di default dove l'input non è valido.
// Serve sia per leggere dal DB (contenuti vecchi con campi mancanti) sia per validare
// ciò che arriva dal backoffice prima di salvarlo.
export function conform<T>(template: T, input: unknown, key = '', path = ''): T {
  if (typeof template === 'string') {
    if (typeof input !== 'string') return template
    const value = input.slice(0, MAX_TEXT)
    // Immagini: percorso interno o https (i file caricati stanno su Vercel Blob).
    if (IMAGE_KEYS.has(key) && value !== '' && !/^(\/|https:\/\/)/.test(value)) return template
    // Link esterni: https, mailto o tel (o vuoto, per non mostrare il link).
    if (URL_KEYS.has(key) && value !== '' && !/^(https:\/\/|mailto:|tel:)\S+$/.test(value)) return template
    if (key === 'link' && !NAV_IDS.has(value)) return template
    return value as T
  }
  if (typeof template === 'boolean') return (typeof input === 'boolean' ? input : template) as T
  if (Array.isArray(template)) {
    if (!Array.isArray(input)) return template
    const itemTemplate = ARRAY_ITEM_TEMPLATES[path] ?? template[0]
    if (itemTemplate === undefined) return template
    return input.slice(0, MAX_ITEMS).map((item) => conform(itemTemplate, item, key, path)) as T
  }
  if (template && typeof template === 'object') {
    const source = input && typeof input === 'object' ? (input as Record<string, unknown>) : {}
    return Object.fromEntries(
      Object.entries(template).map(([k, v]) => [k, conform(v, source[k], k, path ? `${path}.${k}` : k)]),
    ) as T
  }
  return template
}

// Punto unico per leggere e validare i contenuti. Il menu non è modificabile dal backoffice:
// resta sempre quello di default.
export function conformSite(input: unknown): SiteContent {
  return { ...conform(siteContent, input), nav: siteContent.nav }
}
