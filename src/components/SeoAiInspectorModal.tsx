import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Search, Bot, Check, Copy, ShieldCheck, Sparkles, FileCode } from 'lucide-react';

export const SeoAiInspectorModal: React.FC = () => {
  const { isSeoModalOpen, setIsSeoModalOpen, config, projects } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'schema' | 'ai' | 'meta'>('schema');

  if (!isSeoModalOpen) return null;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${config.seo.canonicalUrl}/#person`,
        'name': config.name,
        'email': config.email,
        'jobTitle': config.role,
        'description': config.aboutText,
        'url': config.seo.canonicalUrl,
        'sameAs': Object.values(config.socialLinks).filter(Boolean),
        'knowsAbout': [
          'Google AI Studio Development',
          'Cloudflare Edge Ecosystem',
          'GitHub CI/CD Automation',
          'WordPress & Headless CMS',
          'Graphic Design & Branding',
          'SEO & Search Engine Optimization',
          'GEO (Generative Engine Optimization for AI Search)',
          'Performance Marketing & Growth Hacking'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${config.seo.canonicalUrl}/#website`,
        'url': config.seo.canonicalUrl,
        'name': `${config.name} — Portfolio`,
        'description': config.seo.metaDescription,
        'inLanguage': ['pl', 'en']
      },
      {
        '@type': 'ItemList',
        'name': 'Portfolio Projects by Dominik Kuta',
        'itemListElement': projects.map((p, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'item': {
            '@type': 'SoftwareApplication',
            'name': p.title,
            'description': p.description,
            'applicationCategory': p.category,
            'url': p.demoUrl || p.repoUrl || p.aiStudioUrl || p.cloudflareUrl || p.wordpressUrl
          }
        }))
      }
    ]
  };

  const jsonLdString = JSON.stringify(jsonLdData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonLdString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="seo-inspector-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsSeoModalOpen(false)}
    >
      <div
        id="seo-inspector-modal"
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#161616] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-neutral-200 overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#121212]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] shadow-xs">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
                  Audyt SEO & Widoczności w Sztucznej Inteligencji (AI)
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold bg-emerald-50 dark:bg-[#1a2e1d] text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 rounded-full shadow-xs">
                  <ShieldCheck className="w-3 h-3" /> Zoptymalizowano 100%
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                Pełna kompatybilność z wyszukiwarkami Google, Bing oraz modelami Gemini, ChatGPT, Perplexity i Claude.
              </p>
            </div>
          </div>
          <button
            id="close-seo-modal-btn"
            onClick={() => setIsSeoModalOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-neutral-200 dark:hover:bg-[#222] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-neutral-200 dark:border-[#262626] px-5 gap-4 bg-neutral-50 dark:bg-[#121212]">
          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`py-3 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'schema'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059]'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" /> Schema.org JSON-LD
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ai')}
            className={`py-3 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'ai'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059]'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> GEO & AI Discovery
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('meta')}
            className={`py-3 text-xs font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'meta'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059]'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" /> Tagi Meta & OpenGraph
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 overflow-y-auto flex-1 font-sans">
          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs text-neutral-600 dark:text-neutral-300">
                  Kod strukturalny Schema.org automatycznie generowany dla robotów wyszukiwarek (Googlebot, Bingbot, GPTBot, GeminiBot):
                </p>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-neutral-200 bg-neutral-100 dark:bg-[#1e1e1e] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333] rounded-lg transition shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" /> Skopiowano JSON!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Kopiuj JSON-LD
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 bg-neutral-900 text-neutral-100 rounded-xl overflow-x-auto text-xs font-mono border border-neutral-800 max-h-80 shadow-inner">
                <pre>{jsonLdString}</pre>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-700 dark:text-neutral-300">
              <div className="p-3.5 bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-[#2e2e2e] rounded-xl shadow-xs">
                <h4 className="font-semibold text-sm text-[#8c6a28] dark:text-[#c5a059] mb-1 flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059]" /> Wymogi Generative Engine Optimization (GEO)
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 font-light">
                  Strona zawiera semantyczną strukturę nagłówków (H1–H3), jasną hierarchię encji Dominika Kuty, szczegółowe opisy technologii (Google AI Studio, Cloudflare, GitHub, WordPress) oraz mierzalne wskaźniki (ROAS, wzrosty ruchu).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] shadow-xs">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-1">🤖 Dostępność dla modeli LLM:</h5>
                  <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 list-disc list-inside">
                    <li>Brak blokad crawlerów GPTBot / PerplexityBot</li>
                    <li>Semantyczny kod HTML5 z unikalnymi ID</li>
                    <li>Meta tag <code className="text-[#8c6a28] dark:text-[#c5a059]">ai-assistant-overview</code></li>
                    <li>Dwujęzyczny feed z Google Translator</li>
                  </ul>
                </div>
                <div className="p-3 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] shadow-xs">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-1">⚡ Szybkość & Core Web Vitals:</h5>
                  <ul className="space-y-1 text-neutral-600 dark:text-neutral-400 list-disc list-inside">
                    <li>Najszybszy czas First Contentful Paint (FCP)</li>
                    <li>Zero zewnętrznych ciężkich frameworków</li>
                    <li>Optymalizacja obrazów i natywny SVG QR</li>
                    <li>Gotowość pod Cloudflare Pages i Edge Cache</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'meta' && (
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] shadow-xs">
                <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5">Tytuł SEO (&lt;title&gt;):</span>
                <span className="font-medium text-slate-900 dark:text-white">{config.seo.metaTitle}</span>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] shadow-xs">
                <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5">Opis SEO (Meta Description):</span>
                <span className="text-neutral-600 dark:text-neutral-300 font-light">{config.seo.metaDescription}</span>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] shadow-xs">
                <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5">Słowa Kluczowe (Keywords):</span>
                <span className="text-neutral-600 dark:text-neutral-300 font-light">{config.seo.keywords}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-neutral-50 dark:bg-[#121212] border-t border-neutral-200 dark:border-[#262626] flex justify-end">
          <button
            type="button"
            onClick={() => setIsSeoModalOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg transition shadow-md"
          >
            Rozumiem, zamknij audyt
          </button>
        </div>
      </div>
    </div>
  );
};
