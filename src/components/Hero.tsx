import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_luxury_event_1792275784362.jpg';

interface HeroProps {
  onExploreStyles: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStyles, onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle luxury ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle luxury badge */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37]/35 shadow-xs text-xs font-medium text-neutral-800">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Event Planning for Overseas Pakistanis · UK, USA, UAE &amp; Canada</span>
          </div>
        </div>

        {/* Hero Headline & Short Sub-headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] tracking-tight leading-[1.15] text-balance">
            Luxury Celebrations in Pakistan.{' '}
            <span className="italic font-normal text-[#D4AF37]">Planned From Anywhere in the World.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Elite birthday and event management for Overseas Pakistanis. From prime venues to 5-star catering, we handle every detail on the ground so you arrive relaxed and ready to celebrate.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreStyles}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#D4AF37]/40 rounded-xl transition-all duration-200 shadow-xs hover:border-[#D4AF37] group cursor-pointer"
            >
              <span>Explore Event Styles</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/447514592130"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#1A1A1A] bg-white hover:bg-neutral-50 border border-neutral-300 rounded-xl transition-all duration-200 shadow-xs hover:border-[#D4AF37] group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Book via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main 16:9 Showcase Banner */}
        <div className="relative max-w-5xl mx-auto mt-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-neutral-900 group">
            <img
              src={heroImage}
              alt="Luxury banquet hall birthday celebration setup in Pakistan"
              referrerPolicy="no-referrer"
              className="w-full aspect-[16/9] object-cover object-center group-hover:scale-101 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* In-Frame Context Tag */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/40 shadow-md">
              <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold">
                Your Celebration. Perfected from Afar.
              </div>
              <p className="text-xs text-neutral-800 font-medium mt-1">
                Live WhatsApp updates before you fly. Zero surprises on arrival.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Trust Highlights - Generous Spacing */}
        <div className="mt-16 pt-12 border-t border-neutral-200/80 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-3">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-base sm:text-lg font-bold font-serif text-[#1A1A1A]">
                100% On-Ground
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">Inspected before you arrive</p>
            </div>

            <div className="p-3">
              <Clock className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-base sm:text-lg font-bold font-serif text-[#1A1A1A]">
                Your Timezone
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">UK, USA &amp; UAE friendly</p>
            </div>

            <div className="p-3">
              <Award className="w-5 h-5 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-base sm:text-lg font-bold font-serif text-[#1A1A1A]">
                450+ Events Done
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">Lahore, Islamabad &amp; Karachi</p>
            </div>

            <div className="p-3">
              <div className="w-5 h-5 rounded-full border border-[#D4AF37] flex items-center justify-center text-[10px] font-bold text-[#D4AF37] mx-auto mb-2">
                0%
              </div>
              <div className="text-base sm:text-lg font-bold font-serif text-[#1A1A1A]">
                Fair Pricing
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">Locked GBP, USD, or AED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
