import { ShieldCheck } from 'lucide-react';
import { VERIFIED_PARTNERS } from '../lib/bizdata';

export function TrustBar() {
  // Duplicate the list so the marquee loops seamlessly.
  const logos = [...VERIFIED_PARTNERS, ...VERIFIED_PARTNERS];

  return (
    <section className="bg-navy-800 border-y border-navy-700 py-7">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <ShieldCheck className="h-5 w-5 text-action-400" />
            <span className="text-navy-100 text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
              Verified Partners
            </span>
          </div>

          <div className="relative overflow-hidden flex-1 w-full md:mask-fade">
            <div className="flex items-center gap-10 animate-marquee whitespace-nowrap">
              {logos.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center space-x-2 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <div className="w-2 h-2 rounded-full bg-action-500" />
                  <span className="text-navy-100 font-display font-bold text-lg tracking-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
