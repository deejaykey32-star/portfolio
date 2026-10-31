import React from 'react';
import { ExternalLink, Github, Sparkles, Briefcase, Users, Layers, Award, Smartphone, Volume2, ArrowUpRight, CheckCircle2, Bot } from 'lucide-react';
import { Project } from '../data/projectsData';
import projedudeiIcon from '../assets/images/projedudei_kurak_icon.png';

interface ProjedudeiSectionProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export const ProjedudeiSection: React.FC<ProjedudeiSectionProps> = ({ onSelectProject, projects }) => {
  const projedudeiProject = projects.find(p => p.id === 'projedudei');

  return (
    <section id="projedudei" className="py-20 border-b border-neutral-800 bg-gradient-to-b from-neutral-900/50 via-neutral-950 to-neutral-900/40 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Ekosystem EduDei &middot; Cloudflare Pages &middot; Next.js 15</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              ProjEduDei &mdash; AI Project &amp; Product Master z Kurakiem
            </h2>
            
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 max-w-3xl">
              Nowoczesna aplikacja edukacyjno-certyfikacyjna dla <strong className="text-white font-semibold">Project Managerów, Scrum Masterów, Product Ownerów</strong> oraz <strong className="text-white font-semibold">AI Product Builderów</strong>. Uczy, jak bezpośrednio rozmawiać z klientami biznesowymi, badać ich potrzeby i tworzyć pełnowymiarowe aplikacje na zamówienie z wykorzystaniem modeli sztucznej inteligencji (Vibe Coding, AI Agents, Cloudflare, Supabase) &mdash; całkowicie <strong className="text-amber-300 font-semibold">omijając powolne, kosztowne zespoły programistyczne</strong>.
            </p>

            {/* Direct CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://projedudei.pages.dev"
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Uruchom aplikację na żywo (projedudei.pages.dev)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/deejaykey32-star/projedudei"
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repozytorium GitHub (@deejaykey32-star/projedudei)</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              {projedudeiProject && (
                <button
                  onClick={() => onSelectProject(projedudeiProject)}
                  className="px-4 py-2.5 text-xs font-semibold text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Szczegóły architektury &amp; metryki</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Mascot & Badges */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl max-w-sm w-full flex flex-col items-center text-center">
              <div className="relative mb-4 w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-950 via-neutral-900 to-amber-950/40 p-2 border border-neutral-700/80 flex items-center justify-center">
                <img
                  src={projedudeiIcon}
                  alt="Niebieski Kurak PM z aktówką"
                  className="w-24 h-24 object-contain drop-shadow-md"
                />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-neutral-950">
                  PM AI
                </div>
              </div>

              <div className="text-base font-bold text-white mb-1">Niebieski Kurak PM</div>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Mentor w biznesowym garniturze z aktówką. Wbudowany lektor Web Speech API (pl-PL) czyta na głos teorię, pytania egzaminacyjne i symulacje rozmów z klientami.
              </p>

              <div className="w-full pt-3 border-t border-neutral-800 flex items-center justify-around text-[11px] text-neutral-400 font-mono">
                <span className="flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  TTS pl-PL
                </span>
                <span>&middot;</span>
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                  PWA / APK
                </span>
                <span>&middot;</span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  PMP &amp; PSM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Knowledge & Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Project Manager &amp; PMP</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Globalne standardy dostarczania projektów na czas i w budżecie: PMP (PMI), PRINCE2 (Foundation &amp; Practitioner) oraz IPMA (A-D) z bazą wiedzy i testami.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Standardy PMI &amp; AXELOS</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Scrum Master &amp; PSM</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Kompleksowe przygotowanie do egzaminów PSM I-III (Scrum.org), CSM oraz DASSM. Facylitacja ceremonii zwinnych, usuwanie przeszkód i adaptacja w erze AI.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Scrum.org &amp; Scrum Alliance</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Product Owner &amp; PSPO</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Zarządzanie Product Backlogiem, optymalizacja ROI i priorytetyzacja wartości: PSPO I-III, CSPO oraz Product Management wg metodyk Pragmatic Institute.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Maksymalizacja Wartości Biznesowej</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">AI Builder &amp; Vibe Coding</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Tworzenie gotowych aplikacji na żywo podczas rozmowy z klientem przy użyciu agentów AI, architektury Serverless i Cloudflare bez oczekiwania na programistów.
              </p>
            </div>
            <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Supabase &middot; Cloudflare &middot; AI Agents</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Natywne Wdrożenie Cloudflare Pages &middot; Next.js 15
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Pełny ekosystem instalacyjny: Web, Android APK, iOS IPA oraz pakiet Offline
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              Aplikacja została zbudowana w architekturze Next.js Static Export, gwarantując zerowy czas odpowiedzi brzegowej, wsparcie instalacji PWA na urządzeniach mobilnych oraz całkowitą prywatność użytkownika.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://projedudei.pages.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Zobacz Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/deejaykey32-star/projedudei"
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
