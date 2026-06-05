'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#171922', '--editable-footer-text': '#ffffff', '--editable-border': '#ffffff22' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled && task.key === 'listing')
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div className="rounded-2xl bg-white p-6 text-[#171922]">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c6a063] text-white">
              <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-10 w-11 object-contain" />
            </span>
            <span className="text-3xl font-black tracking-[-0.06em]">{globalContent.site.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-75">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-[#f6ecd9] px-3 py-1">Verified firms</span>
            <span className="rounded-full bg-[#f6ecd9] px-3 py-1">Buyer shortlists</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase">About</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['Why trust us', '/about'],
              ['Business listings', '/listing'],
              ['Search companies', '/search'],
              ['Contact support', '/contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="inline-flex items-center gap-2 text-sm font-bold opacity-80 hover:opacity-100">
                {label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase">For Buyers</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.slice(0, 5).map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase">For Business</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['Get listed', '/create'],
              ['Write a review', '/contact'],
              ['Vendor login', '/login'],
              ...(session ? [[session.name, '/create']] : [['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={`${label}-${href}`} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-60">
        Copyright (c) {year} {globalContent.site.name}. All rights reserved.
      </div>
    </footer>
  )
}
