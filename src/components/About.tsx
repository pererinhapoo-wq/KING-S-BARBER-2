import React from 'react';
import { Scissors, Sparkles, Award, Clock, CheckCircle2 } from 'lucide-react';
import { loungeImage } from '../data/barberData';

export const About: React.FC = () => {
  const specialties = [
    {
      title: 'Cortes Masculinos',
      description: 'Do clássico executivo às tendências contemporâneas, desenhados para valorizar os traços de cada cliente.'
    },
    {
      title: 'Barboterapia & Navalha',
      description: 'O ritual completo com toalhas quentes aromáticas, navalhas esterilizadas e hidratação profunda para a pele.'
    },
    {
      title: 'Degradês de Precisão (Fade)',
      description: 'Gradiente limpo e sem marcas, executado com tesouras e shavers profissionais de ponta.'
    },
    {
      title: 'Acabamentos Milimétricos',
      description: 'Linhas perfeitamente alinhadas na lâmina para manter a nuca, costeletas e contornos sempre impecáveis.'
    },
    {
      title: 'Cuidados Pessoais Masculinos',
      description: 'Tratamentos capilares, alinhamento de sobrancelha e produtos selecionados para o homem moderno.'
    }
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#0d0f12] relative border-t border-[#1a1d24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Asset & Trust Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src={loungeImage}
                alt="Lounge exclusivo da King's Barber com poltronas confortáveis e ambiente acolhedor"
                className="w-full h-[360px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-transparent opacity-80" />

              {/* Floating Stat card inside image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 bg-[#0f1218]/90 backdrop-blur-md rounded-xl border border-zinc-700/60 shadow-xl">
                <div className="grid grid-cols-3 gap-2 text-center divide-x divide-zinc-800">
                  <div>
                    <span className="block font-display text-xl sm:text-2xl font-bold text-[#edd28b] tabular-nums">
                      10+
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">Anos no mercado</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl sm:text-2xl font-bold text-[#edd28b] tabular-nums">
                      +15k
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">Clientes atendidos</span>
                  </div>
                  <div>
                    <span className="block font-display text-xl sm:text-2xl font-bold text-[#edd28b] tabular-nums">
                      4.9★
                    </span>
                    <span className="text-[11px] sm:text-xs text-zinc-400 font-medium">Avaliação média</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Specialties */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] flex items-center gap-2">
                <Scissors className="w-3.5 h-3.5 text-[#c5a059]" />
                Tradição & Vanguarda
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Mais do que um corte, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edd28b] to-[#c5a059]">
                  uma assinatura de estilo.
                </span>
              </h2>
            </div>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Fundada com o propósito de resgatar o valor do ritual clássico de barbearia, a <strong className="text-white font-semibold">KING'S BARBER</strong> combina atendimento consultivo personalizado, pontualidade britânica e técnicas refinadas para garantir que cada visita seja uma experiência revigorante.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Aqui você encontra mais que uma cadeira: encontra profissionais que entendem de visagismo facial, produtos de alto desempenho e um ambiente exclusivo para relaxar com uma bebida gelada enquanto cuidamos da sua imagem.
            </p>

            {/* Specialties List */}
            <div className="pt-4 border-t border-zinc-800/80 space-y-3.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Especialidades da Barbearia
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialties.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-100">{item.title}</h4>
                      <p className="text-xs text-zinc-400 mt-0.5 leading-snug">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
