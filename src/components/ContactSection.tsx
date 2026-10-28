import React, { useState } from 'react';
import { Calendar, Globe2, MapPin, Mail, User, Send, CheckCircle2, MessageCircle, Sparkles, Tag } from 'lucide-react';

interface ContactSectionProps {
  initialStyle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialStyle }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United Kingdom (UK)');
  const [celebrationDate, setCelebrationDate] = useState('');
  const [cityInPakistan, setCityInPakistan] = useState('Lahore (DHA, Gulberg, Cantt)');
  const [eventType, setEventType] = useState('Kids 1st Birthday (Milestone)');
  const [customEvent, setCustomEvent] = useState('');
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
    'Europe / Other'
  ];

  const pakCities = [
    'Lahore (DHA, Gulberg, Cantt)',
    'Islamabad & Rawalpindi',
    'Karachi (Clifton, DHA)',
    'Faisalabad',
    'Multan',
    'Sialkot',
    'Peshawar',
    'Mirpur (AJK)',
    'Gujranwala'
  ];

  const eventOptions = [
    'Kids 1st Birthday (Milestone)',
    'Kids Themed Birthday (Ages 2–12)',
    'Sweet 16 / 18th Birthday',
    '21st Birthday Milestone',
    'Adult Milestone Birthday (30th, 40th, 50th, 60th+)',
    'Welcome Home / Homecoming Celebration',
    'Family Reunion Gala',
    'Baby Shower / Gender Reveal',
    'Engagement / Baat Pakki Celebration',
    'Anniversary Celebration',
    'Graduation Celebration',
    'Qawwali Night / Musical Evening',
    'Custom Event (Specify Below)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !celebrationDate) return;
    if (eventType === 'Custom Event (Specify Below)' && !customEvent.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getEffectiveOccasion = () => {
    if (eventType === 'Custom Event (Specify Below)' && customEvent.trim()) {
      return `Custom Event: ${customEvent.trim()}`;
    }
    return eventType;
  };

  const handleLaunchWhatsAppWithDetails = () => {
    const effectiveOccasion = getEffectiveOccasion();
    const message = `*New Event Planning Enquiry - Pk Ovsea Services*
*Name:* ${fullName || 'Guest'}
*Email:* ${email || 'Provided via form'}
*Living in:* ${country}
*Event Date:* ${celebrationDate}
*City in Pakistan:* ${cityInPakistan}
*Occasion:* ${effectiveOccasion}
*Style Preference:* ${initialStyle || 'Custom'}
*Notes:* ${notes || 'None'}

Please share package availability and options within 24 hours.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/447514592130?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Generous Spacing */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
            Priority Booking
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Check Your Date &amp; Get a Free Quote
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Tell us your celebration details below. We send tailored options and transparent pricing to your WhatsApp within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct WhatsApp & Email Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAFAFA] rounded-2xl p-7 border border-neutral-200/90 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Direct Line
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                  Speak Directly With a Planner
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Available daily across UK, US, and UAE daytime hours.
                </p>
              </div>

              {/* Prominent WhatsApp Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/447514592130"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer group"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book via WhatsApp (+44 7514 592130)</span>
                </a>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-neutral-200">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#B8860B] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-semibold uppercase">Email Us</div>
                    <div className="text-xs font-bold text-[#1A1A1A]">
                      concierge@pkovseaservices.com
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs text-neutral-800 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-[#1A1A1A]">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>24-Hour WhatsApp Response</span>
                  </div>
                  <p className="text-neutral-600 text-[11px] leading-relaxed">
                    Submit your form and we will WhatsApp you available venues, decor ideas, and locked currency estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Layout */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAFA] rounded-2xl sm:rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/35 shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                    Thank You, {fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                    We received your request for <strong className="text-neutral-900">{getEffectiveOccasion()}</strong> on <strong className="text-neutral-900">{celebrationDate}</strong> in <strong className="text-neutral-900">{cityInPakistan}</strong>. A specialist will message you shortly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleLaunchWhatsAppWithDetails}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba59] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setCustomEvent('');
                      }}
                      className="px-4 py-2.5 border border-neutral-300 text-neutral-700 rounded-xl text-xs font-medium hover:bg-white transition-colors cursor-pointer"
                    >
                      Check Another Date
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Tariq Mehmood"
                          className="w-full pl-8 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tariq@gmail.com"
                          className="w-full pl-8 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Country You Live In *
                      </label>
                      <div className="relative">
                        <Globe2 className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full pl-8 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        >
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Celebration Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          required
                          value={celebrationDate}
                          onChange={(e) => setCelebrationDate(e.target.value)}
                          className="w-full pl-8 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        City in Pakistan
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={cityInPakistan}
                          onChange={(e) => setCityInPakistan(e.target.value)}
                          className="w-full pl-8 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        >
                          {pakCities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Occasion with Comprehensive Event Options & Custom Event */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Occasion *
                      </label>
                      <div className="relative">
                        <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full pl-8 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        >
                          {eventOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Custom Event Input */}
                  {eventType === 'Custom Event (Specify Below)' && (
                    <div className="p-3.5 rounded-xl bg-white border border-[#D4AF37] animate-fadeIn">
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-1">
                        Please Specify Your Custom Event *
                      </label>
                      <input
                        type="text"
                        required
                        value={customEvent}
                        onChange={(e) => setCustomEvent(e.target.value)}
                        placeholder="e.g. Twins Roza Kushai, Private Lawn Qawwali Night, Milad Gathering..."
                        className="w-full px-3 py-2 bg-[#FAFAFA] border border-neutral-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Notes or Desired Budget (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Budget around £1,500 - £2,500. Interested in lawn setup with magician and live BBQ..."
                      className="w-full px-3 py-2.5 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#D4AF37]/50 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{isSubmitting ? 'Checking Availability...' : 'Check Availability & Get Quote'}</span>
                    </button>
                  </div>

                  <div className="text-[11px] text-center text-neutral-400">
                    Your details are completely private. We never share your number or event budget with local vendors.
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
