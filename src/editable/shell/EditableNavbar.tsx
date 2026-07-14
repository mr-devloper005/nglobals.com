'use client'

import { useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle, ChevronDown } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': '#ffffff', '--editable-nav-text': '#11131c', '--editable-nav-active': '#171922', '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': '#c6a063', '--editable-cta-text': '#11131c', '--editable-search-bg': '#ffffff', '--editable-border': '#d9d9df' } as CSSProperties

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)]">
      <nav className="mx-auto flex min-h-[72px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--editable-cta-bg)] text-white shadow-sm transition-transform group-hover:-rotate-2">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-10 w-11 object-contain" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[190px] truncate text-2xl font-black tracking-[-0.05em]">{globalContent.site.name}</span>
          </span>
        </Link>

        <div className="ml-6 hidden items-center gap-2 lg:flex">
          {[
           
            { label: 'Browse Companies', href: '/listing' },
            { label: 'Search Directory', href: '/search' },
          ].map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.label} href={item.href} className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-black/5'}`}>
                {item.label} <ChevronDown className="h-3.5 w-3.5" />
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          
          <Link href="/contact" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-black/5 lg:inline-flex">Write a Review</Link>
          {session ? (
            <>
              <Link href="/create" className="hidden max-w-[180px] items-center gap-2 truncate rounded-full border border-[var(--editable-border)] px-3 py-2 text-sm font-black sm:inline-flex"><PlusCircle className="h-4 w-4" /> {session.name}</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-full bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-black hover:bg-black/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Sign In</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-xl bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Get Listed</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search business listings" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, { label: 'Business Listings', href: '/listing' }, { label: 'Search Companies', href: '/search' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: session.name, href: '/create' }] : [{ label: 'Sign In', href: '/login' }, { label: 'Get Listed', href: '/signup' }])].map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-2xl border border-[var(--editable-border)] bg-[var(--editable-cta-bg)] px-4 py-3 text-left text-sm font-black">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
