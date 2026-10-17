import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreServices } from './components/CoreServices';
import { SignatureStyling } from './components/SignatureStyling';
import { AboutUs } from './components/AboutUs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedStyleForInquiry, setSelectedStyleForInquiry] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStyles = () => {
    const stylesElem = document.getElementById('styles');
    if (stylesElem) {
      stylesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectStyle = (styleName: string) => {
    setSelectedStyleForInquiry(styleName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] flex flex-col selection:bg-[#D4AF37]/20 selection:text-[#1A1A1A]">
      {/* Floating Top Navigation */}
      <Navbar onOpenBooking={scrollToContact} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreStyles={scrollToStyles}
          onOpenBooking={scrollToContact}
        />

        {/* 2. Core Services Grid */}
        <CoreServices onConsult={scrollToContact} />

        {/* 3. Signature Styling System (UK vs Pakistani Style) */}
        <SignatureStyling onSelectStyle={handleSelectStyle} />

        {/* 4. About Us & The Overseas Bridge */}
        <AboutUs />

        {/* 5. Why Choose Us (4 Pillars & Currency Transparency) */}
        <WhyChooseUs onConsult={scrollToContact} />

        {/* 6. Contact Us & Overseas Intake */}
        <ContactSection initialStyle={selectedStyleForInquiry} />
      </main>

      {/* Footer & Privacy Policy Accordion */}
      <Footer />

      {/* Prominent Sticky Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
