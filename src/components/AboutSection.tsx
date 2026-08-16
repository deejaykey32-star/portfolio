import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { WysiwygText } from './WysiwygText';
import {
  User,
  Github,
  Cloud,
  Layers,
  Sparkles,
  Mail,
  QrCode,
  CheckCircle2,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { config, updateConfig, openQrModal } = usePortfolio();

  return (
    <section id="about" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-[#222222] bg-white dark:bg-[#0d0d0d] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar & Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-[#fbfbf9] dark:bg-[#161616] rounded-2xl p-6 shadow-xl border border-neutral-200 dark:border-[#262626] space-y-6">
              
              <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-md border border-neutral-200 dark:border-[#333]">
                <img
                  src={config.avatarUrl}
                  alt={config.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-md rounded-lg text-slate-900 dark:text-white text-xs flex items-center justify-between border border-neutral-200 dark:border-[#2a2a2a] shadow-xs">
                  <div>
                    <span className="font-serif font-bold block">{config.name}</span>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400">{config.location}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-bold text-[10px] rounded">
                    DOSTĘPNY
                  </span>
                </div>
              </div>

              {/* Social Platform Quick Links */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {config.socialLinks.github && (
                  <a
                    href={config.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] text-slate-700 dark:text-neutral-300 hover:text-black dark:hover:text-white rounded-lg border border-neutral-200 dark:border-[#282828] transition shadow-xs"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {config.socialLinks.aistudio && (
                  <a
                    href={config.socialLinks.aistudio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] text-[#8c6a28] dark:text-[#c5a059] rounded-lg border border-neutral-200 dark:border-[#282828] transition shadow-xs"
                    title="Google AI Studio"
                  >
                    <Sparkles className="w-4 h-4" />
                  </a>
                )}
                {config.socialLinks.cloudflare && (
                  <a
                    href={config.socialLinks.cloudflare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] text-orange-500 dark:text-orange-400 rounded-lg border border-neutral-200 dark:border-[#282828] transition shadow-xs"
                    title="Cloudflare Pages"
                  >
                    <Cloud className="w-4 h-4" />
                  </a>
                )}
                {config.socialLinks.wordpress && (
                  <a
                    href={config.socialLinks.wordpress}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] text-sky-600 dark:text-sky-400 rounded-lg border border-neutral-200 dark:border-[#282828] transition shadow-xs"
                    title="WordPress"
                  >
                    <Layers className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:${config.email}`}
                  className="p-2.5 bg-white dark:bg-[#121212] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a] text-[#8c6a28] dark:text-[#c5a059] rounded-lg border border-neutral-200 dark:border-[#282828] transition shadow-xs"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-[#161616] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono uppercase tracking-wider shadow-xs">
              <User className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
              <span>O Mnie & Moja Filozofia</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-white">
              Inżynieria Oprogramowania & Growth Marketing w Jednym
            </h2>

            <div className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed space-y-4">
              <p>
                <WysiwygText
                  value={config.aboutText}
                  onSave={(val) => updateConfig({ aboutText: val })}
                  tag="span"
                  multiline
                />
              </p>
              <p>
                <WysiwygText
                  value={config.marketingBio}
                  onSave={(val) => updateConfig({ marketingBio: val })}
                  tag="span"
                  multiline
                />
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Optymalizacja SEO pod algorytmy AI (GEO)',
                'Budowa aplikacji w Google AI Studio & Cloud Run',
                'Projektowanie systemów graficznych i UI/UX',
                'Edge deployment na Cloudflare Pages & Workers',
                'Automatyzacja lejków sprzedażowych i analityka',
                'Interaktywne kody QR i integracja O2O',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Action */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black text-xs sm:text-sm font-semibold rounded-lg shadow-md transition"
              >
                Rozpocznijmy Współpracę
              </a>

              <button
                type="button"
                onClick={() => openQrModal(config.seo.canonicalUrl, `${config.name} — Cyfrowa Wizytówka`, 'VCard', '#c5a059')}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-white dark:bg-[#161616] border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-white text-xs sm:text-sm font-semibold rounded-lg hover:border-[#b08d4b] dark:hover:border-[#c5a059] transition shadow-xs"
              >
                <QrCode className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" />
                <span>Pobierz Wizytówkę QR</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

