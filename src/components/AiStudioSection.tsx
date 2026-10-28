import React from 'react';
import { ExternalLink, Sparkles, Cpu, Bot, Flame, ShieldCheck, Zap } from 'lucide-react';
import { Project } from '../data/projectsData';

interface AiStudioSectionProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export const AiStudioSection: React.FC<AiStudioSectionProps> = ({ onSelectProject, projects }) => {
  const aiStudioApps = projects.filter(p => p.category === 'ai' || p.repoName === 'walkie');

  return (
    <section id="ai-studio" className="py-20 border-b border-neutral-800 bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Google AI Studio &middot; Cloud Run &middot; Gemini Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Ekosystem Aplikacji Google AI Studio
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed mb-6">
            Jako aktywny inżynier w środowisku <strong className="text-white font-semibold">Google AI Studio</strong> tworzę zaawansowane aplikacje full-stack bazujące na najnowszych modelach Gemini (Gemini 2.5 &amp; 2.0). Od multimodalnej analizy dokumentacji PDF, po P2P WebRTC audio walkie-talkie i automatyczne generatory materiałów edukacyjnych.
          </p>

          <a
            href="https://github.com/deejaykey32-star"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors shadow-sm"
          >
            <span>Zobacz repozytoria projektów na GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

        {/* 3 Pillars of AI Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 mb-4">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Multimodalny Gemini API</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Wykorzystanie SDK <code className="font-mono text-neutral-300">@google/genai</code> do analizy struktury dokumentów PDF, generowania interaktywnych testów oraz semantycznej syntezy treści edukacyjnych.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 mb-4">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Firebase &amp; Real-Time Data</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Chmurowa synchronizacja danych w Firestore, rejestracja postępów nauki, bezpieczne reguły firestore.rules oraz bezstanowe środowiska Cloud Run.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-amber-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Audio, WebRTC &amp; Capacitor</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Kompilacja aplikacji mobilnych Android (Capacitor), bezpośredni streaming dźwięku P2P z zerowym lagiem i naprawa nagłówków binarnego strumienia WebM.
            </p>
          </div>
        </div>

        {/* AI Studio Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiStudioApps.map(project => (
            <div
              key={project.id}
              className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between overflow-hidden group"
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

                <div className="text-xs text-neutral-400 mb-2 flex items-center justify-between">
                  <span>{project.repoName}</span>
                  <span className="font-mono text-amber-400 text-[11px]">AI Studio</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6 text-[11px] text-neutral-400">
                  {project.techStack.slice(0, 3).map((t, idx) => (
                    <span key={idx}>
                      {t}{idx < 2 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  Szczegóły &amp; Architektura
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      title="Otwórz wersję demonstracyjną"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-neutral-400 hover:text-white transition-colors"
                    title="Zobacz repozytorium GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
