import { MessageCircle, Send, Phone, PenTool, Facebook, Instagram } from 'lucide-react';

interface ContactProps {
  onOpenForm: () => void;
}

export function Contact({ onOpenForm }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-action-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4 font-display">
            Let&apos;s talk
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto">
            Have questions or want to partner? Reach out through any of these channels.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a
              href="https://wa.me/251907096745"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border border-navy-100 shadow-md hover:shadow-xl transition-all flex items-center space-x-4 group hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-action-600/10 rounded-2xl flex items-center justify-center group-hover:bg-action-600 transition-colors">
                <MessageCircle className="h-7 w-7 text-action-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">WhatsApp</h3>
                <p className="text-navy-500 text-sm">Chat with us instantly</p>
              </div>
            </a>

            <a
              href="https://t.me/biz_Plug_et"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border border-navy-100 shadow-md hover:shadow-xl transition-all flex items-center space-x-4 group hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-action-600/10 rounded-2xl flex items-center justify-center group-hover:bg-action-600 transition-colors">
                <Send className="h-7 w-7 text-action-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Telegram</h3>
                <p className="text-navy-500 text-sm">Join our channel</p>
              </div>
            </a>

            <a
              href="tel:+251907096745"
              className="bg-white p-6 rounded-2xl border border-navy-100 shadow-md hover:shadow-xl transition-all flex items-center space-x-4 group hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-action-600/10 rounded-2xl flex items-center justify-center group-hover:bg-action-600 transition-colors">
                <Phone className="h-7 w-7 text-action-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Phone</h3>
                <p className="text-navy-500 text-sm">+251 907 096 745 / +251 974 305 893</p>
              </div>
            </a>

            <button
              onClick={onOpenForm}
              className="bg-white p-6 rounded-2xl border border-navy-100 shadow-md hover:shadow-xl transition-all flex items-center space-x-4 group text-left hover:-translate-y-0.5"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-action-600/10 rounded-2xl flex items-center justify-center group-hover:bg-action-600 transition-colors">
                <PenTool className="h-7 w-7 text-action-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Send a Message</h3>
                <p className="text-navy-500 text-sm">Use our contact form</p>
              </div>
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-navy-100 shadow-md">
            <h3 className="text-xl font-bold text-navy-900 mb-6 text-center font-display">Follow us</h3>
            <div className="flex justify-center space-x-5">
              <a href="https://www.facebook.com/share/1Cr4vDPDZ7" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a href="https://www.instagram.com/biz_plug_1929?igsh=MXVjZmUzMG1sM243eA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a href="https://t.me/biz_Plug_et" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center hover:bg-action-600 transition-colors" aria-label="Telegram">
                <Send className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
