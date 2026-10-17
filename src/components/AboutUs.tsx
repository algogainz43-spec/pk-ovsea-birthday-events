import React from 'react';
import { Plane, ShieldAlert, Heart, Compass, CheckCircle2, Video, Sparkles, Building } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consult from Your Living Room',
      desc: 'Book a video discovery call aligned to London, New York, or Dubai timezones. We outline themes, budget transparency, and venue options.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'On-Ground Vetting & Selection',
      desc: 'Our senior directors inspect shortlisted lawns, audit commercial kitchens, test acoustic sound gear, and negotiate fixed corporate rates.',
      icon: Building,
    },
    {
      num: '03',
      title: 'Live WhatsApp Milestone Updates',
      desc: 'Receive HD video walk-throughs during stage fabrication, balloon garland styling, and cake delivery. Zero guesswork.',
      icon: Video,
    },
    {
      num: '04',
      title: 'Land in Pakistan as Honored Hosts',
      desc: 'Arrive without vendor panic or jetlag stress. Our on-site VIP hospitality directors run the entire floor while you cherish your family.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            The Overseas Bridge
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight text-balance">
            Bridging 5,000 Miles with Absolute Trust
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Planning a celebration back home shouldn’t mean risking your hard-earned funds, burdening tired relatives, or enduring sleepless nights across timezones.
          </p>
        </div>

        {/* Narrative Split: The Reality vs The Pk Ovsea Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl p-6 sm:p-8 bg-white border border-neutral-200 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200/60 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-2">
                The Typical Overseas Struggle
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-2">
                For years, Overseas Pakistanis planning birthdays from the UK, North America, or the Middle East have faced an uphill battle: local vendors inflating prices by 300% upon hearing foreign dial codes, vague verbal promises, food quality gambles, and relatives back home burdened with chasing chaotic decorators.
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-100 text-xs text-neutral-500 italic">
                &ldquo;You land exhausted 48 hours before the party, only to find the stage unpainted and the caterer unresponsive.&rdquo;
              </div>
            </div>

            <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#D4AF37]/40 shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#B8860B]" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-2">
                Our Corporate Fiduciary Promise
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <strong className="text-neutral-900">Pk Ovsea Services</strong> was founded by British-Pakistani event directors who experienced this frustration firsthand. We serve as your legitimate, accountable corporate partner on the ground in Pakistan. We uphold the stringent contractual, punctuality, and hygiene standards you expect abroad, while celebrating the deep cultural warmth of Pakistan.
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Legally registered entity with dual-currency binding agreements</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] tracking-wider uppercase mb-2">
                <Plane className="w-4 h-4" />
                <span>The Remote-to-Arrival Blueprint</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] mb-6">
                How We Engineer Your Event Before You Fly
              </h3>

              <div className="space-y-6">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.num} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-xl border border-[#D4AF37] bg-[#FAFAFA] flex items-center justify-center shrink-0 text-xs font-mono font-bold text-[#D4AF37] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                        {step.num}
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2">
                          <span>{step.title}</span>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
