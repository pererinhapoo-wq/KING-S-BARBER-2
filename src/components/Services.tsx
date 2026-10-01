import React, { useState } from 'react';
import { Calendar, Clock, Check, Scissors } from 'lucide-react';
import { SERVICES } from '../data/barberData';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'cabelo', label: 'Cortes & Fade' },
    { id: 'barba', label: 'Barba' },
    { id: 'combo', label: 'Combos' },
    { id: 'acabamento', label: 'Acabamentos' },
  ];

  const filteredServices = activeCategory === 'todos'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-[#0b0c0e] relative border-t border-[#1a1d24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Cardápio de Serviços</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Excelência e Cuidado em Cada Detalhe
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Selecione o serviço ideal para o seu estilo. Todos os procedimentos incluem consultoria de imagem e produtos de primeira linha.
          </p>

          {/* Interactive Category Filter Tabs (Single-line controls with clean state) */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#14171f] border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] text-black font-semibold shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service: Service) => {
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl bg-[#12141a] border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 ${
                  service.popular
                    ? 'border-[#c5a059]/60 shadow-lg shadow-[#c5a059]/5'
                    : 'border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Popular label as clean text, not heavy pill */}
                {service.popular && (
                  <div className="absolute top-4 right-5 text-[11px] font-bold uppercase tracking-wider text-[#edd28b]">
                    ★ Destaque
                  </div>
                )}

                <div>
                  {/* Service Header: Name & Duration */}
                  <div className="mb-4 pr-12">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#edd28b] transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>{service.duration} de atendimento</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6 border-t border-zinc-800/80 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer: Price & Direct CTA */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-zinc-400 block tracking-wider">
                      Valor
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                      {service.formattedPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="min-h-[44px] px-4 py-2 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#edd28b] to-[#c5a059] hover:brightness-110 active:scale-95 rounded-lg transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer uppercase tracking-wider"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Notice Disclaimer */}
        <div className="mt-12 text-center text-xs text-zinc-400">
          <p>
            * Preços ilustrativos de demonstração para a KING'S BARBER. Valores e durações sujeitos a personalização.
          </p>
        </div>

      </div>
    </section>
  );
};
