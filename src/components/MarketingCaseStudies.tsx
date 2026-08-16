import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { MarketingCaseStudy } from '../types';
import { QRCodeSVG } from 'qrcode.react';
import {
  TrendingUp,
  Target,
  CheckCircle,
  Quote,
  ExternalLink,
  QrCode,
  Plus,
  Trash2,
  Edit3
} from 'lucide-react';

export const MarketingCaseStudies: React.FC = () => {
  const {
    caseStudies,
    addCaseStudy,
    deleteCaseStudy,
    clearAllCaseStudies,
    restoreDefaultCaseStudies,
    setEditingCaseStudy,
    isAdmin,
    editMode,
    openQrModal,
    config
  } = usePortfolio();

  const handleCreateNewCase = () => {
    setEditingCaseStudy({
      id: `case-${Date.now()}`,
      title: 'Nowa Kampania Growth & Marketing AI',
      client: 'Klient E-Commerce / SaaS',
      strategy: 'Wdrożenie lejków AI, targetowania omnikanałowego oraz automatyzacji sekwencji marketingowych.',
      description: 'Optymalizacja konwersji i obniżenie kosztów pozyskania klienta przy jednoczesnym skalowaniu wolumenu sprzedaży.',
      results: [
        { label: 'Wzrost konwersji', value: '+85%', change: 'w 90 dni' },
        { label: 'Zwrot ROAS', value: '5.2x', change: 'z kanału Meta Ads' },
      ],
      channels: ['Performance Marketing', 'SEO', 'Lead Automation'],
      timeframe: '90 dni',
      keyTakeaways: [
        'Wykorzystanie sztucznej inteligencji skróciło czas testowania kreacji z 14 dni do 48 godzin.',
        'Zintegrowane kody QR zwiększyły retencję użytkowników o 31%.'
      ],
      testimonial: {
        quote: 'Współpraca z Dominikiem przyniosła natychmiastowe, wymierne efekty finansowe.',
        author: 'Tomasz Nowak',
        company: 'Dyrektor Zarządzający'
      },
      liveUrl: 'https://github.com/dominikkuta',
      qrCodeUrl: 'https://github.com/dominikkuta'
    });
  };

  return (
    <section id="marketing" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-[#222222] bg-white dark:bg-[#0d0d0d] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-[#161616] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono uppercase tracking-wider mb-3 shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
              <span>Wzrost, Konwersja & Analityka ({caseStudies.length})</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white font-serif`}>
              Wprowadzenie w Moje Projekty Marketingowe
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl font-light">
              Sprawdź mierzalne rezultaty kampanii SEO, pozycjonowania w silnikach AI (GEO), automatyzacji sprzedaży i skalowania platform B2B/E-commerce.
            </p>
          </div>

          {isAdmin && editMode && (
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={handleCreateNewCase}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black font-bold font-mono rounded text-xs transition shadow-sm"
              >
                <Plus className="w-4 h-4" /> Dodaj Case Study
              </button>
              {caseStudies.length > 0 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Czy na pewno chcesz usunąć wszystkie pozycje Case Studies?')) {
                      clearAllCaseStudies();
                    }
                  }}
                  className="px-2.5 py-1.5 bg-neutral-100 dark:bg-[#161616] hover:bg-red-50 dark:hover:bg-red-950/40 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 border border-neutral-200 dark:border-[#2e2e2e] rounded text-xs font-mono transition"
                >
                  Wyczyść Demo
                </button>
              ) : (
                <button
                  type="button"
                  onClick={restoreDefaultCaseStudies}
                  className="px-2.5 py-1.5 bg-neutral-100 dark:bg-[#161616] hover:bg-neutral-200 dark:hover:bg-[#222] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono transition"
                >
                  Przywróć Demo
                </button>
              )}
            </div>
          )}
        </div>

        {/* Case Studies Cards */}
        {caseStudies.length > 0 ? (
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group relative bg-[#fbfbf9] dark:bg-[#161616] rounded-xl p-6 sm:p-8 border border-neutral-200 dark:border-[#222222] hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Col: Strategy & Details */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-white dark:bg-[#1a1a1a] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] font-mono text-xs rounded font-semibold shadow-xs">
                        Klient: {study.client}
                      </span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                        Czas trwania: {study.timeframe}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-white`}>
                      {study.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Strategy Box */}
                    <div className="p-4 bg-white dark:bg-[#121212] rounded-lg border border-neutral-200 dark:border-[#282828] text-xs shadow-xs">
                      <span className="font-mono uppercase tracking-wider text-[#8c6a28] dark:text-[#c5a059] block mb-1 flex items-center gap-1.5 font-bold">
                        <Target className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" /> Strategia i Realizacja:
                      </span>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {study.strategy}
                      </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white block font-semibold">
                        Kluczowe wnioski i dźwignie wzrostu:
                      </span>
                      {study.keyTakeaways.map((takeaway, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059] shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial if exists */}
                    {study.testimonial && (
                      <div className="p-4 bg-white dark:bg-[#121212] rounded-lg border border-neutral-200 dark:border-[#282828] text-xs flex items-start gap-3 shadow-xs">
                        <Quote className="w-5 h-5 text-[#b08d4b] dark:text-[#c5a059] shrink-0 mt-0.5" />
                        <div>
                          <p className="italic text-neutral-600 dark:text-neutral-300">
                            "{study.testimonial.quote}"
                          </p>
                          <span className="font-bold text-slate-900 dark:text-white block mt-1 font-serif">
                            — {study.testimonial.author}, <span className="font-normal text-neutral-500 dark:text-neutral-400 font-sans">{study.testimonial.company}</span>
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Channels & Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {study.channels.map((chan) => (
                        <span
                          key={chan}
                          className="px-2.5 py-0.5 bg-white dark:bg-[#1a1a1a] text-slate-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#282828] text-xs font-mono rounded"
                        >
                          {chan}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Col: Measurable Results Metrics & Clickable QR Code */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                    
                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((res, i) => (
                        <div
                          key={i}
                          className="p-3.5 bg-white dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#262626] text-center shadow-xs"
                        >
                          <div className="text-xl sm:text-2xl font-bold text-[#8c6a28] dark:text-[#c5a059] font-mono">
                            {res.value}
                          </div>
                          <div className="text-[11px] font-bold text-slate-900 dark:text-white mt-1 uppercase tracking-wider">
                            {res.label}
                          </div>
                          {res.change && (
                            <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                              {res.change}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Interactive QR Code Box */}
                    <div className="p-4 bg-white dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] flex flex-col items-center text-center shadow-xs">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-neutral-300 mb-2 flex items-center gap-1.5">
                        <QrCode className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                        <span>Kod QR Raportu / Projektu:</span>
                      </p>

                      <div
                        onClick={() => openQrModal(study.qrCodeUrl || study.liveUrl || 'https://github.com/dominikkuta', study.title, 'Marketing', '#c5a059')}
                        title="Kliknij, aby otworzyć kod QR lub przejść do projektu"
                        className="group/qrcard relative p-2 bg-white rounded border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-xs cursor-pointer hover:scale-105 transition-all"
                      >
                        <QRCodeSVG
                          value={study.qrCodeUrl || study.liveUrl || 'https://github.com/dominikkuta'}
                          size={110}
                          fgColor="#0a0a0a"
                          bgColor="#ffffff"
                          level="M"
                        />
                        <div className="absolute inset-0 bg-black/80 rounded flex items-center justify-center text-white opacity-0 group-hover/qrcard:opacity-100 transition-opacity">
                          <span className="text-[10px] font-bold font-mono px-2 py-1 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black rounded">
                            Kliknij i Przejdź
                          </span>
                        </div>
                      </div>

                      <a
                        href={study.liveUrl || study.qrCodeUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-[#8c6a28] dark:text-[#c5a059] hover:underline font-semibold"
                      >
                        <ExternalLink className="w-3 h-3" /> Zobacz Wdrożenie na Żywo
                      </a>
                    </div>

                    {/* Action Row (Edit & Delete & Live Link) */}
                    <div className="flex items-center justify-between gap-2 pt-3 border-t border-neutral-200 dark:border-[#262626]">
                      <button
                        type="button"
                        onClick={() => setEditingCaseStudy(study)}
                        className="px-3 py-1.5 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black font-bold font-mono rounded text-xs flex items-center gap-1.5 transition shadow-xs"
                        title="Edytuj to case study"
                      >
                        <Edit3 className="w-3.5 h-3.5" /> Edytuj
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Czy na pewno chcesz usunąć case study "${study.title}"?`)) {
                            deleteCaseStudy(study.id);
                          }
                        }}
                        className="px-3 py-1.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900/60 text-red-600 dark:text-red-300 border border-red-200 dark:border-red-800/50 font-mono rounded text-xs flex items-center gap-1.5 transition shadow-xs"
                        title="Usuń to case study"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Usuń
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-[#161616] rounded-xl border border-neutral-200 dark:border-[#222] space-y-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Brak pozycji w sekcji projektów marketingowych.</p>
            {isAdmin && editMode && (
              <button
                type="button"
                onClick={handleCreateNewCase}
                className="px-4 py-2 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-bold text-xs rounded font-mono"
              >
                Dodaj Pierwsze Case Study
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};


