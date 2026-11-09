import React from 'react';
import { ExternalLink, Github, Sparkles, Terminal, Palette, TrendingUp, Award, PlayCircle, Volume2, ArrowUpRight, CheckCircle2, Code2, Headphones, Layers } from 'lucide-react';
import { Project } from '../data/projectsData';
import vibedudeiShowcase from '../assets/images/vibedudei_showcase.jpg';

interface VibedudeiSectionProps {
  onSelectProject: (project: Project) => void;
  projects: Project[];
}

export const VibedudeiSection: React.FC<VibedudeiSectionProps> = ({ onSelectProject, projects }) => {
  const vibedudeiProject = projects.find(p => p.id === 'vibedudei');

  return (
    <section id="vibedudei" className="py-20 border-b border-neutral-800 bg-gradient-to-b from-neutral-900/60 via-neutral-950 to-neutral-900/40 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ekosystem EduDei &middot; Cloudflare Pages &middot; React 19 &middot; Vibe Coding AI</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
              VibeEduDei &mdash; Nauka Vibe Codingu z AI &amp; Tarcza 48 Tematów
            </h2>
            
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6 max-w-3xl">
              Interaktywna platforma edukacyjna łącząca naukę nowoczesnego <strong className="text-white font-semibold">Vibe Codingu</strong>, <strong className="text-white font-semibold">Prompt Engineeringu</strong>, <strong className="text-white font-semibold">grafiki AI &amp; multimediów</strong> oraz <strong className="text-white font-semibold">zarządzania produktem (PSM, PSPO, PMP)</strong> z całościowym zanurzeniem w języku angielskim. Zawiera interaktywną <strong className="text-white font-semibold">Tarczę 48 Tematów</strong>, zintegrowane odtwarzacze wideo z YouTube, moduł wymowy Web Speech API oraz codzienny system powtórek SRS.
            </p>

            {/* Direct CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://vibedudei.pages.dev"
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <span>Uruchom aplikację na żywo (vibedudei.pages.dev)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/deejaykey32-star/vibedudei"
                target="_blank"
                rel="noreferrer noopener"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Repozytorium GitHub (@deejaykey32-star/vibedudei)</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>

              {vibedudeiProject && (
                <button
                  onClick={() => onSelectProject(vibedudeiProject)}
                  className="px-4 py-2.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-400/10 hover:bg-emerald-400/20 border border-emerald-400/30 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Szczegóły architektury &amp; metryki</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Mascot Card & Web Speech Badge */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-end">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl max-w-sm w-full flex flex-col items-center text-center">
              <div className="relative mb-4 w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-tr from-emerald-950 via-neutral-900 to-cyan-950/40 p-2 border border-neutral-700/80 flex items-center justify-center">
                {/* SVG Vibe-Kurak mascot */}
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-md"
                  aria-label="Vibe-Kurak"
                >
                  <circle cx="50" cy="52" r="42" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                  <path d="M34 22 C32 10, 44 10, 46 20 C49 8, 60 8, 59 20 C65 12, 73 18, 66 28 Z" fill="#ef4444" />
                  <ellipse cx="50" cy="56" rx="26" ry="28" fill="#f8fafc" stroke="#1e293b" strokeWidth="2.5" />
                  <rect x="28" y="38" width="44" height="14" rx="7" fill="#10b981" stroke="#064e3b" strokeWidth="2" />
                  <circle cx="40" cy="45" r="3.2" fill="#ffffff" />
                  <circle cx="60" cy="45" r="3.2" fill="#ffffff" />
                  <path d="M23 46 C20 46, 20 62, 34 65" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="35" cy="65" r="3.5" fill="#06b6d4" />
                  <polygon points="44,54 56,54 50,63" fill="#f97316" stroke="#1e293b" strokeWidth="1.5" />
                  <ellipse cx="46" cy="67" rx="3" ry="5" fill="#ef4444" />
                  <ellipse cx="54" cy="67" rx="3" ry="5" fill="#ef4444" />
                  <circle cx="50" cy="77" r="5" fill="#fbbf24" stroke="#1e293b" strokeWidth="1.5" />
                </svg>
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-400 text-neutral-950">
                  VIBE AI
                </div>
              </div>

              <div className="text-base font-bold text-white mb-1">Vibe-Kurak &middot; AI Coding Mentor</div>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Przewodnik z zielonym cyber-wizjerem i headsetem AI. Odsłuchuje i syntetyzuje angielskie prompty (Web Speech API), wspiera shadowing, dictation oraz tryb zwolniony 0.75x.
              </p>

              <div className="w-full pt-3 border-t border-neutral-800 flex items-center justify-around text-[11px] text-neutral-400 font-mono">
                <span className="flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                  Web Speech TTS
                </span>
                <span>&middot;</span>
                <span className="flex items-center gap-1">
                  <Headphones className="w-3.5 h-3.5 text-emerald-400" />
                  Shadowing EN
                </span>
                <span>&middot;</span>
                <span className="flex items-center gap-1">
                  <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
                  YouTube Labs
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Distinctive Showcase Illustration Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl relative aspect-[16/9] md:aspect-[21/9]">
          <img
            src={vibedudeiShowcase}
            alt="Ilustracja wyróżniająca VibeEduDei: tarcza 48 tematów, Vibe-Kurak, środowisko Vibe Codingu z AI"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-950/90 border border-neutral-700/80 text-xs font-mono text-emerald-400 mb-2 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interaktywna Tarcza 48 Tematów &middot; Vibe Coding po Angielsku</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                Pełny Cykl 2 Lat &middot; 4 Domeny &middot; 6 Poziomów Biegłości (V1 &rarr; V6)
              </h3>
            </div>
            <a
              href="https://vibedudei.pages.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center gap-2 self-start sm:self-auto shrink-0 shadow-md"
            >
              <span>Zobacz na żywo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Pillars of Knowledge Wheel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1: Coding & Prompts */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Programowanie &amp; Vibe Coding</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Architektura aplikacji webowych z Claude, Gemini i Copilot: React 19, TypeScript, Serverless, Cloudflare Workers, bazy Supabase oraz zaawansowany prompt chaining.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full-Stack AI &middot; Zero-Lag</span>
            </div>
          </div>

          {/* Pillar 2: AI Graphics & Multimedia */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Grafika AI &amp; Multimedia</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Projektowanie UI/UX w erze generatywnej: prompty Midjourney, DALL-E 3, generowanie wideo Runway, integracje z Figma AI oraz produkcja assetów graficznych.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Midjourney &middot; Figma &middot; Video</span>
            </div>
          </div>

          {/* Pillar 3: E-Marketing & Growth */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">E-Marketing &amp; Growth AI</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Szybkie skalowanie i monetyzacja produktów: AI Copywriting, SEO oparte na LLM, analityka behawioralna, optymalizacja lejków sprzedaży i automatyzacje mailingowe.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SEO Prompts &middot; Konwersja</span>
            </div>
          </div>

          {/* Pillar 4: Management & Certifications */}
          <div className="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Management &amp; Certyfikacje</h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Przygotowanie do międzynarodowych certyfikatów w języku angielskim: Scrum Master (PSM I-III), Product Owner (PSPO), PMP oraz zwinne prowadzenie zespołów AI.
              </p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>PSM &middot; PSPO &middot; PMP</span>
            </div>
          </div>
        </div>

        {/* Learning Engine Highlights Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Natywne Wdrożenie Cloudflare Pages &middot; React 19 &middot; Vite
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Zintegrowany odtwarzacz wideo YouTube, shadowing wymowy i powtórki SRS
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
              Platforma łączy praktykę pisania 5 promptów dziennie, cykl powtórek interwałowych (SRS), testy wielokrotnego wyboru oraz ćwiczenia shadowing oparte na Web Speech API, serwowane w architekturze SPA o zerowej latencji.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://vibedudei.pages.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Zobacz Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/deejaykey32-star/vibedudei"
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
