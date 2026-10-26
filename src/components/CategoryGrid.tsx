import {
  Building2,
  Landmark,
  Truck,
  Scale,
  Cpu,
  Wheat,
  Factory,
  Zap,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { INDUSTRIES } from '../lib/bizdata';

const ICONS: Record<string, LucideIcon> = {
  Building2,
  Landmark,
  Truck,
  Scale,
  Cpu,
  Wheat,
  Factory,
  Zap,
};

interface CategoryGridProps {
  onSelectIndustry: (slug: string) => void;
  activeIndustry: string;
}

export function CategoryGrid({ onSelectIndustry, activeIndustry }: CategoryGridProps) {
  return (
    <section id="categories" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-action-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Browse by Industry
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-display">
            Find partners in your sector
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            Eight core industries powering Ethiopia&apos;s economy — pick one to see verified businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {INDUSTRIES.map((industry) => {
            const Icon = ICONS[industry.icon] ?? Building2;
            const isActive = activeIndustry === industry.slug;
            return (
              <button
                key={industry.slug}
                onClick={() => onSelectIndustry(industry.slug)}
                className={`group relative bg-white rounded-2xl p-6 text-left border-2 transition-all hover:-translate-y-1 hover:shadow-xl ${
                  isActive
                    ? 'border-action-600 shadow-lg shadow-action-600/10'
                    : 'border-transparent shadow-md hover:border-action-200'
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-colors ${
                    isActive
                      ? 'bg-action-600 text-white'
                      : 'bg-navy-100 text-navy-700 group-hover:bg-action-50 group-hover:text-action-600'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-navy-900 text-base mb-1">{industry.name}</h3>
                <p className="text-navy-500 text-xs leading-relaxed">{industry.blurb}</p>
                <ArrowRight
                  className={`absolute top-6 right-5 h-4 w-4 transition-all ${
                    isActive
                      ? 'text-action-600 translate-x-0 opacity-100'
                      : 'text-navy-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
