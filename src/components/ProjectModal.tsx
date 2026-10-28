import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, Check, Copy, Code2, Layers, Cpu, Compass } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'code'>('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between gap-4 bg-neutral-900/90 sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="font-mono text-amber-400">{project.repoName}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">&middot;</span>
            <span className="font-mono">{project.date}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Zamknij"
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Header & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base text-amber-300 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Featured Visual (if present) */}
          {project.image && (
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 aspect-[16/9] bg-neutral-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              {project.badgeHighlight && (
                <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-200 bg-neutral-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
                  {project.badgeHighlight}
                </div>
              )}
            </div>
          )}

          {/* Quantitative Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xs text-neutral-400">{m.label}</span>
                <span className="text-base sm:text-lg font-bold text-white font-mono tabular-nums mt-0.5">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex border-b border-neutral-800 gap-6 text-sm">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-3 font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'border-b-2 border-amber-400 text-amber-400'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Architektura &amp; Rozwiązanie</span>
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`pb-3 font-semibold transition-colors flex items-center gap-2 ${
                activeTab === 'features'
                  ? 'border-b-2 border-amber-400 text-amber-400'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Kluczowe Moduły ({project.keyFeatures.length})</span>
            </button>
            {project.codeSnippet && (
              <button
                onClick={() => setActiveTab('code')}
                className={`pb-3 font-semibold transition-colors flex items-center gap-2 ${
                  activeTab === 'code'
                    ? 'border-b-2 border-amber-400 text-amber-400'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Wgląd w Kod</span>
              </button>
            )}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-mono mb-2">
                  Opis Ogólny &middot; Cel Projektu
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                  <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Wyzwanie Inżynierskie
                  </h5>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                  <h5 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    Rozwiązanie Architektoniczne
                  </h5>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-2">
                  Zastosowane Technologie
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-neutral-800 text-neutral-200 border border-neutral-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-mono mb-3">
                Zaimplementowane Moduły Funkcjonalne
              </h4>
              <ul className="space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-950/40 border border-neutral-800/80">
                    <span className="w-5 h-5 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-400">
                  {project.codeSnippet.filename}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-md border border-neutral-700 flex items-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Skopiowano</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopiuj kod</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-900/90 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-20">
          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== project.githubUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Uruchom Live Demo</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repozytorium GitHub</span>
              <ExternalLink className="w-3 h-3 text-neutral-400" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Zamknij
          </button>
        </div>
      </div>
    </div>
  );
};
