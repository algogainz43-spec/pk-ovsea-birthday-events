import React from 'react';
import { Compass, Building, Video, Sparkles, CheckCircle2 } from 'lucide-react';
import lawnCelebrationImg from '@/src/assets/images/gallery_outdoor_lawn_1792875013842.jpg';

export const AboutUs: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Quick Video Call',
      desc: 'We chat on your timezone (London, Dubai, New York) to lock your date, guest list, and preferred theme.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'We Lock In Prime Vendors',
      desc: 'Our team visits the venue, tests the food hygiene, and locks fair, fixed prices with zero overseas markups.',
      icon: Building,
    },
    {
      num: '03',
      title: 'Live WhatsApp Video Updates',
      desc: 'Watch the balloon arches, stage lighting, and cake setup come together through real-time video clips.',
      icon: Video,
    },
    {
      num: '04',
      title: 'Land in Pakistan & Enjoy',
      desc: 'Walk into your party as a relaxed guest of honor. Our on-site managers run the entire show from start to finish.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Short & friendly header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1.5">
            About Pk Ovsea Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Your Trusted Team On the Ground
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            We bridge the gap between where you live and where your family celebrates.
          </p>
        </div>

        {/* Visual Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Photo & Simple Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md">
              <img
                src={lawnCelebrationImg}
                alt="Outdoor celebration in Pakistan organized by Pk Ovsea Services"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-neutral-200">
                <div className="text-xs font-bold text-[#1A1A1A]">No Family Stress</div>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Stop burdening busy relatives in Pakistan with vendor calls. We manage everything professionally.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200 text-xs text-neutral-700 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#1A1A1A]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>British-Pakistani Founded &amp; Managed</span>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                We understand international expectations for punctuality, cleanliness, and clear communication.
              </p>
            </div>
          </div>

          {/* 4 Simple Steps */}
          <div className="lg:col-span-7 bg-[#FAFAFA] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              How It Works
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] mt-1 mb-6">
              From Planning Abroad to Party Day in Pakistan
            </h3>

            <div className="space-y-5">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-xl border border-[#D4AF37] bg-white flex items-center justify-center shrink-0 text-xs font-bold text-[#D4AF37]">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{step.title}</span>
                      </h4>
                      <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
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
    </section>
  );
};
