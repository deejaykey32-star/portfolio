import React, { useState } from 'react';
import { Mail, Github, Sparkles, Check, Copy, Terminal, Shield, Award, Send } from 'lucide-react';
import { SKILL_DOMAINS, ENGINEER_PROFILE_IMAGE } from '../data/projectsData';

export const AboutContact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'kuta.dominik@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-20 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Dominik Kuta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <div className="relative mb-6 rounded-2xl overflow-hidden border border-neutral-800 aspect-[4/3] bg-neutral-900 group shadow-lg">
              <img
                src={ENGINEER_PROFILE_IMAGE}
                alt="Dominik Kuta — Software Engineer & Technology Architect"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Dominik Kuta</span>
                <span className="text-[11px] font-mono text-amber-400 bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-800">
                  Tech Architect
                </span>
              </div>
            </div>

            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              Profil Inżyniera
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Dominik Kuta
            </h2>
            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                Jestem inżynierem oprogramowania i twórcą technologii łączących sztuczną inteligencję, edukację multimedialną oraz precyzyjne systemy cyfrowe.
              </p>
              <p>
                Moje projekty charakteryzują się głębokim podejściem do optymalizacji i niezawodności: od tworzenia bezkompromisowych, w 100% klienckich silników (Vanilla JS, WebAssembly, Web Audio API), przez architekturę mikrousług w Google Cloud, po natywne prototypowanie i wdrożenia produkcyjne w ekosystemie <strong className="text-white font-semibold">Google AI Studio</strong>.
              </p>
              <p>
                Szczególną pasją darzę projekty o wysokiej wartości edukacyjnej i społecznej — takie jak seria <strong className="text-white font-semibold">EduDei</strong>, symulatory bioinformatyczne genomu ludzkiego oraz platformy wspierające wielkie wydarzenia kulturalno-kartograficzne w Polsce.
              </p>
            </div>

            {/* Quick credentials */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80 space-y-3 text-xs text-neutral-400">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>GitHub ID: <strong className="text-white font-mono">deejaykey32-star</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Twórca aplikacji w Google AI Studio</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Zgodność ze standardami DTP, WebRTC i bioinformatyki</span>
              </div>
            </div>
          </div>

          {/* Pillars of competence */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono mb-4">
              Filary Kompetencji &middot; Dziedziny
            </div>

            {SKILL_DOMAINS.map((domain, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-base font-bold text-white">
                    {domain.title}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500 tabular-nums">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  {domain.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-neutral-400">
                  {domain.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="font-mono text-neutral-400">
                      {tool}{tIdx < domain.tools.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Block */}
        <div className="rounded-2xl bg-neutral-900 border border-neutral-800 p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Nawiążmy Współpracę
          </h3>

          <p className="text-sm text-neutral-300 max-w-lg mx-auto mb-8 leading-relaxed">
            Interesuje Cię wdrożenie zaawansowanej aplikacji w Google AI Studio, autorski system e-learningowy lub dedykowane narzędzie inżynieryjne? Napisz do mnie.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Napisz wiadomość ({email})</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors flex items-center gap-2"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Skopiowano adres e-mail!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Kopiuj e-mail</span>
                </>
              )}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800/80 flex justify-center items-center gap-6 text-xs text-neutral-400">
            <a
              href="https://github.com/deejaykey32-star"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-amber-400" />
              <span>github.com/deejaykey32-star</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
