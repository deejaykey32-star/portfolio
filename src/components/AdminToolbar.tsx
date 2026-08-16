import React, { useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Plus, Settings, Download, Upload, LogOut, ShieldCheck, Eye, EyeOff, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AdminToolbar: React.FC = () => {
  const {
    isAdmin,
    adminEmail,
    editMode,
    toggleEditMode,
    logoutAdmin,
    setIsConfigModalOpen,
    setEditingProject,
    setEditingGraphic,
    setEditingCaseStudy,
    clearAllProjects,
    clearAllGraphics,
    clearAllCaseStudies,
    exportBackup,
    importBackup,
    resetToDefaults,
  } = usePortfolio();

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isAdmin) return null;

  const handleCreateNewProject = () => {
    setEditingProject({
      id: `proj-${Date.now()}`,
      title: 'Nowy Projekt / Aplikacja',
      category: 'apps',
      platform: 'aistudio',
      platformName: 'Google AI Studio',
      description: 'Krótki opis projektu...',
      longDescription: 'Szczegółowy opis projektu...',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://aistudio.google.com',
      repoUrl: 'https://github.com/dominikkuta',
      qrCodeUrl: 'https://aistudio.google.com',
      qrCodeColor: '#c5a059',
      tags: ['Google AI Studio', 'React', 'TypeScript'],
      metrics: 'Nowy projekt',
      featured: false,
      date: new Date().toISOString().slice(0, 7),
    });
  };

  const handleCreateNewGraphic = () => {
    setEditingGraphic({
      id: `graph-${Date.now()}`,
      title: 'Nowa Kreacja Wizualna / UI',
      client: 'Klient B2B / Projekt',
      category: 'branding',
      imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      fullResolutionUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=90',
      description: 'Opis identyfikacji wizualnej i założeń projektowych...',
      tags: ['Branding', 'Figma', 'Key Visual'],
      dimensions: '3840 x 2160 px',
      year: '2026',
      qrCodeUrl: 'https://behance.net',
    });
  };

  const handleCreateNewCase = () => {
    setEditingCaseStudy({
      id: `case-${Date.now()}`,
      title: 'Nowa Kampania Growth & Marketing AI',
      client: 'Klient E-Commerce / SaaS',
      strategy: 'Wdrożenie lejków AI, targetowania omnikanałowego oraz automatyzacji sekwencji marketingowych.',
      description: 'Optymalizacja konwersji i obniżenie kosztów pozyskania klienta przy jednoczesnym skalowaniu wolumenu sprzedaży.',
      results: [
        { label: 'Wzrost konwersji', value: '+85%', change: 'w 90 dni' },
        { label: 'Zwrot ROAS', value: '5.2x', change: 'z kanału Meta Ads' },
      ],
      channels: ['Performance Marketing', 'SEO', 'Lead Automation'],
      timeframe: '90 dni',
      keyTakeaways: [
        'Wykorzystanie sztucznej inteligencji skróciło czas testowania kreacji z 14 dni do 48 godzin.',
        'Zintegrowane kody QR zwiększyły retencję użytkowników o 31%.'
      ],
      testimonial: {
        quote: 'Współpraca z Dominikiem przyniosła natychmiastowe, wymierne efekty finansowe.',
        author: 'Tomasz Nowak',
        company: 'Dyrektor Zarządzający'
      },
      liveUrl: 'https://github.com/dominikkuta',
      qrCodeUrl: 'https://github.com/dominikkuta'
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const ok = importBackup(content);
        if (ok) {
          confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
          alert('Dane portfolio zostały pomyślnie zaimportowane z kopii JSON!');
        } else {
          alert('Błąd podczas importu pliku JSON. Sprawdź format pliku.');
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleWipeAllDemo = () => {
    if (confirm('Czy na pewno chcesz usunąć WSZYSTKIE demonstracyjne dane (projekty, grafiki, case studies)? Możesz je później przywrócić w każdej chwili.')) {
      clearAllProjects();
      clearAllGraphics();
      clearAllCaseStudies();
      confetti({ particleCount: 30, spread: 40 });
    }
  };

  return (
    <div
      id="admin-floating-toolbar"
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-40 max-w-[95vw] px-4 py-2.5 bg-[#121212]/95 text-neutral-200 rounded-xl shadow-2xl border border-[#c5a059]/40 backdrop-blur-md flex items-center flex-wrap gap-2 text-xs"
    >
      {/* Status */}
      <div className="flex items-center gap-1.5 pr-2 border-r border-neutral-700">
        <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
        <span className="font-semibold text-[#c5a059] flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> Admin:
        </span>
        <span className="text-neutral-300 font-mono text-[11px] hidden sm:inline truncate max-w-[150px]">
          {adminEmail}
        </span>
      </div>

      {/* WYSIWYG Toggle Switch */}
      <button
        id="toggle-wysiwyg-btn"
        type="button"
        onClick={toggleEditMode}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
          editMode
            ? 'bg-[#c5a059] text-black font-semibold ring-1 ring-[#c5a059]'
            : 'bg-[#1e1e1e] text-neutral-300 hover:bg-[#282828] border border-[#333]'
        }`}
      >
        {editMode ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
        <span>Tryb Edycji: {editMode ? 'WŁĄCZONY' : 'WYŁĄCZONY'}</span>
      </button>

      {/* Quick Add Buttons */}
      <div className="flex items-center gap-1">
        <button
          id="admin-add-project-btn"
          type="button"
          onClick={handleCreateNewProject}
          className="flex items-center gap-1 px-2.5 py-1.5 bg-[#c5a059]/20 hover:bg-[#c5a059]/30 text-[#c5a059] border border-[#c5a059]/40 rounded-lg transition"
          title="Dodaj nowy projekt aplikacji"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden md:inline">+ Projekt</span>
        </button>

        <button
          id="admin-add-graphic-btn"
          type="button"
          onClick={handleCreateNewGraphic}
          className="flex items-center gap-1 px-2.5 py-1.5 bg-[#1e1e1e] hover:bg-[#282828] text-neutral-200 border border-[#333] rounded-lg transition"
          title="Dodaj nową grafikę / UI"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden md:inline">+ Grafika</span>
        </button>

        <button
          id="admin-add-case-btn"
          type="button"
          onClick={handleCreateNewCase}
          className="flex items-center gap-1 px-2.5 py-1.5 bg-[#1e1e1e] hover:bg-[#282828] text-neutral-200 border border-[#333] rounded-lg transition"
          title="Dodaj nowe case study"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden md:inline">+ Case Study</span>
        </button>
      </div>

      {/* Config & Typography */}
      <button
        id="admin-config-btn"
        type="button"
        onClick={() => setIsConfigModalOpen(true)}
        className="flex items-center gap-1 px-2.5 py-1.5 bg-[#1e1e1e] hover:bg-[#282828] text-neutral-200 border border-[#333] rounded-lg transition"
        title="Edytuj czcionki, kolory, SEO, bio i ustawienia strony"
      >
        <Settings className="w-3.5 h-3.5" />
        <span className="hidden md:inline">Wygląd & SEO</span>
      </button>

      {/* Wipe All Demo Data */}
      <button
        id="admin-wipe-demo-btn"
        type="button"
        onClick={handleWipeAllDemo}
        className="px-2 py-1.5 bg-[#1e1e1e] hover:bg-red-950/40 text-neutral-400 hover:text-red-300 border border-[#333] rounded-lg transition text-[11px] font-mono hidden xl:inline"
        title="Usuń wszystkie dane demonstracyjne"
      >
        Wyczyść Demo
      </button>

      {/* Export JSON */}
      <button
        id="admin-export-btn"
        type="button"
        onClick={exportBackup}
        className="flex items-center gap-1 px-2 py-1.5 bg-[#1e1e1e] hover:bg-[#282828] text-neutral-300 border border-[#333] rounded-lg transition"
        title="Eksportuj kopię zapasową JSON"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden lg:inline">Kopia JSON</span>
      </button>

      {/* Import JSON */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".json"
        className="hidden"
      />
      <button
        id="admin-import-btn"
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center gap-1 px-2 py-1.5 bg-[#1e1e1e] hover:bg-[#282828] text-neutral-300 border border-[#333] rounded-lg transition"
        title="Importuj dane z pliku JSON"
      >
        <Upload className="w-3.5 h-3.5" />
        <span className="hidden lg:inline">Import</span>
      </button>

      {/* Reset */}
      <button
        id="admin-reset-btn"
        type="button"
        onClick={() => {
          if (confirm('Czy na pewno chcesz przywrócić domyślne dane demonstracyjne portfolio Dominika Kuty?')) {
            resetToDefaults();
          }
        }}
        className="p-1.5 text-neutral-400 hover:text-[#c5a059] rounded-lg transition"
        title="Przywróć domyślne dane"
      >
        <RotateCcw className="w-3.5 h-3.5" />
      </button>

      {/* Logout */}
      <button
        id="admin-logout-btn"
        type="button"
        onClick={logoutAdmin}
        className="p-1.5 text-neutral-400 hover:text-red-400 rounded-lg transition ml-auto"
        title="Wyloguj administratora"
      >
        <LogOut className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

