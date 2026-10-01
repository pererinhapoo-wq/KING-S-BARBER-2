import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Calendar, Phone, Clock } from 'lucide-react';
import { BARBERSHOP_INFO } from '../data/barberData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d0f12]/95 backdrop-blur-md border-b border-[#222631]/80 shadow-xl shadow-black/40 py-3.5'
            : 'bg-gradient-to-b from-[#08090a]/90 via-[#08090a]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded bg-gradient-to-br from-[#c5a059] to-[#8d6f31] flex items-center justify-center text-black shadow-md shadow-[#c5a059]/20 group-hover:scale-105 transition-transform">
              <Scissors className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-white">
                KING'S BARBER
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#edd28b] transition-colors relative py-1 hover:underline underline-offset-8 decoration-[#c5a059] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action, Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] rounded hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c5a059]/20 whitespace-nowrap uppercase tracking-wider cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Horário</span>
            </button>

            {/* Mobile Hamburger Button with at least 44x44px hitbox */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-200 hover:text-white rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#edd28b]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#0f1117] border-l border-[#222631] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222631]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-[#c5a059] to-[#8d6f31] flex items-center justify-center text-black">
                    <Scissors className="w-4 h-4 -rotate-45" />
                  </div>
                  <span className="font-display font-bold text-white text-base tracking-wider">
                    KING'S BARBER
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-400 hover:text-white"
                  aria-label="Fechar menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center text-left py-3 px-3 text-base font-medium text-zinc-200 hover:text-[#edd28b] hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Mobile Drawer */}
            <div className="pt-6 border-t border-[#222631] space-y-3">
              {/* Theme Toggle row */}
              <div className="pb-1">
                <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-1.5 px-1">
                  Estilo Visual
                </span>
                <ThemeToggle showLabel className="w-full justify-between px-3.5 py-2.5" />
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-black bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] rounded-lg shadow-lg shadow-[#c5a059]/20 uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                Agendar Horário
              </button>

              <div className="pt-2 text-xs text-zinc-400 space-y-1.5 px-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Seg a Sex: 09h - 20h · Sáb: 08h - 19h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{BARBERSHOP_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
