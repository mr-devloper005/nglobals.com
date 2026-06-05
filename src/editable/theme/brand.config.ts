import { siteIdentity } from '@/config/site.identity'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'

const { recipe } = getFactoryState()
const productKind = getProductKind(recipe)
const env = process.env

export const slot4BrandConfig = {
  siteName: env.NEXT_PUBLIC_SITE_NAME || env.SITE_NAME || siteIdentity.name,
  tagline: env.NEXT_PUBLIC_SITE_TAGLINE || env.SITE_TAGLINE || siteIdentity.tagline || 'Verified business listings and partner discovery',
  domain: env.NEXT_PUBLIC_SITE_DOMAIN || env.SITE_DOMAIN || siteIdentity.domain,
  baseUrl: env.NEXT_PUBLIC_SITE_URL || env.SITE_URL || siteIdentity.url,
  productKind,
  ogImage: siteIdentity.ogImage,
  accents:
    productKind === 'visual'
      ? { primary: '#8df0c8', surface: '#07101f' }
      : productKind === 'editorial'
        ? { primary: '#241711', surface: '#fbf6ee' }
        : productKind === 'directory'
          ? { primary: '#0f172a', surface: '#f8fbff' }
          : { primary: '#5b2b3b', surface: '#f7f1ea' },
} as const
