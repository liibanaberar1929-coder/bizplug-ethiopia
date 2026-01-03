import { ShoppingCart, Star, Check, MapPin } from 'lucide-react';
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

  const rating = Math.floor(Math.random() * 2) + 4;
  const reviews = Math.floor(Math.random() * 50) + 10;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="relative h-64 overflow-hidden bg-gray-100 group">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.in_stock && (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Check className="h-3 w-3" />
              <span>Available</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 h-14">{product.name}</h3>

        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">{rating}.0</span>
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center text-gray-500 text-xs mb-4">
          <MapPin className="h-3 w-3 mr-1" />
          <span>Ethiopia</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-2xl font-bold text-blue-600">{product.price}</span>
            <span className="text-gray-600 ml-1 text-sm">ETB</span>
          </div>

          <button
            onClick={handleContact}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
