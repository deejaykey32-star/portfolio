/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BentoFeatured } from './components/BentoFeatured';
import { AiStudioSection } from './components/AiStudioSection';
import { ProjectCatalog } from './components/ProjectCatalog';
import { InteractiveDemos } from './components/InteractiveDemos';
import { AboutContact } from './components/AboutContact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS, Project } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* 3-Zone Top Bar Contract */}
      <Header onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* Split Screen Hero with KPI row */}
        <Hero
          onExplore={() => handleNavigate('catalog')}
          onOpenAiStudio={() => handleNavigate('ai-studio')}
        />

        {/* Bento Grid: Featured Showcases */}
        <BentoFeatured
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Google AI Studio Section */}
        <AiStudioSection
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Full Interactive Catalog */}
        <ProjectCatalog
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Interactive Engineering Algorithms Lab */}
        <InteractiveDemos />

        {/* About Dominik Kuta & Contact */}
        <AboutContact />
      </main>

      {/* Editorial Footer */}
      <Footer onScrollTop={handleScrollTop} />

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
