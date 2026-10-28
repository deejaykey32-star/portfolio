import React from 'react';
import { ArrowUp, Github, Sparkles } from 'lucide-react';

interface FooterProps {
  onScrollTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  return (
    <footer className="py-12 bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-bold text-white tracking-tight">Dominik Kuta</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <span>Inżynier Oprogramowania &amp; Twórca Google AI Studio</span>
          <span className="hidden sm:inline" aria-hidden="true">&middot;</span>
          <span>deejaykey32-star</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/deejaykey32-star"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://aistudio.google.com/apps?source=user&tag=created-by-you"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Google AI Studio</span>
          </a>

          <button
            onClick={onScrollTop}
            className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            title="Powrót na górę strony"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
