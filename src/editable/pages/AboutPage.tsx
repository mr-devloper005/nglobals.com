import Link from 'next/link'
import { BarChart3, Building2, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  const stats = [
    ['80K+', 'verified buyer signals'],
    ['30K+', 'software and service profiles'],
    ['120+', 'service categories'],
    ['40+', 'popular markets covered'],
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f6f3ee] px-4 py-14 text-[#11131c] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-xl border border-[var(--editable-border)] bg-white p-8 shadow-sm lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c6a063]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.05em]">About {globalContent.site.name}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#4f5565]">{pagesContent.about.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map(([value, label]) => (
                  <div key={label} className="rounded-lg bg-[#fbf5e8] p-5">
                    <p className="text-3xl font-black">{value}</p>
                    <p className="mt-2 text-sm font-semibold text-[#4f5565]">{label}</p>
                  </div>
                ))}
              </div>
            </article>
            <aside className="rounded-xl bg-[#171922] p-8 text-white lg:p-10">
              <ShieldCheck className="h-10 w-10 text-[#c6a063]" />
              <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">A directory built for business decisions.</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">Every page is shaped around practical comparison: service fit, proof points, location, pricing signals, and direct action buttons.</p>
              <div className="mt-7 grid gap-3 text-sm font-bold text-white/85">
                {[
                  [Building2, 'Company profiles explain services and credibility.'],
                  [MapPin, 'Location and market cues help buyers narrow quickly.'],
                  [BarChart3, 'Review and focus sections make comparison easier.'],
                ].map(([Icon, text]) => <p key={String(text)} className="flex gap-3"><Icon className="h-5 w-5 shrink-0 text-[#c6a063]" />{String(text)}</p>)}
              </div>
            </aside>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-xl border border-[var(--editable-border)] bg-white p-8">
              <h2 className="text-3xl font-black tracking-[-0.04em]">Why this business listing experience works</h2>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
            <aside className="grid gap-4">
              {pagesContent.about.values.map((value) => (
                <div key={value.title} className="rounded-xl border border-[var(--editable-border)] bg-white p-6 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <h2 className="mt-3 text-xl font-black tracking-[-0.03em]">{value.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#4f5565]">{value.description}</p>
                </div>
              ))}
            </aside>
          </div>

          <div className="mt-8 rounded-xl bg-[#e9e9eb] p-8 sm:p-10">
            <div className="grid items-center gap-5 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em]">Ready to compare trusted companies?</h2>
                <p className="mt-3 text-sm font-semibold text-[#4f5565]">Browse the directory or create a listing profile for your company.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/listing" className="rounded-lg bg-[#171922] px-6 py-3 text-sm font-black text-white">Browse listings</Link>
                <Link href="/create" className="rounded-lg bg-[#c6a063] px-6 py-3 text-sm font-black text-[#11131c]">Get listed</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
