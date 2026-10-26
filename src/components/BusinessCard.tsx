import { useState } from 'react';
import { ThumbsUp, CheckCircle2, MapPin, MessageCircle, Building2 } from 'lucide-react';
import type { BusinessListing } from '../lib/supabase';
import { INDUSTRIES, buildWhatsAppLink, getVouches, hasVouched, toggleVouch } from '../lib/bizdata';

interface BusinessCardProps {
  business: BusinessListing;
}

export function BusinessCard({ business }: BusinessCardProps) {
  const [vouches, setVouches] = useState(() => getVouches(business.id));
  const [vouched, setVouched] = useState(() => hasVouched(business.id));
  const industry = INDUSTRIES.find((i) => i.slug === business.category);

  const handleVouch = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const result = toggleVouch(business.id);
    setVouches(result.vouches);
    setVouched(result.vouched);
  };

  const handlePlug = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      buildWhatsAppLink(
        `Hello! I'd like to get plugged in with ${business.businessName} (${business.product}).`
      ),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      <div className="relative h-44 overflow-hidden bg-navy-100">
        <img
          src={business.image_url}
          alt={business.businessName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex items-center space-x-1.5 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full shadow-sm">
          {business.verified ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-action-600" />
              <span className="text-[11px] font-bold text-navy-800 uppercase tracking-wide">Verified</span>
            </>
          ) : (
            <>
              <Building2 className="h-3.5 w-3.5 text-navy-400" />
              <span className="text-[11px] font-bold text-navy-600 uppercase tracking-wide">Listed</span>
            </>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-navy-900/80 backdrop-blur text-white px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center">
          <MapPin className="h-3 w-3 mr-1 text-action-300" />
          {business.region}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-semibold text-action-600 uppercase tracking-wider mb-1">
          {industry?.name ?? business.category}
        </span>
        <h3 className="text-lg font-bold text-navy-900 leading-tight mb-1">{business.businessName}</h3>
        <p className="text-navy-700 text-sm font-medium mb-2">{business.product}</p>
        <p className="text-navy-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {business.description}
        </p>

        {/* Vouch bar */}
        <div className="flex items-center justify-between mb-4 py-3 px-4 rounded-xl bg-navy-50 border border-navy-100">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-action-400 to-action-600 border-2 border-white flex items-center justify-center"
                >
                  <ThumbsUp className="h-3 w-3 text-white" />
                </div>
              ))}
            </div>
            <span className="text-navy-600 text-xs font-medium">
              <span className="font-bold text-navy-900">{vouches}</span> vouches
            </span>
          </div>
          <button
            onClick={handleVouch}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              vouched
                ? 'bg-action-600 text-white shadow-sm'
                : 'bg-white text-action-700 border border-action-200 hover:bg-action-50'
            }`}
            aria-pressed={vouched}
          >
            <ThumbsUp className={`h-3.5 w-3.5 ${vouched ? 'fill-white' : ''}`} />
            <span>{vouched ? 'Vouched' : 'Vouch for this'}</span>
          </button>
        </div>

        {/* Get Plugged In */}
        <button
          onClick={handlePlug}
          className="w-full flex items-center justify-center space-x-2 bg-action-600 text-white py-3 rounded-xl font-semibold hover:bg-action-500 transition-colors shadow-md shadow-action-600/20"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Get Plugged In</span>
        </button>
      </div>
    </div>
  );
}
