import 'server-only'
import { cache } from 'react'
import { siteContent, type SiteContent } from '@/lib/site-content'
import { conformSite } from '@/lib/content-schema'
import { sql } from '@/lib/db'

// Legge i contenuti dal database. Se il DB non è configurato, è vuoto o non risponde,
// il sito mostra i testi di default di lib/site-content.ts: non si rompe mai.
export const getContent = cache(async (): Promise<SiteContent> => {
  if (!process.env.DATABASE_URL) return siteContent
  try {
    const rows = await sql()`SELECT data FROM site_content WHERE id = 1`
    return rows[0] ? conformSite(rows[0].data) : siteContent
  } catch (error) {
    console.error('Lettura contenuti dal database fallita, uso i default', error)
    return siteContent
  }
})

export async function saveContent(content: SiteContent) {
  await sql()`
    INSERT INTO site_content (id, data, updated_at)
    VALUES (1, ${JSON.stringify(content)}::jsonb, now())
    ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()`
}
