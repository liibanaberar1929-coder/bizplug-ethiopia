import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, XCircle, Loader2, LogOut, BarChart3 } from 'lucide-react';

interface Seller {
  id: string;
  business_name: string;
  email: string;
  phone: string;
  product_type: string;
  status: string;
  created_at: string;
}

interface SellerListing {
  id: string;
  seller_id: string;
  name: string;
  description: string;
  price: number;
  status: string;
  created_at: string;
}

interface Order {
  id: string;
  product_id: string;
  product_source: string;
  buyer_name: string;
  buyer_phone: string;
  buyer_message: string;
  status: string;
  created_at: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
}

export function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [listings, setListings] = useState<SellerListing[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  async function fetchData() {
    try {
      if (activeTab === 'orders') {
        const { data } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
        setOrders(data || []);
      } else if (activeTab === 'sellers') {
        const { data } = await supabase.from('sellers').select('*').order('created_at', { ascending: false });
        setSellers(data || []);
      } else if (activeTab === 'listings') {
        const { data } = await supabase.from('seller_listings').select('*').order('created_at', { ascending: false });
        setListings(data || []);
      } else if (activeTab === 'messages') {
        const { data } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
        setMessages(data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateSellerStatus(id: string, status: string) {
    await supabase.from('sellers').update({ status }).eq('id', id);
    fetchData();
  }

  async function updateListingStatus(id: string, status: string) {
    await supabase.from('seller_listings').update({ status }).eq('id', id);
    fetchData();
  }

  async function markMessageAsRead(id: string) {
    await supabase.from('contact_messages').update({ read: true }).eq('id', id);
    fetchData();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-emerald-400" />
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          {['orders', 'sellers', 'listings', 'messages'].map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setLoading(true);
              }}
              className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-emerald-400" />
          </div>
        ) : (
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {activeTab === 'orders' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Buyer</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Phone</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Product Source</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {orders.map(order => (
                      <tr key={order.id} className="hover:bg-gray-700 transition-colors">
                        <td className="px-6 py-4 text-sm">{order.buyer_name}</td>
                        <td className="px-6 py-4 text-sm">{order.buyer_phone}</td>
                        <td className="px-6 py-4 text-sm capitalize">{order.product_source}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'pending' ? 'bg-yellow-900 text-yellow-200' :
                            order.status === 'confirmed' ? 'bg-blue-900 text-blue-200' :
                            'bg-green-900 text-green-200'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">{new Date(order.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'sellers' && (
              <div className="divide-y divide-gray-700">
                {sellers.map(seller => (
                  <div key={seller.id} className="p-6 hover:bg-gray-700 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{seller.business_name}</h3>
                        <p className="text-gray-400 text-sm mb-1">Type: {seller.product_type}</p>
                        <p className="text-gray-400 text-sm">
                          <a href={`mailto:${seller.email}`} className="text-emerald-400 hover:underline">{seller.email}</a>
                          {' | '}
                          <a href={`tel:${seller.phone}`} className="text-emerald-400 hover:underline">{seller.phone}</a>
                        </p>
                      </div>
                      {seller.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateSellerStatus(seller.id, 'approved')}
                            className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => updateSellerStatus(seller.id, 'rejected')}
                            className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
                          >
                            <XCircle className="h-4 w-4" />
                            <span>Reject</span>
                          </button>
                        </div>
                      )}
                      {seller.status !== 'pending' && (
                        <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                          seller.status === 'approved' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
                        }`}>
                          {seller.status.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'listings' && (
              <div className="divide-y divide-gray-700">
                {listings.map(listing => (
                  <div key={listing.id} className="p-6 hover:bg-gray-700 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{listing.name}</h3>
                        <p className="text-gray-400 text-sm mb-2">{listing.description}</p>
                        <p className="text-emerald-400 font-semibold mb-1">{listing.price} ETB</p>
                        <p className="text-gray-400 text-sm">Category: {listing.category}</p>
                      </div>
                      {listing.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => updateListingStatus(listing.id, 'approved')}
                            className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                          >
                            <CheckCircle className="h-4 w-4" />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => updateListingStatus(listing.id, 'rejected')}
                            className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
                          >
                            <XCircle className="h-4 w-4" />
                            <span>Reject</span>
                          </button>
                        </div>
                      )}
                      {listing.status !== 'pending' && (
                        <span className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                          listing.status === 'approved' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'
                        }`}>
                          {listing.status.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="divide-y divide-gray-700">
                {messages.map(msg => (
                  <div
                    key={msg.id}
                    className={`p-6 hover:bg-gray-700 transition-colors cursor-pointer ${msg.read ? 'opacity-75' : 'bg-gray-700/50'}`}
                    onClick={() => markMessageAsRead(msg.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold">{msg.subject}</h3>
                      {!msg.read && <span className="px-2 py-1 bg-emerald-600 text-xs font-semibold rounded">NEW</span>}
                    </div>
                    <p className="text-gray-300 mb-2">{msg.message}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div>
                        <p><a href={`mailto:${msg.email}`} className="text-emerald-400 hover:underline">{msg.email}</a></p>
                        <p><a href={`tel:${msg.phone}`} className="text-emerald-400 hover:underline">{msg.phone}</a></p>
                      </div>
                      <p>{new Date(msg.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
