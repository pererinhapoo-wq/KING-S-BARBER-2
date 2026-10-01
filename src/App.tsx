import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LocationHours } from './components/LocationHours';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedBarberId, setSelectedBarberId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedBarberId(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectBarberBooking = (barberId: string) => {
    setSelectedBarberId(barberId);
    setSelectedServiceId(undefined);
    setBookingModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-zinc-100 flex flex-col font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Fixed Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Sobre a Barbearia */}
        <About />

        {/* Serviços */}
        <Services onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Equipe */}
        <Team onSelectBarber={(barberId) => handleSelectBarberBooking(barberId)} />

        {/* Galeria */}
        <Gallery />

        {/* Depoimentos */}
        <Testimonials />

        {/* Localização e Horários */}
        <LocationHours />

        {/* Perguntas Frequentes (FAQ) */}
        <FAQ onOpenBooking={() => handleOpenBooking()} />

        {/* Contato & Agendamento Rápido */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />

      {/* Interactive Booking Modal Wizard */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        initialBarberId={selectedBarberId}
      />
    </div>
  );
}
