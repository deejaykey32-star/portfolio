import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" />
          <span>Dominik Kuta</span>
        </a>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a
            href="#featured"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('featured');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Wyróżnione
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('catalog');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Katalog Projektów
          </a>
          <a
            href="#ai-studio"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('ai-studio');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Google AI Studio
          </a>
          <a
            href="#lab"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('lab');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Laboratorium Kodowe
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('about');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            O mnie &amp; Kontakt
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/deejaykey32-star"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>GitHub @deejaykey32-star</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
};
