import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Sun,
  Moon,
  Bot,
  QrCode,
  Lock,
  ShieldCheck,
  Menu,
  X,
  Globe,
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    isDark,
    toggleTheme,
    config,
    isAdmin,
    adminEmail,
    setIsLoginModalOpen,
    setIsSeoModalOpen,
    openQrModal,
  } = usePortfolio();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Aplikacje & Web', href: '#apps' },
    { label: 'Grafika & UI', href: '#graphics' },
    { label: 'Marketing & SEO', href: '#marketing' },
    { label: 'Usługi & Stack', href: '#services' },
    { label: 'O mnie', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ];

  const handleOpenBusinessCardQr = () => {
    openQrModal(
      config.seo.canonicalUrl,
      `${config.name} — Cyfrowa Wizytówka & Portfolio`,
      'VCard',
      '#c5a059'
    );
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-30 w-full bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-md border-b border-neutral-200 dark:border-[#222222] transition-colors duration-200 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-3 group"
            title={`${config.name} — Portfolio`}
          >
            <div className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#333] flex items-center justify-center text-[#b08d4b] dark:text-[#c5a059] font-serif italic font-bold text-lg shadow-xs group-hover:border-[#b08d4b] dark:group-hover:border-[#c5a059] group-hover:scale-105 transition-all">
              DK
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif italic font-bold text-lg sm:text-xl text-[#b08d4b] dark:text-[#c5a059] tracking-tight">
                  {config.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-[#161616] px-1.5 py-0.5 rounded border border-neutral-200 dark:border-[#262626]">
                  PRO
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 -mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> AI & Growth Portfolio
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-slate-700 dark:text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#b08d4b] dark:hover:text-[#c5a059] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b08d4b] dark:bg-[#c5a059] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Google Translate Widget Container */}
          <div className="relative flex items-center bg-neutral-100 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#333] rounded px-2.5 py-1 text-xs text-slate-800 dark:text-[#e0e0e0]">
            <Globe className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059] mr-1.5 shrink-0 opacity-80" />
            <div id="google_translate_element" className="scale-90 origin-left" />
          </div>

          {/* SEO & AI Inspector Button */}
          <button
            id="open-seo-inspector-btn"
            type="button"
            onClick={() => setIsSeoModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] hover:text-[#b08d4b] dark:hover:text-[#c5a059] rounded text-xs uppercase tracking-wider transition font-mono"
            title="Sprawdź zgodność z SEO i modelami AI"
          >
            <Bot className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
            <span>SEO & AI</span>
          </button>

          {/* Quick QR Card Modal Trigger */}
          <button
            id="open-business-qr-btn"
            type="button"
            onClick={handleOpenBusinessCardQr}
            className="p-2 text-slate-700 dark:text-neutral-300 hover:text-[#b08d4b] dark:hover:text-[#c5a059] bg-neutral-100 dark:bg-[#1a1a1a] hover:border-[#b08d4b] dark:hover:border-[#c5a059] border border-neutral-200 dark:border-[#333] rounded transition"
            title="Kliknij, aby otworzyć wizytówkę QR"
            aria-label="Pokaż kod QR"
          >
            <QrCode className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-neutral-300 hover:text-[#b08d4b] dark:hover:text-[#c5a059] bg-neutral-100 dark:bg-[#1a1a1a] hover:border-[#b08d4b] dark:hover:border-[#c5a059] border border-neutral-200 dark:border-[#333] rounded transition shadow-xs"
            title={isDark ? 'Przełącz na motyw jasny' : 'Przełącz na motyw ciemny'}
            aria-label="Zmień motyw"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-[#c5a059]" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Admin Login / Status Trigger */}
          <button
            id="admin-auth-header-btn"
            type="button"
            onClick={() => setIsLoginModalOpen(true)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium transition ${
              isAdmin
                ? 'bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-bold shadow-xs hover:bg-[#9c7b3d] dark:hover:bg-[#d4af66]'
                : 'bg-neutral-100 dark:bg-[#1a1a1a] text-[#8c6a28] dark:text-[#c5a059] border border-[#b08d4b] dark:border-[#c5a059] hover:bg-[#b08d4b] hover:text-white dark:hover:bg-[#c5a059] dark:hover:text-black'
            }`}
            title={isAdmin ? `Zalogowano jako ${adminEmail}` : 'Logowanie Google Administratora (kuta.dominik@gmail.com)'}
          >
            {isAdmin ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-white dark:text-black" />
                <span className="hidden md:inline">Admin CMS</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="hidden md:inline font-mono">kuta.dominik@gmail.com</span>
                <span className="md:hidden"><Lock className="w-3.5 h-3.5" /></span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 dark:text-neutral-300 hover:text-[#b08d4b] dark:hover:text-[#c5a059] bg-neutral-100 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#333] rounded"
            aria-label="Menu mobilne"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-5 border-t border-neutral-200 dark:border-[#222] bg-white dark:bg-[#0f0f0f] animate-fade-in space-y-3 shadow-md">
          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-xs uppercase tracking-widest text-slate-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] hover:text-[#b08d4b] dark:hover:text-[#c5a059] transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-200 dark:border-[#222] flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSeoModalOpen(true);
              }}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-[#b08d4b] dark:text-[#c5a059]"
            >
              <Bot className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" /> Audyt SEO & AI
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenBusinessCardQr();
              }}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-slate-700 dark:text-neutral-300 hover:text-[#b08d4b] dark:hover:text-[#c5a059]"
            >
              <QrCode className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" /> Wizytówka QR
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

