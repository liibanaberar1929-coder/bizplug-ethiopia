import { Sparkles, TrendingUp, Zap, Shield } from 'lucide-react';

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
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Ethiopia's #1 Trusted Marketplace</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find what you need.<br />Sell what you got.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-2 leading-relaxed">
            Connect with thousands of buyers and sellers across Ethiopia
          </p>

          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            Shop products, hire services, post jobs, or launch your business instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={scrollToProducts}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              Browse Now
            </button>
            <button
              onClick={scrollToPartner}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
            >
              <TrendingUp className="h-5 w-5" />
              <span>Start Selling</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Zap className="h-6 w-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600 text-sm">Quick listings and instant notifications</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Verified Users</h3>
                <p className="text-gray-600 text-sm">Safe transactions with verified buyers</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Sparkles className="h-6 w-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Support 24/7</h3>
                <p className="text-gray-600 text-sm">Always here to help you succeed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
