import { MessageCircle, Send, Phone, Mail, PenTool } from 'lucide-react';

interface ContactProps {
  onOpenForm: () => void;
}

export function Contact({ onOpenForm }: ContactProps) {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help! Reach out through any of these channels
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://wa.me/251907096745"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center space-x-4 group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <MessageCircle className="h-7 w-7 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-gray-600 text-sm">Chat with us instantly</p>
              </div>
            </a>

            <a
              href="https://t.me/biz_Plug_et"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center space-x-4 group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Send className="h-7 w-7 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Telegram</h3>
                <p className="text-gray-600 text-sm">Join our channel</p>
              </div>
            </a>

            <a
              href="tel:+251907096745"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center space-x-4 group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Phone className="h-7 w-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">+251 907 096 745 / +251 974 305 893</p>
              </div>
            </a>

            <button
              onClick={onOpenForm}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex items-center space-x-4 group text-left"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <PenTool className="h-7 w-7 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Send Message</h3>
                <p className="text-gray-600 text-sm">Use our contact form</p>
              </div>
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Follow Us on Social Media
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/share/1Cr4vDPDZ7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/biz_plug_1929?igsh=MXVjZmUzMG1sM243eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-orange-600 transition-colors"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="https://t.me/biz_Plug_et"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Send className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
