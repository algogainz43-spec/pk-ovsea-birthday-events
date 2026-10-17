import React, { useState } from 'react';
import {
  ShieldCheck,
  ChevronDown,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Lock,
  ArrowUp,
  Mail,
  Phone
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-neutral-300 pt-16 pb-24 border-t border-[#D4AF37]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Pk Ovsea
              </span>
              <span className="text-[#D4AF37] font-sans font-light tracking-widest text-xs uppercase border-l border-[#D4AF37]/40 pl-2">
                Services
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              The premier bespoke Birthday and Event Management house tailored exclusively for Overseas Pakistanis visiting Pakistan. 5-star ground production, 100% price transparency, and live WhatsApp progress auditing.
            </p>
            <div className="text-xs text-[#D4AF37] font-serif italic">
              &ldquo;Where Your Global Standards Meet Pakistani Traditions.&rdquo;
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Core Services</a>
              </li>
              <li>
                <a href="#styles" className="hover:text-[#D4AF37] transition-colors">Event Styles</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact Concierge</a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Primary Service Hubs
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Lahore (DHA, Gulberg, Cantt, Bahria)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Islamabad &amp; Rawalpindi (F/E Sectors, Bahria)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Karachi (Clifton, DHA Phase 1-8)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Faisalabad, Multan, Sialkot &amp; Mirpur (AJK)</span>
              </li>
            </ul>
          </div>

          {/* Global Desk & Socials */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              International Liaison
            </h4>
            <div className="text-xs text-neutral-400 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>London: +44 7700 900077</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Pakistan: +92 300 8488899</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>concierge@pkovseaservices.com</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Functional Privacy Policy & GDPR Compliance Accordion */}
        <div className="my-8 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full py-4 px-6 flex items-center justify-between text-left hover:bg-neutral-850 transition-colors focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-white tracking-wide">
                Privacy Policy &amp; GDPR Compliance Statement (Overseas Client Protection)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
              <span>{accordionOpen ? 'Collapse' : 'Read Policy'}</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {accordionOpen && (
            <div className="px-6 pb-6 pt-2 text-xs text-neutral-400 space-y-4 border-t border-neutral-800 bg-neutral-950/50 animate-fadeIn">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Absolute International Data Privacy &amp; Non-Disclosure Guarantee</span>
              </div>
              <p className="leading-relaxed">
                At <strong>Pk Ovsea Services</strong>, we recognize the sensitive nature of overseas travel, expatriate asset security, and private family celebrations. We adhere strictly to the European Union and UK General Data Protection Regulation (UK GDPR / EU GDPR 2016/679) and applicable international data governance laws.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-[#D4AF37] font-semibold mb-1">
                    1. Non-Disclosure of Overseas Wealth
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Under no circumstances are client transaction figures, foreign country residences, or flight schedules disclosed to third-party Pakistani vendors or non-essential field contractors.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-[#D4AF37] font-semibold mb-1">
                    2. Child Imagery &amp; Media Protection
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    All photography and video reels of minor children captured during birthday festivities are transmitted via 256-bit encrypted private vaults. Zero client media is published without explicit written consent.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-[#D4AF37] font-semibold mb-1">
                    3. Right to Erasure
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Following event conclusion and financial reconciliation, clients may request complete permanent purging of their overseas contact details and identity credentials from our operational servers.
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-900">
                Data Controller: Pk Ovsea Services Ltd. Registrations in England &amp; Wales &amp; SECP Pakistan. Inquiries: privacy@pkovseaservices.com.
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Pk Ovsea Services. All rights reserved. Registered Private Concierge.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#D4AF37] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
