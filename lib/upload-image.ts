import { upload } from '@vercel/blob/client'

const MAX_SIDE = 2400
const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp']

export const IMAGE_ACCEPT = ACCEPTED.join(',')

// Ridimensiona nel browser le foto troppo grandi (quelle del telefono pesano 5-10 MB) e le
// salva come JPEG: il sito resta veloce senza che Cecilia debba ottimizzare nulla a mano.
// Se qualcosa va storto si carica l'originale.
async function shrink(file: File): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height))
    if (scale === 1 && file.size < 1.5 * 1024 * 1024) return file
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    const ctx = canvas.getContext('2d')
    if (!ctx) return file
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.85))
    return blob && blob.size < file.size ? blob : file
  } catch {
    return file
  }
}

// Carica la foto su Vercel Blob e restituisce l'indirizzo pubblico.
export async function uploadImage(file: File): Promise<string> {
  if (!ACCEPTED.includes(file.type)) throw new Error('Formato non supportato: usa una foto JPG, PNG o WebP.')
  const body = await shrink(file)
  const base = file.name.replace(/\.[^.]+$/, '').replace(/[^a-zA-Z0-9-_]+/g, '-').slice(0, 40) || 'foto'
  const ext = body.type === 'image/jpeg' ? 'jpg' : file.name.split('.').pop()?.toLowerCase() || 'jpg'
  const blob = await upload(`images/${base}.${ext}`, body, {
    access: 'public',
    handleUploadUrl: '/api/backoffice/upload',
    contentType: body.type || file.type,
  })
  return blob.url
}
