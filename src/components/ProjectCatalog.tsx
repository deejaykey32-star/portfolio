import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, ArrowUpRight, Github, Sparkles, Filter } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectCatalogProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'all' | 'ai' | 'edutech' | 'tools' | 'games' | 'maps';

export const ProjectCatalog: React.FC<ProjectCatalogProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.repoName.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  const categories: { id: FilterCategory; label: string; count: number }[] = [
    { id: 'all', label: 'Wszystkie Projekty', count: projects.length },
    { id: 'ai', label: 'Google AI Studio & AI', count: projects.filter(p => p.category === 'ai').length },
    { id: 'edutech', label: 'Edukacja & EdTech', count: projects.filter(p => p.category === 'edutech').length },
    { id: 'tools', label: 'Narzędzia & Poligrafia', count: projects.filter(p => p.category === 'tools').length },
    { id: 'games', label: 'Gry & Symulacje', count: projects.filter(p => p.category === 'games').length },
    { id: 'maps', label: 'GIS & Kultura', count: projects.filter(p => p.category === 'maps').length },
  ];

  return (
    <section id="catalog" className="py-20 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Pełne Repozytorium Dorobku
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Katalog Wszystkich Projektów
          </h2>
          <p className="text-sm text-neutral-400 max-w-2xl">
            Każdy projekt powstał w odpowiedzi na konkretne wyzwanie inżynierskie lub dydaktyczne. Kliknij projekt, aby zobaczyć pełne studium przypadku, architekturę kodu i metryki.
          </p>
        </div>

        {/* Controls: Search and Segmented Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-10 pb-6 border-b border-neutral-800/80">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-xl overflow-x-auto">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] tabular-nums font-mono ${isActive ? 'text-neutral-900/80' : 'text-neutral-500'}`}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px] sm:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj po technologii, nazwie..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Count and Active Filter Status */}
        <div className="text-xs text-neutral-400 mb-6 flex items-center justify-between">
          <div>
            Znaleziono <span className="font-semibold text-white font-mono tabular-nums">{filteredProjects.length}</span> projektów
            {searchQuery && <span> dla frazy &bdquo;{searchQuery}&rdquo;</span>}
          </div>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-amber-400 hover:underline"
            >
              Resetuj filtry
            </button>
          )}
        </div>

        {/* Grid of Projects */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-neutral-800 bg-neutral-900/30">
            <Filter className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-white mb-1">Brak pasujących projektów</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-4">
              Nie znaleziono wyników dla wybranych kryteriów wyszukiwania. Spróbuj innego zapytania.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors"
            >
              Pokaż wszystkie projekty
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {project.image && (
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative aspect-[16/10] -mx-6 -mt-6 mb-5 overflow-hidden cursor-pointer bg-neutral-950 border-b border-neutral-800/80"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/10 to-transparent" />
                    </div>
                  )}

                  {/* Quiet unboxed metadata */}
                  <div className="text-xs text-neutral-400 mb-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-neutral-300">{project.repoName}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{project.categoryLabel}</span>
                    </div>
                    {project.badgeHighlight && (
                      <span className="text-[11px] text-amber-400 font-mono">
                        {project.date}
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg font-bold text-white group-hover:text-amber-400 cursor-pointer transition-colors mb-2 leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-amber-300/90 font-medium mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-5">
                    {project.summary}
                  </p>

                  {/* Clean tech list */}
                  <div className="text-[11px] text-neutral-400 flex flex-wrap gap-x-2 gap-y-1 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span key={i}>
                        {tech}{i < project.techStack.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-semibold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Studium przypadku</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-neutral-400 hover:text-white transition-colors"
                        title="Otwórz wersję demonstracyjną"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-neutral-400 hover:text-white transition-colors"
                      title="Otwórz kod źródłowy w GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
