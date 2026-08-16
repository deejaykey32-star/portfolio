import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { MarketingCaseStudy } from '../types';
import { X, Save, Trash2, TrendingUp, Target, Plus, Tag, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EditCaseStudyModal: React.FC = () => {
  const { editingCaseStudy, setEditingCaseStudy, caseStudies, addCaseStudy, updateCaseStudy, deleteCaseStudy } = usePortfolio();

  const [formData, setFormData] = useState<MarketingCaseStudy | null>(null);
  const [channelsInput, setChannelsInput] = useState('');
  const [takeawaysInput, setTakeawaysInput] = useState('');

  useEffect(() => {
    if (editingCaseStudy) {
      setFormData({ ...editingCaseStudy });
      setChannelsInput(editingCaseStudy.channels?.join(', ') || '');
      setTakeawaysInput(editingCaseStudy.keyTakeaways?.join('\n') || '');
    } else {
      setFormData(null);
    }
  }, [editingCaseStudy]);

  if (!formData) return null;

  const isExisting = caseStudies.some(c => c.id === formData.id);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const processedChannels = channelsInput
      .split(',')
      .map(c => c.trim())
      .filter(Boolean);

    const processedTakeaways = takeawaysInput
      .split('\n')
      .map(t => t.trim())
      .filter(Boolean);

    const updatedData: MarketingCaseStudy = {
      ...formData,
      channels: processedChannels,
      keyTakeaways: processedTakeaways,
      qrCodeUrl: formData.qrCodeUrl || formData.liveUrl || 'https://github.com/dominikkuta',
    };

    if (isExisting) {
      updateCaseStudy(formData.id, updatedData);
    } else {
      addCaseStudy(updatedData);
    }

    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
    setEditingCaseStudy(null);
  };

  const handleDelete = () => {
    if (confirm(`Czy na pewno chcesz usunąć case study "${formData.title}"?`)) {
      deleteCaseStudy(formData.id);
      setEditingCaseStudy(null);
    }
  };

  const handleResultChange = (index: number, field: 'label' | 'value' | 'change', val: string) => {
    const updatedResults = [...formData.results];
    updatedResults[index] = { ...updatedResults[index], [field]: val };
    setFormData({ ...formData, results: updatedResults });
  };

  const addResultItem = () => {
    setFormData({
      ...formData,
      results: [...formData.results, { label: 'Wskaźnik', value: '+100%', change: 'w 30 dni' }]
    });
  };

  const removeResultItem = (index: number) => {
    const updatedResults = formData.results.filter((_, i) => i !== index);
    setFormData({ ...formData, results: updatedResults });
  };

  return (
    <div
      id="edit-case-study-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setEditingCaseStudy(null)}
    >
      <div
        id="edit-case-study-modal"
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-[#161616] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-neutral-200 overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#121212]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white dark:bg-[#181818] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] shadow-xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                {isExisting ? 'Edytuj Case Study Marketingowe' : 'Dodaj Nowe Case Study'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                Wprowadź strategię, mierzalne rezultaty (ROAS, wzrost konwersji) i referencje klienta.
              </p>
            </div>
          </div>
          <button
            onClick={() => setEditingCaseStudy(null)}
            className="p-1.5 text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-neutral-200 dark:hover:bg-[#222]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-5 overflow-y-auto flex-1 space-y-4 text-xs font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Tytuł Case Study *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Klient / Marka *
              </label>
              <input
                type="text"
                required
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Czas trwania kampanii
              </label>
              <input
                type="text"
                value={formData.timeframe}
                onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                placeholder="90 dni / Q1 2026"
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Kanały dotarcia (oddzielone przecinkami)
              </label>
              <input
                type="text"
                value={channelsInput}
                onChange={(e) => setChannelsInput(e.target.value)}
                placeholder="SEO, Meta Ads, AI Automation"
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Ogólny opis projektu i wyzwania *
            </label>
            <textarea
              rows={2}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
              <Target className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> Strategia i realizacja *
            </label>
            <textarea
              rows={3}
              required
              value={formData.strategy}
              onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          {/* Results Grid editor */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> Wskaźniki i Rezultaty (Metrics)
              </label>
              <button
                type="button"
                onClick={addResultItem}
                className="text-[11px] font-mono text-[#8c6a28] dark:text-[#c5a059] hover:underline flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Dodaj Wskaźnik
              </button>
            </div>

            <div className="space-y-2">
              {formData.results.map((res, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-neutral-50 dark:bg-[#121212] p-2 rounded-lg border border-neutral-200 dark:border-[#282828] shadow-xs">
                  <input
                    type="text"
                    placeholder="Wartość (np. +185%)"
                    value={res.value}
                    onChange={(e) => handleResultChange(idx, 'value', e.target.value)}
                    className="w-28 px-2 py-1 bg-white dark:bg-[#1a1a1a] border border-neutral-300 dark:border-[#333] rounded text-slate-900 dark:text-white font-mono shadow-xs"
                  />
                  <input
                    type="text"
                    placeholder="Etykieta (np. Wzrost konwersji)"
                    value={res.label}
                    onChange={(e) => handleResultChange(idx, 'label', e.target.value)}
                    className="flex-1 px-2 py-1 bg-white dark:bg-[#1a1a1a] border border-neutral-300 dark:border-[#333] rounded text-slate-900 dark:text-white shadow-xs"
                  />
                  <input
                    type="text"
                    placeholder="Zmiana/Kontekst (np. w 90 dni)"
                    value={res.change || ''}
                    onChange={(e) => handleResultChange(idx, 'change', e.target.value)}
                    className="w-32 px-2 py-1 bg-white dark:bg-[#1a1a1a] border border-neutral-300 dark:border-[#333] rounded text-neutral-600 dark:text-neutral-400 font-mono shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => removeResultItem(idx)}
                    className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Kluczowe Wnioski (każdy w nowej linii)
            </label>
            <textarea
              rows={3}
              value={takeawaysInput}
              onChange={(e) => setTakeawaysInput(e.target.value)}
              placeholder="Wniosek 1&#10;Wniosek 2&#10;Wniosek 3"
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Link do Wdrożenia / Repozytorium
              </label>
              <input
                type="url"
                value={formData.liveUrl || ''}
                onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                URL Kodu QR
              </label>
              <input
                type="url"
                value={formData.qrCodeUrl || ''}
                onChange={(e) => setFormData({ ...formData, qrCodeUrl: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-[#262626]">
            {isExisting ? (
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/50 border border-red-200 dark:border-red-900/40 rounded-lg transition shadow-xs"
              >
                <Trash2 className="w-3.5 h-3.5" /> Usuń Case Study
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEditingCaseStudy(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#1e1e1e] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333] rounded-lg transition shadow-xs"
              >
                Anuluj
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg shadow-md transition"
              >
                <Save className="w-3.5 h-3.5" /> Zapisz Case Study
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
