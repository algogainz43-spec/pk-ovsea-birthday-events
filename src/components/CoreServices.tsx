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
  Clock,
  ShieldCheck,
  Award
} from 'lucide-react';
import kidsMagicImage from '@/src/assets/images/kids_entertainment_magic_1792275784994.jpg';

interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  highlights: string[];
  fullDetails: {
    overview: string;
    specs: string[];
    overseasStandard: string;
    citiesAvailable: string[];
  };
}

export const CoreServices: React.FC<{ onConsult: () => void }> = ({ onConsult }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'venues',
      title: 'Luxury Banquet Halls & Venues',
      shortDesc: 'Premium indoor banquet arrangements, custom thematic layout setups, and manicured open-air lawns across Pakistan’s top private estates and 5-star hotels.',
      icon: Building2,
      highlights: [
        'Curated 5-star hotels & private lawn reservations',
        'Seating arrangements from 50 to 500+ guests',
        'Independent backup power generation (100% uninterrupted AC)',
        'Full acoustic sound insulation & temperature control'
      ],
      fullDetails: {
        overview: 'We take the anxiety out of venue scouting by inspecting, vetting, and locking prime private lawns, boutique marquees, and 5-star hotel ballrooms across Lahore, Islamabad, and Karachi months before you fly.',
        specs: [
          'Pre-booked backup commercial generators to guarantee zero power drops',
          'Dedicated valet parking and secure armed security protocol',
          'Bridal / VIP dressing suites reserved on-site for changing & nursing',
          'Sanitized international-standard restroom facilities with attendant service'
        ],
        overseasStandard: 'Overseas Contract Assurance: All venue contracts include strict penalty clauses for scheduling overruns, guaranteeing you exclusive domain access with no overlap from other events.',
        citiesAvailable: ['Lahore (DHA, Gulberg, Cantt)', 'Islamabad (F-Sector, Chak Shahzad, E-11)', 'Karachi (Clifton, DHA)', 'Rawalpindi', 'Faisalabad']
      }
    },
    {
      id: 'catering',
      title: 'Premium Catering & Gastronomy',
      shortDesc: 'Tailored luxury buffets, premium live food stations, designer tiered birthday cakes, and stringent dietary hygiene catering.',
      icon: UtensilsCrossed,
      highlights: [
        'Live barbecue, artisan wood-fired pizza & gourmet sliders',
        'Imported ingredients & mineral water ice/prep protocol',
        'Designer multi-tiered birthday cakes with allergen tracking',
        'Dedicated international kids buffet with child-friendly cutlery'
      ],
      fullDetails: {
        overview: 'Culinary perfection executed to strict British & North American food safety standards. We eliminate typical hygiene concerns so you and your guests can indulge with absolute peace of mind.',
        specs: [
          '100% Nestlé / Aquafina purified water used for all cooking, rinsing, and ice',
          'Live interactive stations: Continental, Mughlai, Gourmet Italian & Charcoal Grill',
          'Gluten-free, nut-free, and halal certified ingredients with clear labeling',
          'Custom sugarcraft and fondant tiered birthday cakes designed from Pinterest moodboards'
        ],
        overseasStandard: 'Overseas Hygiene Guarantee: Temperature-controlled hot plates and cold chillers maintained with continuous food temperature logging throughout the banquet.',
        citiesAvailable: ['Lahore', 'Islamabad', 'Karachi', 'Rawalpindi', 'Multan', 'Sialkot']
      }
    },
    {
      id: 'entertainment',
      title: 'High-End Kids Shows & Entertainment',
      shortDesc: 'Grand illusions, interactive puppet theaters, vetted face painters, imported cartoon mascots, and certified safe bouncy castles.',
      icon: Sparkles,
      highlights: [
        'English & Urdu bilingual professional magicians',
        'Imported character mascots with clean, pristine costumes',
        'EU/US safety-rated commercial bouncy castles & soft play',
        'Professional face painting with hypoallergenic FDA cosmetic paints'
      ],
      fullDetails: {
        overview: 'Unmatched childhood wonder for your children and their cousins. Every performer is background-vetted, punctual, and trained to engage mixed crowds with polite, engaging charm.',
        specs: [
          '30-45 minute interactive comedy magic show featuring live doves and illusions',
          'Bilingual hosting making both diaspora kids and local family feel fully included',
          'Soft-play enclosures with cushioned flooring for toddlers (ages 0-3)',
          'Trained on-site supervisors monitoring bouncy play zones at all times'
        ],
        overseasStandard: 'Child Safety First: All bouncy castles and inflatable structures feature reinforced anchors and double-blower fail-safes meeting UK Health & Safety guidelines.',
        citiesAvailable: ['Lahore', 'Islamabad', 'Karachi', 'Rawalpindi']
      }
    },
    {
      id: 'decor',
      title: 'Bespoke Theme Decoration',
      shortDesc: 'Custom backdrops, organic luxury balloon garlands, grand entrance walkways, high-tech mood lighting, and custom acrylic neon signage.',
      icon: Palette,
      highlights: [
        'Pinterest-accurate dimensional 3D backdrop fabrication',
        'Double-stuffed matte organic balloon installations',
        'Programmable smart wireless LED architectural lighting',
        'Personalized laser-cut neon name signs you can take home'
      ],
      fullDetails: {
        overview: 'From modern London pastel aesthetics to grand Mughal fairytale themes, our in-house carpentry and floral artisans construct lavish, movie-set quality installations tailored to your vision.',
        specs: [
          'Custom CNC cutouts, 3D foam sculpting, and hand-painted scenic elements',
          'Imported Qualatex and Sempertex biodegradable balloons with zero chemical odor',
          'Custom velvet-draped dining tables, gold Chiavari chairs, and charger plates',
          'Monogrammed LED welcome pathways with dry-ice fog entrance options'
        ],
        overseasStandard: 'Digital Precision: Exact 3D renders provided for sign-off 3 weeks prior, followed by live WhatsApp photo staging during morning construction.',
        citiesAvailable: ['All Major Cities in Pakistan']
      }
    },
    {
      id: 'photography',
      title: 'Photography & Memories',
      shortDesc: 'Professional cinematic 4K videography, 360-degree rotating slow-mo photo booths, and candid magazine-grade event photography.',
      icon: Camera,
      highlights: [
        'Cinema-grade Sony FX3/FX6 4K camera gear & gimbal operators',
        'High-speed 360-degree video booth with instant AirDrop/QR sharing',
        'Express 48-hour highlight reel delivery for social sharing abroad',
        'Full cloud drive backup delivered to your international address'
      ],
      fullDetails: {
        overview: 'Your family reunion and milestone birthday deserves enduring cinematic memory. Our crew captures every tender, candid embrace between grandparents and grandchildren with editorial grace.',
        specs: [
          'Drone aerial cinematography (where permitted by venue and local authorities)',
          'Instant photo printing station with customized branded luxury photo frames',
          'Professional color grading matching luxury editorial wedding aesthetics',
          'Private secure password-protected online gallery for overseas family sharing'
        ],
        overseasStandard: 'Rapid Cloud Delivery: Uncompressed 4K master files and edited reel delivered to your Dropbox / Google Drive within 7 business days.',
        citiesAvailable: ['Lahore', 'Islamabad', 'Karachi', 'Rawalpindi', 'Peshawar', 'Mirpur']
      }
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            A-to-Z Execution In Pakistan
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight text-balance">
            Complete Birthday &amp; Event Infrastructure
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every element managed with single-point accountability. You land in Pakistan as an honored host, not a stressed vendor coordinator.
          </p>
        </div>

        {/* Visual Bento Showcase Banner with Kids Magic */}
        <div className="mb-14 rounded-2xl sm:rounded-3xl bg-white border border-[#D4AF37]/25 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                Family &amp; Kids Specialty
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A]">
                Uncompromising Joy for Little Royals
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We understand that children flying in from London, Manchester, Toronto, or New York expect engaging, high-energy entertainment. We provide vetted bilingual illusionists, sanitized soft play, and thematic theatrical sets that captivate both kids and grown-ups.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-700">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  UK/US Child Safety Standards
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Hypoallergenic Face Paints
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  Dedicated Youth Hosts
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md relative group">
                <img
                  src={kidsMagicImage}
                  alt="High-end luxury kids magic show and birthday event in Pakistan"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg border border-[#D4AF37]/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#1A1A1A]">Live Magician &amp; Balloon Artistry</div>
                    <div className="text-[11px] text-neutral-500">Curated for 1st to 16th birthday celebrations</div>
                  </div>
                  <button
                    onClick={() => setSelectedService(services[2])}
                    className="text-xs font-semibold text-[#D4AF37] hover:underline whitespace-nowrap pl-2"
                  >
                    View Specs &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 luxury-card-hover flex flex-col justify-between group ${
                  index === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Premium Gold Outline Icon Container */}
                  <div className="w-12 h-12 rounded-xl border border-[#D4AF37] bg-[#FAFAFA] flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] mb-2.5 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#1A1A1A] hover:text-[#D4AF37] inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Detailed Breakdown</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                  <span className="text-[11px] text-neutral-500 font-mono">0{index + 1}</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: All-Inclusive Concierge Package Callout */}
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2B2B2B] text-white rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/50 luxury-card-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl border border-[#D4AF37] bg-white/5 flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <div className="text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase mb-1">
                Single Point of Contact
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold mb-2.5">
                Turnkey Overseas Package
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                Combine Venue, Gastronomy, Bespoke Decor, Magician &amp; 4K Drone Photography in one seamless, fixed-price package. You get an assigned Senior Concierge in Pakistan.
              </p>

              <div className="space-y-2 mb-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>30-Day Pre-Arrival Planning Lock</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Money-Back Hygiene &amp; Vendor Guarantee</span>
                </div>
              </div>
            </div>

            <button
              onClick={onConsult}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] bg-[#D4AF37] hover:bg-[#c5a028] transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Get Custom Turnkey Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-[#D4AF37]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-800 rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg border border-[#D4AF37] flex items-center justify-center bg-[#FAFAFA]">
                <selectedService.icon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37]">
                  Specification Sheet
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed mb-6">
              {selectedService.fullDetails.overview}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                Execution Deliverables
              </h4>
              <ul className="space-y-2.5">
                {selectedService.fullDetails.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#D4AF37]/30 mb-6">
              <div className="text-xs font-bold text-[#1A1A1A] mb-1">
                Overseas Client Guarantee
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {selectedService.fullDetails.overseasStandard}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-100">
              <div className="text-xs text-neutral-500">
                Cities: <span className="font-medium text-neutral-800">{selectedService.fullDetails.citiesAvailable.join(', ')}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onConsult();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#1A1A1A] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2A2A] transition-colors"
              >
                Request Proposal for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
