import { Shield, Truck, Clock, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BizPlug Ethiopia?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to providing quality products and excellent service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Sellers</h3>
            <p className="text-gray-600">
              All sellers are verified for secure transactions
            </p>
          </div>

          <div className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick logistics across Ethiopia to your doorstep
            </p>
          </div>

          <div className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Listings</h3>
            <p className="text-gray-600">
              Post your products instantly and reach buyers immediately
            </p>
          </div>

          <div className="text-center p-6 group hover:bg-gray-50 rounded-xl transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Join thousands of trusted buyers and sellers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
