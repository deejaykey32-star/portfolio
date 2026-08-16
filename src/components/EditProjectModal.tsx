import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem, PlatformType } from '../types';
import { X, Save, Trash2, Image as ImageIcon, QrCode, ExternalLink, Tag, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EditProjectModal: React.FC = () => {
  const { editingProject, setEditingProject, projects, addProject, updateProject, deleteProject } = usePortfolio();

  const [formData, setFormData] = useState<ProjectItem | null>(null);
  const [tagsInput, setTagsInput] = useState('');

  useEffect(() => {
    if (editingProject) {
      setFormData({ ...editingProject });
      setTagsInput(editingProject.tags?.join(', ') || '');
    } else {
      setFormData(null);
    }
  }, [editingProject]);

  if (!formData) return null;

  const isExisting = projects.some(p => p.id === formData.id);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const processedTags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const updatedData: ProjectItem = {
      ...formData,
      tags: processedTags,
      qrCodeUrl: formData.qrCodeUrl || formData.demoUrl || formData.repoUrl || 'https://aistudio.google.com',
    };

    if (isExisting) {
      updateProject(formData.id, updatedData);
    } else {
      addProject(updatedData);
    }

    confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    setEditingProject(null);
  };

  const handleDelete = () => {
    if (confirm(`Czy na pewno chcesz usunąć projekt "${formData.title}"?`)) {
      deleteProject(formData.id);
      setEditingProject(null);
    }
  };

  const sampleImages = [
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  ];

  return (
    <div
      id="edit-project-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setEditingProject(null)}
    >
      <div
        id="edit-project-modal"
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-[#161616] rounded-2xl shadow-2xl border border-neutral-200 dark:border-[#2e2e2e] text-slate-800 dark:text-neutral-200 overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-[#262626] bg-neutral-50 dark:bg-[#121212]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white dark:bg-[#181818] border border-neutral-200 dark:border-[#333] text-[#8c6a28] dark:text-[#c5a059] shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                {isExisting ? 'Edytuj Projekt / Aplikację' : 'Dodaj Nowy Projekt'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                Wprowadź dane projektu, linki do platform (GitHub, Cloudflare, AI Studio, WP) i kod QR.
              </p>
            </div>
          </div>
          <button
            onClick={() => setEditingProject(null)}
            className="p-1.5 text-neutral-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-neutral-200 dark:hover:bg-[#222]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="p-5 overflow-y-auto flex-1 space-y-4 text-xs font-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Tytuł Projektu *
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
                Kategoria Główna
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              >
                <option value="apps">Aplikacje AI & Web</option>
                <option value="graphics">Grafika & Identyfikacja</option>
                <option value="marketing">Kampanie & Marketing</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Główna Platforma / Ekosystem
              </label>
              <select
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value as PlatformType })}
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              >
                <option value="aistudio">Google AI Studio</option>
                <option value="cloudflare">Cloudflare Pages & Workers</option>
                <option value="github">GitHub Open-Source</option>
                <option value="wordpress">WordPress & WooCommerce</option>
                <option value="figma">Figma & UI/UX</option>
                <option value="live">Strona Live / Aplikacja</option>
                <option value="other">Inna platforma</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Mierzalny Wskaźnik / Metryka (np. +240% konwersji)
              </label>
              <input
                type="text"
                value={formData.metrics || ''}
                onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                placeholder="+180% wzrost indeksacji"
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Krótki opis
            </label>
            <textarea
              rows={2}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          {/* Links Grid */}
          <div className="p-3.5 bg-neutral-50 dark:bg-[#121212] rounded-xl border border-neutral-200 dark:border-[#282828] space-y-2.5 shadow-xs">
            <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> Linki do projektów (wskazują do kodu QR)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label className="block text-[11px] text-neutral-500 dark:text-neutral-400 mb-0.5">Google AI Studio URL:</label>
                <input
                  type="url"
                  value={formData.aiStudioUrl || ''}
                  onChange={(e) => setFormData({ ...formData, aiStudioUrl: e.target.value })}
                  placeholder="https://aistudio.google.com/..."
                  className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181818] border border-neutral-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white shadow-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-500 dark:text-neutral-400 mb-0.5">Cloudflare Pages URL:</label>
                <input
                  type="url"
                  value={formData.cloudflareUrl || ''}
                  onChange={(e) => setFormData({ ...formData, cloudflareUrl: e.target.value })}
                  placeholder="https://pages.cloudflare.com/..."
                  className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181818] border border-neutral-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white shadow-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-500 dark:text-neutral-400 mb-0.5">GitHub Repozytorium URL:</label>
                <input
                  type="url"
                  value={formData.repoUrl || ''}
                  onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                  placeholder="https://github.com/dominikkuta/..."
                  className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181818] border border-neutral-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white shadow-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] text-neutral-500 dark:text-neutral-400 mb-0.5">WordPress / Live Demo URL:</label>
                <input
                  type="url"
                  value={formData.demoUrl || ''}
                  onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                  placeholder="https://twojastrona.pl"
                  className="w-full px-2.5 py-1.5 bg-white dark:bg-[#181818] border border-neutral-300 dark:border-[#333] rounded-lg text-slate-900 dark:text-white shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* QR Code & Image Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> Adres docelowy Kodu QR
              </label>
              <input
                type="url"
                value={formData.qrCodeUrl}
                onChange={(e) => setFormData({ ...formData, qrCodeUrl: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
              />
            </div>

            <div>
              <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Kolor Kodu QR
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.qrCodeColor || '#c5a059'}
                  onChange={(e) => setFormData({ ...formData, qrCodeColor: e.target.value })}
                  className="w-9 h-9 p-0.5 rounded-lg border border-neutral-300 dark:border-[#333] cursor-pointer bg-transparent"
                />
                <input
                  type="text"
                  value={formData.qrCodeColor || '#c5a059'}
                  onChange={(e) => setFormData({ ...formData, qrCodeColor: e.target.value })}
                  className="flex-1 px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg text-slate-900 dark:text-white font-mono text-xs shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Image URL & Quick sample picker */}
          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> URL Grafiki / Okładki projektu
            </label>
            <input
              type="url"
              required
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
            <div className="flex items-center gap-1.5 mt-2 overflow-x-auto pb-1">
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 shrink-0">Wybierz przykładowe:</span>
              {sampleImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="sample"
                  onClick={() => setFormData({ ...formData, imageUrl: img })}
                  className="w-10 h-8 object-cover rounded border border-neutral-300 dark:border-[#333] cursor-pointer hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#8c6a28] dark:text-[#c5a059]" /> Tagi technologii (oddzielone przecinkami)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="Google AI Studio, Cloudflare, React, SEO, WordPress"
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-[#121212] border border-neutral-300 dark:border-[#2e2e2e] rounded-lg focus:border-[#b08d4b] dark:focus:border-[#c5a059] focus:outline-none text-slate-900 dark:text-white shadow-xs"
            />
          </div>

          {/* Featured checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="featured-checkbox"
              checked={formData.featured || false}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 text-[#b08d4b] dark:text-[#c5a059] rounded focus:ring-[#b08d4b] dark:focus:ring-[#c5a059] bg-white dark:bg-[#121212] border-neutral-300 dark:border-[#333]"
            />
            <label htmlFor="featured-checkbox" className="text-xs font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer">
              Wyróżnij projekt na samej górze (Featured Badge)
            </label>
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-[#262626]">
            {isExisting ? (
              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/50 border border-red-200 dark:border-red-900/40 rounded-lg transition shadow-xs"
              >
                <Trash2 className="w-3.5 h-3.5" /> Usuń Projekt
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setEditingProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-neutral-300 bg-neutral-100 dark:bg-[#1e1e1e] hover:bg-neutral-200 dark:hover:bg-[#282828] border border-neutral-200 dark:border-[#333] rounded-lg transition shadow-xs"
              >
                Anuluj
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white dark:text-black bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#b08d4b] rounded-lg shadow-md transition"
              >
                <Save className="w-3.5 h-3.5" /> Zapisz Zmiany
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
