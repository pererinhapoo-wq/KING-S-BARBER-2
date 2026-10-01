import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { BARBERSHOP_INFO } from '../data/barberData';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Olá! Gostaria de tirar uma dúvida sobre os serviços da KING’S BARBER.');

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BARBERSHOP_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end">
      {/* Quick message popup card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#12141c] border border-zinc-700/80 rounded-2xl shadow-2xl p-4 text-zinc-100 animate-fade-in">
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">KING'S BARBER</span>
                <span className="text-[10px] text-emerald-400 block">Atendimento WhatsApp</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Fechar janela"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 mb-3">
            Olá! Como podemos ajudar você hoje? Envie uma mensagem direto para a nossa equipe.
          </p>

          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="w-full text-xs bg-[#0b0c0f] border border-zinc-700 rounded-lg py-2 pl-2.5 pr-8 text-white focus:outline-none focus:border-[#c5a059]"
            />
            <button
              onClick={handleSend}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 text-emerald-400 hover:text-emerald-300 p-1"
              aria-label="Enviar para o WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-2.5 text-center">
            <button
              onClick={handleSend}
              className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Conversar no WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir atendimento no WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl shadow-emerald-500/25 flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
      >
        {/* Pulsing subtle amber-emerald ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-60 pointer-events-none" />
        
        {isOpen ? (
          <X className="w-6 h-6 text-black transition-transform" />
        ) : (
          <MessageCircle className="w-7 h-7 text-black transition-transform group-hover:scale-110" />
        )}

        {/* Small notification indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#edd28b] rounded-full border-2 border-[#0b0c0e] flex items-center justify-center text-[9px] font-bold text-black">
            1
          </span>
        )}
      </button>
    </div>
  );
};
