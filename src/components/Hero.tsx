import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_luxury_event_1792275784362.jpg';

interface HeroProps {
  onExploreStyles: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStyles, onOpenBooking }) => {
  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      "Hello Pk Ovsea Services! I am an overseas resident planning an upcoming luxury birthday/event in Pakistan. I would like to consult with an event specialist."
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle luxury ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Kicker */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/35 shadow-xs text-xs font-medium text-neutral-800">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Exclusively for Overseas Pakistanis · UK · USA · UAE · Canada · Europe</span>
          </div>
        </div>

        {/* Hero Typography */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] tracking-tight leading-[1.15] text-balance">
            Where Your Global Standards{' '}
            <span className="italic font-normal text-[#D4AF37]">Meet</span> Pakistani Traditions.
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Elite Birthday &amp; Event Management curated exclusively for Overseas Pakistanis. Lock your perfect celebration before you land with complete 5-star ground execution.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreStyles}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#D4AF37]/40 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:border-[#D4AF37] group"
            >
              <span>Explore Event Styles</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1A1A1A] bg-white hover:bg-neutral-50 border border-neutral-300 rounded-xl transition-all duration-200 shadow-xs hover:border-[#D4AF37]/70 group"
            >
              <MessageCircle className="w-4.5 h-4.5 text-[#25D366]" />
              <span>Book Via WhatsApp</span>
            </button>
          </div>
        </div>

        {/* 16:9 Showcase Banner Frame */}
        <div className="relative mt-8 max-w-6xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(26,26,26,0.08)] bg-neutral-900 group">
            <img
              src={heroImage}
              alt="Ultra-luxury banquet hall celebration setup by Pk Ovsea Services in Pakistan"
              referrerPolicy="no-referrer"
              className="w-full aspect-[16/9] object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Subtle overlay scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* In-Frame Context Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#D4AF37]/40 shadow-lg">
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1">
                Your Celebration. Perfected from Afar.
              </div>
              <p className="text-xs sm:text-sm text-neutral-800 font-medium">
                Live HD video milestone reporting directly to London, Birmingham, New York, Dallas &amp; Dubai. No last-minute surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Proof Strip */}
        <div className="mt-14 pt-10 border-t border-neutral-200/80 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center p-3">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37] mb-2" />
              <div className="text-lg sm:text-xl font-bold font-serif text-[#1A1A1A] tabular-nums">
                100% On-Ground
              </div>
              <p className="text-xs text-neutral-500 mt-1">Pre-arrival venue &amp; food audit</p>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <div className="text-lg sm:text-xl font-bold font-serif text-[#1A1A1A] tabular-nums">
                24/7 Timezone Care
              </div>
              <p className="text-xs text-neutral-500 mt-1">GMT, EST, GST synchronized</p>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <Award className="w-6 h-6 text-[#D4AF37] mb-2" />
              <div className="text-lg sm:text-xl font-bold font-serif text-[#1A1A1A] tabular-nums">
                450+ Celebrations
              </div>
              <p className="text-xs text-neutral-500 mt-1">Lahore, Islamabad &amp; Karachi</p>
            </div>

            <div className="flex flex-col items-center text-center p-3">
              <div className="w-6 h-6 rounded-full border border-[#D4AF37] flex items-center justify-center text-xs font-bold text-[#D4AF37] mb-2">
                0%
              </div>
              <div className="text-lg sm:text-xl font-bold font-serif text-[#1A1A1A] tabular-nums">
                Zero Native Markup
              </div>
              <p className="text-xs text-neutral-500 mt-1">Clean GBP / USD locked rates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
