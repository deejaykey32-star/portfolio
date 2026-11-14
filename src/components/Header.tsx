import React, { useState } from 'react';
import { ExternalLink, Terminal, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 sm:gap-2.5"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block shrink-0" />
          <span>Dominik Kuta</span>
        </a>

        {/* Zone 2: Desktop clean single-line nav links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-sm font-medium text-neutral-400">
          <a
            href="#featured"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('featured');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Wyróżnione
          </a>
          <a
            href="#projedudei"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('projedudei');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            ProjEduDei
          </a>
          <a
            href="#vibedudei"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('vibedudei');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            VibeEduDei
          </a>
          <a
            href="#mentor360"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('mentor360');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Mentor 360°
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Katalog Projektów
          </a>
          <a
            href="#ai-studio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('ai-studio');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Google AI Studio
          </a>
          <a
            href="#lab"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('lab');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Laboratorium Kodowe
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            O mnie &amp; Kontakt
          </a>
        </nav>

        {/* Zone 3: Primary action - Yellow GitHub Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="https://github.com/deejaykey32-star"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            title="GitHub @deejaykey32-star"
          >
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">GitHub @deejaykey32-star</span>
            <span className="sm:hidden font-bold">GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-70 shrink-0 hidden sm:inline" />
          </a>

          {/* Hamburger button for mobile / tablet screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Zamknij menu nawigacji' : 'Otwórz menu nawigacji'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-neutral-800 bg-neutral-950/98 px-5 py-4 space-y-2 backdrop-blur-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-neutral-300">
            <button
              onClick={() => handleNavClick('featured')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-amber-400 transition-colors"
            >
              Wyróżnione
            </button>
            <button
              onClick={() => handleNavClick('projedudei')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-amber-400 transition-colors"
            >
              ProjEduDei
            </button>
            <button
              onClick={() => handleNavClick('vibedudei')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-emerald-400 transition-colors"
            >
              VibeEduDei
            </button>
            <button
              onClick={() => handleNavClick('mentor360')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-indigo-400 transition-colors"
            >
              Mentor 360°
            </button>
            <button
              onClick={() => handleNavClick('catalog')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-amber-400 transition-colors"
            >
              Katalog Projektów
            </button>
            <button
              onClick={() => handleNavClick('ai-studio')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-amber-400 transition-colors"
            >
              Google AI Studio
            </button>
            <button
              onClick={() => handleNavClick('lab')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-amber-400 transition-colors"
            >
              Laboratorium Kodowe
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-left hover:text-amber-400 transition-colors"
            >
              O mnie &amp; Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
