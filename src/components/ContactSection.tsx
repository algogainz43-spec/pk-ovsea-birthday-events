import React, { useState } from 'react';
import { Calendar, Globe2, MapPin, Mail, User, Send, CheckCircle2, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialStyle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialStyle }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [celebrationDate, setCelebrationDate] = useState('');
  const [cityInPakistan, setCityInPakistan] = useState('Lahore');
  const [eventType, setEventType] = useState('Kids 1st Birthday');
  const [guestCount, setGuestCount] = useState('100');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    'United Kingdom (UK)',
    'United States (USA)',
    'United Arab Emirates (UAE)',
    'Canada',
    'Saudi Arabia',
    'Australia',
    'Germany',
    'Norway',
    'Qatar',
    'Kuwait',
    'Other Overseas Location'
  ];

  const pakCities = [
    'Lahore (DHA, Gulberg, Model Town, Cantt)',
    'Islamabad (F-Sector, E-Sector, Chak Shahzad)',
    'Karachi (Clifton, DHA, KDA)',
    'Rawalpindi (Bahria Town, Cantt)',
    'Faisalabad',
    'Peshawar',
    'Multan',
    'Sialkot',
    'Mirpur (AJK)',
    'Gujranwala'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !celebrationDate) {
      return;
    }
    setIsSubmitting(true);
    // Simulate luxury API booking dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleLaunchWhatsAppWithDetails = () => {
    const message = `*New Event Planning Consultation Request - Pk Ovsea Services*
*Name:* ${fullName || 'Guest'}
*Email:* ${email || 'Provided via form'}
*Overseas Residence:* ${country}
*Celebration Date:* ${celebrationDate}
*Target City in Pakistan:* ${cityInPakistan}
*Event Type:* ${eventType}
*Estimated Guests:* ${guestCount}
*Selected Style:* ${initialStyle || 'Custom / To be decided'}
*Notes:* ${notes || 'None provided'}

Please connect me with a senior event specialist.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Priority Overseas Intake
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight text-balance">
            Begin Your Seamless Event Planning
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Share your envisioned date and target city in Pakistan. Our international team will respond within 2 hours with an itemized proposal and date availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Concierge Touchpoints */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                  Private Desk
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                  Dedicated Event Specialists
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Available across London (GMT), Dubai (GST), and New York (EST) operating hours.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAFA] border border-neutral-100">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      WhatsApp Priority Line
                    </div>
                    <div className="text-xs font-bold text-[#1A1A1A]">
                      +44 7700 900077 / +92 300 8488899
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAFA] border border-neutral-100">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      Executive Proposals
                    </div>
                    <div className="text-xs font-bold text-[#1A1A1A]">
                      concierge@pkovseaservices.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAFA] border border-neutral-100">
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-neutral-700" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      Headquarters &amp; Field Offices
                    </div>
                    <div className="text-xs font-bold text-[#1A1A1A]">
                      London Mayfair · Lahore DHA Phase 5 · Islamabad F-7
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs text-neutral-800 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-[#1A1A1A]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Visiting Pakistan Soon?</span>
                </div>
                <p className="text-neutral-600">
                  We recommend locking prime banquet halls and designer cake slots at least 4 to 8 weeks ahead of peak holiday seasons (December &amp; Summer).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D4AF37]/30 shadow-md">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-full border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                    Enquiry Registered
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-neutral-900">{fullName}</strong>. Your event enquiry for <strong className="text-neutral-900">{celebrationDate}</strong> in <strong className="text-neutral-900">{cityInPakistan}</strong> has been assigned to a Senior Concierge.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleLaunchWhatsAppWithDetails}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba59] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Instant Fast-Track on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-3 border border-neutral-300 text-neutral-700 rounded-xl text-xs font-semibold hover:bg-neutral-50 transition-colors"
                    >
                      Submit Another Date
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Tariq Mehmood"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. tariq@domain.co.uk"
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Overseas Country */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Overseas Country of Residence <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <Globe2 className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        >
                          {countries.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Celebration Date */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Celebration Date <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          required
                          value={celebrationDate}
                          onChange={(e) => setCelebrationDate(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Target City in Pakistan */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Target City in Pakistan
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={cityInPakistan}
                          onChange={(e) => setCityInPakistan(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                        >
                          {pakCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Celebration Occasion
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      >
                        <option value="Kids 1st Birthday">Kids 1st Birthday (Pastel / Milestone)</option>
                        <option value="Kids Themed Birthday (Ages 2-12)">Kids Themed Birthday (Ages 2-12)</option>
                        <option value="Sweet 16 / 18th Milestone">Sweet 16 / 18th Milestone</option>
                        <option value="Grand Family Birthday Gala">Grand Family Birthday Gala (50th / 60th / 70th)</option>
                        <option value="Welcome Home / Family Reunion">Welcome Home / Family Reunion</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests / Notes */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Specific Requirements (Theme ideas, dietary concerns, magician preferences)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. We are visiting Lahore from Birmingham for 2 weeks in December. We want a British pastel floral setup for our daughter's 2nd birthday with an English-speaking illusionist..."
                      className="w-full px-3 py-2.5 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#D4AF37]/50 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                      <span>{isSubmitting ? 'Verifying Availability...' : 'Lock Initial Date & Request Quote'}</span>
                    </button>
                  </div>

                  <div className="text-[11px] text-center text-neutral-400">
                    GDPR Protected · No unsolicited calls · Exact proposal sent to your email &amp; WhatsApp.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
