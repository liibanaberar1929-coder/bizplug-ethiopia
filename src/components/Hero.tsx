import { Sparkles, TrendingUp } from 'lucide-react';

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPartner = () => {
    const element = document.getElementById('partner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Ethiopia's Fastest Growing Online Marketplace</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Shop Smart.<br />Advertise Smarter.
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed font-light">
            Buy amazing products or grow your business on Ethiopia's trusted marketplace
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            From gadgets to fashion, smart tools and more. Genuine products, fast delivery, 24/7 support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProducts}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              Shop Now
            </button>
            <button
              onClick={scrollToPartner}
              className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-all flex items-center justify-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>Sell with Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
