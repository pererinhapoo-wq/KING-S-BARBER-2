import React, { useState } from 'react';
import { Phone, Instagram, MessageCircle, Calendar, Send, CheckCircle2, Clock } from 'lucide-react';
import { BARBERSHOP_INFO, SERVICES, TEAM } from '../data/barberData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: SERVICES[0].id,
    barbeiro: 'qualquer',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.telefone.trim()) {
      return;
    }
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      nome: '',
      telefone: '',
      servico: SERVICES[0].id,
      barbeiro: 'qualquer',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#0d0f12] relative border-t border-[#1a1d24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Fale Conosco</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Canais de Atendimento
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Tire dúvidas, confira disponibilidades ou agende seu horário diretamente com a equipe KING'S BARBER.
          </p>
        </div>

        {/* 2-Column: Left (Contact Cards) / Right (Quick Booking/Inquiry Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${BARBERSHOP_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20KING'S%20BARBER.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-[#12141a] border border-zinc-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-zinc-400 block tracking-wider">
                    WhatsApp (Demonstração)
                  </span>
                  <span className="font-display text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {BARBERSHOP_INFO.whatsappFormatted}
                  </span>
                  <span className="text-xs text-emerald-400 block mt-0.5">
                    Resposta rápida em horário comercial
                  </span>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#12141a] border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center text-[#edd28b]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-zinc-400 block tracking-wider">
                    Telefone Fixo / Recepção
                  </span>
                  <span className="font-display text-lg font-bold text-white">
                    {BARBERSHOP_INFO.phone}
                  </span>
                  <span className="text-xs text-zinc-400 block mt-0.5">
                    Atendimento de Segunda a Sábado
                  </span>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl bg-[#12141a] border border-zinc-800 hover:border-pink-500/50 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-zinc-400 block tracking-wider">
                    Instagram Oficial
                  </span>
                  <span className="font-display text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                    {BARBERSHOP_INFO.instagram}
                  </span>
                  <span className="text-xs text-zinc-400 block mt-0.5">
                    Acompanhe novidades, cortes e rotina
                  </span>
                </div>
              </div>
            </a>

            {/* Highlighted Booking Button Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1c1810] via-[#14171f] to-[#12141a] border border-[#c5a059]/40 text-center space-y-3">
              <span className="text-xs font-bold text-[#edd28b] uppercase tracking-wider block">
                Prefere escolher data e barbeiro agora?
              </span>
              <p className="text-xs text-zinc-300">
                Nosso sistema de agendamento online permite escolher o profissional, horário e serviço em menos de 1 minuto.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full min-h-[48px] px-6 py-3 text-sm font-bold text-black bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] hover:brightness-110 active:scale-95 rounded-lg shadow-lg shadow-[#c5a059]/20 transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário Online</span>
              </button>
            </div>

          </div>

          {/* Right Column: Direct Quick Contact / Pre-Booking Form */}
          <div className="lg:col-span-7 bg-[#12141a] border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong className="text-white">{formData.nome}</strong>! Recebemos sua mensagem de demonstração. Em instantes um barbeiro entrará em contato pelo telefone informado.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 rounded-lg border border-zinc-700 transition-colors"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Envie uma Mensagem Rápida
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                    Preencha os campos abaixo para solicitar um horário ou tirar dúvidas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0c0f] border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 90000-0000"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0c0f] border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Serviço Desejado
                    </label>
                    <select
                      value={formData.servico}
                      onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0c0f] border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.formattedPrice})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Profissional
                    </label>
                    <select
                      value={formData.barbeiro}
                      onChange={(e) => setFormData({ ...formData, barbeiro: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0a0c0f] border border-zinc-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors"
                    >
                      <option value="qualquer">Qualquer barbeiro disponível</option>
                      {TEAM.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.specialty.split('&')[0]})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferência de horário ou observação
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ex: Gostaria de ser atendido na sexta-feira por volta das 17h..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0a0c0f] border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full min-h-[48px] px-6 py-3 text-sm font-bold text-black bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] hover:brightness-110 active:scale-95 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-black" />
                    <span>Enviar Solicitação de Demonstração</span>
                  </button>
                  <p className="text-[11px] text-zinc-400 text-center mt-2.5">
                    * Seus dados são fictícios e usados exclusivamente para demonstração do sistema interativo.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
