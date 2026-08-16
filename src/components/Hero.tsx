import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { WysiwygText } from './WysiwygText';
import { QRCodeSVG } from 'qrcode.react';
import {
  Sparkles,
  ArrowRight,
  QrCode,
  Github,
  Cloud,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  ExternalLink,
  Bot
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { config, updateConfig, openQrModal, setIsSeoModalOpen } = usePortfolio();

  const handleOpenHeroQr = () => {
    openQrModal(
      config.seo.canonicalUrl,
      `${config.name} — Portfolio & Digital Hub`,
      'Hero Hub',
      '#c5a059'
    );
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-200 dark:border-[#222222] bg-[#f8f7f4] dark:bg-[#0a0a0a] transition-colors"
    >
      {/* Ambient warm gold lighting effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#b08d4b]/10 dark:bg-[#c5a059]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-white dark:bg-[#161616] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                <WysiwygText
                  value={config.role}
                  onSave={(val) => updateConfig({ role: val })}
                  tag="span"
                />
              </span>

              <button
                type="button"
                onClick={() => setIsSeoModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider bg-white dark:bg-[#161616] text-slate-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] hover:text-[#b08d4b] dark:hover:text-[#c5a059] rounded transition shadow-xs"
              >
                <Bot className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                <span>SEO & AI Optimized</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-serif leading-tight`}>
              <WysiwygText
                value={config.heroTagline}
                onSave={(val) => updateConfig({ heroTagline: val })}
                tag="span"
                multiline
              />
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg text-neutral-600 dark:text-neutral-300 ${config.typography.bodyFont} leading-relaxed max-w-3xl font-light`}>
              <WysiwygText
                value={config.heroSubtitle}
                onSave={(val) => updateConfig({ heroSubtitle: val })}
                tag="span"
                multiline
              />
            </p>

            {/* Value Proposition */}
            <div className="p-4 bg-white dark:bg-[#161616] border border-neutral-200 dark:border-[#262626] rounded-xl text-xs sm:text-sm text-slate-800 dark:text-[#e0e0e0] flex items-start gap-3 shadow-xs">
              <CheckCircle2 className="w-5 h-5 text-[#b08d4b] dark:text-[#c5a059] shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">
                  Architektura Konwersji & Integracja AI:
                </span>
                <WysiwygText
                  value={config.valueProposition}
                  onSave={(val) => updateConfig({ valueProposition: val })}
                  tag="span"
                  multiline
                />
              </div>
            </div>

            {/* Platform Badges Row */}
            <div className="pt-2">
              <span className="block text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
                Zintegrowany ekosystem deweloperski i marketingowy:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Google AI Studio', icon: Cpu, link: 'https://aistudio.google.com' },
                  { name: 'Cloudflare Pages', icon: Cloud, link: 'https://pages.cloudflare.com' },
                  { name: 'GitHub Repos', icon: Github, link: 'https://github.com/dominikkuta' },
                  { name: 'WordPress & Headless', icon: Layers, link: 'https://wordpress.org' },
                  { name: 'SEO & Schema Rich', icon: TrendingUp, link: '#services' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#161616] border border-neutral-200 dark:border-[#282828] hover:border-[#b08d4b] dark:hover:border-[#c5a059] hover:text-[#b08d4b] dark:hover:text-[#c5a059] rounded text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-neutral-300 shadow-xs transition"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black font-bold text-xs uppercase tracking-widest rounded transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Przeglądaj Aplikacje & Projekty</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#marketing"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-[#161616] border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] text-slate-800 dark:text-neutral-200 hover:text-[#b08d4b] dark:hover:text-[#c5a059] font-medium text-xs uppercase tracking-widest rounded shadow-xs transition"
              >
                <span>Case Studies Marketingowe</span>
              </a>

              <button
                type="button"
                onClick={handleOpenHeroQr}
                className="inline-flex items-center gap-2 px-4 py-3 bg-white dark:bg-[#161616] border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] text-slate-700 dark:text-neutral-300 hover:text-[#b08d4b] dark:hover:text-[#c5a059] font-mono text-xs uppercase tracking-wider rounded shadow-xs transition"
                title="Kliknij, aby otworzyć interaktywny kod QR"
              >
                <QrCode className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" />
                <span className="hidden sm:inline">Kod QR Wizytówki</span>
              </button>
            </div>
          </div>

          {/* Interactive QR Card & Profile Badge (Right column) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm bg-white dark:bg-[#161616] rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-[#282828] space-y-5">
              
              {/* Avatar + Info */}
              <div className="flex items-center gap-3.5">
                <img
                  src={config.avatarUrl}
                  alt={config.name}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-[#b08d4b] dark:border-[#c5a059] shadow-md"
                />
                <div>
                  <h3 className="text-base font-serif italic font-bold text-slate-900 dark:text-white">
                    {config.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    {config.location}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Dostępny do projektów
                  </span>
                </div>
              </div>

              {/* Clickable QR Code Box */}
              <div className="pt-2 border-t border-neutral-200 dark:border-[#262626] text-center">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-neutral-300 mb-2.5 flex items-center justify-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" />
                  <span>Interaktywny Kod QR (Kliknij)</span>
                </p>

                <div
                  onClick={handleOpenHeroQr}
                  title="Kliknij, aby otworzyć i przetestować kod QR"
                  className="group relative inline-block p-4 bg-white rounded-xl border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-sm cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <QRCodeSVG
                    value={config.seo.canonicalUrl}
                    size={150}
                    fgColor="#0a0a0a"
                    bgColor="#ffffff"
                    level="M"
                  />
                  <div className="absolute inset-0 rounded-xl bg-black/85 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                    <span className="text-xs font-bold font-mono tracking-wider px-3 py-1.5 bg-[#c5a059] text-black rounded flex items-center gap-1 shadow">
                      <ExternalLink className="w-3.5 h-3.5" /> Powiększ i Przetestuj
                    </span>
                  </div>
                </div>

                <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mt-2">
                  Zeskanuj telefonem lub kliknij w kod QR, by przejść do adresu
                </p>
              </div>

              {/* Verified Contact Info */}
              <div className="pt-2 border-t border-neutral-200 dark:border-[#262626] text-xs text-neutral-500 dark:text-neutral-400 space-y-1 font-mono">
                <div className="flex justify-between">
                  <span>Email:</span>
                  <a href={`mailto:${config.email}`} className="text-[#8c6a28] dark:text-[#c5a059] hover:underline font-medium">
                    {config.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span>Architektura:</span>
                  <span className="text-slate-900 dark:text-white font-medium">Cloud & AI Edge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-neutral-200 dark:border-[#222222]">
          {[
            { label: 'Ukończonych Projektów', value: `${config.stats.completedProjects}+`, desc: 'Aplikacje, serwisy i kreacje' },
            { label: 'Zadowolonych Klientów', value: `${config.stats.satisfiedClients}+`, desc: 'B2B, SaaS i E-commerce' },
            { label: 'Wdrożonych Aplikacji AI', value: `${config.stats.aiAppsLaunched}+`, desc: 'Google AI Studio & Cloudflare' },
            { label: 'Średni ROAS Kampanii', value: config.stats.marketingRoas, desc: 'Zwrot z nakładów reklamowych' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 bg-white dark:bg-[#141414] rounded-xl border border-neutral-200 dark:border-[#222222] hover:border-[#b08d4b]/50 dark:hover:border-[#c5a059]/50 shadow-xs transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#8c6a28] dark:text-[#c5a059] font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-900 dark:text-white mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

