import { Shield, Zap, Heart } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Abeba Tekle',
      role: 'Regular Customer',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'BizPlug has made shopping online so easy and reliable. I got my gadgets delivered in just 2 days!',
    },
    {
      name: 'Yonas Mengesha',
      role: 'Fashion Seller Partner',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'Partnering with BizPlug transformed my small business. I now reach customers across Ethiopia!',
    },
    {
      name: 'Hiwot Wolde',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1447512/pexels-photo-1447512.jpeg?auto=compress&cs=tinysrgb&w=100',
      text: 'The marketplace is transparent and easy to use. My sales have tripled since joining BizPlug.',
    },
  ];

  const badges = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'All transactions protected with SSL encryption',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: '2-5 business days across Ethiopia',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Money-back guarantee if not satisfied',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Customers and partners love BizPlug Ethiopia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="border-t pt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why You Can Trust BizPlug
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{badge.title}</h4>
                  <p className="text-gray-600">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
