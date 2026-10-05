import type { Metadata } from 'next'
import { SiteApp } from '@/components/site-app'
import { getContent } from '@/lib/content'

// Statica: viene rigenerata da revalidatePath('/') quando si salva da /backoffice.
export async function generateMetadata(): Promise<Metadata> {
  const { home } = await getContent()
  return { title: home.meta.title, description: home.meta.description }
}

export default async function Page() {
  return <SiteApp content={await getContent()} />
}
