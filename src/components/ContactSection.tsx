import React, { useState } from 'react';
import { Calendar, Globe2, MapPin, Mail, User, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

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
    'Europe / Other'
  ];

  const pakCities = [
    'Lahore (DHA, Gulberg, Cantt)',
    'Islamabad & Rawalpindi',
    'Karachi (Clifton, DHA)',
    'Faisalabad',
    'Multan',
    'Sialkot',
    'Mirpur (AJK)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !celebrationDate) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleLaunchWhatsAppWithDetails = () => {
    const message = `*New Event Planning Enquiry - Pk Ovsea Services*
*Name:* ${fullName || 'Guest'}
*Email:* ${email || 'Provided via form'}
*Living in:* ${country}
*Event Date:* ${celebrationDate}
*City in Pakistan:* ${cityInPakistan}
*Occasion:* ${eventType}
*Style Preference:* ${initialStyle || 'Custom'}
*Notes:* ${notes || 'None'}

Please share package availability and pricing.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Short & friendly header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-1.5">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Check Your Date &amp; Get a Free Quote
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            Tell us when and where you are planning to celebrate. We respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto items-start">
          {/* Quick contact channels */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-neutral-200 space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                Speak to a Specialist
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Prefer to chat directly? Our team is available on WhatsApp daily during UK, US, and UAE daytime hours.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/?text=Hello!%20I%20live%20abroad%20and%20am%20planning%20an%20event%20in%20Pakistan."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-200 hover:border-[#25D366] transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-semibold uppercase">WhatsApp Direct</div>
                    <div className="text-xs font-bold text-[#1A1A1A] group-hover:text-[#25D366]">
                      Chat with Event Specialist
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#B8860B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-semibold uppercase">Email Us</div>
                    <div className="text-xs font-bold text-[#1A1A1A]">
                      concierge@pkovseaservices.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-200">
                  <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-500 font-semibold uppercase">Offices</div>
                    <div className="text-xs font-bold text-[#1A1A1A]">
                      London &middot; Lahore DHA &middot; Islamabad
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clean intake form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/35 shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">
                    Thank You, {fullName}!
                  </h3>
                  <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                    We received your request for {celebrationDate} in {cityInPakistan}. A planner will message you shortly.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={handleLaunchWhatsAppWithDetails}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba59] transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Tariq Mehmood"
                          className="w-full pl-8 pr-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
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
                          className="w-full pl-8 pr-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Country You Live In *
                      </label>
                      <div className="relative">
                        <Globe2 className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
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
                          className="w-full pl-8 pr-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        City in Pakistan
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <select
                          value={cityInPakistan}
                          onChange={(e) => setCityInPakistan(e.target.value)}
                          className="w-full pl-8 pr-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                        >
                          {pakCities.map((city) => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Occasion
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Kids 1st Birthday">Kids 1st Birthday</option>
                        <option value="Kids Themed Birthday (Ages 2-12)">Kids Birthday (Ages 2-12)</option>
                        <option value="Sweet 16 / 18th Milestone">Sweet 16 / 18th Birthday</option>
                        <option value="Family Birthday Gala">Family Birthday Gala</option>
                        <option value="Family Reunion Celebration">Family Reunion</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Any Special Notes or Theme Ideas
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. We are visiting Lahore from Birmingham in December. Looking for a pastel garden setup with a magician..."
                      className="w-full px-3 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] border border-[#D4AF37]/50 shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{isSubmitting ? 'Checking Availability...' : 'Check Availability & Get Quote'}</span>
                  </button>

                  <div className="text-[11px] text-center text-neutral-400">
                    Your details are completely private. We never share your info with local vendors.
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
