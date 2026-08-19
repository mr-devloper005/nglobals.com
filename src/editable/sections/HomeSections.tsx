import Link from 'next/link'
import { ArrowRight, Globe2, MapPin, Search, ShieldCheck, Star, UsersRound } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { getEditablePostImage } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getContent(post?: SitePost | null) {
  return post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
}

function asText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function excerpt(post?: SitePost | null, limit = 140) {
  const content = getContent(post)
  const raw = asText(content.description) || asText(content.summary) || post?.summary || ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function companyItems(posts: SitePost[], count = 9) {
  return Array.from(new Map(posts.filter((post) => post.slug && post.title).map((post) => [post.slug, post])).values()).slice(0, count)
}

function listingHref(post: SitePost) {
  return `/listing/${post.slug}`
}

function field(post: SitePost, keys: string[], fallback: string) {
  const content = getContent(post)
  for (const key of keys) {
    const value = asText(content[key])
    if (value) return value
  }
  return fallback
}

function Stars({ score }: { score: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-black">
      <span className="inline-flex text-[#c6a063]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>
      {score}
    </span>
  )
}

function LogoMark({ post, index }: { post: SitePost; index: number }) {
  const image = getEditablePostImage(post)
  const initials = post.title.split(/\s+/).slice(0, 2).map((part) => part[0]).join('').toUpperCase()
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-[#171922] text-lg font-black text-white">
      {image && !image.includes('placeholder') ? <img src={image} alt="" className="h-full w-full object-cover" /> : <span>{initials || index + 1}</span>}
    </div>
  )
}

function BusinessPostingCard({ post, index, compact = false }: { post: SitePost; index: number; compact?: boolean }) {
  const location = field(post, ['location', 'address', 'city'], '')
  const service = field(post, ['category', 'service', 'industry'], post.tags?.[0] || '')
  const team = field(post, ['employees', 'teamSize', 'companySize'], '')
  const rate = field(post, ['hourlyRate', 'rate', 'price'], '')
  const rating = field(post, ['rating', 'score'], '')
  const reviews = field(post, ['reviews', 'reviewCount'], '')
  const summary = excerpt(post)
  return (
    <Link href={listingHref(post)} className={`group block rounded-xl border border-black/[0.06] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${compact ? 'p-4' : 'p-5'}`}>
      <div className="flex items-start gap-4">
        <LogoMark post={post} index={index} />
        <div className="min-w-0 flex-1">
          {service ? <p className="text-xs font-black uppercase tracking-[0.14em] text-[#c6a063]">{service}</p> : null}
          <h3 className="mt-1 truncate text-xl font-black tracking-[-0.03em] text-[#11131c]">{post.title}</h3>
          {rating || reviews ? <div className="mt-2 flex flex-wrap items-center gap-2">
            {rating ? <Stars score={rating} /> : null}
            {reviews ? <span className="text-xs font-semibold text-[#c6a063]">{reviews} Reviews</span> : null}
          </div> : null}
        </div>
      </div>
      {!compact && summary ? <p className="mt-4 line-clamp-2 text-sm leading-6 text-[#4f5565]">{summary}</p> : null}
      {location || team || rate ? <div className="mt-4 grid gap-2 border-t border-black/[0.06] pt-4 text-xs font-semibold text-[#4f5565] sm:grid-cols-2">
        {location ? <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#c6a063]" /> {location}</span> : null}
        {team ? <span className="inline-flex items-center gap-2"><UsersRound className="h-4 w-4 text-[#c6a063]" /> {team}</span> : null}
        {!compact && rate ? <span className="sm:col-span-2 font-black text-[#11131c]">{rate}</span> : null}
      </div> : null}
    </Link>
  )
}

function GridTexture() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-45">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(rgba(198,160,99,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(198,160,99,0.16)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute bottom-0 left-0 h-1/2 w-1/3 bg-[linear-gradient(rgba(198,160,99,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(198,160,99,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
    </div>
  )
}

export function EditableHomeHero(_: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  return (
    <section className="relative overflow-hidden bg-[#171922] text-white">
      <GridTexture />
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/75">
          <ShieldCheck className="h-4 w-4 text-[#c6a063]" /> {pagesContent.home.hero.badge}
        </p>
        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-[1.08] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{heroTitle}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-8 text-white/82">{pagesContent.home.hero.description}</p>
        <form action="/search" className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-[1fr_0.72fr_auto]">
          <label className="flex h-16 items-center gap-3 rounded-lg bg-white px-5 text-[#11131c]">
            <Search className="h-5 w-5 text-[#c6a063]" />
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-[#687083]" />
          </label>
          <label className="flex h-16 items-center gap-3 rounded-lg bg-white px-5 text-[#11131c]">
            <Globe2 className="h-5 w-5 text-[#c6a063]" />
            <input name="category" placeholder={pagesContent.home.hero.focusLabel} className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-[#687083]" />
          </label>
          <button className="inline-flex h-16 items-center justify-center rounded-lg bg-[#c6a063] px-7 text-[#11131c] transition hover:-translate-y-0.5" aria-label="Search">
            <ArrowRight className="h-6 w-6" />
          </button>
        </form>
        <div className="mx-auto mt-14 max-w-4xl">
          <p className="mx-auto inline-flex rounded-md bg-white/10 px-4 py-2 text-sm font-black">Recognized by companies across the globe</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-2xl font-black text-white/58 sm:text-3xl">
            {['Forbes', 'Business Insider', 'HubSpot', 'MarketWatch', 'Yahoo News', 'FOX 59'].map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ posts }: HomeSectionProps) {
  const companies = companyItems(posts, 8)
  if (!companies.length) return null
  return (
    <section className="bg-[#f6f3ee]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c6a063]">Recently posted</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#11131c]">Latest business listings</h2>
            <p className="mt-3 text-sm font-semibold text-[#4f5565]">Browse newly posted company profiles and compare their services, team size, location, and pricing signals.</p>
          </div>
          <Link href="/listing" className="inline-flex items-center gap-2 rounded-lg bg-[#171922] px-5 py-3 text-sm font-black text-white">View all listings <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {companies.map((post, index) => <BusinessPostingCard key={post.id || post.slug || index} post={post} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ posts }: HomeSectionProps) {
  const companies = companyItems(posts.slice(8), 9)
  if (!companies.length) return null
  return (
    <section className="bg-[#171922] text-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black tracking-[-0.04em]">Find the top-rated companies in every service category</h2>
          <p className="mt-4 text-base font-semibold text-white/78">Connect with top-ranked companies backed by trusted research, detailed profiles, and practical comparison cues.</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Mobile Apps', 'Software Development', 'Web Development', 'Artificial Intelligence', 'Digital Marketing', 'SEO', 'Web Design'].map((item, index) => (
            <Link key={item} href={`/search?q=${encodeURIComponent(item)}`} className={`rounded-md px-4 py-3 text-sm font-bold ${index === 0 ? 'bg-white text-[#11131c]' : 'bg-white/10 text-white'}`}>{item}</Link>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((post, index) => (
            <Link key={post.id || post.slug || index} href={listingHref(post)} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white p-4 text-[#11131c] transition hover:-translate-y-1">
              <LogoMark post={post} index={index} />
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xl font-black">{post.title}</h3>
                {field(post, ['category', 'service', 'industry'], post.tags?.[0] || '') ? <p className="mt-2 truncate text-sm font-semibold text-[#4f5565]">{field(post, ['category', 'service', 'industry'], post.tags?.[0] || '')}</p> : null}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/listing" className="inline-flex rounded-lg bg-[#c6a063] px-8 py-3 text-sm font-black text-[#11131c]">View all business listings</Link>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ posts }: HomeSectionProps) {
  const featured = companyItems(posts.slice(17), 6)
  const moreListings = companyItems(posts.slice(23), 6)
  if (!featured.length && !moreListings.length) return null
  return (
    <>
      {featured.length ? <section className="bg-white">
        <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c6a063]">Featured profiles</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Business listings ready for comparison</h2>
              <p className="mt-3 text-sm font-semibold text-[#4f5565]">Review company services, profile summaries, location, team size, and pricing information.</p>
            </div>
            <Link href="/listing" className="inline-flex items-center gap-2 rounded-lg bg-[#c6a063] px-5 py-3 text-sm font-black text-[#11131c]">Browse directory <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((post, index) => <BusinessPostingCard key={post.id || post.slug || index} post={post} index={index} />)}
          </div>
        </div>
      </section> : null}

      {moreListings.length ? <section className="bg-[#f6f3ee]">
        <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c6a063]">More companies</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Explore more business postings</h2>
            <p className="mt-3 text-sm font-semibold text-[#4f5565]">Open a listing to see the complete business profile and available contact actions.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {moreListings.map((post, index) => <BusinessPostingCard key={post.id || post.slug || index} post={post} index={index + 6} compact />)}
          </div>
        </div>
      </section> : null}
    </>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 rounded-xl bg-[#f2f2f4] p-8 sm:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#687083]">{pagesContent.home.cta.badge}</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-[#11131c]">{pagesContent.home.cta.title}</h2>
            <p className="mt-4 text-base font-semibold text-[#4f5565]">{pagesContent.home.cta.description}</p>
          </div>
          <Link href={pagesContent.home.cta.primaryCta.href} className="inline-flex rounded-lg bg-[#171922] px-8 py-4 text-sm font-black text-white">{pagesContent.home.cta.primaryCta.label}</Link>
        </div>
      </div>
    </section>
  )
}
