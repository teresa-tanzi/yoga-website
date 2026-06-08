'use client'

import { useState } from 'react'
import { siteContent } from '@/lib/site-content'

export function ContattiPage() {
  const { eyebrow, title, intro, details, form } = siteContent.contatti
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-terracotta">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">{intro}</p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-16">
        {/* Dati testuali */}
        <div className="flex flex-col gap-6">
          {details.map((d) => (
            <div key={d.label} className="border-b border-border/60 pb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                {d.label}
              </p>
              {d.href ? (
                <a
                  href={d.href}
                  target={d.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="mt-1 block font-serif text-lg text-foreground transition-colors hover:text-terracotta"
                >
                  {d.value}
                </a>
              ) : (
                <p className="mt-1 font-serif text-lg text-foreground">
                  {d.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-card p-7 md:p-9">
          {submitted ? (
            <div className="flex h-full min-h-48 items-center justify-center text-center">
              <p className="font-serif text-xl text-foreground">
                {form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <Field label={form.nameLabel} id="name" type="text" />
              <Field label={form.emailLabel} id="email" type="email" />
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  {form.messageLabel}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta"
                />
              </div>
              <button
                type="submit"
                className="mt-1 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-terracotta-dark"
              >
                {form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type,
}: {
  label: string
  id: string
  type: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta"
      />
    </div>
  )
}
