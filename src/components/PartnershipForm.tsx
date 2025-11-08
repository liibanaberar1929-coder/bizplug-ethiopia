import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { X, Check, AlertCircle } from 'lucide-react';

interface PartnershipFormProps {
  onClose: () => void;
}

export function PartnershipForm({ onClose }: PartnershipFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const [sellerData, setSellerData] = useState({
    business_name: '',
    email: '',
    phone: '',
    product_type: '',
  });

  const [listingData, setListingData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    category: '',
  });

  async function handleStep1Submit(e: React.FormEvent) {
    e.preventDefault();
    if (!sellerData.business_name || !sellerData.email || !sellerData.phone || !sellerData.product_type) {
      setMessage('Please fill all fields');
      setMessageType('error');
      return;
    }
    setStep(2);
  }

  async function handleFinalSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!listingData.name || !listingData.description || !listingData.price || !listingData.image_url || !listingData.category) {
      setMessage('Please fill all fields');
      setMessageType('error');
      return;
    }

    setLoading(true);
    try {
      const { data: sellerRes } = await supabase
        .from('sellers')
        .insert([sellerData])
        .select();

      if (sellerRes && sellerRes[0]) {
        await supabase.from('seller_listings').insert([
          {
            ...listingData,
            price: parseFloat(listingData.price),
            seller_id: sellerRes[0].id,
          },
        ]);

        setMessage('Thank you! Your application has been submitted for review. We will contact you shortly.');
        setMessageType('success');
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (error) {
      setMessage('Error submitting application. Please try again.');
      setMessageType('error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">
            {step === 1 ? 'Partner with BizPlug' : 'Your Product Details'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {message && (
            <div className={`flex items-center space-x-3 p-4 rounded-lg mb-6 ${
              messageType === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {messageType === 'success' ? (
                <Check className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p>{message}</p>
            </div>
          )}

          {step === 1 ? (
            <form onSubmit={handleStep1Submit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={sellerData.business_name}
                    onChange={e => setSellerData({ ...sellerData, business_name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={sellerData.email}
                    onChange={e => setSellerData({ ...sellerData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={sellerData.phone}
                    onChange={e => setSellerData({ ...sellerData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="+251..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What do you sell? *
                  </label>
                  <select
                    value={sellerData.product_type}
                    onChange={e => setSellerData({ ...sellerData, product_type: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select category</option>
                    <option value="Gadgets">Gadgets</option>
                    <option value="Fashion">Fashion & Accessories</option>
                    <option value="Smart Tools">Smart Tools</option>
                    <option value="Services">Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleFinalSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product/Service Name *
                  </label>
                  <input
                    type="text"
                    value={listingData.name}
                    onChange={e => setListingData({ ...listingData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Product name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    value={listingData.description}
                    onChange={e => setListingData({ ...listingData, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Describe your product or service"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price (ETB) *
                    </label>
                    <input
                      type="number"
                      value={listingData.price}
                      onChange={e => setListingData({ ...listingData, price: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <select
                      value={listingData.category}
                      onChange={e => setListingData({ ...listingData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Select category</option>
                      <option value="Gadgets">Gadgets</option>
                      <option value="Fashion Accessories">Fashion Accessories</option>
                      <option value="Smart Tools">Smart Tools</option>
                      <option value="Services">Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL *
                  </label>
                  <input
                    type="url"
                    value={listingData.image_url}
                    onChange={e => setListingData({ ...listingData, image_url: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Use Pexels or upload your product image online</p>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
