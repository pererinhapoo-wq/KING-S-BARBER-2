import React from 'react';
import { Star, Quote, CheckCircle, Scissors } from 'lucide-react';
import { TESTIMONIALS } from '../data/barberData';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#0d0f12] relative border-t border-[#1a1d24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Satisfação Comprovada</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A opinião de quem vive a experiência KING'S BARBER no dia a dia.
          </p>

          {/* Demonstration Notice Card / Badge (clearly stated as requested) */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181c25] border border-amber-500/30 text-xs text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-medium">Avaliações de demonstração para exibição do layout</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div
              key={t.id}
              className="bg-[#12141a] rounded-2xl p-6 sm:p-7 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-xl relative"
            >
              <Quote className="w-8 h-8 text-[#c5a059]/20 absolute top-6 right-6" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#edd28b] text-[#edd28b]" />
                  ))}
                  <span className="text-xs text-zinc-400 ml-2 font-mono tabular-nums">5.0 / 5.0</span>
                </div>

                {/* Comment */}
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    {t.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mt-0.5">
                    <span>{t.service}</span>
                    <span>·</span>
                    <span className="text-[#c5a059]">com {t.barber.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="text-[11px] text-zinc-400 font-mono">
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Trust Scorecard Summary */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141720]/60 border border-zinc-800 text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl font-bold text-[#edd28b]">4.9</span>
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#edd28b] text-[#edd28b]" />
                ))}
              </div>
              <span className="text-[11px] text-zinc-400 block">Classificação Geral</span>
            </div>
          </div>
          <div className="hidden sm:block w-[1px] h-8 bg-zinc-800" />
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Mais de 500 agendamentos confirmados por mês</span>
          </div>
        </div>

      </div>
    </section>
  );
};
