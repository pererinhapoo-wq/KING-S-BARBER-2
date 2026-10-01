import React from 'react';
import { MapPin, Clock, ExternalLink, Car, Wifi, Beer, Coffee, Sparkles } from 'lucide-react';
import { BARBERSHOP_INFO } from '../data/barberData';

export const LocationHours: React.FC = () => {
  const amenities = [
    { icon: Car, label: 'Estacionamento com manobrista gratuito' },
    { icon: Coffee, label: 'Café expresso gourmet & água' },
    { icon: Beer, label: 'Chopp artesanal cortesia' },
    { icon: Wifi, label: 'Wi-Fi 5G de alta velocidade' },
    { icon: Sparkles, label: 'Ambiente 100% climatizado e lounge de jogos' },
  ];

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-[#0b0c0e] relative border-t border-[#1a1d24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Onde Estamos & Horários</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Venha Nos Visitar
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Localização privilegiada com fácil acesso, estrutura aconchegante e comodidade completa para a sua visita.
          </p>
        </div>

        {/* 2-Column Grid: Left (Info & Hours) / Right (Stylized Map & Directions) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-stretch">
          
          {/* Left Column: Hours & Address */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#12141a] border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#edd28b] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider block">
                    Endereço de Demonstração
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                    {BARBERSHOP_INFO.address}
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1">
                    {BARBERSHOP_INFO.city} · CEP: {BARBERSHOP_INFO.postalCode}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2">
                    Próximo à estação de metrô Brigadeiro e com acesso facilitado para carros.
                  </p>

                  <a
                    href={BARBERSHOP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#edd28b] to-[#c5a059] rounded-lg hover:brightness-110 transition-all uppercase tracking-wider cursor-pointer"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#12141a] border border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#edd28b] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider block">
                    Horários de Atendimento
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1 mb-4">
                    Segunda a Sábado
                  </h3>

                  <div className="space-y-2.5 text-sm divide-y divide-zinc-800/80">
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-zinc-300">Segunda a Sexta</span>
                      <span className="font-semibold text-white font-mono">09:00 às 20:00</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-zinc-300">Sábado</span>
                      <span className="font-semibold text-[#edd28b] font-mono">08:00 às 19:00</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-zinc-400">Domingos e Feriados</span>
                      <span className="text-zinc-400 font-mono">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities Checklist */}
            <div className="p-6 rounded-2xl bg-[#12141a]/60 border border-zinc-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Comodidades do Espaço
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#c5a059] shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Preview */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-zinc-800 bg-[#12141a] flex flex-col min-h-[380px]">
            {/* Map Frame Header */}
            <div className="p-4 bg-[#141720] border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium">KING'S BARBER - Bela Vista, SP</span>
              </div>
              <span className="text-[11px] text-zinc-400">Demonstração Interativa</span>
            </div>

            {/* Stylized Dark Embedded Map */}
            <div className="relative flex-1 min-h-[320px] bg-zinc-900 overflow-hidden flex items-center justify-center">
              {/* Google Maps embed with dark filter */}
              <iframe
                title="Mapa de Localização King's Barber"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0983226922244!2d-46.65860262378877!3d-23.561346078799435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201842%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full border-0 filter invert contrast-125 hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Pin Overlay Card for quick navigation */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0d0f14]/95 backdrop-blur-md rounded-xl border border-zinc-700/80 shadow-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-white block">KING'S BARBER</span>
                  <span className="text-[11px] text-zinc-400">{BARBERSHOP_INFO.address}</span>
                </div>
                <a
                  href={BARBERSHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-black bg-[#edd28b] hover:bg-white rounded transition-colors whitespace-nowrap"
                >
                  Abrir Rota
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
