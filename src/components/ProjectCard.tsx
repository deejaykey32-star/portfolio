import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectItem } from '../types';
import { QRCodeSVG } from 'qrcode.react';
import {
  ExternalLink,
  Github,
  Cloud,
  Sparkles,
  Layers,
  QrCode,
  Edit3,
  Trash2,
  TrendingUp,
} from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { openQrModal, setEditingProject, deleteProject } = usePortfolio();

  const handleQrClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const targetUrl = project.qrCodeUrl || project.demoUrl || project.repoUrl || project.aiStudioUrl || project.cloudflareUrl || 'https://aistudio.google.com';
    openQrModal(
      targetUrl,
      project.title,
      project.category,
      project.qrCodeColor || '#c5a059'
    );
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Czy na pewno chcesz usunąć projekt "${project.title}"?`)) {
      deleteProject(project.id);
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingProject(project);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'aistudio':
        return <Sparkles className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />;
      case 'cloudflare':
        return <Cloud className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />;
      case 'github':
        return <Github className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />;
      case 'wordpress':
        return <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />;
    }
  };

  const primaryTargetUrl = project.demoUrl || project.aiStudioUrl || project.cloudflareUrl || project.repoUrl || project.wordpressUrl || '#';

  return (
    <div
      id={`project-card-${project.id}`}
      className="group relative flex flex-col bg-white dark:bg-[#161616] rounded-xl overflow-hidden border border-neutral-200 dark:border-[#222222] hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-[#111]">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 dark:opacity-90 group-hover:opacity-100"
        />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-mono font-bold text-[10px] uppercase tracking-wider rounded shadow">
            Wyróżniony Projekt
          </div>
        )}

        {/* Platform Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xs text-slate-800 dark:text-neutral-200 text-[11px] font-mono uppercase tracking-wider rounded border border-neutral-200 dark:border-[#333] shadow-xs">
          {getPlatformIcon(project.platform)}
          <span>{project.platformName || project.platform}</span>
        </div>

        {/* Floating Quick Action Buttons for Edit & Delete on Card Header */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10">
          <button
            type="button"
            onClick={handleEdit}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black rounded shadow-md text-xs font-bold font-mono transition"
            title="Edytuj dane i linki projektu"
          >
            <Edit3 className="w-3.5 h-3.5" /> Edytuj
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="p-1 bg-red-100 hover:bg-red-200 dark:bg-red-950/80 dark:hover:bg-red-900 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800/60 rounded shadow-md transition"
            title="Usuń projekt z portfolio"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          
          {/* Key Metric Badge */}
          {project.metrics && (
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-neutral-100 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#333] rounded text-[#8c6a28] dark:text-[#c5a059] text-[11px] font-mono">
              <TrendingUp className="w-3 h-3 text-[#b08d4b] dark:text-[#c5a059]" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white group-hover:text-[#b08d4b] dark:group-hover:text-[#c5a059] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-neutral-100 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#282828] text-neutral-600 dark:text-neutral-400 rounded text-[10px] font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: Action Links, Edit Button & Embedded Interactive QR Code */}
        <div className="pt-3 border-t border-neutral-200 dark:border-[#222222] flex items-center justify-between gap-2">
          
          {/* External Action Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black rounded text-xs font-bold font-mono uppercase tracking-wider shadow-xs transition"
                title="Otwórz wersję demonstracyjną"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            {project.aiStudioUrl && (
              <a
                href={project.aiStudioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] hover:text-[#b08d4b] dark:hover:text-[#c5a059] rounded text-xs font-mono transition"
                title="Google AI Studio"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                <span className="hidden sm:inline">AI Studio</span>
              </a>
            )}

            {project.cloudflareUrl && (
              <a
                href={project.cloudflareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-neutral-100 dark:bg-[#1a1a1a] text-slate-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] hover:text-[#b08d4b] dark:hover:text-[#c5a059] rounded text-xs font-mono transition"
                title="Cloudflare Pages"
              >
                <Cloud className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
                <span className="hidden sm:inline">Cloudflare</span>
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-[#b08d4b] dark:hover:text-[#c5a059] bg-neutral-100 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] rounded transition"
                title="Repozytorium GitHub"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {/* Direct Edit trigger in footer */}
            <button
              type="button"
              onClick={handleEdit}
              className="inline-flex items-center gap-1 px-2 py-1 text-slate-700 dark:text-neutral-300 hover:text-[#b08d4b] dark:hover:text-[#c5a059] bg-neutral-100 dark:bg-[#1a1a1a] border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] rounded text-xs font-mono transition"
              title="Edytuj parametry projektu"
            >
              <Edit3 className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
              <span className="hidden xl:inline">Edytuj</span>
            </button>
          </div>

          {/* Interactive Clickable QR Code Thumbnail */}
          <div
            onClick={handleQrClick}
            title="Kliknij, aby powiększyć kod QR lub przejść do adresu"
            className="group/qr relative p-1 bg-white rounded border border-neutral-200 dark:border-[#333] hover:border-[#b08d4b] dark:hover:border-[#c5a059] shadow-xs cursor-pointer transition-all duration-200 hover:scale-110 shrink-0"
          >
            <QRCodeSVG
              value={project.qrCodeUrl || primaryTargetUrl}
              size={36}
              fgColor="#0a0a0a"
              bgColor="#ffffff"
              level="L"
            />
            <div className="absolute inset-0 bg-black/80 rounded flex items-center justify-center text-[#c5a059] opacity-0 group-hover/qr:opacity-100 transition-opacity">
              <QrCode className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


