import React from 'react';
import { Star, Instagram, Calendar, Scissors } from 'lucide-react';
import { TEAM } from '../data/barberData';
import { Barber } from '../types';

interface TeamProps {
  onSelectBarber: (barberId: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onSelectBarber }) => {
  return (
    <section id="equipe" className="py-20 sm:py-28 bg-[#0d0f12] relative border-t border-[#1a1d24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Mestres da Navalha</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Conheça Nossa Equipe
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Profissionais apaixonados pela arte clássica e contemporânea, treinados continuamente nas mais apuradas técnicas de barbearia do mundo.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {TEAM.map((barber: Barber) => (
            <div
              key={barber.id}
              className="group bg-[#12141a] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-[#c5a059]/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Barber Portrait */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-zinc-900">
                  <img
                    src={barber.photo}
                    alt={`Foto de ${barber.name}, barbeiro da King's Barber`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/40 to-transparent" />
                  
                  {/* Rating / Experience text */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-black/75 backdrop-blur-md rounded-md text-xs font-semibold text-zinc-200 border border-zinc-700/60">
                    <Star className="w-3.5 h-3.5 fill-[#edd28b] text-[#edd28b]" />
                    <span className="tabular-nums">{barber.rating.toFixed(1)}</span>
                    <span className="text-zinc-500 font-normal">· {barber.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#c5a059] block">
                      {barber.specialty}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      {barber.name}
                    </h3>
                    {barber.nickname && (
                      <span className="text-xs text-zinc-400 italic font-mono block">
                        "{barber.nickname}"
                      </span>
                    )}
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {barber.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0 border-t border-zinc-800/60 mt-2 flex items-center justify-between gap-3">
                <span className="text-xs text-zinc-400 flex items-center gap-1.5 hover:text-white transition-colors">
                  <Instagram className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{barber.instagram}</span>
                </span>

                <button
                  onClick={() => onSelectBarber(barber.id)}
                  className="min-h-[44px] px-4 py-2 text-xs font-bold text-black bg-gradient-to-r from-[#edd28b] to-[#c5a059] hover:brightness-110 active:scale-95 rounded-lg transition-all flex items-center gap-1.5 uppercase tracking-wider cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar com {barber.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demonstration Note */}
        <div className="mt-10 text-center text-xs text-zinc-400">
          <p>
            * Perfis profissionais fictícios para demonstração do layout e funcionalidade da KING'S BARBER.
          </p>
        </div>

      </div>
    </section>
  );
};
