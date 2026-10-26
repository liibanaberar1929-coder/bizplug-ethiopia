import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: string | null;
  in_stock: boolean;
  created_at: string;
  updated_at: string;
}

export interface SellerListing {
  id: string;
  seller_id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  status: string;
  created_at: string;
}

export interface Seller {
  id: string;
  business_name: string;
  email: string;
  phone: string;
  product_type: string;
  status: string;
  created_at: string;
}

// B2B display model — a normalized business card surfaced to visitors.
// Combines seller_listings + sellers, with a vouch counter.
export interface BusinessListing {
  id: string;
  businessName: string;
  product: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  region: string;
  vouches: number;
  verified: boolean;
  email: string;
  phone: string;
}
