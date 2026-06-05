import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Verified business listings and service partner discovery',
      description: 'Compare trusted companies, software providers, and service partners through a focused business listing directory.',
      openGraphTitle: 'Verified business listings and service partner discovery',
      openGraphDescription: 'Find verified companies, compare service expertise, and choose business partners with confidence.',
      keywords: ['business listings', 'company directory', 'service providers', 'software vendors'],
    },
    hero: {
      badge: 'Verified B2B directory',
      title: ['Trusted business listings for', 'finding the right partners.'],
      description: 'Search verified companies, compare service strengths, and shortlist software, IT, marketing, and design partners without the guesswork.',
      primaryCta: { label: 'Find companies', href: '/listing' },
      secondaryCta: { label: 'Get listed', href: '/create' },
      searchPlaceholder: 'What service or company are you looking for?',
      focusLabel: 'Location',
      featureCardBadge: 'trusted by buyers',
      featureCardTitle: 'Service categories, company cards, and review cues work together.',
      featureCardDescription: 'The homepage now behaves like a business marketplace built for scanning, comparing, and taking action.',
    },
    intro: {
      badge: 'About the directory',
      title: 'Built for finding reliable companies before a project starts.',
      paragraphs: [
        'This directory brings company profiles, service categories, locations, reviews, and practical business details into one focused browsing experience.',
        'Buyers can move from a broad service need to a qualified shortlist, while listed companies get a clear profile surface that makes their value easier to understand.',
        'Every page is tuned for business discovery: clean filters, useful cards, readable details, and direct action paths.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Category-led homepage for software, web, IT, design, marketing, and AI services.',
        'Business cards with location, pricing, team size, rating, and contact signals.',
        'Detail pages designed for comparison, trust, service focus, and portfolio context.',
        'Compact responsive layouts that avoid stretched, overly wide reading surfaces.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Contact us', href: '/contact' },
    },
    cta: {
      badge: 'For service providers',
      title: `Connect with buyers searching on ${slot4BrandConfig.siteName}.`,
      description: 'Create a company profile, show your expertise, and help potential customers understand why your team is the right fit.',
      primaryCta: { label: 'Create a profile', href: '/create' },
      secondaryCta: { label: 'Contact us', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A practical way to compare companies before you hire.',
    description: `${slot4BrandConfig.siteName} helps buyers discover, compare, and contact business service providers through structured listings and clear decision signals.`,
    paragraphs: [
      'Instead of forcing teams to search across scattered websites, the directory organizes company information around the questions buyers actually ask: what do they do, where are they based, what do they cost, and why should they be trusted?',
      'The experience is intentionally restrained and readable, so visitors can scan many firms quickly and then dig into a detailed listing when a company looks promising.',
      'For businesses, profiles create a clearer path from visibility to inquiry by bringing services, proof points, portfolio material, and contact actions into one place.',
    ],
    values: [
      {
        title: 'Verified discovery rhythm',
        description: 'Service categories, filters, and profile pages are structured to help buyers move from broad intent to a confident shortlist.',
      },
      {
        title: 'Comparison-ready listings',
        description: 'Company cards and detail pages surface ratings, locations, services, pricing, team size, and portfolio cues in a consistent format.',
      },
      {
        title: 'Useful business content',
        description: 'About, contact, search, and archive pages all speak to business listing needs instead of generic publishing workflows.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to us about listings, verification, or partner discovery.',
    description: 'Need help adding a company, updating profile details, comparing providers, or building a shortlist? Send the context and our team will route it to the right listing support lane.',
    formTitle: 'Send a listing request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search companies, categories, locations, and service expertise across the business directory.',
    },
    hero: {
      badge: 'Search companies',
      title: 'Find business listings by service, location, or keyword.',
      description: 'Search the directory for company names, categories, technology skills, locations, and profile content.',
      placeholder: 'Search service, company, location, or keyword',
    },
    resultsTitle: 'Latest searchable business listings',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create a business listing profile for the directory.',
    },
    locked: {
      badge: 'Listing access',
      title: 'Login to create a company profile.',
      description: 'Use your account to open the listing workspace and prepare a business profile with services, links, images, and contact details.',
    },
    hero: {
      badge: 'Listing workspace',
      title: 'Create a business listing profile.',
      description: 'Add company details, category, website, summary, and profile content so buyers can compare your business clearly.',
    },
    formTitle: 'Business profile details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing draft submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to manage business listing access.',
      badge: 'Directory member access',
      title: 'Welcome back to your listing workspace.',
      description: 'Login to create company profiles, manage listing drafts, and continue building your business directory presence.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create an account for business listing access.',
      badge: 'Get listed',
      title: 'Create your account and submit a company profile.',
      description: 'Set up access for listing submissions, company profile drafts, and directory inquiries.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
