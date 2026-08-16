import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraphicItem } from '../types';
import { QRCodeSVG } from 'qrcode.react';
import {
  Palette,
  Maximize2,
  X,
  QrCode,
  ExternalLink,
  Plus,
  Trash2,
  Edit3,
} from 'lucide-react';

export const GraphicsGallery: React.FC = () => {
  const {
    graphics,
    addGraphic,
    deleteGraphic,
    clearAllGraphics,
    restoreDefaultGraphics,
    setEditingGraphic,
    isAdmin,
    editMode,
    openQrModal,
    config,
  } = usePortfolio();
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicItem | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredGraphics = graphics.filter(g => {
    if (selectedTag === 'all') return true;
    return g.category === selectedTag;
  });

  const handleCreateNewGraphic = () => {
    setEditingGraphic({
      id: `graph-${Date.now()}`,
      title: 'Nowa Kreacja Wizualna / UI',
      client: 'Klient B2B / Projekt',
      category: 'branding',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      fullResolutionUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=90',
      description: 'Opis identyfikacji wizualnej i założeń projektowych...',
      tags: ['Branding', 'Figma', 'Key Visual'],
      dimensions: '3840 x 2160 px',
      year: '2026',
      qrCodeUrl: 'https://behance.net',
    });
  };

  return (
    <section id="graphics" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-[#222222] bg-[#f8f7f4] dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-[#161616] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono uppercase tracking-wider mb-3 shadow-xs">
              <Palette className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
              <span>Identyfikacja Wizualna & Design ({graphics.length})</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white font-serif`}>
              Portfolio Grafiki, UI/UX & Kreacji Reklamowych
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl font-light">
              Spójne systemy brandingu, kreacje wysokokonwertujące do kampanii Meta/TikTok Ads, interfejsy Figma oraz projekty opakowań.
            </p>
          </div>

          {/* Admin Actions */}
          {isAdmin && editMode && (
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleCreateNewGraphic}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black font-bold font-mono rounded text-xs transition shadow-sm"
              >
                <Plus className="w-4 h-4" /> Dodaj Grafikę
              </button>
              {graphics.length > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Czy na pewno chcesz usunąć wszystkie pozycje graficzne?')) {
                      clearAllGraphics();
                    }
                  }}
                  className="px-2.5 py-1.5 bg-white dark:bg-[#161616] hover:bg-red-50 dark:hover:bg-red-950/40 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 border border-neutral-200 dark:border-[#2e2e2e] rounded text-xs font-mono transition"
                >
                  Wyczyść Demo
                </button>
              ) : (
                <button
                  type="button"
                  onClick={restoreDefaultGraphics}
                  className="px-2.5 py-1.5 bg-white dark:bg-[#161616] hover:bg-neutral-100 dark:hover:bg-[#222] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono transition"
                >
                  Przywróć Demo
                </button>
              )}
            </div>
          )}
        </div>

        {/* Category switcher */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
          {[
            { id: 'all', label: 'Wszystkie Kreacje' },
            { id: 'branding', label: 'Identyfikacja & Branding' },
            { id: 'ui-ux', label: 'Interfejsy UI / UX' },
            { id: 'social-media', label: 'Reklamy Social Media' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedTag(cat.id)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition ${
                selectedTag === cat.id
                  ? 'bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-bold border border-[#b08d4b] dark:border-[#c5a059] shadow-xs'
                  : 'bg-white dark:bg-[#161616] text-slate-700 dark:text-neutral-400 border border-neutral-200 dark:border-[#282828] hover:border-[#b08d4b] dark:hover:border-[#c5a059] hover:text-[#b08d4b] dark:hover:text-[#c5a059]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Graphics Grid */}
        {filteredGraphics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGraphics.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col bg-white dark:bg-[#161616] rounded-xl overflow-hidden border border-neutral-200 dark:border-[#222222] hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {/* Image box with hover lightbox trigger */}
                <div
                  className="relative aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-[#111] cursor-pointer"
                  onClick={() => setSelectedGraphic(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 dark:opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                    <span className="p-2 bg-white/20 dark:bg-[#1a1a1a] backdrop-blur-xs border border-white/40 dark:border-[#c5a059] text-white dark:text-[#c5a059] rounded hover:scale-110 transition" title="Powiększ grafikę">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Top action badges */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingGraphic(item);
                      }}
                      className="px-2 py-0.5 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black rounded text-[11px] font-mono font-bold shadow-xs flex items-center gap-1 transition"
                      title="Edytuj grafikę"
                    >
                      <Edit3 className="w-3 h-3" /> Edytuj
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`Czy na pewno chcesz usunąć kreację "${item.title}"?`)) {
                          deleteGraphic(item.id);
                        }
                      }}
                      className="p-1 bg-red-100/90 dark:bg-red-950/80 hover:bg-red-200 dark:hover:bg-red-900 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/60 rounded shadow-xs transition"
                      title="Usuń grafikę"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Year tag */}
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-xs text-[#c5a059] border border-[#333] text-[10px] font-mono font-bold rounded">
                    {item.year}
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#8c6a28] dark:text-[#c5a059] uppercase tracking-wider block font-semibold">
                      {item.client}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-slate-900 dark:text-white line-clamp-1 mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer with QR Thumbnail & Details */}
                  <div className="pt-2 border-t border-neutral-200 dark:border-[#222] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {item.qrCodeUrl && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openQrModal(item.qrCodeUrl!, item.title, 'Grafika', '#c5a059');
                          }}
                          className="p-1 text-neutral-600 dark:text-neutral-400 hover:text-[#b08d4b] dark:hover:text-[#c5a059] rounded hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] transition flex items-center gap-1 text-[11px] font-mono"
                          title="Otwórz kod QR kreacji"
                        >
                          <QrCode className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">QR</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#222] space-y-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Brak pozycji w tej kategorii.</p>
            {isAdmin && editMode && (
              <button
                type="button"
                onClick={handleCreateNewGraphic}
                className="px-4 py-2 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-bold text-xs rounded font-mono"
              >
                Dodaj Pierwszą Grafikę
              </button>
            )}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedGraphic && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedGraphic(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white dark:bg-[#161616] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-[#333] text-slate-800 dark:text-neutral-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[60vh] bg-neutral-900 flex items-center justify-center">
                <img
                  src={selectedGraphic.fullResolutionUrl || selectedGraphic.imageUrl}
                  alt={selectedGraphic.title}
                  className="max-h-[60vh] w-auto object-contain"
                />
                <button
                  onClick={() => setSelectedGraphic(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-[#161616] hover:bg-white dark:hover:bg-[#222] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded transition shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <span className="text-xs font-mono text-[#8c6a28] dark:text-[#c5a059] uppercase tracking-wider font-semibold">
                    Klient: {selectedGraphic.client} • {selectedGraphic.year}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">
                    {selectedGraphic.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {selectedGraphic.description}
                  </p>
                  {selectedGraphic.dimensions && (
                    <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      Wymiary projektu: {selectedGraphic.dimensions}
                    </p>
                  )}
                </div>

                {/* QR preview box */}
                <div className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-[#1a1a1a] rounded-xl border border-neutral-200 dark:border-[#333] shrink-0">
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-neutral-300 mb-2 flex items-center gap-1">
                    <QrCode className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" /> Link do Kreacji:
                  </p>
                  <div className="p-2 bg-white rounded border border-neutral-200 dark:border-transparent">
                    <QRCodeSVG
                      value={selectedGraphic.qrCodeUrl || selectedGraphic.imageUrl}
                      size={110}
                      fgColor="#0a0a0a"
                      bgColor="#ffffff"
                    />
                  </div>
                  <a
                    href={selectedGraphic.qrCodeUrl || selectedGraphic.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1 text-xs font-mono text-[#8c6a28] dark:text-[#c5a059] hover:underline font-semibold"
                  >
                    <ExternalLink className="w-3 h-3" /> Pełny Podgląd
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

