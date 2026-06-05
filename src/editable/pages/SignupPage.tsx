import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle2, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#171922] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1fr] lg:px-8">
          <div className="rounded-xl border border-white/10 bg-white p-6 text-[#11131c] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c6a063] text-white"><ShieldCheck className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6b7280]">{globalContent.site.name}</p>
                <h1 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
              </div>
            </div>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-[#4f5565]">Already have an account? <Link href="/login" className="font-black text-[#11131c] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#c6a063]">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-5xl font-black leading-[1] tracking-[-0.06em] sm:text-6xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/68">{pagesContent.auth.signup.description}</p>
            <div className="mt-8 grid max-w-xl gap-3">
              {[
                [Building2, 'Submit company profiles with services and contact details.'],
                [CheckCircle2, 'Keep listing requests tied to your local account.'],
                [ShieldCheck, 'Prepare verification-ready business information.'],
              ].map(([Icon, text]) => (
                <p key={String(text)} className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-bold text-white/85"><Icon className="h-5 w-5 text-[#c6a063]" /> {String(text)}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
