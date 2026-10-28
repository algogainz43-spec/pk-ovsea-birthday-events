import React, { useState } from 'react';
import { Sparkles, Music, Check, ArrowRight } from 'lucide-react';
import ukStyleImage from '@/src/assets/images/theme_uk_contemporary_1792275784323.jpg';
import pakStyleImage from '@/src/assets/images/theme_pakistani_royal_1792275785052.jpg';
import hybridImage from '@/src/assets/images/event_dhol_entrance_1792875014166.jpg';

export const SignatureStyling: React.FC<{ onSelectStyle: (styleName: string) => void }> = ({
  onSelectStyle,
}) => {
  const [activeTab, setActiveTab] = useState<'uk' | 'pakistan' | 'fusion'>('uk');

  const themes = {
    uk: {
      id: 'uk',
      title: 'The British Contemporary Style (UK)',
      tagline: 'Soft pastels, clean tablescapes, English high-tea vibes, and relaxed acoustic music.',
      image: ukStyleImage,
      music: 'Soft acoustic guitar & relaxed ambient jazz',
      palette: ['#EAE5D9', '#B7C4B7', '#D4AF37', '#FAF7F2'],
      highlights: [
        'Sage green, blush & ivory pastel palette',
        'Minimalist table setups with custom linen & fine china',
        'English afternoon tea treats & tiered cake display',
        'Delicate organic florals and eucalyptus',
        'Relaxed background acoustic music nodes'
      ],
      bestFor: '1st Birthdays, High-Tea Parties & Intimate Gatherings'
    },
    pakistan: {
      id: 'pakistan',
      title: 'The Grand Royal Heritage Style (Pakistan)',
      tagline: 'Vibrant marigold arches, grand dhol entrance, illuminated stage, and live celebration.',
      image: pakStyleImage,
      music: 'Live dhol drummers & festive celebratory music',
      palette: ['#800020', '#D4AF37', '#E5A93B', '#1B4D3E'],
      highlights: [
        'Vibrant marigold & fresh rose floral arches',
        'Grand royal dhol entry with flower petal shower',
        'Illuminated grand stage with custom royal backdrops',
        'Fairy-light canopies and brass lanterns',
        'Live jalebi, kulfi & fresh chai stalls'
      ],
      bestFor: 'Milestone Birthdays (18th, 21st, 50th) & Large Family Reunions'
    },
    fusion: {
      id: 'fusion',
      title: 'The Royal Diaspora Fusion (UK + Pak)',
      tagline: 'The best of both: modern pastel afternoon reception followed by a lively evening dhol arrival and feast.',
      image: hybridImage,
      music: 'Acoustic background during tea, transitioning into upbeat celebration',
      palette: ['#F3EFE0', '#D4AF37', '#6A1B29', '#2E4057'],
      highlights: [
        'Afternoon pastel photo setup for cake-cutting with kids',
        'Evening dhol entrance when elder family and cousins arrive',
        'Both gourmet carving stations and traditional handi favorites',
        'Bilingual host making family from abroad feel right at home',
        'Custom photo booth with fun modern & traditional props'
      ],
      bestFor: 'Overseas families who want modern style with traditional warmth'
    }
  };

  const current = themes[activeTab];

  return (
    <section id="styles" className="py-20 lg:py-32 bg-[#FAFAFA] border-y border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Clear Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Choose Your Theme
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            UK Contemporary vs. Grand Royal Pakistani
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Pick the vibe that matches your family best — or mix both for the ultimate diaspora celebration.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-xs max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('uk')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeTab === 'uk'
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              UK Contemporary Style
            </button>
            <button
              onClick={() => setActiveTab('pakistan')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeTab === 'pakistan'
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              Pakistani Royal Heritage
            </button>
            <button
              onClick={() => setActiveTab('fusion')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeTab === 'fusion'
                  ? 'bg-[#1A1A1A] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              UK-Pak Fusion
            </button>
          </div>
        </div>

        {/* Visual Showcase Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#D4AF37]/30 p-5 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image on left */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md group">
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-neutral-200/90 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-medium text-neutral-800">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Palette:</span>
                    <div className="flex items-center gap-1">
                      {current.palette.map((color, i) => (
                        <div
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-neutral-300 shadow-2xs"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#D4AF37]">Verified Setup</span>
                </div>
              </div>
            </div>

            {/* Concise Specs on right */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">
                  Curated Theme
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] mt-1">
                  {current.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {current.tagline}
                </p>
              </div>

              {/* Music Pill */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAFAFA] border border-neutral-200 text-xs text-neutral-700">
                <Music className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span><strong>Music Vibe:</strong> {current.music}</span>
              </div>

              {/* Short Highlights */}
              <div className="space-y-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                    <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#B8860B]" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                <span className="font-semibold text-neutral-800">Best For:</span> {current.bestFor}
              </div>

              <button
                onClick={() => onSelectStyle(current.title)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-xl transition-colors cursor-pointer"
              >
                <span>Select This Theme</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
