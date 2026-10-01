import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Clock, Calendar, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { BARBERSHOP_INFO } from '../data/barberData';

interface FAQItem {
  id: string;
  question: string;
  category: 'agendamento' | 'duracao' | 'servicos' | 'politicas';
  answer: string | React.ReactNode;
}

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqList: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Como funciona o agendamento de horário na KING’S BARBER?',
      category: 'agendamento',
      answer: (
        <div className="space-y-2 text-zinc-300">
          <p>
            O agendamento pode ser feito de forma 100% online aqui pelo nosso site ou direto pelo WhatsApp. Você escolhe o serviço desejado, o barbeiro de sua preferência (ou o primeiro horário disponível), a data e o intervalo mais conveniente.
          </p>
          <p className="text-xs text-zinc-400">
            Recomendamos chegar com cerca de 10 minutos de antecedência para relaxar no nosso lounge e degustar um café especial ou chopp artesanal gelado antes do atendimento.
          </p>
        </div>
      ),
    },
    {
      id: 'faq-2',
      question: 'Qual é o tempo médio de duração dos serviços?',
      category: 'duracao',
      answer: (
        <div className="space-y-3 text-zinc-300">
          <p>
            Cada procedimento é executado com calma, precisão cirúrgica e atenção aos mínimos detalhes. As durações médias estimadas são:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 flex items-center justify-between">
              <span className="font-medium text-white">Corte Masculino</span>
              <span className="text-[#edd28b] font-mono">45 minutos</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 flex items-center justify-between">
              <span className="font-medium text-white">Degradê (Fade)</span>
              <span className="text-[#edd28b] font-mono">50 minutos</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 flex items-center justify-between">
              <span className="font-medium text-white">Barboterapia com Toalha</span>
              <span className="text-[#edd28b] font-mono">35 minutos</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 flex items-center justify-between">
              <span className="font-medium text-white">Combo Corte + Barba</span>
              <span className="text-[#edd28b] font-mono">1h 15 minutos</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 flex items-center justify-between">
              <span className="font-medium text-white">Acabamento (Pezinho)</span>
              <span className="text-[#edd28b] font-mono">20 minutos</span>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800 flex items-center justify-between">
              <span className="font-medium text-white">Design de Sobrancelha</span>
              <span className="text-[#edd28b] font-mono">15 minutos</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'faq-3',
      question: 'Qual a política de cancelamento ou reagendamento?',
      category: 'politicas',
      answer: (
        <p className="text-zinc-300 leading-relaxed">
          Entendemos que imprevistos acontecem. Você pode reagendar ou cancelar seu horário sem qualquer custo ou penalidade com até <strong className="text-white">2 horas de antecedência</strong>. Basta nos avisar pelo WhatsApp da barbearia ou pelo link de confirmação que você recebeu.
        </p>
      ),
    },
    {
      id: 'faq-4',
      question: 'Existe tolerância para atrasos no horário agendado?',
      category: 'politicas',
      answer: (
        <p className="text-zinc-300 leading-relaxed">
          Para honrar o compromisso de pontualidade com todos os clientes, trabalhamos com uma tolerância máxima de <strong className="text-white">10 minutos</strong>. Caso ocorra um atraso maior, faremos o possível para realizar o atendimento ou ajustar o serviço de modo a não atrasar o próximo cliente agendado.
        </p>
      ),
    },
    {
      id: 'faq-5',
      question: 'Posso comparecer sem horário marcado (ordem de chegada)?',
      category: 'agendamento',
      answer: (
        <p className="text-zinc-300 leading-relaxed">
          Sim, recebemos clientes sem agendamento prévio (walk-in). No entanto, a prioridade de atendimento é estritamente dos clientes com hora marcada. Recomendamos sempre verificar a disponibilidade pelo nosso sistema online ou nos dar um toque no WhatsApp antes de sair de casa para evitar filas.
        </p>
      ),
    },
    {
      id: 'faq-6',
      question: 'Quais cortesias estão inclusas na experiência KING’S BARBER?',
      category: 'servicos',
      answer: (
        <p className="text-zinc-300 leading-relaxed">
          Em qualquer serviço realizado, você tem direito a café expresso moído na hora, água mineral e chopp artesanal cortesia. Além disso, nosso espaço conta com ambiente 100% climatizado, mesa de sinuca livre no lounge, Wi-Fi 5G de alta velocidade e manobrista gratuito.
        </p>
      ),
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0b0c0e] relative border-t border-[#1a1d24]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Dúvidas Comuns
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Esclareça questões sobre nossas políticas de agendamento, durações dos procedimentos e comodidades do espaço.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141722] border-[#c5a059]/60 shadow-lg shadow-[#c5a059]/5'
                    : 'bg-[#12141a] border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left min-h-[56px] px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059]"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-zinc-100 pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#c5a059] text-black rotate-180'
                        : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-800/60 animate-fade-in text-sm leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-zinc-800/90 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Ficou alguma outra dúvida?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Fale diretamente com nossa recepção em tempo real pelo WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${BARBERSHOP_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20KING'S%20BARBER.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 rounded-lg border border-zinc-700 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chamar no WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] hover:brightness-110 active:scale-95 rounded-lg shadow-md uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Agora</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
