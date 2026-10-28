import React from 'react';
import { ArrowUpRight, BookOpen, Dna, Headphones, Layers, MapPin } from 'lucide-react';
import { Project } from '../data/projectsData';

interface BentoFeaturedProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const BentoFeatured: React.FC<BentoFeaturedProps> = ({ projects, onSelectProject }) => {
  // Flagship projects
  const zycieDna = projects.find(p => p.id === 'zycie-dna');
  const langEdu = projects.find(p => p.id === 'langedudei');
  const pdfEditor = projects.find(p => p.id === 'pdf-editor');
  const mapa = projects.find(p => p.id === 'mapa-orlich-gniazd');

  return (
    <section id="featured" className="py-20 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              Główne Realizacje
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Flagowe Projekty Inżynierskie
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Wyselekcjonowane realizacje łączące bioinformatykę, uczenie maszynowe, systemy audio czasu rzeczywistego i architekturę poligraficzną.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Laboratorium Życia (zycieDNA) - Big 7 columns */}
          {zycieDna && (
            <div
              onClick={() => onSelectProject(zycieDna)}
              className="group cursor-pointer md:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                {zycieDna.image && (
                  <img
                    src={zycieDna.image}
                    alt={zycieDna.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono text-amber-400 flex items-center gap-1.5">
                  <Dna className="w-3.5 h-3.5" />
                  <span>Bioinformatyka &middot; CRISPR</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="text-xs text-neutral-400 mb-2 flex items-center gap-2">
                    <span>{zycieDna.categoryLabel}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>110 kwestii lektorskich</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>Zero zależności runtime</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                    {zycieDna.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6">
                    {zycieDna.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-2 text-neutral-400">
                    {zycieDna.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-neutral-400">
                        {tech}{i < 3 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-1 shrink-0">
                    Studium przypadku <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: LangEduDei & EduDei - 5 columns */}
          {langEdu && (
            <div
              onClick={() => onSelectProject(langEdu)}
              className="group cursor-pointer md:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                {langEdu.image && (
                  <img
                    src={langEdu.image}
                    alt={langEdu.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Web Speech &middot; Metody Doma</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs text-neutral-400 mb-2 flex items-center gap-2">
                    <span>{langEdu.categoryLabel}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>104 tygodnie nauki</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>A1 do C2</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                    {langEdu.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6">
                    {langEdu.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">Cloudflare Pages &middot; Chrome &amp; Edge</span>
                  <span className="font-semibold text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-1 shrink-0">
                    Otwórz <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: PDF QR Studio - 5 columns */}
          {pdfEditor && (
            <div
              onClick={() => onSelectProject(pdfEditor)}
              className="group cursor-pointer md:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                {pdfEditor.image && (
                  <img
                    src={pdfEditor.image}
                    alt={pdfEditor.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>1500 stron &middot; Client-Side WASM</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs text-neutral-400 mb-2 flex items-center gap-2">
                    <span>{pdfEditor.categoryLabel}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>Wektorowe QR</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>Zero Backend</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                    {pdfEditor.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6">
                    {pdfEditor.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">PDF-lib &middot; WebAssembly &middot; Bezstratny</span>
                  <span className="font-semibold text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-1 shrink-0">
                    Otwórz <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 4: Wielka Pielgrzymka & Szlak Orlich Gniazd - 7 columns */}
          {mapa && (
            <div
              onClick={() => onSelectProject(mapa)}
              className="group cursor-pointer md:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                {mapa.image && (
                  <img
                    src={mapa.image}
                    alt={mapa.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono text-amber-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>System GIS &middot; Szlak Orlich Gniazd</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs text-neutral-400 mb-2 flex items-center gap-2">
                    <span>{mapa.categoryLabel}</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>163.9 km szlaku</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>14 warowni jurajskich</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                    {mapa.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-6">
                    {mapa.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">GeoJSON &middot; Profile wysokości &middot; Mobilny GPS</span>
                  <span className="font-semibold text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex items-center gap-1 shrink-0">
                    Studium przypadku <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
