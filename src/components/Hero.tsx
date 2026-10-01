import React from 'react';
import { Calendar, ChevronRight, Sparkles, ShieldCheck, Coffee } from 'lucide-react';
import { heroImage, BARBERSHOP_INFO } from '../data/barberData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Photography with Measured Scrim for WCAG AA Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior sofisticado da barbearia King's Barber com poltronas clássicas e iluminação refinada"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Measured multi-layer gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-[#0b0c0e]/85 to-[#0b0c0e]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e]/90 via-[#0b0c0e]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col justify-center">
        {/* Top editorial kicker without pill box */}
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-4">
          <span className="w-6 h-[2px] bg-[#c5a059] inline-block" />
          <span>Barbearia Executiva & Visagismo</span>
          <span className="w-6 h-[2px] bg-[#c5a059] inline-block sm:hidden" />
        </div>

        {/* Main Brand Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 text-balance">
          KING'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#dfba63]">BARBER</span>
        </h1>

        {/* Slogan */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-zinc-200 italic tracking-wide font-normal mb-6">
          “Estilo, precisão e atitude.”
        </p>

        {/* Short Narrative Brief */}
        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 text-balance">
          Elevamos o conceito de cuidado masculino. Unimos a nobre tradição das toalhas quentes e navalhas clássicas às técnicas mais avançadas de corte e visagismo moderno em um ambiente premium feito sob medida para você.
        </p>

        {/* Actions Button Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
          <button
            onClick={onOpenBooking}
            className="min-h-[48px] px-8 py-3.5 text-sm sm:text-base font-bold text-black bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] hover:from-[#f5e0a6] hover:to-[#b89128] rounded shadow-lg shadow-[#c5a059]/25 hover:shadow-[#c5a059]/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 uppercase tracking-wider cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-black" />
            <span>Agendar Horário</span>
          </button>

          <button
            onClick={onExploreServices}
            className="min-h-[48px] px-7 py-3.5 text-sm sm:text-base font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-zinc-700/80 hover:border-[#c5a059]/60 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Ver Nossos Serviços</span>
            <ChevronRight className="w-4 h-4 text-[#c5a059]" />
          </button>
        </div>

        {/* Social Proof & Value Markers (Zero-Pill Discipline with Clean Typographic Separators) */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Atendimento com hora marcada</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <Sparkles className="w-4 h-4 text-[#c5a059]" />
            <span>Produtos importados premium</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <Coffee className="w-4 h-4 text-[#c5a059]" />
            <span>Cerveja artesanal e café expresso cortesia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
