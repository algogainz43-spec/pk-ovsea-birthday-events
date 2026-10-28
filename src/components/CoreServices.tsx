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
      tagline: '5-star banquet halls, marquees, and manicured private lawns with guaranteed uninterrupted power.',
      image: lawnImg,
      icon: Building2,
      quickTags: ['Indoor & Outdoor', 'Power Backup', 'Valet & Security'],
      simpleDetails: [
        'Top locations in Lahore (DHA, Gulberg), Islamabad (F-Sectors), and Karachi (Clifton)',
        'Full industrial power generators so your party never loses AC or lighting',
        'Private VIP dressing and nursing suites for families with young children',
        'Clean, attended washrooms reserved exclusively for your guests'
      ]
    },
    {
      id: 'catering',
      title: 'Premium Catering & Cakes',
      tagline: 'Delicious live BBQ stations, customized birthday cakes, and pure mineral water prep.',
      image: cateringImg,
      icon: UtensilsCrossed,
      quickTags: ['Live BBQ Stations', 'Mineral Water Ice', 'Designer Cakes'],
      simpleDetails: [
        '100% bottled mineral water used for all culinary preparation and ice',
        'Live interactive stations: Charcoal BBQ, wood-fired pizzas, sliders, and traditional handi',
        'Custom multi-tiered fondant and cream cakes crafted to match your theme',
        'Clear allergen labeling and dedicated kid-friendly menus'
      ]
    },
    {
      id: 'entertainment',
      title: 'Kids Shows & Fun',
      tagline: 'English & Urdu magic shows, clean cartoon mascots, safe bouncy castles, and face painting.',
      image: kidsMagicImg,
      icon: Sparkles,
      quickTags: ['Comedy Magic', 'Bouncy Castles', 'Face Painting'],
      simpleDetails: [
        'Engaging bilingual magicians who keep diaspora kids and cousins captivated',
        'Clean, sanitized character mascots with polite, trained performers',
        'Commercial safety-rated bouncy castles with soft padded play zones for toddlers',
        'FDA-approved hypoallergenic face paints that wash off easily'
      ]
    },
    {
      id: 'decor',
      title: 'Bespoke Theme Decor',
      tagline: 'Custom backdrops, organic balloon arches, personalized neon signs, and fairy-light canopies.',
      image: decorImg,
      icon: Palette,
      quickTags: ['Custom Neon Signs', 'Balloon Arches', 'Fairy Lighting'],
      simpleDetails: [
        'Pinterest-accurate backdrops custom-built for your birthday theme',
        'Double-stuffed matte balloon garlands with imported biodegradable balloons',
        'Custom glowing neon name signs you get to keep after the celebration',
        'Coordinated tablescapes, gold Chiavari chairs, and floral centerpieces'
      ]
    },
    {
      id: 'photography',
      title: '360 Booth & Photography',
      tagline: 'Cinematic 4K videos, fast 48-hour social reels, and high-energy 360 rotating video booths.',
      image: photoBoothImg,
      icon: Camera,
      quickTags: ['4K Cinema Video', '360 Video Booth', '48h Highlights'],
      simpleDetails: [
        'Cinema-grade 4K camera operators capturing genuine candid family smiles',
        'Interactive 360 video booth with instant AirDrop/QR code sharing for guests',
        'Express 48-hour video highlight reel to share with friends and family abroad',
        'High-resolution cloud photo gallery delivered to your international address'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Generous Spacing */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Everything You Need Under One Roof
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            From prime venues to gourmet catering and vetted entertainers, our team handles every detail on the ground.
          </p>
        </div>

        {/* Visual-First Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 luxury-card-hover flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with smooth zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Quick Number Tag */}
                    <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-[#D4AF37]/40 flex items-center gap-1.5 shadow-2xs">
                      <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span className="text-[11px] font-bold text-[#1A1A1A]">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Concise Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors">
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
                          className="text-[11px] font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="px-6 pb-6 pt-1">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full py-2.5 px-3 rounded-xl border border-neutral-200 hover:border-[#D4AF37] bg-[#FAFAFA] hover:bg-white text-xs font-semibold text-[#1A1A1A] flex items-center justify-between transition-colors cursor-pointer"
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
          <div className="bg-[#1A1A1A] text-white rounded-2xl p-7 sm:p-8 border border-[#D4AF37]/50 luxury-card-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl border border-[#D4AF37] bg-white/5 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>

              <div className="text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase mb-1">
                Turnkey Concierge
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
                All-In-One Celebration Package
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Venue + Catering + Theme Decor + Magic Show + 4K Media. One fixed invoice and a dedicated floor manager on-site.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Planned before you fly to Pakistan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Real-time photo and video staging updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Zero hidden vendor fees or generator surcharges</span>
                </div>
              </div>
            </div>

            <button
              onClick={onConsult}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get an Instant Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Simple Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 border border-[#D4AF37]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
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
                <span className="text-xs text-[#D4AF37] font-medium">Included Standards</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed">
              {selectedService.tagline}
            </p>

            <div className="space-y-2.5 mb-6">
              {selectedService.simpleDetails.map((detail, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-700 leading-relaxed">
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
