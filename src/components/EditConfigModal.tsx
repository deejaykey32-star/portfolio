import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Save, Type, Sparkles, User, Search, Share2, Palette } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EditConfigModal: React.FC = () => {
  const { isConfigModalOpen, setIsConfigModalOpen, config, updateConfig } = usePortfolio();
  const [formData, setFormData] = useState({ ...config });
  const [activeTab, setActiveTab] = useState<'typography' | 'bio' | 'seo' | 'social' | 'stats'>('typography');

  if (!isConfigModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(formData);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    setIsConfigModalOpen(false);
  };

  return (
    <div
      id="edit-config-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsConfigModalOpen(false)}
    >
      <div
        id="edit-config-modal"
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-[#161616] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-neutral-200 overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#121212]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white dark:bg-[#181818] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] shadow-xs">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                Konfiguracja Witryny & Typografia WYSIWYG
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                Dostosuj czcionki, kolory, biogram, metatagi SEO i statystyki Dominika Kuty.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsConfigModalOpen(false)}
            className="p-1.5 text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-neutral-200 dark:hover:bg-[#222]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-200 dark:border-[#262626] px-5 gap-3 bg-neutral-50/80 dark:bg-[#121212] overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('typography')}
            className={`py-3 text-xs font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'typography'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059] font-bold'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <Type className="w-3.5 h-3.5" /> Typografia & Czcionki
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('bio')}
            className={`py-3 text-xs font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'bio'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059] font-bold'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <User className="w-3.5 h-3.5" /> Hero & Biogram
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('seo')}
            className={`py-3 text-xs font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'seo'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059] font-bold'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <Search className="w-3.5 h-3.5" /> SEO & Metatagi AI
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('social')}
            className={`py-3 text-xs font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'social'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059] font-bold'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" /> Linki & Platformy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('stats')}
            className={`py-3 text-xs font-medium border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'stats'
                ? 'border-[#b08d4b] dark:border-[#c5a059] text-[#8c6a28] dark:text-[#c5a059] font-bold'
                : 'border-transparent text-neutral-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Liczniki & Statystyki
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSave} className="p-5 overflow-y-auto flex-1 text-xs font-sans space-y-4">
          {activeTab === 'typography' && (
            <div className="space-y-4">
              <div className="p-3.5 bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-[#2e2e2e] rounded-xl shadow-xs">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                  Styling & Wielo-czcionkowy silnik typograficzny
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 font-light">
                  Wybierz czcionkę nagłówków i tekstu podstawowego w czasie rzeczywistym.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300">
                    Czcionka Nagłówków (H1–H3)
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'font-serif', name: 'Playfair Display / Serif (Elegancka)', sample: 'Dominik Kuta — Portfolio' },
                      { id: 'font-sans', name: 'Inter / System Sans (Nowoczesna)', sample: 'Dominik Kuta — Portfolio' },
                      { id: 'font-mono', name: 'JetBrains / Space Mono (Tech)', sample: 'Dominik Kuta — Portfolio' },
                    ].map((font) => (
                      <label
                        key={font.id}
                        className={`flex flex-col p-3 rounded-xl border cursor-pointer transition shadow-xs ${
                          formData.typography.headerFont === font.id
                            ? 'border-[#b08d4b] dark:border-[#c5a059] bg-amber-50/50 dark:bg-[#1a1a1a]'
                            : 'border-neutral-200 dark:border-[#2e2e2e] bg-white dark:bg-[#121212] hover:bg-neutral-50 dark:hover:bg-[#181818]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="headerFont"
                            value={font.id}
                            checked={formData.typography.headerFont === font.id}
                            onChange={() => setFormData({
                              ...formData,
                              typography: { ...formData.typography, headerFont: font.id as any }
                            })}
                            className="text-[#b08d4b] dark:text-[#c5a059] focus:ring-[#b08d4b]"
                          />
                          <span className="font-medium text-slate-800 dark:text-neutral-200">{font.name}</span>
                        </div>
                        <span className={`text-base mt-1 ${font.id} text-slate-900 dark:text-white font-bold`}>
                          {font.sample}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300">
                    Czcionka Treści Głównej
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'font-sans', name: 'Plus Jakarta Sans (Wysoka czytelność)', sample: 'Inżynieria promptów i kampanie marketingowe.' },
                      { id: 'font-mono', name: 'Fira Code / Space Mono (Techniczny)', sample: 'Inżynieria promptów i kampanie marketingowe.' },
                    ].map((font) => (
                      <label
                        key={font.id}
                        className={`flex flex-col p-3 rounded-xl border cursor-pointer transition shadow-xs ${
                          formData.typography.bodyFont === font.id
                            ? 'border-[#b08d4b] dark:border-[#c5a059] bg-amber-50/50 dark:bg-[#1a1a1a]'
                            : 'border-neutral-200 dark:border-[#2e2e2e] bg-white dark:bg-[#121212] hover:bg-neutral-50 dark:hover:bg-[#181818]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="bodyFont"
                            value={font.id}
                            checked={formData.typography.bodyFont === font.id}
                            onChange={() => setFormData({
                              ...formData,
                              typography: { ...formData.typography, bodyFont: font.id as any }
                            })}
                            className="text-[#b08d4b] dark:text-[#c5a059] focus:ring-[#b08d4b]"
                          />
                          <span className="font-medium text-slate-800 dark:text-neutral-200">{font.name}</span>
                        </div>
                        <span className={`text-xs mt-1 ${font.id} text-neutral-700 dark:text-neutral-300`}>
                          {font.sample}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bio' && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Imię i Nazwisko</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Rola / Tytuł zawodowy</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Główny Nagłówek Hero (Hero Tagline)</label>
                <input
                  type="text"
                  value={formData.heroTagline}
                  onChange={(e) => setFormData({ ...formData, heroTagline: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Podtytuł Hero</label>
                <textarea
                  rows={2}
                  value={formData.heroSubtitle}
                  onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">O mnie (About Text)</label>
                <textarea
                  rows={3}
                  value={formData.aboutText}
                  onChange={(e) => setFormData({ ...formData, aboutText: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">URL Awatara / Zdjęcia profilowego</label>
                <input
                  type="url"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-3">
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Tytuł SEO (&lt;title&gt;)</label>
                <input
                  type="text"
                  value={formData.seo.metaTitle}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { ...formData.seo, metaTitle: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Opis SEO (Meta Description)</label>
                <textarea
                  rows={2}
                  value={formData.seo.metaDescription}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { ...formData.seo, metaDescription: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Słowa kluczowe (Keywords)</label>
                <input
                  type="text"
                  value={formData.seo.keywords}
                  onChange={(e) => setFormData({
                    ...formData,
                    seo: { ...formData.seo, keywords: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email kontaktowy:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Telefon:</label>
                <input
                  type="text"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">GitHub URL:</label>
                <input
                  type="url"
                  value={formData.socialLinks.github || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, github: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Google AI Studio URL:</label>
                <input
                  type="url"
                  value={formData.socialLinks.aistudio || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, aistudio: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Cloudflare Pages URL:</label>
                <input
                  type="url"
                  value={formData.socialLinks.cloudflare || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, cloudflare: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">WordPress URL:</label>
                <input
                  type="url"
                  value={formData.socialLinks.wordpress || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    socialLinks: { ...formData.socialLinks, wordpress: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Ukończone Projekty</label>
                <input
                  type="number"
                  value={formData.stats.completedProjects}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, completedProjects: parseInt(e.target.value) || 0 }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Zadowoleni Klienci</label>
                <input
                  type="number"
                  value={formData.stats.satisfiedClients}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, satisfiedClients: parseInt(e.target.value) || 0 }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Aplikacje AI</label>
                <input
                  type="number"
                  value={formData.stats.aiAppsLaunched}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, aiAppsLaunched: parseInt(e.target.value) || 0 }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">Średni ROAS</label>
                <input
                  type="text"
                  value={formData.stats.marketingRoas}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, marketingRoas: e.target.value }
                  })}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none shadow-xs"
                />
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 pt-4 border-t border-neutral-200 dark:border-[#262626]">
            <button
              type="button"
              onClick={() => setIsConfigModalOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#1e1e1e] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333] rounded-lg transition shadow-xs"
            >
              Anuluj
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg shadow-md transition"
            >
              <Save className="w-3.5 h-3.5" /> Zapisz Konfigurację
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
