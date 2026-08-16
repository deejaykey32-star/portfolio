export type ProjectCategory = 'all' | 'apps' | 'graphics' | 'marketing' | 'aistudio' | 'cloudflare' | 'github' | 'wordpress';

export type PlatformType = 'github' | 'cloudflare' | 'aistudio' | 'wordpress' | 'figma' | 'live' | 'other';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'apps' | 'graphics' | 'marketing';
  platform: PlatformType;
  platformName?: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  aiStudioUrl?: string;
  cloudflareUrl?: string;
  wordpressUrl?: string;
  qrCodeUrl: string;
  qrCodeColor?: string;
  tags: string[];
  metrics?: string;
  featured?: boolean;
  date?: string;
}

export interface GraphicItem {
  id: string;
  title: string;
  client: string;
  category: 'branding' | 'social-media' | 'ui-ux' | 'banner' | 'poster';
  imageUrl: string;
  fullResolutionUrl?: string;
  description: string;
  tags: string[];
  dimensions?: string;
  year: string;
  qrCodeUrl?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
}

export interface MarketingCaseStudy {
  id: string;
  title: string;
  client: string;
  strategy: string;
  description: string;
  results: MetricItem[];
  channels: string[];
  timeframe: string;
  keyTakeaways: string[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
  liveUrl?: string;
  qrCodeUrl?: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  phone?: string;
  location: string;
  avatarUrl: string;
  heroTagline: string;
  heroSubtitle: string;
  valueProposition: string;
  aboutText: string;
  marketingBio: string;
  cvUrl?: string;
  socialLinks: {
    github?: string;
    cloudflare?: string;
    aistudio?: string;
    wordpress?: string;
    linkedin?: string;
    twitter?: string;
    behance?: string;
    email: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    canonicalUrl: string;
    author: string;
  };
  typography: {
    headerFont: 'font-outfit' | 'font-playfair' | 'font-space' | 'font-jakarta';
    bodyFont: 'font-jakarta' | 'font-outfit' | 'font-fira';
    fontSizeScale: 'normal' | 'large' | 'compact';
  };
  theme: {
    accentColor: 'indigo' | 'emerald' | 'cyan' | 'amber' | 'rose' | 'violet';
  };
  stats: {
    completedProjects: number;
    satisfiedClients: number;
    aiAppsLaunched: number;
    marketingRoas: string;
  };
  services: ServiceItem[];
}

export interface FirestoreBackupRecord {
  id: string;
  name: string;
  note?: string;
  createdAt: string;
  timestamp: number;
  projectsCount: number;
  graphicsCount: number;
  caseStudiesCount: number;
  data: {
    config: SiteConfig;
    projects: ProjectItem[];
    graphics: GraphicItem[];
    caseStudies: MarketingCaseStudy[];
    version: string;
  };
}
