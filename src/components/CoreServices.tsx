import React, { useState } from 'react';
import {
  Building2,
  UtensilsCrossed,
  Sparkles,
  Palette,
  Camera,
  CheckCircle2,
  ChevronRight,
  X,
  PhoneCall,
  Eye
} from 'lucide-react';

import lawnImg from '@/src/assets/images/gallery_outdoor_lawn_1792875013842.jpg';
import cateringImg from '@/src/assets/images/service_luxury_catering_1792875011908.jpg';
import kidsMagicImg from '@/src/assets/images/kids_entertainment_magic_1792275784994.jpg';
import decorImg from '@/src/assets/images/service_bespoke_decor_1792875012852.jpg';
import photoBoothImg from '@/src/assets/images/service_photo_booth_1792875013730.jpg';

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  image: string;
  icon: React.ElementType;
  quickTags: string[];
  simpleDetails: string[];
}

export const CoreServices: React.FC<{ onConsult: () => void }> = ({ onConsult }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'venues',
      title: 'Luxury Venues & Lawns',
      tagline: '5-star hotel banquets, boutique marquees, and private garden lawns with guaranteed backup generators.',
      image: lawnImg,
      icon: Building2,
      quickTags: ['Indoor & Outdoor', 'Power Backup', 'Valet & Security'],
      simpleDetails: [
        'Handpicked venues in top areas (DHA, Gulberg, Islamabad F-Sectors, Clifton)',
        'Full air conditioning with industrial backup generators so power never cuts',
        'Private changing and nursing suites for families with young children',
        'Clean, modern washroom facilities with full-time attendants'
      ]
    },
    {
      id: 'catering',
      title: 'Premium Catering & Cakes',
      tagline: 'Delicious live food stations, kid-friendly menus, and designer tiered birthday cakes.',
      image: cateringImg,
      icon: UtensilsCrossed,
      quickTags: ['Live BBQ & Pizza', 'Purified Water Ice', 'Designer Cakes'],
      simpleDetails: [
        '100% bottled mineral water used for all cooking, cleaning, and ice',
        'Live cooking: BBQ grills, artisan wood-fired pizzas, sliders & traditional favorites',
        'Custom tiered birthday cakes made to match your exact theme',
        'Allergy-conscious options (nut-free, gluten-free, halal-certified)'
      ]
    },
    {
      id: 'entertainment',
      title: 'Kids Shows & Fun',
      tagline: 'Bilingual magic shows, safe bouncy castles, cute mascots, and professional face painting.',
      image: kidsMagicImg,
      icon: Sparkles,
      quickTags: ['Comedy Magic', 'Bouncy Castles', 'Face Painting'],
      simpleDetails: [
        'Bilingual magicians (English & Urdu) who keep kids completely entertained',
        'Clean, high-quality cartoon mascots and trained party hosts',
        'UK & US safety-rated bouncy castles with padded flooring for toddlers',
        'Safe, skin-friendly face paints that wash off easily with water'
      ]
    },
    {
      id: 'decor',
      title: 'Bespoke Theme Decor',
      tagline: 'Custom balloon arches, personalized neon signs, photo backdrops, and fairy-light canopies.',
      image: decorImg,
      icon: Palette,
      quickTags: ['Custom Neon Signs', 'Balloon Arches', 'Mood Lighting'],
      simpleDetails: [
        'Picture-perfect backdrops made from your Pinterest or Instagram inspiration',
        'Organic matte balloon garlands with high-quality imported balloons',
        'Custom glowing neon name signs you get to keep and bring home',
        'Elegant table settings with custom linen, floral centerpieces & gold chairs'
      ]
    },
    {
      id: 'photography',
      title: '360 Booth & Photography',
      tagline: 'Cinematic 4K videos, fast highlight reels for social media, and a hit 360 rotating video booth.',
      image: photoBoothImg,
      icon: Camera,
      quickTags: ['4K Video', '360 Video Booth', 'Fast Delivery'],
      simpleDetails: [
        'Cinema-grade cameras capturing candid family moments and smiles',
        'Hit 360-degree rotating video booth with instant phone sharing for guests',
        'Short 48-hour video highlight reel to share with friends and family abroad',
        'Private Google Drive / Dropbox link with all full-resolution photos'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & clear section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1.5">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Everything You Need Under One Roof
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-neutral-600">
            From the venue to the cake and entertainment, our team takes care of every detail on the ground.
          </p>
        </div>

        {/* Visual-First Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 luxury-card-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Real Event Photo with smooth zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Quick Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-[#D4AF37]/40 flex items-center gap-1.5 shadow-2xs">
                      <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="text-[11px] font-bold text-[#1A1A1A]">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Concise Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Quick Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.quickTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-medium text-neutral-600 bg-neutral-100/80 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="px-5 pb-5 pt-1">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2 px-3 rounded-xl border border-neutral-200 hover:border-[#D4AF37] bg-[#FAFAFA] hover:bg-white text-xs font-semibold text-[#1A1A1A] flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>See What&apos;s Included</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#D4AF37]" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* 6th Card: All-In-One Package Callout */}
          <div className="bg-[#1A1A1A] text-white rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/50 luxury-card-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl border border-[#D4AF37] bg-white/5 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div className="text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase mb-1">
                Most Popular
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">
                All-In-One Birthday Package
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                Venue + Food + Decor + Magician + 4K Video in one fixed-price package. You get a dedicated manager on WhatsApp who runs everything.
              </p>

              <div className="space-y-2 mb-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Planned before you fly to Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Live video updates on celebration day</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Zero hidden vendor fees</span>
                </div>
              </div>
            </div>

            <button
              onClick={onConsult}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get an Instant Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Simple Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-[#D4AF37]/40 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-800 rounded-lg cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl border border-[#D4AF37] flex items-center justify-center bg-[#FAFAFA]">
                <selectedService.icon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                  {selectedService.title}
                </h3>
                <span className="text-xs text-[#D4AF37] font-medium">Standard Inclusions</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 mb-5">
              {selectedService.tagline}
            </p>

            <div className="space-y-2.5 mb-6">
              {selectedService.simpleDetails.map((detail, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-3 border-t border-neutral-100">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onConsult();
                }}
                className="flex-1 py-2.5 bg-[#1A1A1A] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors cursor-pointer"
              >
                Ask About This Service
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 border border-neutral-200 text-neutral-600 rounded-xl text-xs font-medium hover:bg-neutral-50 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
