import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Scissors, User, CheckCircle2, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { SERVICES, TEAM, BARBERSHOP_INFO } from '../data/barberData';
import { Service, Barber } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialBarberId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialBarberId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || SERVICES[0].id);
  const [selectedBarberId, setSelectedBarberId] = useState<string>(initialBarberId || 'qualquer');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');

  // Generate the next 6 available days (excluding Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const now = new Date();
    let count = 0;
    let daysAhead = 0;

    while (count < 6) {
      const d = new Date(now);
      d.setDate(now.getDate() + daysAhead);
      const dayOfWeek = d.getDay(); // 0 is Sunday
      if (dayOfWeek !== 0) {
        const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const formatted = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        dates.push({
          iso: d.toISOString().split('T')[0],
          dayName: daysAhead === 0 ? 'Hoje' : daysAhead === 1 ? 'Amanhã' : dayNames[dayOfWeek],
          dateStr: formatted,
        });
        count++;
      }
      daysAhead++;
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const timeSlots = [
    '09:00', '09:45', '10:30', '11:15', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  useEffect(() => {
    if (initialServiceId) setSelectedServiceId(initialServiceId);
    if (initialBarberId) setSelectedBarberId(initialBarberId);
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0].iso);
    }
    if (!selectedTime) {
      setSelectedTime(timeSlots[2]);
    }
  }, [initialServiceId, initialBarberId]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const currentBarber = selectedBarberId === 'qualquer'
    ? null
    : TEAM.find((b) => b.id === selectedBarberId);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) return;

    const randomId = 'KB-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmedBookingId(randomId);
    setStep(4); // Confirmation step
  };

  const resetAndClose = () => {
    setStep(1);
    setConfirmedBookingId('');
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Acabei de fazer um agendamento na KING'S BARBER (${confirmedBookingId}):\n\n` +
    `• Serviço: ${currentService.name} (${currentService.formattedPrice})\n` +
    `• Profissional: ${currentBarber ? currentBarber.name : 'Primeiro disponível'}\n` +
    `• Data: ${selectedDate}\n` +
    `• Horário: ${selectedTime}\n` +
    `• Cliente: ${clientName}\n\n` +
    `Por favor, confirmem o meu horário!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-xl bg-[#11131a] rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-4 sm:p-5 bg-[#141720] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#edd28b] to-[#c5a059] flex items-center justify-center text-black">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg">
                Agendamento de Horário
              </h3>
              <p className="text-[11px] text-zinc-400">
                KING'S BARBER · Unidade Bela Vista
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            aria-label="Fechar janela de agendamento"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (when not yet confirmed) */}
        {step < 4 && (
          <div className="px-5 py-3 bg-[#0d0f14] border-b border-zinc-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${step === 1 ? 'bg-[#c5a059] text-black' : 'bg-zinc-800 text-zinc-400'}`}>1</span>
              <span className={step === 1 ? 'text-white font-medium' : 'text-zinc-500'}>Serviço</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${step === 2 ? 'bg-[#c5a059] text-black' : 'bg-zinc-800 text-zinc-400'}`}>2</span>
              <span className={step === 2 ? 'text-white font-medium' : 'text-zinc-500'}>Data & Barbeiro</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${step === 3 ? 'bg-[#c5a059] text-black' : 'bg-zinc-800 text-zinc-400'}`}>3</span>
              <span className={step === 3 ? 'text-white font-medium' : 'text-zinc-500'}>Seus Dados</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-lg font-bold text-white">
                  Escolha o Serviço
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Selecione o procedimento que deseja realizar.
                </p>
              </div>

              <div className="space-y-2.5">
                {SERVICES.map((service: Service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#1a1c24] border-[#c5a059] shadow-md shadow-[#c5a059]/10'
                          : 'bg-[#14161f] border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#c5a059] bg-[#c5a059]' : 'border-zinc-600'}`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white text-sm">
                              {service.name}
                            </span>
                            {service.popular && (
                              <span className="text-[10px] text-[#edd28b] font-bold uppercase">
                                Popular
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-zinc-400 block mt-0.5">
                            {service.duration}
                          </span>
                        </div>
                      </div>

                      <span className="font-display font-bold text-white text-base tabular-nums">
                        {service.formattedPrice}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="min-h-[44px] px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#edd28b] to-[#c5a059] rounded-lg flex items-center gap-2 uppercase tracking-wider cursor-pointer hover:brightness-110"
                >
                  <span>Continuar</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Barber, Date and Time */}
          {step === 2 && (
            <div className="space-y-5">
              {/* Select Barber */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  1. Escolha o Profissional
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedBarberId('qualquer')}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedBarberId === 'qualquer'
                        ? 'bg-[#1a1c24] border-[#c5a059] text-white'
                        : 'bg-[#14161f] border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <User className="w-5 h-5 mx-auto mb-1 text-[#c5a059]" />
                    <span className="block text-xs font-semibold">Primeiro Livre</span>
                    <span className="text-[10px] text-zinc-400 block">Sem preferência</span>
                  </button>

                  {TEAM.map((barber: Barber) => (
                    <button
                      key={barber.id}
                      type="button"
                      onClick={() => setSelectedBarberId(barber.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedBarberId === barber.id
                          ? 'bg-[#1a1c24] border-[#c5a059] text-white shadow-sm'
                          : 'bg-[#14161f] border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <img
                        src={barber.photo}
                        alt={barber.name}
                        className="w-7 h-7 rounded-full object-cover mx-auto mb-1 border border-zinc-700"
                      />
                      <span className="block text-xs font-semibold truncate">{barber.name.split(' ')[0]}</span>
                      <span className="text-[10px] text-[#edd28b] block">{barber.rating}★</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  2. Escolha o Dia
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDates.map((item) => (
                    <button
                      key={item.iso}
                      type="button"
                      onClick={() => setSelectedDate(item.iso)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedDate === item.iso
                          ? 'bg-gradient-to-b from-[#c5a059] to-[#8d6f31] text-black border-[#edd28b] font-bold shadow-md'
                          : 'bg-[#14161f] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <span className="block text-[11px] uppercase tracking-wider opacity-85">
                        {item.dayName}
                      </span>
                      <span className="block text-sm font-bold mt-0.5 font-mono">
                        {item.dateStr}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  3. Escolha o Horário
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg border text-center text-xs font-mono transition-all cursor-pointer ${
                        selectedTime === time
                          ? 'bg-[#edd28b] text-black border-[#edd28b] font-bold'
                          : 'bg-[#14161f] border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="min-h-[44px] px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="min-h-[44px] px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#edd28b] to-[#c5a059] rounded-lg flex items-center gap-2 uppercase tracking-wider cursor-pointer hover:brightness-110"
                >
                  <span>Avançar</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Client Info & Submit */}
          {step === 3 && (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <h4 className="font-display text-lg font-bold text-white">
                  Seus Dados para Contato
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Informe onde deseja receber o comprovante e lembretes de horário.
                </p>
              </div>

              {/* Summary box */}
              <div className="p-3.5 rounded-xl bg-[#141620] border border-zinc-800 text-xs space-y-1 text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Serviço:</span>
                  <span className="font-semibold text-white">{currentService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Valor:</span>
                  <span className="font-semibold text-[#edd28b] font-mono">{currentService.formattedPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Barbeiro:</span>
                  <span className="font-semibold text-white">{currentBarber ? currentBarber.name : 'Primeiro disponível'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Data e Horário:</span>
                  <span className="font-semibold text-white font-mono">{selectedDate} às {selectedTime}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Gabriel Fontes"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0c0f] border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  WhatsApp / Celular *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 98765-4321"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0a0c0f] border border-zinc-700 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="min-h-[44px] px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </button>

                <button
                  type="submit"
                  className="min-h-[48px] px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] rounded-lg uppercase tracking-wider cursor-pointer hover:brightness-110 shadow-lg shadow-[#c5a059]/20"
                >
                  Finalizar Agendamento
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success / Confirmation Screen */}
          {step === 4 && (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-[#edd28b] tracking-widest block">
                  Agendamento Registrado
                </span>
                <h4 className="font-display text-2xl font-bold text-white mt-1">
                  Horário Reservado com Sucesso!
                </h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Código da Reserva: <strong className="text-white font-mono">{confirmedBookingId}</strong>
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="p-4 rounded-xl bg-[#141620] border border-zinc-800 text-left text-xs space-y-2 text-zinc-300 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Cliente:</span>
                  <span className="font-semibold text-white">{clientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Serviço:</span>
                  <span className="font-semibold text-white">{currentService.name} ({currentService.formattedPrice})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Barbeiro:</span>
                  <span className="font-semibold text-white">{currentBarber ? currentBarber.name : 'Primeiro disponível'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Quando:</span>
                  <span className="font-semibold text-[#edd28b] font-mono">{selectedDate} às {selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Local:</span>
                  <span className="font-semibold text-white">{BARBERSHOP_INFO.address}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-2.5 max-w-sm mx-auto">
                <a
                  href={`https://wa.me/${BARBERSHOP_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] px-5 py-3 text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar via WhatsApp</span>
                </a>

                <button
                  onClick={resetAndClose}
                  className="w-full min-h-[44px] px-4 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-zinc-700 transition-colors"
                >
                  Concluir e Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
