'use client'

import { Building2, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { globalContent } from '@/editable/content/global.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'List a company', body: 'Send company details, services, location, website, and proof points for a new business listing.' },
    { icon: ShieldCheck, title: 'Verify or update a profile', body: 'Request profile corrections, claimed listing support, service updates, or portfolio changes.' },
    { icon: MapPin, title: 'Build a shortlist', body: 'Tell us your project needs and target market so the directory team can help narrow suitable providers.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#f6f3ee] text-[#11131c]">
        <section className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c6a063]">{pagesContent.contact.eyebrow}</p>
              <h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.05em]">{pagesContent.contact.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#4f5565]">{pagesContent.contact.description}</p>
              <div className="mt-8 grid gap-4">
                {lanes.map((lane) => (
                  <div key={lane.title} className="rounded-xl border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                    <lane.icon className="h-6 w-6 text-[#c6a063]" />
                    <h2 className="mt-3 text-xl font-black tracking-[-0.03em]">{lane.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[#4f5565]">{lane.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-[#171922] p-6 text-white">
                <h2 className="text-xl font-black">Directory support</h2>
                <div className="mt-4 grid gap-3 text-sm font-semibold text-white/78">
                  <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#c6a063]" /> Listing requests, profile updates, and buyer inquiries</p>
                  <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#c6a063]" /> Response routing for businesses and buyers</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--editable-border)] bg-white p-6 shadow-sm sm:p-7">
              <p className="text-sm font-black text-[#c6a063]">{globalContent.site.name}</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">{pagesContent.contact.formTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-[#4f5565]">Use the form for listing submissions, verification questions, profile corrections, partnership requests, or shortlist help.</p>
              <div className="mt-5">
                <EditableContactLeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
