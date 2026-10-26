import type { BusinessListing } from './supabase';

// Canonical industries for the B2B directory. Slugs match category filters.
export interface Industry {
  slug: string;
  name: string;
  icon: string; // lucide icon name
  blurb: string;
}

export const INDUSTRIES: Industry[] = [
  { slug: 'construction', name: 'Construction', icon: 'Building2', blurb: 'Contractors, materials & engineering' },
  { slug: 'finance', name: 'Finance', icon: 'Landmark', blurb: 'Banking, insurance & advisory' },
  { slug: 'logistics', name: 'Logistics', icon: 'Truck', blurb: 'Freight, warehousing & courier' },
  { slug: 'legal', name: 'Legal', icon: 'Scale', blurb: 'Counsel, notary & compliance' },
  { slug: 'technology', name: 'Technology', icon: 'Cpu', blurb: 'IT services & software' },
  { slug: 'agriculture', name: 'Agriculture', icon: 'Wheat', blurb: 'Farming inputs & processing' },
  { slug: 'manufacturing', name: 'Manufacturing', icon: 'Factory', blurb: 'Production & assembly' },
  { slug: 'energy', name: 'Energy', icon: 'Zap', blurb: 'Power, solar & utilities' },
];

export const REGIONS = [
  'All Regions',
  'Addis Ababa',
  'Dire Dawa',
  'Amhara',
  'Oromia',
  'Tigray',
  'SNNPR',
  'Sidama',
] as const;

export type Region = (typeof REGIONS)[number];

// Verified partners shown in the trust bar (logo-style names).
export const VERIFIED_PARTNERS: string[] = [
  'Addis Bank',
  'EthioLogistics',
  'HornConstruct',
  'Tena Foods',
  'Selam Tech',
  'Mercato Trade',
  'BlueNile Energy',
  'Abba Legal',
];

// Spotlight business of the week (curated, premium).
export const SPOTLIGHT_BUSINESS = {
  businessName: 'HornConstruct Engineering',
  tagline: 'Building Ethiopia\u2019s skyline, one foundation at a time.',
  description:
    'A fully verified general contractor delivering civil works, structural engineering, and project management across Addis Ababa and the regions. Trusted by developers and government partners for on-time, on-budget delivery.',
  image_url:
    'https://images.pexels.com/photos/35368884/pexels-photo-35368884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  industry: 'Construction',
  region: 'Addis Ababa',
  founded: 2014,
  projects: 120,
  vouches: 87,
  phone: '+251907096745',
};

// Seed vouch counts so the Vouch button has a believable starting point.
// In-memory only — persistence can be added once the database is reachable.
const SEED_VOUCHES: Record<string, number> = {
  seed_1: 34,
  seed_2: 52,
  seed_3: 18,
  seed_4: 41,
  seed_5: 27,
  seed_6: 63,
};

const vouchedByUser = new Set<string>();

export function getVouches(id: string): number {
  return SEED_VOUCHES[id] ?? 0;
}

export function hasVouched(id: string): boolean {
  return vouchedByUser.has(id);
}

export function toggleVouch(id: string): { vouches: number; vouched: boolean } {
  const currently = vouchedByUser.has(id);
  if (currently) {
    vouchedByUser.delete(id);
    SEED_VOUCHES[id] = Math.max(0, (SEED_VOUCHES[id] ?? 0) - 1);
  } else {
    vouchedByUser.add(id);
    SEED_VOUCHES[id] = (SEED_VOUCHES[id] ?? 0) + 1;
  }
  return { vouches: SEED_VOUCHES[id], vouched: !currently };
}

// Fallback featured businesses shown when the database is unreachable.
export const FALLBACK_BUSINESSES: BusinessListing[] = [
  {
    id: 'seed_1',
    businessName: 'Addis Bank Corporate',
    product: 'SME Business Loans & Trade Finance',
    description: 'Flexible financing for growing businesses, with fast approval and dedicated relationship managers.',
    price: 0,
    image_url: 'https://images.pexels.com/photos/7792841/pexels-photo-7792841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'finance',
    region: 'Addis Ababa',
    vouches: 34,
    verified: true,
    email: 'corp@addisbank.et',
    phone: '+251907096745',
  },
  {
    id: 'seed_2',
    businessName: 'EthioLogistics Group',
    product: 'Nationwide Freight & Last-Mile Delivery',
    description: 'End-to-end logistics with warehousing in Addis Ababa and delivery to every region within 48 hours.',
    price: 0,
    image_url: 'https://images.pexels.com/photos/955388/pexels-photo-955388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'logistics',
    region: 'Dire Dawa',
    vouches: 52,
    verified: true,
    email: 'ops@ethiologistics.et',
    phone: '+251974305893',
  },
  {
    id: 'seed_3',
    businessName: 'Abba Legal Partners',
    product: 'Corporate Counsel & Contract Review',
    description: 'Full-service commercial law firm supporting incorporations, contracts, and regulatory compliance.',
    price: 0,
    image_url: 'https://images.pexels.com/photos/30677596/pexels-photo-30677596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'legal',
    region: 'Addis Ababa',
    vouches: 18,
    verified: true,
    email: 'counsel@abbalegal.et',
    phone: '+251907096745',
  },
  {
    id: 'seed_4',
    businessName: 'Selam Tech Solutions',
    product: 'IT Infrastructure & Software Development',
    description: 'Custom software, cloud migration, and managed IT for enterprises across Ethiopia.',
    price: 0,
    image_url: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'technology',
    region: 'Addis Ababa',
    vouches: 41,
    verified: true,
    email: 'hello@selamtech.et',
    phone: '+251974305893',
  },
  {
    id: 'seed_5',
    businessName: 'Tena Foods Processing',
    product: 'Agro-Processing & Bulk Supply',
    description: 'Locally sourced grain and pulse processing with HACCP-certified facilities for wholesale buyers.',
    price: 0,
    image_url: 'https://images.pexels.com/photos/14391906/pexels-photo-14391906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'agriculture',
    region: 'Amhara',
    vouches: 27,
    verified: true,
    email: 'sales@tenafoods.et',
    phone: '+251907096745',
  },
  {
    id: 'seed_6',
    businessName: 'BlueNile Energy',
    product: 'Solar Power & Grid Solutions',
    description: 'Commercial solar installations and energy audits that cut operating costs for industrial clients.',
    price: 0,
    image_url: 'https://images.pexels.com/photos/30177512/pexels-photo-30177512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'energy',
    region: 'Oromia',
    vouches: 63,
    verified: true,
    email: 'power@bluenile.et',
    phone: '+251974305893',
  },
];

export const WHATSAPP_NUMBER = '251907096745';

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
