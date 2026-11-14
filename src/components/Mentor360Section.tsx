import React from 'react';
import { ExternalLink, Github, Sparkles, Compass, Code2, Palette, Briefcase, UserCheck, Volume2, ArrowUpRight, CheckCircle2, PlayCircle, Bot, Globe } from 'lucide-react';
import { Project } from '../data/projectsData';
import mentorHeroImage from '../assets/images/mentor360_hero.jpg';

interface Mentor360SectionProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export const Mentor360Section: React.FC<Mentor360SectionProps> = ({ onSelectProject, projects }) => {
  const mentorProject = projects.find(p => p.id === 'mentor360');

  return (
    <section id="mentor360" className="py-20 border-b border-neutral-800 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-neutral-900/40 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ekosystem Google AI Studio &middot; Cloudflare Pages &middot; 7 Etapów Cyklu &middot; Tech English B1–B2</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Mentor 360° &mdash; AI Product &amp; Game Creator &amp; Tech English
            </h2>
            
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 max-w-3xl">
              Holistyczna platforma mentorska i akademia tworzenia gier, stron WWW i aplikacji multi-platform z asystą modeli AI oraz intensywną nauką branżowego języka angielskiego (<strong className="text-white font-semibold">Tech &amp; Business English B1–B2</strong>). Przeprowadza twórcę przez <strong className="text-white font-semibold">7 strategicznych etapów cyklu produktu</strong>: od rozmowy z klientem i briefu, przez UI/UX, multimedia AI, kod multi-platform, bezpieczeństwo i Git, po skalowanie, utrzymanie oraz rekrutację i budowę portfolio.
            </p>

            {/* Direct CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://mentor360-89v.pages.dev"
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-indigo-400 hover:bg-indigo-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Uruchom aplikację na żywo (mentor360-89v.pages.dev)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/deejaykey32-star/mentor360"
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repozytorium GitHub (@deejaykey32-star/mentor360)</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              {mentorProject && (
                <button
                  onClick={() => onSelectProject(mentorProject)}
                  className="px-4 py-2.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-400/10 hover:bg-indigo-400/20 border border-indigo-400/30 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Szczegóły architektury &amp; metryki</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: 4 Perspectives Card */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl max-w-sm w-full flex flex-col items-center text-center">
              <div className="relative mb-4 w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-tr from-indigo-950 via-neutral-900 to-purple-950/40 p-2 border border-neutral-700/80 flex items-center justify-center">
                <Compass className="w-16 h-16 text-indigo-400 animate-pulse drop-shadow-md" />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-400 text-neutral-950">
                  360° AI
                </div>
              </div>

              <div className="text-base font-bold text-white mb-1">4 Perspektywy Roli (Widok 360°)</div>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Każdy etap analizowany jest z 4 kątów: Programisty (Dev), Projektanta (Artist), Właściciela Biznesu (PM) oraz Rekrutera Tech (HR).
              </p>

              <div className="w-full pt-3 border-t border-neutral-800 grid grid-cols-2 gap-2 text-[11px] text-neutral-300 font-mono text-left">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Code2 className="w-3 h-3" />
                  Developer
                </span>
                <span className="flex items-center gap-1 text-purple-400">
                  <Palette className="w-3 h-3" />
                  Artist &amp; UI
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Briefcase className="w-3 h-3" />
                  Business PM
                </span>
                <span className="flex items-center gap-1 text-cyan-400">
                  <UserCheck className="w-3 h-3" />
                  Recruiter HR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Distinctive Showcase Illustration Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl relative aspect-[16/9] md:aspect-[21/9]">
          <img
            src={mentorHeroImage}
            alt="Ilustracja wyróżniająca Mentor 360: studio twórcy produktów cyfrowych i gamedevu z AI"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-950/90 border border-neutral-700/80 text-xs font-mono text-indigo-400 mb-2 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>7 Etapów Cyklu Życia Produktu Cyfrowego &middot; Tech English B1&rarr;B2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                Tworzenie Gier, Aplikacji Web i Mobile z AI &middot; Prawdziwe Scenariusze Klienta
              </h3>
            </div>
            <a
              href="https://mentor360-89v.pages.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-indigo-400 hover:bg-indigo-300 rounded-lg transition-colors inline-flex items-center gap-2 self-start sm:self-auto shrink-0 shadow-md"
            >
              <span>Zobacz na żywo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Pillars of Knowledge & Product Cycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1: Client & Scope */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Klient, Brief i Scope Creep</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Prowadzenie rozmów rozpoznawczych (Client Discovery Call), wycena etapowa, spisywanie bezpiecznego briefu i precyzyjne definiowanie zakresu MVP po angielsku.
              </p>
            </div>
            <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>MVP Locking &middot; Discovery Call</span>
            </div>
          </div>

          {/* Pillar 2: UI/UX & Generative Prompts */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">UI/UX, Multimedia &amp; Gamedev</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Projektowanie design systemów i makiet, prompty generatywne Midjourney dla UI, tworzenie assetów 2D/3D, audio i efektów dźwiękowych do gier oraz aplikacji.
              </p>
            </div>
            <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Design System &middot; Asset Pipeline</span>
            </div>
          </div>

          {/* Pillar 3: Multi-Platform Code & Git Security */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Kod Multi-Platform &amp; Git</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Full-stackowa implementacja w React 19, TypeScript i Vite, bezserwerowe wdrożenia brzegowe na Cloudflare Pages, audyt bezpieczeństwa i profesjonalny workflow Git.
              </p>
            </div>
            <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>React 19 &middot; Cloudflare &middot; Git Flow</span>
            </div>
          </div>

          {/* Pillar 4: Tech Career & Business English */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Kariera Tech &amp; Język B1–B2</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Przygotowanie do rozmów rekrutacyjnych po angielsku, słownictwo branżowe z audio, aktywne zadania konwersacyjne, quizy i prezentacja portfolio dla klientów z USA/UK.
              </p>
            </div>
            <div className="text-[11px] font-mono text-indigo-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Tech English &middot; Portfolio Case Study</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
              Natywne Wdrożenie Cloudflare Pages &middot; Google AI Studio &middot; Gemini API
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Interaktywny warsztat, transkrypty z timecode i symulator projektowy
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              Aplikacja łączy ćwiczenia cloze, bazę terminologii IT/Gamedev, gotowe szablony promptów dla modeli AI, odtwarzacze wideo z YouTube oraz multimodalnego asystenta opartego na SDK <code className="font-mono text-neutral-300">@google/genai</code>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://mentor360-89v.pages.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-indigo-400 hover:bg-indigo-300 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Zobacz Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/deejaykey32-star/mentor360"
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Kod na GitHubie</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
