import React, { useState } from 'react';
import { DollarSign, ShieldCheck, Smartphone, Crown, Check, Calculator, ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC<{ onConsult: () => void }> = ({ onConsult }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<'GBP' | 'USD' | 'AED' | 'CAD' | 'EUR'>('GBP');
  const [guestCount, setGuestCount] = useState<number>(100);

  const currencyRates: Record<string, { symbol: string; rate: number; label: string }> = {
    GBP: { symbol: '£', rate: 1, label: 'British Pound (GBP)' },
    USD: { symbol: '$', rate: 1.28, label: 'US Dollar (USD)' },
    AED: { symbol: 'AED ', rate: 4.70, label: 'UAE Dirham (AED)' },
    CAD: { symbol: 'C$', rate: 1.74, label: 'Canadian Dollar (CAD)' },
    EUR: { symbol: '€', rate: 1.18, label: 'Euro (EUR)' },
  };

  const curr = currencyRates[selectedCurrency];

  const baseGbpPerGuest = 18;
  const fixedProductionGbp = 850;
  const totalEstimateGbp = fixedProductionGbp + guestCount * baseGbpPerGuest;
  const convertedTotal = Math.round(totalEstimateGbp * curr.rate);

  const pillars = [
    {
      icon: DollarSign,
      title: 'Fair, Transparent Pricing',
      subtitle: 'Zero Native Price Inflation',
      description:
        'Local vendor prices often jump when they hear an overseas phone number. We lock in fair wholesale rates with clear quotes in GBP, USD, or AED.',
      points: [
        'Locked currency exchange rates',
        'Itemized breakdowns with zero surprise fees',
        'Pay conveniently via UK/US bank transfer'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'High Standards & Hygiene',
      subtitle: 'Clean Food & Safe Fun',
      description:
        'We enforce strict European food hygiene and safety standards so you and your visiting family never have to worry about getting sick.',
      points: [
        'Pure bottled mineral water used for food & ice',
        'Stage and decor ready 2 hours before guests arrive',
        'Inspected backup power generators'
      ]
    },
    {
      icon: Smartphone,
      title: 'Live WhatsApp Updates',
      subtitle: 'Watch it Happen in Real-Time',
      description:
        'Follow your event setup from your sofa in London, Toronto, or Dubai. We send photo and video clips at every stage.',
      points: [
        'Private WhatsApp group with your lead planner',
        'Live video walk-throughs of the venue and decor',
        'Quick replies on your local timezone'
      ]
    },
    {
      icon: Crown,
      title: 'VIP On-Site Management',
      subtitle: 'Relax as a Honored Host',
      description:
        'Our smartly dressed event managers coordinate the guests, cue the magician and dhol drummers, and handle cake cutting smoothly.',
      points: [
        'Professional on-site floor team',
        'Hospitality care for grandparents and toddlers',
        'Complete cleanup and gift handling'
      ]
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Short & friendly header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1.5">
            The Overseas Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Why Families Book With Us
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Four promises that take the stress out of planning a party in Pakistan.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 luxury-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl border border-[#D4AF37] bg-[#FAFAFA] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">0{idx + 1}</span>
                  </div>

                  <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] mt-0.5 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-neutral-100">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple & Clear Price Estimator Tool */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#1A1A1A] text-white p-6 sm:p-8 lg:p-10 border border-[#D4AF37]/50 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>Transparent Price Calculator</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              See Your Estimated Budget in Your Currency
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              All-inclusive: 5-star venue setup, gourmet buffet, live magic show, decor &amp; 4K video.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white/5 p-5 rounded-2xl border border-white/10">
            {/* Currency & Guest Selector */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Choose Currency:
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['GBP', 'USD', 'AED', 'CAD', 'EUR'] as const).map((code) => (
                    <button
                      key={code}
                      onClick={() => setSelectedCurrency(code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                        selectedCurrency === code
                          ? 'bg-[#D4AF37] text-[#1A1A1A]'
                          : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-300 mb-1.5">
                  <span>Guest Count:</span>
                  <span className="font-bold text-[#D4AF37]">{guestCount} Guests</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="400"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer bg-white/20 h-2 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                  <span>Intimate (40)</span>
                  <span>Standard (100)</span>
                  <span>Grand Gala (400)</span>
                </div>
              </div>
            </div>

            {/* Estimated Total */}
            <div className="lg:col-span-5 bg-black/40 rounded-xl p-5 border border-[#D4AF37]/30 text-center">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                Estimated All-Inclusive Cost
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1.5">
                {curr.symbol}{convertedTotal.toLocaleString()}
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Around {curr.symbol}{Math.round(convertedTotal / guestCount)} per guest
              </p>

              <button
                onClick={onConsult}
                className="w-full mt-4 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Get Exact Itemized Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
