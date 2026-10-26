import { Zap, Target, Users, TrendingUp, type LucideIcon } from 'lucide-react';

interface PartnerProgramProps {
  onOpenForm: () => void;
}

interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  highlighted?: boolean;
}

const TIERS: Tier[] = [
  {
    name: 'Bronze',
    price: 'Starting at 500 ETB/month',
    description: 'Perfect for getting started',
    features: [
      'Basic business listing',
      'Appear in category browse',
      'Contact details visible',
      'Email notifications for leads',
    ],
    icon: Users,
  },
  {
    name: 'Silver',
    price: 'Starting at 1,500 ETB/month',
    description: 'For growing businesses',
    features: [
      'Everything in Bronze',
      'Featured spot on homepage',
      'Social media promotion',
      'Priority lead notifications',
      'Up to 5 featured products',
    ],
    icon: Target,
    highlighted: true,
  },
  {
    name: 'Gold',
    price: 'Starting at 3,500 ETB/month',
    description: 'Maximum exposure',
    features: [
      'Everything in Silver',
      'Premium featured spot',
      'Weekly social media posts',
      'Monthly newsletter feature',
      'Up to 15 featured products',
      'Priority support',
    ],
    icon: TrendingUp,
  },
];

export function PartnerProgram({ onOpenForm }: PartnerProgramProps) {
  return (
    <section id="partner" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-action-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Partner Program
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-display">
            Grow your business with BizPlug
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            List your business, reach thousands of buyers across Ethiopia, and scale with a trusted platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 transition-all hover:-translate-y-1 ${
                  tier.highlighted
                    ? 'bg-navy-900 text-white shadow-2xl shadow-navy-900/20 relative ring-2 ring-action-500'
                    : 'bg-white text-navy-900 shadow-lg border border-navy-100'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 right-0 bg-action-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`h-7 w-7 ${tier.highlighted ? 'text-action-400' : 'text-action-600'}`} />
                  <h3 className="text-2xl font-bold font-display">{tier.name}</h3>
                </div>
                <p className={`text-base font-semibold mb-1 ${tier.highlighted ? 'text-action-300' : 'text-action-600'}`}>
                  {tier.price}
                </p>
                <p className={`text-sm mb-6 ${tier.highlighted ? 'text-navy-200' : 'text-navy-500'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Zap className={`h-4 w-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-action-400' : 'text-action-600'}`} />
                      <span className={tier.highlighted ? 'text-navy-100' : 'text-navy-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenForm}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-action-600 text-white hover:bg-action-500'
                      : 'bg-navy-900 text-white hover:bg-navy-800'
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-navy-100 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 font-display">Why partner with BizPlug?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: 'Growing Buyer Base', d: 'Reach thousands of Ethiopian businesses looking for trusted partners.' },
              { t: 'Easy Lead Management', d: 'Receive inquiries directly and manage them through a simple dashboard.' },
              { t: 'No Upfront Costs', d: 'Flexible plans for businesses of any size. Start small, scale up.' },
              { t: 'Priority Support', d: 'Our team is always available to help you succeed on the platform.' },
            ].map((item) => (
              <div key={item.t}>
                <h4 className="font-bold text-lg text-action-600 mb-2">{item.t}</h4>
                <p className="text-navy-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
