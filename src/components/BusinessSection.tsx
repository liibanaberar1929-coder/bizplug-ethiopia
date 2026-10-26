import { useState, useEffect, useMemo } from 'react';
import { supabase, type SellerListing, type Seller } from '../lib/supabase';
import { BusinessCard } from './BusinessCard';
import { Loader2, Search, Building2 } from 'lucide-react';
import {
  FALLBACK_BUSINESSES,
  REGIONS,
  INDUSTRIES,
  type Region,
} from '../lib/bizdata';
import type { BusinessListing } from '../lib/supabase';

interface BusinessSectionProps {
  region: Region;
  industry: string;
  setRegion: (r: Region) => void;
  setIndustry: (i: string) => void;
}

// Map a seller_listing + its seller into the B2B display model.
function toBusiness(
  listing: SellerListing,
  seller: Seller | undefined,
  region: string,
  vouches: number
): BusinessListing {
  return {
    id: listing.id,
    businessName: seller?.business_name ?? listing.name,
    product: listing.name,
    description: listing.description,
    price: Number(listing.price),
    image_url: listing.image_url,
    category: listing.category.toLowerCase(),
    region,
    vouches,
    verified: seller?.status === 'approved',
    email: seller?.email ?? '',
    phone: seller?.phone ?? '',
  };
}

// Spread approved listings across regions for demo filtering.
const REGION_ROTATION: string[] = ['Addis Ababa', 'Dire Dawa', 'Amhara', 'Oromia'];

export function BusinessSection({ region, industry, setRegion, setIndustry }: BusinessSectionProps) {
  const [businesses, setBusinesses] = useState<BusinessListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchBusinesses() {
      setLoading(true);
      try {
        const [listingsRes, sellersRes] = await Promise.all([
          supabase
            .from('seller_listings')
            .select('*')
            .eq('status', 'approved')
            .order('created_at', { ascending: false }),
          supabase.from('sellers').select('*').eq('status', 'approved'),
        ]);

        if (cancelled) return;

        const sellers = (sellersRes.data ?? []) as Seller[];
        const sellerById = new Map(sellers.map((s) => [s.id, s]));
        const listings = (listingsRes.data ?? []) as SellerListing[];

        if (listings.length === 0) {
          setBusinesses(FALLBACK_BUSINESSES);
          setUsedFallback(true);
        } else {
          setBusinesses(
            listings.map((l, idx) =>
              toBusiness(
                l,
                sellerById.get(l.seller_id),
                REGION_ROTATION[idx % REGION_ROTATION.length],
                Math.floor(Math.random() * 50) + 5
              )
            )
          );
          setUsedFallback(false);
        }
      } catch {
        if (cancelled) return;
        setBusinesses(FALLBACK_BUSINESSES);
        setUsedFallback(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchBusinesses();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const regionMatch = region === 'All Regions' || b.region === region;
      const industryMatch = industry === 'all' || b.category === industry;
      return regionMatch && industryMatch;
    });
  }, [businesses, region, industry]);

  return (
    <section id="businesses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-action-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Verified Businesses
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-display">
            Browse the directory
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            Every business here is verified. Vouch for the ones you trust to help others discover them.
          </p>
        </div>

        {/* Inline filter bar (mirrors hero filters) */}
        <div className="max-w-2xl mx-auto bg-navy-50 border border-navy-100 rounded-2xl p-3 mb-12 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <label className="absolute left-3 top-1.5 text-[10px] font-semibold uppercase tracking-wider text-navy-400">
              Region
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="w-full appearance-none bg-white text-navy-900 text-sm font-medium pt-5 pb-2 px-3 rounded-xl border border-navy-200 focus:outline-none focus:ring-2 focus:ring-action-500 cursor-pointer"
            >
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex-1">
            <label className="absolute left-3 top-1.5 text-[10px] font-semibold uppercase tracking-wider text-navy-400">
              Industry
            </label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full appearance-none bg-white text-navy-900 text-sm font-medium pt-5 pb-2 px-3 rounded-xl border border-navy-200 focus:outline-none focus:ring-2 focus:ring-action-500 cursor-pointer"
            >
              <option value="all">All Industries</option>
              {INDUSTRIES.map((i) => (
                <option key={i.slug} value={i.slug}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-action-600" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 bg-navy-50 rounded-2xl">
            <Search className="h-10 w-10 text-navy-300 mx-auto mb-3" />
            <p className="text-navy-600 text-lg font-medium">No businesses match your filters yet.</p>
            <p className="text-navy-400 text-sm mt-1">
              Try a different region or industry, or check back soon.
            </p>
          </div>
        ) : (
          <>
            {usedFallback && (
              <p className="text-center text-navy-400 text-xs mb-6">
                Showing featured businesses. New listings appear here once approved.
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('partner')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 bg-navy-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-800 transition-colors"
          >
            <Building2 className="h-5 w-5" />
            <span>List your business</span>
          </button>
        </div>
      </div>
    </section>
  );
}
