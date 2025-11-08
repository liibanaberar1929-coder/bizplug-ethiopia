import { ShoppingCart, CheckCircle } from 'lucide-react';
import type { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleContact = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in: ${product.name} (${product.price} ETB)`
    );
    window.open(`https://wa.me/251907096745?text=${message}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.in_stock && (
          <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <CheckCircle className="h-3 w-3" />
            <span>In Stock</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
            <span className="text-gray-600 ml-1">ETB</span>
          </div>

          <button
            onClick={handleContact}
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
