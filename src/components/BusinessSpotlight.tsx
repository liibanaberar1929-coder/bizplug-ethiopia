import { Sparkles, MapPin, Calendar, Briefcase, ThumbsUp, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SPOTLIGHT_BUSINESS, buildWhatsAppLink } from '../lib/bizdata';

export function BusinessSpotlight() {
  const b = SPOTLIGHT_BUSINESS;

  return (
    <section id="spotlight" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-action-600/10 text-action-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold tracking-wide">Business of the Week</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 font-display">
            This week&apos;s standout partner
          </h2>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10 border border-navy-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-72 lg:h-auto min-h-[420px] overflow-hidden">
              <img
                src={b.image_url}
                alt={b.businessName}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
              <div className="absolute top-5 left-5 flex items-center space-x-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-md">
                <CheckCircle2 className="h-4 w-4 text-action-600" />
                <span className="text-xs font-bold text-navy-800 uppercase tracking-wide">Verified</span>
              </div>
              <div className="absolute bottom-5 left-5 flex items-center space-x-2 text-white">
                <ThumbsUp className="h-4 w-4 text-action-300" />
                <span className="text-sm font-semibold">{b.vouches} community vouches</span>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block w-fit text-action-600 font-semibold text-xs uppercase tracking-wider mb-3">
                {b.industry} &middot; {b.region}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-navy-900 font-display mb-3">
                {b.businessName}
              </h3>
              <p className="text-navy-700 font-medium mb-4 italic">&ldquo;{b.tagline}&rdquo;</p>
              <p className="text-navy-600 leading-relaxed mb-6">{b.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-7">
                <div className="bg-navy-50 rounded-xl p-3 text-center">
                  <Calendar className="h-5 w-5 text-action-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-navy-900">{b.founded}</div>
                  <div className="text-[11px] text-navy-500 uppercase tracking-wide">Founded</div>
                </div>
                <div className="bg-navy-50 rounded-xl p-3 text-center">
                  <Briefcase className="h-5 w-5 text-action-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-navy-900">{b.projects}+</div>
                  <div className="text-[11px] text-navy-500 uppercase tracking-wide">Projects</div>
                </div>
                <div className="bg-navy-50 rounded-xl p-3 text-center">
                  <ThumbsUp className="h-5 w-5 text-action-600 mx-auto mb-1" />
                  <div className="text-lg font-bold text-navy-900">{b.vouches}</div>
                  <div className="text-[11px] text-navy-500 uppercase tracking-wide">Vouches</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppLink(
                    `Hello! I'd like to get plugged in with ${b.businessName}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-action-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-action-500 transition-colors shadow-lg shadow-action-600/30"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Get Plugged In</span>
                </a>
                <a
                  href={`tel:${b.phone}`}
                  className="flex-1 flex items-center justify-center space-x-2 border-2 border-navy-200 text-navy-800 px-6 py-3.5 rounded-xl font-semibold hover:bg-navy-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>

              <p className="flex items-center text-navy-400 text-xs mt-4">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                Spotlighted based on vouches, activity &amp; verification status.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
