import React, { useState } from 'react';
import { Sparkles, Music, Flower2, HeartHandshake, Eye, Check } from 'lucide-react';
import ukStyleImage from '@/src/assets/images/theme_uk_contemporary_1792275784323.jpg';
import pakStyleImage from '@/src/assets/images/theme_pakistani_royal_1792275785052.jpg';

export const SignatureStyling: React.FC<{ onSelectStyle: (styleName: string) => void }> = ({
  onSelectStyle,
}) => {
  const [activeTab, setActiveTab] = useState<'uk' | 'pakistan' | 'fusion'>('uk');

  const themes = {
    uk: {
      id: 'uk',
      badge: 'Minimalist & Sophisticated',
      title: 'The British Contemporary Style (UK)',
      subtitle: 'Pastel-toned aesthetics, minimalist chic table structures, and sophisticated English garden elegance.',
      image: ukStyleImage,
      atmosphere: 'Understated, airy, and refined European luxury',
      musicStyle: 'Sophisticated acoustic ambient jazz, classical cello, and gentle indie pop playlists',
      colorPalette: ['#EAE5D9', '#B7C4B7', '#D4AF37', '#FAF7F2'],
      features: [
        'Pastel-toned sage, blush, and cream aesthetic palette',
        'Minimalist chic wooden or acrylic tablescapes with custom linen runners',
        'Sophisticated English afternoon tea party vibes with tiered porcelain displays',
        'Subtle organic asymmetrical florals & imported baby eucalyptus',
        'Sophisticated acoustic ambient soundscape with discreet Bose sound nodes',
        'Custom calligraphy place cards with embossed gold foil detailing'
      ],
      idealFor: '1st Birthdays, High-Tea Celebrations, Intimate Family Milestones, and European Diaspora Gatherings.'
    },
    pakistan: {
      id: 'pakistan',
      badge: 'Opulent & Celebratory',
      title: 'The Grand Royal Heritage Style (Pakistan)',
      subtitle: 'Vibrant multi-colored thematic backdrops, majestic traditional dhol arrivals, and extravagant customized grand stages.',
      image: pakStyleImage,
      atmosphere: 'High-energy, joyous, majestic cultural celebration',
      musicStyle: 'Live traditional dhol beats, Sufi instrumental fusion, and celebratory festive tracks',
      colorPalette: ['#800020', '#D4AF37', '#E5A93B', '#1B4D3E'],
      features: [
        'Vibrant multi-colored thematic backdrops with handcrafted embroidery motifs',
        'Majestic traditional dhol arrivals with royal flower petal shower protocol',
        'Extravagant customized grand stages framed by marigolds and fresh jasmine garlands',
        'Rich festive fairy-light canopies and brass antique Moroccan lanterns',
        'Full high-energy celebratory musical environment with professional live DJ setup',
        'Live jalebi, kulfi-falooda, and steaming chai stalls for authentic nostalgia'
      ],
      idealFor: 'Grand Milestone Birthdays (18th, 21st, 50th), Multi-Generational Family Reunions & Festive Galas.'
    },
    fusion: {
      id: 'fusion',
      badge: 'The Best of Both Worlds',
      title: 'The Royal Diaspora Fusion (UK-Pak Hybrid)',
      subtitle: 'Modern European pastel ceremony tables paired with a magnificent evening Punjabi dhol entrance & feast.',
      image: pakStyleImage, // uses Pakistani backdrop with hybrid notes
      atmosphere: 'Effortless harmony of Western chic and Pakistani warmth',
      musicStyle: 'Acoustic background during welcome tea transitioning into energetic celebration',
      colorPalette: ['#F3EFE0', '#D4AF37', '#6A1B29', '#2E4057'],
      features: [
        'Two-phase celebration: British contemporary afternoon reception into grand evening gala',
        'Pastel backdrop for cake-cutting & photos; dramatic illuminated stage for family speeches',
        'Hybrid gastronomy: Gourmet live carving stations alongside traditional handi dishes',
        'Bilingual event emcee ensuring all cousins from abroad and elders feel celebrated',
        'Custom fusion photo booth with both British tea props and traditional dupattas',
        'Live mocktail artisan bar serving virgin mojitos and Kashmiri rooh afza coolers'
      ],
      idealFor: 'Families with cousins and relatives visiting from abroad seeking traditional flavor without overwhelming chaos.'
    }
  };

  const current = themes[activeTab];

  return (
    <section id="styles" className="py-20 lg:py-28 bg-white border-y border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Signature Styling System
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight text-balance">
            UK Contemporary vs. Grand Royal Heritage
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Whether you desire the clean pastel aesthetics of London or the majestic festive grandeur of Lahore, our master designers execute both with uncompromising precision.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAFAFA] border border-[#D4AF37]/35 shadow-xs max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('uk')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === 'uk'
                  ? 'bg-[#1A1A1A] text-white shadow-sm border border-[#D4AF37]/50'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              The British Contemporary Style (UK)
            </button>
            <button
              onClick={() => setActiveTab('pakistan')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === 'pakistan'
                  ? 'bg-[#1A1A1A] text-white shadow-sm border border-[#D4AF37]/50'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              The Grand Royal Heritage Style (Pakistan)
            </button>
            <button
              onClick={() => setActiveTab('fusion')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === 'fusion'
                  ? 'bg-[#1A1A1A] text-white shadow-sm border border-[#D4AF37]/50'
                  : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              The Diaspora Fusion (Hybrid)
            </button>
          </div>
        </div>

        {/* Dynamic Theme Display Card */}
        <div className="rounded-3xl bg-[#FAFAFA] border border-[#D4AF37]/30 p-6 sm:p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-lg group">
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/9] sm:aspect-[4/3] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-neutral-900">{current.atmosphere}</span>
                    <span className="text-[#D4AF37] font-serif font-bold">Pk Ovsea Curated</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-neutral-100">
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      Color Palette:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {current.colorPalette.map((c, i) => (
                        <div
                          key={i}
                          className="w-4 h-4 rounded-full border border-neutral-300 shadow-2xs"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information & Specifications */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] mt-1">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {current.subtitle}
                </p>
              </div>

              {/* Sound & Atmosphere Pill-free block */}
              <div className="p-4 rounded-xl bg-white border border-neutral-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900">
                  <Music className="w-4 h-4 text-[#D4AF37]" />
                  <span>Acoustic &amp; Sonic Curation</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {current.musicStyle}
                </p>
              </div>

              {/* Key Design Elements */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-1.5">
                  <Flower2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Curated Thematic Elements</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#B8860B]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Suited For */}
              <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-200">
                <span className="font-semibold text-neutral-800">Perfect For:</span> {current.idealFor}
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectStyle(current.title)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#D4AF37]/50 rounded-xl transition-all shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Choose This Event Style</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
