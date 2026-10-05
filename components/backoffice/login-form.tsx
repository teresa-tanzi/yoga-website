'use client'

import { useActionState } from 'react'
import { login } from '@/app/backoffice/actions'

const input =
  'mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-base outline-none focus:border-terracotta'

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined)
  return (
    <form action={action} className="w-full max-w-sm space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">Area riservata</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Accedi</h1>
      </div>
      <label className="block text-sm">
        Utente
        <input name="username" defaultValue={state?.username} autoComplete="username" required className={input} />
      </label>
      <label className="block text-sm">
        Password
        <input name="password" type="password" autoComplete="current-password" required className={input} />
      </label>
      {state?.error && (
        <p role="alert" className="text-sm text-destructive">
          {state.error}
        </p>
      )}
      <button
        disabled={pending}
        className="w-full rounded-full bg-terracotta px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-terracotta-dark disabled:opacity-60"
      >
        {pending ? 'Accesso…' : 'Entra'}
      </button>
    </form>
  )
}
