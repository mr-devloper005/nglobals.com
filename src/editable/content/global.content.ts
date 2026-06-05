import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Verified business listings and partner discovery',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Verified business directory',
    primaryLinks: [
      { label: 'Find Services', href: '/listing' },
      { label: 'Compare Firms', href: '/listing' },
      { label: 'Search Companies', href: '/search' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Get Listed', href: '/create' },
      secondary: { label: 'Write a Review', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Verified companies, practical filters, real discovery',
    description: 'A focused business listing directory for comparing service partners, software vendors, and trusted companies by expertise, location, pricing, and reputation.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business Listings', href: '/listing' },
          { label: 'Search Companies', href: '/search' },
          { label: 'Get Listed', href: '/create' },
          { label: 'Write a Review', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for confident business partner discovery.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
