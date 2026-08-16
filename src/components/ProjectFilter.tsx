import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectCategory } from '../types';
import { Search, X, Filter, Sparkles, Cpu, Cloud, Github, Layers, Palette, TrendingUp } from 'lucide-react';

export const ProjectFilter: React.FC = () => {
  const { activeCategory, setActiveCategory, searchQuery, setSearchQuery } = usePortfolio();

  const categories: Array<{ id: ProjectCategory; label: string; icon: any }> = [
    { id: 'all', label: 'Wszystkie Projekty', icon: Filter },
    { id: 'apps', label: 'Aplikacje AI & Web', icon: Cpu },
    { id: 'aistudio', label: 'Google AI Studio', icon: Sparkles },
    { id: 'cloudflare', label: 'Cloudflare Pages', icon: Cloud },
    { id: 'github', label: 'GitHub Repos', icon: Github },
    { id: 'wordpress', label: 'WordPress & Headless', icon: Layers },
    { id: 'graphics', label: 'Grafika & UI', icon: Palette },
    { id: 'marketing', label: 'Marketing & SEO', icon: TrendingUp },
  ];

  return (
    <div id="project-filter-section" className="space-y-4 mb-8">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-neutral-500" />
          <input
            id="portfolio-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Szukaj: np. AI Studio, Cloudflare, SEO, WordPress, logo..."
            className="w-full pl-10 pr-9 py-2 bg-white dark:bg-[#161616] border border-neutral-300 dark:border-[#333] rounded-lg text-xs sm:text-sm text-slate-900 dark:text-[#e0e0e0] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-[#b08d4b] dark:focus:border-[#c5a059] transition shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-slate-800 dark:hover:text-white"
              aria-label="Wyczyść wyszukiwanie"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quick filter summary indicator */}
        <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 self-center md:self-auto">
          <span>Kategoria:</span>
          <span className="font-bold text-[#8c6a28] dark:text-[#c5a059]">
            {categories.find(c => c.id === activeCategory)?.label || 'Wszystkie'}
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? 'bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-bold border border-[#b08d4b] dark:border-[#c5a059] shadow-xs'
                  : 'bg-white dark:bg-[#161616] text-slate-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#282828] hover:border-[#b08d4b] dark:hover:border-[#c5a059] hover:text-[#b08d4b] dark:hover:text-[#c5a059]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white dark:text-black' : 'text-[#8c6a28] dark:text-[#c5a059]'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

