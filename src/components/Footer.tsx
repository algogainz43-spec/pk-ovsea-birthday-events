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
    <footer className="bg-[#1A1A1A] text-neutral-300 pt-14 pb-20 border-t border-[#D4AF37]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-neutral-800">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                Pk Ovsea
              </span>
              <span className="text-[#D4AF37] font-sans font-light tracking-widest text-xs uppercase border-l border-[#D4AF37]/40 pl-2">
                Services
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Luxury birthday and event management for Overseas Pakistanis visiting Pakistan. 100% price transparency, on-ground supervision, and live WhatsApp updates.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Menu
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li><a href="#home" className="hover:text-[#D4AF37]">Home</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">Services</a></li>
              <li><a href="#styles" className="hover:text-[#D4AF37]">Event Themes</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37]">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-[#D4AF37]">Why Us</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37]">Contact</a></li>
            </ul>
          </div>

          {/* Service Cities */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Cities We Serve
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>Lahore (DHA, Gulberg, Cantt)</li>
              <li>Islamabad &amp; Rawalpindi</li>
              <li>Karachi (Clifton &amp; DHA)</li>
              <li>Faisalabad, Multan &amp; Mirpur (AJK)</li>
            </ul>
          </div>

          {/* Direct Liaison */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Concierge Desk
            </h4>
            <div className="text-xs text-neutral-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>UK: +44 7700 900077</span>
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

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-neutral-800 hover:bg-[#D4AF37] hover:text-[#1A1A1A] flex items-center justify-center transition-colors text-neutral-300"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Simple & clear Privacy Accordion */}
        <div className="my-6 rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="w-full py-3.5 px-5 flex items-center justify-between text-left hover:bg-neutral-850 transition-colors focus:outline-none cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold text-white">
                Privacy &amp; Overseas Client Protection Policy
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#D4AF37]">
              <span>{accordionOpen ? 'Hide' : 'Read'}</span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  accordionOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {accordionOpen && (
            <div className="px-5 pb-5 pt-1 text-xs text-neutral-400 space-y-3 border-t border-neutral-800 bg-neutral-950/40">
              <div className="flex items-center gap-2 text-white font-semibold pt-2">
                <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Your Privacy Is 100% Protected</span>
              </div>
              <p className="leading-relaxed">
                We strictly protect the privacy of overseas clients traveling to Pakistan:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-[#D4AF37] font-semibold mb-0.5">1. Confidentiality</div>
                  <p className="text-[11px] leading-relaxed">
                    We never disclose your overseas country, flight dates, or booking values to third-party workers.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-[#D4AF37] font-semibold mb-0.5">2. Safe Photos &amp; Video</div>
                  <p className="text-[11px] leading-relaxed">
                    Photos and videos of your children and family are sent directly to your private drive and never posted online without your consent.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-[#D4AF37] font-semibold mb-0.5">3. GDPR Compliant</div>
                  <p className="text-[11px] leading-relaxed">
                    Your contact and payment data are handled securely according to UK and EU GDPR standards.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Pk Ovsea Services. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
