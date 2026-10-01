import React, { useState } from 'react';
import { Scissors, Maximize2, X, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/barberData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'barbas', label: 'Barbas' },
    { id: 'degrades', label: 'Degradês' },
    { id: 'ambiente', label: 'Ambiente' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#0b0c0e] relative border-t border-[#1a1d24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#edd28b] mb-3">
            <Scissors className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Nossos Trabalhos & Espaço</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Galeria KING'S BARBER
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Veja de perto a precisão dos nossos cortes, a riqueza dos detalhes na navalha e a atmosfera acolhedora da nossa barbearia.
          </p>

          {/* Interactive Categories Bar */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[40px] px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#edd28b] via-[#c5a059] to-[#a7823b] text-black font-semibold shadow-md'
                    : 'bg-[#14171f] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Responsive, mobile optimized) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#14171f] border border-zinc-800/80 cursor-pointer aspect-4/3 shadow-lg hover:border-[#c5a059]/60 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with title and zoom affordance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="text-[11px] font-semibold text-[#edd28b] uppercase tracking-wider block mb-1">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 ml-3">
                    <Maximize2 className="w-4 h-4 text-[#edd28b]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#12141a] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Fechar visualização de imagem"
                className="absolute top-4 right-4 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer border border-zinc-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-[#0f1117] border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#c5a059] uppercase tracking-wider block">
                    {activeItem.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-0.5">
                    {activeItem.title}
                  </h3>
                  <p className="text-sm text-zinc-300 mt-1">
                    {activeItem.caption}
                  </p>
                </div>

                <button
                  onClick={() => setActiveItem(null)}
                  className="min-h-[44px] px-5 py-2 text-xs font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 rounded-lg border border-zinc-700 transition-colors whitespace-nowrap"
                >
                  Fechar Visualização
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
