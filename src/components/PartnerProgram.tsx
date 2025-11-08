import { Zap, Target, Users, TrendingUp } from 'lucide-react';

interface PartnerProgramProps {
  onOpenForm: () => void;
}

export function PartnerProgram({ onOpenForm }: PartnerProgramProps) {
  const tiers = [
    {
      name: 'Bronze',
      price: 'Starting at 500 ETB/month',
      description: 'Perfect for getting started',
      features: [
        'Basic product listing',
        'Appear in category browse',
        'Contact details visible',
        'Email notifications for orders',
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
        'Priority order notifications',
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

  return (
    <section id="partner" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Grow Your Business with BizPlug
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            List your products, reach thousands of customers across Ethiopia, and scale your business with our trusted marketplace platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`rounded-xl p-8 transition-transform hover:scale-105 ${
                  tier.highlighted
                    ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-2xl relative -mt-4'
                    : 'bg-white text-gray-900 shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-bl-lg rounded-tr-xl text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`h-8 w-8 ${tier.highlighted ? 'text-yellow-300' : 'text-emerald-600'}`} />
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                </div>

                <p className={`text-lg font-semibold mb-2 ${tier.highlighted ? 'text-emerald-50' : 'text-emerald-600'}`}>
                  {tier.price}
                </p>

                <p className={`text-sm mb-6 ${tier.highlighted ? 'text-emerald-100' : 'text-gray-600'}`}>
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <Zap className={`h-5 w-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? 'text-yellow-300' : 'text-emerald-600'}`} />
                      <span className={tier.highlighted ? 'text-emerald-50' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenForm}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    tier.highlighted
                      ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Partner with BizPlug?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg text-emerald-600 mb-2">Growing Customer Base</h4>
              <p className="text-gray-600">
                Reach thousands of Ethiopian customers looking for quality products and services.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-emerald-600 mb-2">Easy Order Management</h4>
              <p className="text-gray-600">
                Receive orders directly and manage them through our simple dashboard system.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-emerald-600 mb-2">No Upfront Costs</h4>
              <p className="text-gray-600">
                Flexible pricing plans that work for businesses of any size. Start small, scale up.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-emerald-600 mb-2">24/7 Support</h4>
              <p className="text-gray-600">
                Our team is always available to help you succeed on the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
