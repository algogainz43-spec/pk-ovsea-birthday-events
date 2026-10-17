import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent(
      "Hello Pk Ovsea Services! I am reaching out from overseas regarding event & birthday planning in Pakistan."
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Mini interactive tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mb-2 px-3 py-1.5 rounded-xl bg-white border border-[#D4AF37]/50 shadow-lg animate-bounce text-xs font-medium text-neutral-800">
          <span>Overseas Event Concierge Online</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-neutral-700 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Massive Prominent Sticky Floating WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 px-5 py-3.5 sm:px-6 sm:py-4 rounded-full bg-[#1A1A1A] text-white border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.5)] hover:bg-[#252525] active:scale-98 transition-all duration-300 cursor-pointer"
        aria-label="Chat with an Event Specialist on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
        </span>
        <span className="text-base">💬</span>
        <span className="text-xs sm:text-sm font-semibold tracking-wide font-sans whitespace-nowrap">
          Chat with an Event Specialist
        </span>
      </button>
    </div>
  );
};
