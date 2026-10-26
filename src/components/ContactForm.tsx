import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { X, Check, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setMessage('Please fill all fields');
      setMessageType('error');
      return;
    }

    setLoading(true);
    try {
      await supabase.from('contact_messages').insert([formData]);
      setMessage('Thank you! Your message has been sent successfully. We will respond shortly.');
      setMessageType('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setMessage('Error sending message. Please try again.');
      setMessageType('error');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    'w-full px-4 py-2 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-action-500';

  return (
    <div className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-navy-100 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-navy-900 font-display">Send us a Message</h2>
          <button
            onClick={onClose}
            className="text-navy-400 hover:text-navy-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {message && (
            <div className={`flex items-center space-x-3 p-4 rounded-lg mb-6 ${
              messageType === 'success'
                ? 'bg-action-50 text-action-800 border border-action-200'
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

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                    placeholder="+251..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1">Subject *</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClass}
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1">Message *</label>
                <textarea
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={inputClass}
                  placeholder="Your message..."
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-navy-200 text-navy-700 rounded-lg hover:bg-navy-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-action-600 text-white rounded-lg hover:bg-action-500 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
