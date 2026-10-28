import React from 'react';
import { Calendar, MessageSquare, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import lawnCelebrationImg from '@/src/assets/images/gallery_outdoor_lawn_1792875013842.jpg';

export const AboutUs: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Date & Budget',
      tagline: 'Step 1',
      desc: 'Tell us when you are visiting Pakistan, your estimated guest count, and your desired budget.',
      icon: Calendar,
      detail: 'Quick 2-minute form or WhatsApp message on your timezone.'
    },
    {
      num: '02',
      title: 'We Send Options on WhatsApp within 24 Hours',
      tagline: 'Step 2',
      desc: 'Receive handpicked venues, curated decor themes, and clear transparent packages directly on WhatsApp.',
      icon: MessageSquare,
      detail: 'Tailored options in Lahore, Islamabad, or Karachi with locked rates.'
    },
    {
      num: '03',
      title: 'Track Progress Remotely',
      tagline: 'Step 3',
      desc: 'Follow your event setup with live photos and HD video updates until celebration day. Just arrive and enjoy.',
      icon: Video,
      detail: 'On-site managers run everything so you are a relaxed guest of honor.'
    },
  ];

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spacious Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Simple 3-Step Process
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Planning a celebration back home shouldn&apos;t be stressful. Here is how we make it effortless before you land:
          </p>
        </div>

        {/* 3 Steps in Clean, Spacious Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FAFAFA] rounded-2xl p-7 sm:p-8 lg:p-9 border border-neutral-200/90 luxury-card-hover flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase bg-[#D4AF37]/10 px-2.5 py-1 rounded-md">
                      {step.tagline}
                    </span>
                    <div className="w-11 h-11 rounded-xl border border-[#D4AF37] bg-white flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Detail Note */}
                <div className="pt-4 border-t border-neutral-200/80 flex items-start gap-2 text-xs text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Visual Strip with Generous Breathing Room */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#FAFAFA] border border-[#D4AF37]/30 p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md">
              <img
                src={lawnCelebrationImg}
                alt="Celebration in Pakistan organized by Pk Ovsea Services"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-lg border border-neutral-200 text-xs">
                <span className="font-bold text-[#1A1A1A]">Arrive Like a Guest</span>
                <p className="text-neutral-500 text-[11px] mt-0.5">
                  No running around town or chasing vendors while jetlagged.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                Built Exclusively for Overseas Families
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1A1A1A] leading-snug">
                Stop Stressing Relatives. Let Professionals Handle It.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                When you live in the UK, USA, UAE, or Canada, coordinating a party in Pakistan usually means making endless phone calls or burdening busy family members back home. We eliminate that entirely with transparent quotes, trusted venues, and on-ground floor management.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#D4AF37]/50 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Share Your Date &amp; Budget</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
