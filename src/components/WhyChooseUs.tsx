import React, { useState } from 'react';
import { DollarSign, ShieldCheck, Smartphone, Crown, Check, Calculator, ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC<{ onConsult: () => void }> = ({ onConsult }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<'GBP' | 'USD' | 'AED' | 'CAD' | 'EUR'>('GBP');
  const [guestCount, setGuestCount] = useState<number>(100);

  // Transparent illustrative pricing tiers with currency rates
  const currencyRates: Record<string, { symbol: string; rate: number; label: string }> = {
    GBP: { symbol: '£', rate: 1, label: 'British Pound (GBP)' },
    USD: { symbol: '$', rate: 1.28, label: 'US Dollar (USD)' },
    AED: { symbol: 'AED ', rate: 4.70, label: 'UAE Dirham (AED)' },
    CAD: { symbol: 'C$', rate: 1.74, label: 'Canadian Dollar (CAD)' },
    EUR: { symbol: '€', rate: 1.18, label: 'Euro (EUR)' },
  };

  const curr = currencyRates[selectedCurrency];

  // Base turnkey package calculation (illustrative per-guest estimate for full decor + 5-star venue + catering + live kids show + 4K videography)
  const baseGbpPerGuest = 18; // £18 per guest for complete turnkey luxury
  const fixedProductionGbp = 850; // stage, customized neon, lighting, magician, photobooth
  const totalEstimateGbp = fixedProductionGbp + guestCount * baseGbpPerGuest;
  const convertedTotal = Math.round(totalEstimateGbp * curr.rate);

  const pillars = [
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      subtitle: 'Zero Native Vendor Inflation',
      description:
        'When local vendors hear a British or American dial tone, quotes routinely skyrocket 300%. With Pk Ovsea Services, you receive pre-negotiated wholesale institutional rates with 100% itemized conversion transparency. What you sign in London or New York is what you pay.',
      points: [
        'Guaranteed locked conversion rate at contract signing',
        'Direct itemized vendor invoices available on request',
        'No hidden generator fuel, electrical surcharge, or overtime penalties',
        'Secure international wire / debit payment options'
      ]
    },
    {
      icon: ShieldCheck,
      title: 'International Standards',
      subtitle: 'Hygiene & Punctuality Guarantees',
      description:
        'We do not tolerate "Pakistani standard time" excuses for your once-in-a-lifetime milestones. Every stage is 100% finished 2 hours before guest arrivals. Our catering partners follow HACCP hygiene protocols with exclusively bottled purified water.',
      points: [
        'Strict 2-hour pre-event staging completion deadline',
        'Sealed bottled mineral water used exclusively for culinary prep & ice',
        'Vetted child entertainment performers with background checks',
        'Dedicated backup electricity generators tested 24 hours prior'
      ]
    },
    {
      icon: Smartphone,
      title: 'Remote Progress Tracking',
      subtitle: 'Live HD WhatsApp Milestone Streams',
      description:
        'Follow your event construction in real-time from your sofa in London, Toronto, or Dubai. Your designated concierge sends HD time-stamped video walk-throughs as each floral arch is erected and every chandelier is hung.',
      points: [
        'Dedicated WhatsApp VIP channel with executive directors',
        'Real-time photos as table setups, balloons, and stages are finalized',
        'Live taste-test video verification with senior kitchen staff',
        'Timezone aligned: we chat when you are awake'
      ]
    },
    {
      icon: Crown,
      title: 'Complete VIP Protocol',
      subtitle: 'On-Site Hospitality Management',
      description:
        'You are the honored hosts, not the event laborers. Our smartly dressed on-site hospitality coordinators greet your guests, manage seating hierarchies, coordinate cake-cutting cues, and ensure flawless white-glove service.',
      points: [
        'On-site floor managers in formal attire directing all staff',
        'Discrete guest assistance for elder relatives and children',
        'Seamless coordination of live cake cutting and dhol entrances',
        'Full post-event pack-down and gift custody management'
      ]
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white border-b border-neutral-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            The Overseas Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight text-balance">
            Why Discerning Families Choose Us
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Engineered from ground up to solve every remote event planning vulnerability with Swiss-like precision and royal Pakistani hospitality.
          </p>
        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200/90 luxury-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl border border-[#D4AF37] bg-white flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-500">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                    {pillar.subtitle}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-neutral-200/70">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Price Transparency Estimator Tool */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1A1A1A] via-[#222222] to-[#1A1A1A] text-white p-6 sm:p-8 lg:p-12 border border-[#D4AF37]/50 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
              <Calculator className="w-4 h-4" />
              <span>Transparent Currency Transparency Preview</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              No Guesswork. Transparent Locked Quotes.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
              Test our clear conversion framework. Every proposal includes venue coordination, bespoke decor, international-grade catering, illusionist entertainment, and 4K media with zero currency slippage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xs">
            {/* Currency Selector & Guest Slider */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Select Your Overseas Billing Currency:
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['GBP', 'USD', 'AED', 'CAD', 'EUR'] as const).map((code) => (
                    <button
                      key={code}
                      onClick={() => setSelectedCurrency(code)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                        selectedCurrency === code
                          ? 'bg-[#D4AF37] text-[#1A1A1A] shadow-xs'
                          : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Active base: {curr.label}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-neutral-300 mb-2">
                  <span>Estimated Guest Size:</span>
                  <span className="font-bold text-[#D4AF37] tabular-nums">{guestCount} Guests</span>
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
                  <span>Grand Family (200)</span>
                  <span>Royal Gala (400)</span>
                </div>
              </div>
            </div>

            {/* Price Output Display */}
            <div className="lg:col-span-5 bg-black/40 rounded-xl p-5 border border-[#D4AF37]/30 text-center flex flex-col justify-center items-center">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Estimated Turnkey Investment
              </span>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 tabular-nums">
                {curr.symbol}{convertedTotal.toLocaleString()}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Approx. {curr.symbol}{Math.round(convertedTotal / guestCount)} per guest (All-Inclusive)
              </p>

              <div className="w-full mt-4 pt-3 border-t border-white/10 text-[11px] text-neutral-300 space-y-1">
                <div>✓ 5-Star Venue Setup Included</div>
                <div>✓ 3-Course Gourmet Buffet Included</div>
                <div>✓ Live Illusionist &amp; 4K Media Included</div>
              </div>

              <button
                onClick={onConsult}
                className="w-full mt-5 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Exact Itemized Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
