import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteConfig, ProjectItem, GraphicItem, MarketingCaseStudy, ProjectCategory, FirestoreBackupRecord } from '../types';
import { initialSiteConfig, initialProjects, initialGraphics, initialMarketingCaseStudies } from '../data/initialData';
import {
  createFirestoreBackup,
  subscribeToFirestoreBackups,
  deleteFirestoreBackup,
  firebaseMetadata,
} from '../lib/firebase';

interface QrModalState {
  isOpen: boolean;
  url: string;
  title: string;
  category?: string;
  color?: string;
}

interface PortfolioContextType {
  // Theme
  isDark: boolean;
  toggleTheme: () => void;

  // Site configuration & Content
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  updateNestedConfig: <K extends keyof SiteConfig>(section: K, value: Partial<SiteConfig[K]>) => void;

  // Projects
  projects: ProjectItem[];
  addProject: (project: ProjectItem) => void;
  updateProject: (id: string, updated: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;

  // Graphics
  graphics: GraphicItem[];
  addGraphic: (graphic: GraphicItem) => void;
  updateGraphic: (id: string, updated: Partial<GraphicItem>) => void;
  deleteGraphic: (id: string) => void;

  // Case Studies
  caseStudies: MarketingCaseStudy[];
  addCaseStudy: (caseStudy: MarketingCaseStudy) => void;
  updateCaseStudy: (id: string, updated: Partial<MarketingCaseStudy>) => void;
  deleteCaseStudy: (id: string) => void;

  // Filtering & Search
  activeCategory: ProjectCategory;
  setActiveCategory: (cat: ProjectCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Admin & WYSIWYG
  isAdmin: boolean;
  adminEmail: string | null;
  editMode: boolean;
  toggleEditMode: () => void;
  loginAsAdmin: (email: string) => boolean;
  logoutAdmin: () => void;
  
  // Modals
  qrModal: QrModalState;
  openQrModal: (url: string, title: string, category?: string, color?: string) => void;
  closeQrModal: () => void;

  isSeoModalOpen: boolean;
  setIsSeoModalOpen: (open: boolean) => void;

  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (open: boolean) => void;

  isConfigModalOpen: boolean;
  setIsConfigModalOpen: (open: boolean) => void;

  editingProject: ProjectItem | null;
  setEditingProject: (project: ProjectItem | null) => void;

  editingGraphic: GraphicItem | null;
  setEditingGraphic: (graphic: GraphicItem | null) => void;

  editingCaseStudy: MarketingCaseStudy | null;
  setEditingCaseStudy: (caseStudy: MarketingCaseStudy | null) => void;

  // Bulk / Demo Actions
  clearAllProjects: () => void;
  restoreDefaultProjects: () => void;
  clearAllGraphics: () => void;
  restoreDefaultGraphics: () => void;
  clearAllCaseStudies: () => void;
  restoreDefaultCaseStudies: () => void;

  // Data management
  exportBackup: () => void;
  importBackup: (jsonString: string) => boolean;
  resetToDefaults: () => void;

  // Firebase Firestore Backup & Cloud Sync
  firestoreBackups: FirestoreBackupRecord[];
  isFirestoreLoading: boolean;
  isFirestoreConnected: boolean;
  isFirestoreModalOpen: boolean;
  setIsFirestoreModalOpen: (open: boolean) => void;
  createCloudBackup: (customName?: string, note?: string) => Promise<{ success: boolean; id?: string; error?: string }>;
  restoreCloudBackup: (backup: FirestoreBackupRecord) => void;
  deleteCloudBackup: (id: string) => Promise<boolean>;
  isAutoSync: boolean;
  toggleAutoSync: () => void;
  lastCloudSyncTime: string | null;
  firebaseProjectInfo: typeof firebaseMetadata;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const STORAGE_KEYS = {
  THEME: 'dk_portfolio_theme',
  CONFIG: 'dk_portfolio_config_v1',
  PROJECTS: 'dk_portfolio_projects_v1',
  GRAPHICS: 'dk_portfolio_graphics_v1',
  CASES: 'dk_portfolio_cases_v1',
  ADMIN: 'dk_portfolio_admin_auth',
  AUTOSYNC: 'dk_portfolio_autosync',
  LAST_SYNC: 'dk_portfolio_last_sync',
};

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Theme State
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved !== null) return saved === 'dark';
    return true; // Default to refined dark theme
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(STORAGE_KEYS.THEME, 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // Configuration State
  const [config, setConfig] = useState<SiteConfig>(() => {
    if (typeof window === 'undefined') return initialSiteConfig;
    const saved = localStorage.getItem(STORAGE_KEYS.CONFIG);
    if (saved) {
      try {
        return { ...initialSiteConfig, ...JSON.parse(saved) };
      } catch (e) {
        console.error('Error parsing config from localStorage', e);
      }
    }
    return initialSiteConfig;
  });

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig(prev => {
      const updated = { ...prev, ...newConfig };
      localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(updated));
      return updated;
    });
  };

  const updateNestedConfig = <K extends keyof SiteConfig>(section: K, value: Partial<SiteConfig[K]>) => {
    setConfig(prev => {
      const updated = {
        ...prev,
        [section]: typeof prev[section] === 'object' && prev[section] !== null
          ? { ...prev[section], ...value }
          : value
      };
      localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(updated));
      return updated;
    });
  };

  // Projects State
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    if (typeof window === 'undefined') return initialProjects;
    const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing projects', e);
      }
    }
    return initialProjects;
  });

  const saveProjects = (items: ProjectItem[]) => {
    setProjects(items);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(items));
  };

  const addProject = (project: ProjectItem) => {
    saveProjects([project, ...projects]);
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    const next = projects.map(p => p.id === id ? { ...p, ...updated } : p);
    saveProjects(next);
  };

  const deleteProject = (id: string) => {
    const next = projects.filter(p => p.id !== id);
    saveProjects(next);
  };

  const clearAllProjects = () => {
    saveProjects([]);
  };

  const restoreDefaultProjects = () => {
    saveProjects(initialProjects);
  };

  // Graphics State
  const [graphics, setGraphics] = useState<GraphicItem[]>(() => {
    if (typeof window === 'undefined') return initialGraphics;
    const saved = localStorage.getItem(STORAGE_KEYS.GRAPHICS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing graphics', e);
      }
    }
    return initialGraphics;
  });

  const saveGraphics = (items: GraphicItem[]) => {
    setGraphics(items);
    localStorage.setItem(STORAGE_KEYS.GRAPHICS, JSON.stringify(items));
  };

  const addGraphic = (graphic: GraphicItem) => {
    saveGraphics([graphic, ...graphics]);
  };

  const updateGraphic = (id: string, updated: Partial<GraphicItem>) => {
    const next = graphics.map(g => g.id === id ? { ...g, ...updated } : g);
    saveGraphics(next);
  };

  const deleteGraphic = (id: string) => {
    const next = graphics.filter(g => g.id !== id);
    saveGraphics(next);
  };

  const clearAllGraphics = () => {
    saveGraphics([]);
  };

  const restoreDefaultGraphics = () => {
    saveGraphics(initialGraphics);
  };

  // Marketing Case Studies State
  const [caseStudies, setCaseStudies] = useState<MarketingCaseStudy[]>(() => {
    if (typeof window === 'undefined') return initialMarketingCaseStudies;
    const saved = localStorage.getItem(STORAGE_KEYS.CASES);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing cases', e);
      }
    }
    return initialMarketingCaseStudies;
  });

  const saveCaseStudies = (items: MarketingCaseStudy[]) => {
    setCaseStudies(items);
    localStorage.setItem(STORAGE_KEYS.CASES, JSON.stringify(items));
  };

  const addCaseStudy = (caseStudy: MarketingCaseStudy) => {
    saveCaseStudies([caseStudy, ...caseStudies]);
  };

  const updateCaseStudy = (id: string, updated: Partial<MarketingCaseStudy>) => {
    const next = caseStudies.map(c => c.id === id ? { ...c, ...updated } : c);
    saveCaseStudies(next);
  };

  const deleteCaseStudy = (id: string) => {
    const next = caseStudies.filter(c => c.id !== id);
    saveCaseStudies(next);
  };

  const clearAllCaseStudies = () => {
    saveCaseStudies([]);
  };

  const restoreDefaultCaseStudies = () => {
    saveCaseStudies(initialMarketingCaseStudies);
  };

  // Filter & Search
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Admin Auth (Dominik Kuta is default authenticated administrator)
  const REQUIRED_ADMIN_EMAIL = 'kuta.dominik@gmail.com';
  const [adminEmail, setAdminEmail] = useState<string | null>(() => {
    if (typeof window === 'undefined') return REQUIRED_ADMIN_EMAIL;
    const saved = localStorage.getItem(STORAGE_KEYS.ADMIN);
    return saved || REQUIRED_ADMIN_EMAIL;
  });

  // Admin active for Dominik Kuta
  const isAdmin = true;
  const [editMode, setEditMode] = useState<boolean>(() => {
    return true; // Edit mode active by default for Dominik Kuta
  });

  const toggleEditMode = () => {
    setEditMode(prev => !prev);
  };

  const loginAsAdmin = (email: string): boolean => {
    const cleanEmail = email.trim().toLowerCase();
    if (cleanEmail === REQUIRED_ADMIN_EMAIL.toLowerCase()) {
      setAdminEmail(cleanEmail);
      localStorage.setItem(STORAGE_KEYS.ADMIN, cleanEmail);
      setEditMode(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setAdminEmail(null);
    setEditMode(false);
    localStorage.removeItem(STORAGE_KEYS.ADMIN);
  };

  // Modals
  const [qrModal, setQrModal] = useState<QrModalState>({
    isOpen: false,
    url: '',
    title: '',
  });

  const openQrModal = (url: string, title: string, category?: string, color?: string) => {
    setQrModal({
      isOpen: true,
      url,
      title,
      category,
      color: color || '#c5a059',
    });
  };

  const closeQrModal = () => {
    setQrModal(prev => ({ ...prev, isOpen: false }));
  };

  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isFirestoreModalOpen, setIsFirestoreModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [editingGraphic, setEditingGraphic] = useState<GraphicItem | null>(null);
  const [editingCaseStudy, setEditingCaseStudy] = useState<MarketingCaseStudy | null>(null);

  // Firestore Backup & Real-time State
  const [firestoreBackups, setFirestoreBackups] = useState<FirestoreBackupRecord[]>([]);
  const [isFirestoreLoading, setIsFirestoreLoading] = useState(false);
  const isFirestoreConnected = true;
  const [lastCloudSyncTime, setLastCloudSyncTime] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(STORAGE_KEYS.LAST_SYNC);
  });
  const [isAutoSync, setIsAutoSync] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem(STORAGE_KEYS.AUTOSYNC);
    return saved !== null ? saved === 'true' : true;
  });

  const toggleAutoSync = () => {
    setIsAutoSync(prev => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEYS.AUTOSYNC, String(next));
      return next;
    });
  };

  // Real-time listener for Firestore backups
  useEffect(() => {
    setIsFirestoreLoading(true);
    const unsubscribe = subscribeToFirestoreBackups(
      (backups) => {
        setFirestoreBackups(backups);
        setIsFirestoreLoading(false);
      },
      (err) => {
        console.warn('Could not subscribe to Firestore backups:', err);
        setIsFirestoreLoading(false);
      }
    );

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  const createCloudBackup = async (customName?: string, note?: string) => {
    setIsFirestoreLoading(true);
    try {
      const payload = {
        config,
        projects,
        graphics,
        caseStudies,
      };
      const res = await createFirestoreBackup(payload, customName, note);
      if (res.success) {
        const timeNow = new Date().toISOString();
        setLastCloudSyncTime(timeNow);
        localStorage.setItem(STORAGE_KEYS.LAST_SYNC, timeNow);
      }
      return res;
    } catch (e: any) {
      return { success: false, id: '', error: e?.message || 'Błąd zapisu w chmurze Firestore' };
    } finally {
      setIsFirestoreLoading(false);
    }
  };

  const restoreCloudBackup = (backup: FirestoreBackupRecord) => {
    if (!backup || !backup.data) return;
    try {
      if (backup.data.config) {
        updateConfig(backup.data.config);
      }
      if (Array.isArray(backup.data.projects)) {
        saveProjects(backup.data.projects);
      }
      if (Array.isArray(backup.data.graphics)) {
        saveGraphics(backup.data.graphics);
      }
      if (Array.isArray(backup.data.caseStudies)) {
        saveCaseStudies(backup.data.caseStudies);
      }
    } catch (e) {
      console.error('Błąd podczas przywracania danych z kopii zapasowej:', e);
    }
  };

  const deleteCloudBackup = async (id: string): Promise<boolean> => {
    setIsFirestoreLoading(true);
    try {
      const success = await deleteFirestoreBackup(id);
      return success;
    } catch (e) {
      console.error('Błąd usuwania kopii z Firestore:', e);
      return false;
    } finally {
      setIsFirestoreLoading(false);
    }
  };

  // Backup and Restore
  const exportBackup = () => {
    const data = {
      config,
      projects,
      graphics,
      caseStudies,
      exportedAt: new Date().toISOString(),
      version: '1.0',
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dominik-kuta-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importBackup = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.config) {
        updateConfig(parsed.config);
      }
      if (Array.isArray(parsed.projects)) {
        saveProjects(parsed.projects);
      }
      if (Array.isArray(parsed.graphics)) {
        saveGraphics(parsed.graphics);
      }
      if (Array.isArray(parsed.caseStudies)) {
        saveCaseStudies(parsed.caseStudies);
      }
      return true;
    } catch (e) {
      console.error('Failed to import JSON data', e);
      return false;
    }
  };

  const resetToDefaults = () => {
    setConfig(initialSiteConfig);
    saveProjects(initialProjects);
    saveGraphics(initialGraphics);
    saveCaseStudies(initialMarketingCaseStudies);
    localStorage.removeItem(STORAGE_KEYS.CONFIG);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.GRAPHICS);
    localStorage.removeItem(STORAGE_KEYS.CASES);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isDark,
        toggleTheme,
        config,
        updateConfig,
        updateNestedConfig,
        projects,
        addProject,
        updateProject,
        deleteProject,
        clearAllProjects,
        restoreDefaultProjects,
        graphics,
        addGraphic,
        updateGraphic,
        deleteGraphic,
        clearAllGraphics,
        restoreDefaultGraphics,
        caseStudies,
        addCaseStudy,
        updateCaseStudy,
        deleteCaseStudy,
        clearAllCaseStudies,
        restoreDefaultCaseStudies,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        isAdmin,
        adminEmail,
        editMode,
        toggleEditMode,
        loginAsAdmin,
        logoutAdmin,
        qrModal,
        openQrModal,
        closeQrModal,
        isSeoModalOpen,
        setIsSeoModalOpen,
        isLoginModalOpen,
        setIsLoginModalOpen,
        isConfigModalOpen,
        setIsConfigModalOpen,
        isFirestoreModalOpen,
        setIsFirestoreModalOpen,
        editingProject,
        setEditingProject,
        editingGraphic,
        setEditingGraphic,
        editingCaseStudy,
        setEditingCaseStudy,
        exportBackup,
        importBackup,
        resetToDefaults,
        firestoreBackups,
        isFirestoreLoading,
        isFirestoreConnected,
        createCloudBackup,
        restoreCloudBackup,
        deleteCloudBackup,
        isAutoSync,
        toggleAutoSync,
        lastCloudSyncTime,
        firebaseProjectInfo: firebaseMetadata,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
