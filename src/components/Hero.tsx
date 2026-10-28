import React from 'react';
import { ArrowDown, Sparkles, ExternalLink, Code2 } from 'lucide-react';
import { HERO_IMAGE, STATS } from '../data/projectsData';

interface HeroProps {
  onExplore: () => void;
  onOpenAiStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenAiStudio }) => {
  return (
    <section id="home" className="pt-12 pb-16 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Quiet, unboxed text kicker */}
              <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
                Full-Stack &middot; Google AI Studio &middot; EduTech &middot; Bioinformatyka
              </div>

              {/* Display Headline with balanced wrapping */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance mb-6">
                Inżynieria oprogramowania, interaktywna edukacja i aplikacje AI nowej generacji.
              </h1>

              {/* Lead Copy */}
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
                Cześć, jestem <strong className="text-white font-semibold">Dominik Kuta</strong> (twórca projektów pod szyldem <span className="text-amber-300 font-medium">deejaykey32-star</span>). Projektuję i wdrażam zaawansowane aplikacje multimodalne w <strong className="text-white font-semibold">Google AI Studio</strong>, naukowe symulacje bioinformatyczne, ekosystem edukacyjny <strong className="text-white font-semibold">EduDei</strong> oraz bezkompromisowe narzędzia poligraficzne w architekturze client-side.
              </p>

              {/* Direct reference links bar */}
              <div className="text-xs text-neutral-400 mb-8 flex flex-wrap items-center gap-y-2 gap-x-4">
                <span>Źródła projektów:</span>
                <button
                  onClick={onOpenAiStudio}
                  className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-medium cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Aplikacje Google AI Studio</span>
                </button>
                <span className="text-neutral-600">&middot;</span>
                <a
                  href="https://github.com/deejaykey32-star?tab=repositories"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Repozytoria GitHub (23+)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800/80">
              <button
                onClick={onExplore}
                className="px-6 py-3 text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Przeglądaj projekty</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAiStudio}
                className="px-6 py-3 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Zobacz wdrożenia AI Studio</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 h-full min-h-[380px] lg:min-h-[460px] flex flex-col justify-end">
              <img
                src={HERO_IMAGE}
                alt="Stanowisko pracy inżyniera oprogramowania Dominika Kuty"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/40 to-transparent" />

              {/* Caption Overlay */}
              <div className="relative z-10 p-6 sm:p-8">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-mono mb-1">
                  Środowisko Inżynieryjne
                </div>
                <div className="text-lg font-bold text-white mb-2">
                  Precyzyjna architektura i zero kompromisów
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Od algorytmów analizy Fouriera (FFT) w Web Audio API, przez bioinformatyczne mapowanie kodonów DNA, aż po bezserwerowe potoki przetwarzania PDF do 1500 stron.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
