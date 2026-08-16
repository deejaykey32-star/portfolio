import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Github,
  Cloud,
  Sparkles,
  Layers,
  QrCode,
  Bot,
  Lock,
  ArrowUp,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const {
    config,
    isAdmin,
    adminEmail,
    setIsLoginModalOpen,
    setIsSeoModalOpen,
    openQrModal
  } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#f0eee6] dark:bg-[#050505] text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-[#1e1e1e] text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#b08d4b] dark:bg-[#c5a059] flex items-center justify-center text-white dark:text-black font-serif font-bold text-sm shadow-xs">
                DK
              </div>
              <span className="font-serif font-bold text-base text-slate-900 dark:text-white">
                {config.name}
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed text-xs font-light">
              {config.role}. Połączenie programowania w chmurze (Google AI Studio, Cloudflare, GitHub, WordPress) z zaawansowaną grafiką, pozycjonowaniem SEO/AI oraz strategią marketingową.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsSeoModalOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-white dark:bg-[#121212] text-[#8c6a28] dark:text-[#c5a059] rounded-lg text-[11px] font-medium border border-neutral-200 dark:border-[#2e2e2e] hover:border-[#b08d4b] dark:hover:border-[#c5a059] transition shadow-xs"
              >
                <Bot className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" />
                <span>Audyt SEO & AI Overviews (100%)</span>
              </button>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-slate-900 dark:text-neutral-200 uppercase tracking-wider text-[11px] font-semibold">
              Ekosystemy i Narzędzia
            </h4>
            <ul className="space-y-1.5 text-xs font-light">
              <li>
                <a
                  href="https://aistudio.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5 transition"
                >
                  <Sparkles className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" /> Google AI Studio
                </a>
              </li>
              <li>
                <a
                  href="https://pages.cloudflare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5 transition"
                >
                  <Cloud className="w-3 h-3 text-orange-500 dark:text-orange-400" /> Cloudflare Pages & Workers
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dominikkuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5 transition"
                >
                  <Github className="w-3 h-3 text-slate-700 dark:text-neutral-400" /> Repozytoria GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wordpress.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5 transition"
                >
                  <Layers className="w-3 h-3 text-sky-600 dark:text-sky-400" /> WordPress & WooCommerce
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Admin */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-slate-900 dark:text-neutral-200 uppercase tracking-wider text-[11px] font-semibold">
              Dostęp & Narzędzia
            </h4>
            <ul className="space-y-1.5 text-xs font-light">
              <li>
                <button
                  type="button"
                  onClick={() => openQrModal(config.seo.canonicalUrl, 'Dominik Kuta — Cyfrowa Wizytówka', 'QR', '#c5a059')}
                  className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5 transition"
                >
                  <QrCode className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" /> Generator Kodów QR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setIsLoginModalOpen(true)}
                  className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5 transition"
                >
                  {isAdmin ? (
                    <>
                      <ShieldCheck className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" /> Panel Administratora ({adminEmail})
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3 text-neutral-500" /> Logowanie Google (kuta.dominik@gmail.com)
                    </>
                  )}
                </button>
              </li>
              <li>
                <a href="#apps" className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400">
                  Katalog Aplikacji Webowych
                </a>
              </li>
              <li>
                <a href="#graphics" className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] text-neutral-600 dark:text-neutral-400">
                  Galeria Projektów Graficznych
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-neutral-500 text-center sm:text-left">
            © {new Date().getFullYear()} {config.name}. Wszystkie prawa zastrzeżone. Zoptymalizowano pod SEO, GEO i Google Translate.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] text-slate-800 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-[#282828] transition text-[11px] font-medium shadow-xs"
            aria-label="Wróć na górę strony"
          >
            <span>Do góry</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

