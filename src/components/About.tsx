import { ShieldCheck, Truck, Clock, Heart, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const FEATURES: Feature[] = [
  { icon: ShieldCheck, title: 'Verified Businesses', text: 'Every business is vetted before listing on BizPlug.' },
  { icon: Truck, title: 'Nationwide Reach', text: 'Connect with partners across Addis Ababa and every region.' },
  { icon: Clock, title: 'Fast Introductions', text: 'Get plugged in with a business in minutes, not weeks.' },
  { icon: Heart, title: 'Community Vouching', text: 'Trust signals come from real buyers, not paid placement.' },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-navy-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-action-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Why BizPlug
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-display">
            A trust-first marketplace for serious businesses
          </h2>
          <p className="text-navy-200 text-lg max-w-2xl mx-auto">
            We connect buyers and verified sellers across Ethiopia with transparency at the core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="text-center p-6 bg-navy-700/50 rounded-2xl border border-navy-600 hover:border-action-500/50 hover:bg-navy-700 transition-all group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-action-600/15 border border-action-600/30 rounded-2xl mb-4 group-hover:bg-action-600 transition-colors">
                  <Icon className="h-7 w-7 text-action-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-navy-200 text-sm">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
