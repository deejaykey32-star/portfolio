import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectFilter } from './components/ProjectFilter';
import { ProjectCard } from './components/ProjectCard';
import { GraphicsGallery } from './components/GraphicsGallery';
import { MarketingCaseStudies } from './components/MarketingCaseStudies';
import { SkillsEcosystem } from './components/SkillsEcosystem';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QrCodeModal } from './components/QrCodeModal';
import { SeoAiInspectorModal } from './components/SeoAiInspectorModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminToolbar } from './components/AdminToolbar';
import { EditProjectModal } from './components/EditProjectModal';
import { EditGraphicModal } from './components/EditGraphicModal';
import { EditCaseStudyModal } from './components/EditCaseStudyModal';
import { EditConfigModal } from './components/EditConfigModal';
import { FirestoreBackupModal } from './components/FirestoreBackupModal';
import { Cpu, Plus, Sparkles, FolderKanban } from 'lucide-react';

const PortfolioContent: React.FC = () => {
  const {
    projects,
    clearAllProjects,
    restoreDefaultProjects,
    activeCategory,
    searchQuery,
    isAdmin,
    editMode,
    setEditingProject,
    config,
  } = usePortfolio();

  // Filter projects by category and search text
  const filteredProjects = projects.filter((project) => {
    // Category match
    if (activeCategory === 'apps' && project.category !== 'apps') return false;
    if (activeCategory === 'graphics' && project.category !== 'graphics') return false;
    if (activeCategory === 'marketing' && project.category !== 'marketing') return false;
    if (activeCategory === 'aistudio' && project.platform !== 'aistudio') return false;
    if (activeCategory === 'cloudflare' && project.platform !== 'cloudflare') return false;
    if (activeCategory === 'github' && project.platform !== 'github') return false;
    if (activeCategory === 'wordpress' && project.platform !== 'wordpress') return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchDesc = project.description.toLowerCase().includes(q);
      const matchTags = project.tags.some(t => t.toLowerCase().includes(q));
      const matchPlatform = (project.platformName || project.platform).toLowerCase().includes(q);
      return matchTitle || matchDesc || matchTags || matchPlatform;
    }

    return true;
  });

  const handleCreateNewProject = () => {
    setEditingProject({
      id: `proj-${Date.now()}`,
      title: 'Nowy Projekt / Aplikacja',
      category: 'apps',
      platform: 'aistudio',
      platformName: 'Google AI Studio',
      description: 'Wprowadź krótki opis projektu...',
      longDescription: 'Szczegółowy opis projektu...',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://aistudio.google.com',
      repoUrl: 'https://github.com/dominikkuta',
      qrCodeUrl: 'https://aistudio.google.com',
      qrCodeColor: '#c5a059',
      tags: ['Google AI Studio', 'TypeScript', 'React'],
      metrics: 'Nowe wdrożenie',
      featured: false,
      date: new Date().toISOString().slice(0, 7),
    });
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#0a0a0a] text-slate-800 dark:text-[#e0e0e0] ${config.typography.bodyFont} transition-colors duration-200`}>
      {/* Top Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Apps & Web Projects Catalog */}
        <section id="apps" className="py-16 lg:py-24 border-b border-neutral-200 dark:border-[#222222] bg-white dark:bg-[#0a0a0a] transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 dark:bg-[#161616] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono uppercase tracking-wider mb-3 shadow-xs">
                  <FolderKanban className="w-3.5 h-3.5 text-[#b08d4b] dark:text-[#c5a059]" />
                  <span>Katalog Projektów & Aplikacji ({projects.length})</span>
                </div>
                <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white font-serif`}>
                  Aplikacje Webowe, Repozytoria & Wdrożenia
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-2xl font-light">
                  Projekty zrealizowane w technologiach Google AI Studio, Cloudflare Pages, GitHub, WordPress oraz dedykowanych rozwiązaniach headless.
                </p>
              </div>

              {isAdmin && editMode && (
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={handleCreateNewProject}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#b08d4b] hover:bg-[#9c7b3d] dark:bg-[#c5a059] dark:hover:bg-[#d4af66] text-white dark:text-black font-bold font-mono rounded text-xs transition shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Dodaj Nowy Projekt
                  </button>
                  {projects.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm('Czy na pewno chcesz usunąć wszystkie projekty demonstracyjne?')) {
                          clearAllProjects();
                        }
                      }}
                      className="px-2.5 py-1.5 bg-neutral-100 dark:bg-[#161616] hover:bg-red-50 dark:hover:bg-red-950/40 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 border border-neutral-200 dark:border-[#2e2e2e] rounded text-xs font-mono transition"
                      title="Wyczyść wszystkie projekty"
                    >
                      Wyczyść Projekty Demo
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={restoreDefaultProjects}
                      className="px-2.5 py-1.5 bg-neutral-100 dark:bg-[#161616] hover:bg-neutral-200 dark:hover:bg-[#222] text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333] rounded text-xs font-mono transition"
                    >
                      Przywróć Domyślne
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Filter and Search Bar */}
            <ProjectFilter />

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-neutral-50 dark:bg-[#161616] rounded-2xl border border-neutral-200 dark:border-[#222] space-y-3">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-neutral-100 dark:bg-[#121212] flex items-center justify-center text-[#8c6a28] dark:text-[#c5a059] border border-neutral-200 dark:border-[#333]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-white">
                  Brak projektów w wybranej kategorii
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
                  {projects.length === 0
                    ? 'Wszystkie projekty demonstracyjne zostały wyczyszczone. Dodaj własne projekty powyższym przyciskiem.'
                    : 'Spróbuj zmienić słowo kluczowe w wyszukiwarce lub wybrać inną kategorię.'}
                </p>
                {isAdmin && editMode && (
                  <div className="pt-2 flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={handleCreateNewProject}
                      className="px-4 py-2 bg-[#b08d4b] dark:bg-[#c5a059] text-white dark:text-black font-bold text-xs rounded font-mono"
                    >
                      Dodaj Pierwszy Projekt
                    </button>
                    {projects.length === 0 && (
                      <button
                        type="button"
                        onClick={restoreDefaultProjects}
                        className="px-4 py-2 bg-white dark:bg-[#1c1c1c] text-slate-700 dark:text-neutral-300 border border-neutral-200 dark:border-[#333] text-xs rounded font-mono hover:text-slate-900 dark:hover:text-white"
                      >
                        Przywróć Dane Demonstracyjne
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>
        </section>

        {/* Graphics & UI Showcase */}
        <GraphicsGallery />

        {/* Marketing Case Studies & Strategy */}
        <MarketingCaseStudies />

        {/* Ecosystem & Services */}
        <SkillsEcosystem />

        {/* About Section & Philosophy */}
        <AboutSection />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QrCodeModal />
      <SeoAiInspectorModal />
      <AdminLoginModal />
      <EditProjectModal />
      <EditGraphicModal />
      <EditCaseStudyModal />
      <EditConfigModal />
      <FirestoreBackupModal />

      {/* Floating Admin Toolbar (when logged in as kuta.dominik@gmail.com) */}
      <AdminToolbar />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
