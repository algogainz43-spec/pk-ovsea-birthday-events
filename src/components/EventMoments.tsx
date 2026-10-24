import React, { useState } from 'react';
import { Sparkles, Play, Eye, X, MapPin, Users, Heart } from 'lucide-react';

import dholImg from '@/src/assets/images/event_dhol_entrance_1792875014166.jpg';
import lawnImg from '@/src/assets/images/gallery_outdoor_lawn_1792875013842.jpg';
import magicImg from '@/src/assets/images/kids_entertainment_magic_1792275784994.jpg';
import boothImg from '@/src/assets/images/service_photo_booth_1792875013730.jpg';
import cateringImg from '@/src/assets/images/service_luxury_catering_1792875011908.jpg';
import decorImg from '@/src/assets/images/service_bespoke_decor_1792875012852.jpg';

interface Moment {
  id: string;
  title: string;
  tagline: string;
  image: string;
  city: string;
  guestCount: string;
  category: string;
}

export const EventMoments: React.FC = () => {
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);

  const moments: Moment[] = [
    {
      id: 'dhol',
      title: 'Grand Dhol Entrance & Flower Petal Shower',
      tagline: 'Joyful family welcome with live traditional dhol and rose petal showers.',
      image: dholImg,
      city: 'Lahore (Cantt Estate)',
      guestCount: '180 Guests',
      category: 'Celebration Entrance'
    },
    {
      id: 'lawn',
      title: 'Fairy-Lit Evening Lawn Celebration',
      tagline: 'Manicured private garden illuminated with warm golden canopy lights.',
      image: lawnImg,
      city: 'Islamabad (Chak Shahzad)',
      guestCount: '120 Guests',
      category: 'Outdoor Gala'
    },
    {
      id: 'magic',
      title: 'Interactive Kids Magic & Illusion Show',
      tagline: 'Live bilingual magic show keeping cousins and young guests entertained for hours.',
      image: magicImg,
      city: 'Lahore (DHA Phase 5)',
      guestCount: '60 Kids & Family',
      category: 'Kids Show'
    },
    {
      id: 'booth',
      title: '360° Rotating Video Booth with Gold Confetti',
      tagline: 'Instant video reels sent straight to guests’ phones via QR code.',
      image: boothImg,
      city: 'Karachi (Clifton)',
      guestCount: '200 Guests',
      category: 'Interactive Media'
    },
    {
      id: 'catering',
      title: 'Artisan Dessert Bar & Live Stations',
      tagline: 'Custom 3-tiered birthday cake surrounded by live gourmet stations.',
      image: cateringImg,
      city: 'Lahore (Gulberg)',
      guestCount: '150 Guests',
      category: 'Gourmet Gastronomy'
    },
    {
      id: 'decor',
      title: 'Custom Neon Backdrop & Organic Balloons',
      tagline: 'Customized neon sign with photo-ready floral arch that guests love.',
      image: decorImg,
      city: 'Rawalpindi (Bahria)',
      guestCount: '90 Guests',
      category: 'Bespoke Decor'
    }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-t border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visual-First Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1.5 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Moments in Pakistan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            See the Experience in Action
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Real celebrations planned for families visiting from the UK, US, UAE, and Canada.
          </p>
        </div>

        {/* Visual Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {moments.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMoment(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Top Tag */}
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20">
                  {item.category}
                </span>
              </div>

              {/* Hover View Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/90 text-[#1A1A1A] flex items-center justify-center shadow-md">
                  <Eye className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>

              {/* Bottom In-Frame Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm sm:text-base font-serif font-bold leading-snug drop-shadow-xs">
                  {item.title}
                </h3>
                <div className="mt-1.5 flex items-center justify-between text-[11px] text-neutral-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.city}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.guestCount}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {selectedMoment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-[#D4AF37]/40">
            <button
              onClick={() => setSelectedMoment(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/10] bg-neutral-900">
              <img
                src={selectedMoment.image}
                alt={selectedMoment.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6 bg-white">
              <div className="flex items-center justify-between text-xs text-[#D4AF37] font-semibold mb-1">
                <span>{selectedMoment.category}</span>
                <span className="text-neutral-500 font-normal">{selectedMoment.guestCount}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A]">
                {selectedMoment.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {selectedMoment.tagline}
              </p>
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{selectedMoment.city}</span>
                </span>
                <span className="text-[11px] text-[#D4AF37] font-semibold">
                  Organized by Pk Ovsea Services
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
