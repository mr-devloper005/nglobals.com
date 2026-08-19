import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#f6f3ee] text-[#11131c]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c6a063]">{pagesContent.auth.login.badge}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-[1] tracking-[-0.06em] sm:text-6xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-sm leading-8 text-[#4f5565]">{pagesContent.auth.login.description}</p>
            <div className="mt-8 grid max-w-xl gap-3">
              {['Manage listing drafts and company details.', 'Return to saved business profile submissions.', 'Access the get-listed workspace after sign in.'].map((item) => (
                <p key={item} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#11131c]"><CheckCircle2 className="h-5 w-5 text-[#c6a063]" /> {item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[var(--editable-border)] bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c6a063] text-white"><ShieldCheck className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#687083]">{globalContent.site.name}</p>
                <h2 className="text-2xl font-black tracking-[-0.04em]">{pagesContent.auth.login.formTitle}</h2>
              </div>
            </div>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-[#4f5565]">New here? <Link href="/signup" className="font-black text-[#11131c] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
