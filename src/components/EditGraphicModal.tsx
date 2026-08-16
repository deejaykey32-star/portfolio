import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraphicItem } from '../types';
import { X, Save, Trash2, Palette, Sparkles, Tag, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EditGraphicModal: React.FC = () => {
  const { editingGraphic, setEditingGraphic, graphics, addGraphic, updateGraphic, deleteGraphic } = usePortfolio();

  const [formData, setFormData] = useState<GraphicItem | null>(null);
  const [tagsInput, setTagsInput] = useState('');

  useEffect(() => {
    if (editingGraphic) {
      setFormData({ ...editingGraphic });
      setTagsInput(editingGraphic.tags?.join(', ') || '');
    } else {
      setFormData(null);
    }
  }, [editingGraphic]);

  if (!formData) return null;

  const isExisting = graphics.some(g => g.id === formData.id);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const processedTags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const updatedData: GraphicItem = {
      ...formData,
      tags: processedTags,
      qrCodeUrl: formData.qrCodeUrl || formData.fullResolutionUrl || formData.imageUrl,
    };

    if (isExisting) {
      updateGraphic(formData.id, updatedData);
    } else {
      addGraphic(updatedData);
    }

    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
    setEditingGraphic(null);
  };

  const handleDelete = () => {
    if (confirm(`Czy na pewno chcesz usunąć kreację graficzną "${formData.title}"?`)) {
      deleteGraphic(formData.id);
      setEditingGraphic(null);
    }
  };

  return (
    <div
      id="edit-graphic-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setEditingGraphic(null)}
    >
      <div
        id="edit-graphic-modal"
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-[#161616] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-neutral-200 overflow-hidden transition-colors"
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
                {isExisting ? 'Edytuj Kreację Graficzną / UI' : 'Dodaj Nową Grafikę / UI'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                Zarządzaj kreacjami, linkami graficznymi, tagami i kodami QR.
              </p>
            </div>
          </div>
          <button
            onClick={() => setEditingGraphic(null)}
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
                Tytuł Kreacji / Projektu *
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Kategoria
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              >
                <option value="branding">Identyfikacja & Branding</option>
                <option value="ui-ux">Interfejsy UI / UX</option>
                <option value="social-media">Reklamy Social Media</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Rok
              </label>
              <input
                type="text"
                value={formData.year || ''}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="2026"
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Wymiary / Format
              </label>
              <input
                type="text"
                value={formData.dimensions || ''}
                onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                placeholder="1920 x 1080 px"
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Adres URL Obrazka (Okładka) *
            </label>
            <input
              type="url"
              required
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Adres URL Pełnej Rozdzielczości (opcjonalnie do Lightbox)
            </label>
            <input
              type="url"
              value={formData.fullResolutionUrl || ''}
              onChange={(e) => setFormData({ ...formData, fullResolutionUrl: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Opis Kreacji
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> Tagi (oddzielone przecinkami)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="Branding, Figma, UI/UX, Key Visual"
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
              <ExternalLink className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> URL Kodu QR / Podglądu
            </label>
            <input
              type="url"
              value={formData.qrCodeUrl || ''}
              onChange={(e) => setFormData({ ...formData, qrCodeUrl: e.target.value })}
              placeholder="https://behance.net/..."
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-[#262626]">
            {isExisting ? (
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/50 border border-red-200 dark:border-red-900/40 rounded-lg transition shadow-xs"
              >
                <Trash2 className="w-3.5 h-3.5" /> Usuń Grafikę
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEditingGraphic(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#1e1e1e] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333] rounded-lg transition shadow-xs"
              >
                Anuluj
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg shadow-md transition"
              >
                <Save className="w-3.5 h-3.5" /> Zapisz Kreację
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
