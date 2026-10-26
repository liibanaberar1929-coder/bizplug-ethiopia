import { Search, TrendingUp, ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import { REGIONS, INDUSTRIES, type Region } from '../lib/bizdata';

interface HeroProps {
  region: Region;
  setRegion: (r: Region) => void;
  industry: string;
  setIndustry: (i: string) => void;
  onSearch: () => void;
}

export function Hero({ region, setRegion, industry, setIndustry, onSearch }: HeroProps) {
  const scrollToSpotlight = () => {
    document.getElementById('spotlight')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative bg-navy-900 overflow-hidden">
      {/* Decorative gradient mesh */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-action-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[420px] h-[420px] bg-navy-500/30 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-action-600/15 border border-action-600/30 text-action-300 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-sm font-semibold tracking-wide">Ethiopia&apos;s Trust-First B2B Network</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] font-display animate-fade-up">
            Where Ethiopian
            <br />
            <span className="text-action-400">businesses get plugged in.</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-200 mb-2 leading-relaxed max-w-2xl mx-auto animate-fade-up">
            Discover verified partners across construction, finance, logistics, legal and more.
          </p>
          <p className="text-base text-navy-300 mb-10 animate-fade-up">
            Search by region and industry, vouch for businesses you trust, and connect instantly.
          </p>

          {/* Search bar */}
          <div id="search" className="bg-navy-800/80 backdrop-blur-md border border-navy-600 rounded-2xl p-3 md:p-4 shadow-2xl shadow-navy-950/50 max-w-3xl mx-auto animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3">
              <div className="relative">
                <label className="absolute left-3 top-2 text-[10px] font-semibold uppercase tracking-wider text-navy-300">
                  Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value as Region)}
                  className="w-full appearance-none bg-navy-700 text-white text-sm font-medium pt-6 pb-2 px-3 rounded-xl border border-navy-600 focus:outline-none focus:ring-2 focus:ring-action-500 cursor-pointer"
                >
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <label className="absolute left-3 top-2 text-[10px] font-semibold uppercase tracking-wider text-navy-300">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full appearance-none bg-navy-700 text-white text-sm font-medium pt-6 pb-2 px-3 rounded-xl border border-navy-600 focus:outline-none focus:ring-2 focus:ring-action-500 cursor-pointer"
                >
                  <option value="all">All Industries</option>
                  {INDUSTRIES.map((i) => (
                    <option key={i.slug} value={i.slug}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={onSearch}
                className="flex items-center justify-center space-x-2 bg-action-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-action-500 transition-colors shadow-lg shadow-action-600/30"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={onSearch}
              className="bg-action-600 text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-action-500 transition-all shadow-lg shadow-action-600/30 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Browse Businesses</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={scrollToSpotlight}
              className="bg-transparent text-white border-2 border-navy-500 px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-navy-700 transition-all flex items-center justify-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>See Spotlight</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3 text-left">
              <div className="flex-shrink-0">
                <Building2 className="h-6 w-6 text-action-400 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Verified Network</h3>
                <p className="text-navy-300 text-sm">Every business is vetted before listing</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-left">
              <div className="flex-shrink-0">
                <ShieldCheck className="h-6 w-6 text-action-400 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Community Vouching</h3>
                <p className="text-navy-300 text-sm">Trust earned, not bought</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-left">
              <div className="flex-shrink-0">
                <Search className="h-6 w-6 text-action-400 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Smart Filtering</h3>
                <p className="text-navy-300 text-sm">Find partners by region &amp; industry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
