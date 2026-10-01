import React from 'react';
import { Scissors, Instagram, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { BARBERSHOP_INFO } from '../data/barberData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#c5a059] to-[#8d6f31] flex items-center justify-center text-black">
                <Scissors className="w-4 h-4 -rotate-45" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider">
                KING'S BARBER
              </span>
            </div>

            <p className="font-display text-sm text-[#edd28b] italic">
              “Estilo, precisão e atitude.”
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Barbearia masculina de alto padrão. Cortes cirúrgicos, barboterapia tradicional com toalhas quentes e espaço lounge exclusivo.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da King's Barber"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#edd28b] hover:border-[#c5a059] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BARBERSHOP_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da King's Barber"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={BARBERSHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização no Google Maps"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-blue-400 hover:border-blue-500 transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase font-bold text-white tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#edd28b] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#edd28b] transition-colors">Sobre a Barbearia</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#edd28b] transition-colors">Cardápio de Serviços</a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-[#edd28b] transition-colors">Nossos Barbeiros</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#edd28b] transition-colors">Galeria de Cortes</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#edd28b] transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#edd28b] transition-colors">Onde Estamos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#edd28b] transition-colors">Fale Conosco</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase font-bold text-white tracking-wider">
              Serviços Populares
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex justify-between">
                <span>Corte Masculino</span>
                <span className="text-zinc-300 font-mono">R$ 55,00</span>
              </li>
              <li className="flex justify-between">
                <span>Corte + Barba</span>
                <span className="text-[#edd28b] font-mono">R$ 95,00</span>
              </li>
              <li className="flex justify-between">
                <span>Barba Terapia</span>
                <span className="text-zinc-300 font-mono">R$ 45,00</span>
              </li>
              <li className="flex justify-between">
                <span>Degradê (Fade)</span>
                <span className="text-zinc-300 font-mono">R$ 60,00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobrancelha Masculina</span>
                <span className="text-zinc-300 font-mono">R$ 25,00</span>
              </li>
              <li className="flex justify-between">
                <span>Acabamento (Pezinho)</span>
                <span className="text-zinc-300 font-mono">R$ 30,00</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Demonstration Disclaimer */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase font-bold text-white tracking-wider">
              Atendimento & Demonstração
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{BARBERSHOP_INFO.address}, {BARBERSHOP_INFO.city}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Seg a Sex: 09h às 20h<br />Sáb: 08h às 19h</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{BARBERSHOP_INFO.phone}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-400">
              * Demonstração comercial fictícia personalizada para a KING'S BARBER.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} KING'S BARBER. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Desenvolvido com excelência por <strong className="text-zinc-200">NexaWeb</strong></span>
            <button
              onClick={scrollToTop}
              className="min-h-[40px] px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer border border-zinc-800"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
