import { useState, useEffect } from 'react';
import { supabase, type Product, type Category } from '../lib/supabase';
import { ProductCard } from './ProductCard';
import { Loader2 } from 'lucide-react';

export function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          supabase.from('products').select('*').eq('in_stock', true).order('created_at', { ascending: false }),
          supabase.from('categories').select('*').order('name')
        ]);

        if (productsRes.data) setProducts(productsRes.data);
        if (categoriesRes.data) setCategories(categoriesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => {
        const category = categories.find(c => c.id === p.category_id);
        return category?.slug === selectedCategory;
      });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
      </div>
    );
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Listings
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the latest products from verified sellers across Ethiopia
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                selectedCategory === category.slug
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}
