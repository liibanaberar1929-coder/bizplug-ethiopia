import { ShieldCheck, Zap, Heart, type LucideIcon } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Abeba Tekle',
    role: 'Procurement Lead, Tena Foods',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'BizPlug connected us with a verified logistics partner in days. The vouch system made it easy to trust the referral.',
  },
  {
    name: 'Yonas Mengesha',
    role: 'Founder, HornConstruct',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'Being spotlighted on BizPlug brought us three new contracts in a single week. The platform genuinely delivers.',
  },
  {
    name: 'Hiwot Wolde',
    role: 'Operations Director, Selam Tech',
    image: 'https://images.pexels.com/photos/1447512/pexels-photo-1447512.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: 'We filtered by region and industry and found exactly the legal counsel we needed. The Get Plugged In button is brilliant.',
  },
];

interface Badge {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BADGES: Badge[] = [
  { icon: ShieldCheck, title: '100% Verified', description: 'Every business is vetted before listing' },
  { icon: Zap, title: 'Fast Introductions', description: 'Connect with partners in minutes' },
  { icon: Heart, title: 'Community First', description: 'Trust earned through real vouches' },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-action-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Trusted by Thousands
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-display">
            Businesses build on BizPlug
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            Buyers and partners across Ethiopia rely on our network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-navy-50 rounded-2xl p-7 border border-navy-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-navy-900">{t.name}</h3>
                  <p className="text-sm text-navy-500">{t.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-3 text-action-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">&#9733;</span>
                ))}
              </div>
              <p className="text-navy-700 italic">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="border-t border-navy-100 pt-12">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8 font-display">
            Why you can trust BizPlug
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BADGES.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-action-600/10 border border-action-600/20 rounded-2xl mb-4">
                    <Icon className="h-7 w-7 text-action-600" />
                  </div>
                  <h4 className="font-bold text-navy-900 mb-2">{b.title}</h4>
                  <p className="text-navy-500">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
