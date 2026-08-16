import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import {
  Cloud,
  Palette,
  TrendingUp,
  QrCode,
  Sparkles,
  Zap,
  Globe
} from 'lucide-react';

export const SkillsEcosystem: React.FC = () => {
  const { config } = usePortfolio();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#c5a059]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-orange-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#c5a059]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#c5a059]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'QrCode':
        return <QrCode className="w-5 h-5 text-[#c5a059]" />;
      default:
        return <Zap className="w-5 h-5 text-[#c5a059]" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-[#222222] bg-[#f8f7f4] dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-[#161616] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono uppercase tracking-wider mb-3 shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
            <span>Kompleksowe Kompetencje & Usługi</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 dark:text-white`}>
            Ekosystem Technologiczny i Usługi
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-light">
            Od tworzenia zintegrowanych aplikacji AI i infrastruktury na Cloudflare, po pozycjonowanie w modelach językowych i kreacje graficzne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white dark:bg-[#161616] rounded-xl border border-neutral-200 dark:border-[#222222] hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-[#282828] flex items-center justify-center shadow-xs">
                  {getIcon(service.iconName)}
                </div>

                <h3 className={`text-base sm:text-lg font-serif font-bold text-slate-900 dark:text-white`}>
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-200 dark:border-[#222]">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-neutral-50 dark:bg-[#121212] border border-neutral-200 dark:border-[#262626] text-neutral-600 dark:text-neutral-400 rounded text-[10px] font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

