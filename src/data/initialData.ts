import { SiteConfig, ProjectItem, GraphicItem, MarketingCaseStudy } from '../types';

export const initialSiteConfig: SiteConfig = {
  name: 'Dominik Kuta',
  role: 'Full-Stack Developer & Marketing Growth Strategist',
  email: 'kuta.dominik@gmail.com',
  phone: '+48 600 000 000',
  location: 'Polska (Remote / Global)',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  heroTagline: 'Tworzę skalowalne aplikacje AI, nowoczesną grafikę i mierzalne strategie marketingowe.',
  heroSubtitle: 'Łączę inżynierię oprogramowania (Google AI Studio, Cloudflare, GitHub, WordPress) ze skutecznym digital marketingiem, brandingiem i optymalizacją pod SEO i AI.',
  valueProposition: 'Pomagam markom i produktom technologicznym wyróżnić się w sieci, zdobywać ruch organiczny i automatyzować procesy sprzedaży dzięki sztucznej inteligencji.',
  aboutText: 'Od ponad 8 lat zajmuję się budowaniem zaawansowanych produktów cyfrowych — od nowoczesnych aplikacji webowych w chmurze po kompleksowe kampanie marketingowe i spójną identyfikację wizualną. Moje projekty cechuje bezkompromisowa dbałość o detale UI/UX, optymalizacja pod silniki wyszukiwania (SEO/Schema) oraz pełna integracja z ekosystemami Google AI, Cloudflare i GitHub.',
  marketingBio: 'Specjalizuję się w strategiach wzrostu (Growth Hacking), analityce wielokanałowej, pozycjonowaniu w modelach AI (GEO - Generative Engine Optimization) oraz projektowaniu lejków sprzedażowych o wysokim współczynniku konwersji.',
  cvUrl: '#contact',
  socialLinks: {
    github: 'https://github.com/dominikkuta',
    cloudflare: 'https://pages.cloudflare.com',
    aistudio: 'https://aistudio.google.com',
    wordpress: 'https://wordpress.org',
    linkedin: 'https://linkedin.com/in/dominikkuta',
    behance: 'https://behance.net/dominikkuta',
    email: 'kuta.dominik@gmail.com',
  },
  seo: {
    metaTitle: 'Dominik Kuta — Portfolio: Aplikacje AI, Grafika, Marketing & SEO',
    metaDescription: 'Oficjalne portfolio Dominika Kuty. Zaawansowane aplikacje AI Studio, projekty Cloudflare, GitHub, serwisy WordPress, grafika reklamowa i kampanie marketingowe.',
    keywords: 'Dominik Kuta, portfolio programisty, aplikacje AI, Google AI Studio, Cloudflare Pages, WordPress, grafika komputerowa, marketing internetowy, SEO, kody QR',
    canonicalUrl: 'https://ais-dev-lbxf5gkvykiiwhur2z4y52-261962587323.europe-west3.run.app',
    author: 'Dominik Kuta',
  },
  typography: {
    headerFont: 'font-outfit',
    bodyFont: 'font-jakarta',
    fontSizeScale: 'normal',
  },
  theme: {
    accentColor: 'indigo',
  },
  stats: {
    completedProjects: 48,
    satisfiedClients: 32,
    aiAppsLaunched: 14,
    marketingRoas: '4.8x',
  },
  services: [
    {
      id: 'srv-1',
      iconName: 'Sparkles',
      title: 'Aplikacje AI & Google AI Studio',
      description: 'Projektowanie i wdrażanie interaktywnych aplikacji webowych zasilanych modelami Gemini, zoptymalizowanych pod Cloud Run i integracje API.',
      tags: ['Google AI Studio', 'Gemini API', 'TypeScript', 'Cloud Run']
    },
    {
      id: 'srv-2',
      iconName: 'Cloud',
      title: 'Cloudflare Pages & Edge Apps',
      description: 'Błyskawiczne serwisy i mikroserwisy wdrażane na infrastrukturze Cloudflare Pages, Workers KV oraz Serverless Functions.',
      tags: ['Cloudflare Pages', 'Workers KV', 'Edge Compute', 'Next.js']
    },
    {
      id: 'srv-3',
      iconName: 'Palette',
      title: 'Identyfikacja Wizualna & Grafika',
      description: 'Kompleksowe systemy brandingowe, kreacje do kampanii w social media, projekty UI/UX w Figmie oraz materiały do druku.',
      tags: ['Branding', 'Figma', 'UI/UX Design', 'Social Media Graphics']
    },
    {
      id: 'srv-4',
      iconName: 'TrendingUp',
      title: 'Marketing Wzrostu & SEO / AI Discovery',
      description: 'Pozycjonowanie w Google i modelach sztucznej inteligencji (GEO/LLM SEO), kampanie Performance (Meta/Google Ads) i automatyzacja lejków.',
      tags: ['SEO & Schema', 'GEO (AI Optimization)', 'Performance Marketing', 'Growth']
    },
    {
      id: 'srv-5',
      iconName: 'Globe',
      title: 'Zaawansowany WordPress & Headless',
      description: 'Dedykowane motywy, optymalizacja prędkości Core Web Vitals, headless CMS oraz integracje WooCommerce z systemami zewnętrznymi.',
      tags: ['WordPress', 'WooCommerce', 'Headless CMS', 'Gutenberg Blocks']
    },
    {
      id: 'srv-6',
      iconName: 'QrCode',
      title: 'Interaktywne Kody QR & Kampanie O2O',
      description: 'Dynamiczne kody QR do aplikacji i materiałów marketingowych z analityką kliknięć i bezpośrednim przekierowaniem.',
      tags: ['Dynamic QR', 'O2O Marketing', 'Analytics', 'Conversion Tracking']
    }
  ]
};

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Gemini Marketing Copy & Vision Copilot',
    category: 'apps',
    platform: 'aistudio',
    platformName: 'Google AI Studio',
    description: 'Aplikacja do generowania perswazyjnych tekstów reklamowych i analizy grafik promocyjnych z wykorzystaniem Google AI Studio.',
    longDescription: 'Zbudowana z użyciem @google/genai, integruje prompt-chaining do tworzenia kreacji marketingowych na Meta Ads, LinkedIn i Google Ads z natychmiastowym podglądem wizualnym.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://aistudio.google.com',
    repoUrl: 'https://github.com/dominikkuta/gemini-marketing-copilot',
    aiStudioUrl: 'https://aistudio.google.com',
    qrCodeUrl: 'https://aistudio.google.com',
    qrCodeColor: '#4f46e5',
    tags: ['Google AI Studio', 'Gemini 2.5', 'TypeScript', 'React', 'Marketing AI'],
    metrics: '+240% szybsza produkcja treści reklamowych',
    featured: true,
    date: '2026-06'
  },
  {
    id: 'proj-2',
    title: 'Edge Cloudflare FastCommerce & Analytics',
    category: 'apps',
    platform: 'cloudflare',
    platformName: 'Cloudflare Pages',
    description: 'Ultrawydajny sklep headless osadzony na Cloudflare Pages z czasem ładowania poniżej 150ms na całym świecie.',
    longDescription: 'Architektura serverless bazująca na Cloudflare Pages, Workers oraz D1 Database. Posiada wbudowany silnik analityczny zbierający eventy bez obciążania przeglądarki.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://pages.cloudflare.com',
    repoUrl: 'https://github.com/dominikkuta/cloudflare-edge-commerce',
    cloudflareUrl: 'https://pages.cloudflare.com',
    qrCodeUrl: 'https://pages.cloudflare.com',
    qrCodeColor: '#f97316',
    tags: ['Cloudflare Pages', 'Workers KV', 'Next.js', 'Core Web Vitals 100'],
    metrics: 'Czas odpowiedzi <150ms globalnie',
    featured: true,
    date: '2026-05'
  },
  {
    id: 'proj-3',
    title: 'Automated SEO & Schema Rich Snippets Engine',
    category: 'marketing',
    platform: 'github',
    platformName: 'GitHub Repo',
    description: 'Biblioteka open-source do automatycznego wdrażania JSON-LD Schema.org, OpenGraph i optymalizacji pod AI Search Engines.',
    longDescription: 'Narzędzie pozwala witrynom uzyskiwać najwyższe pozycje w wyszukiwarkach oraz poprawiać widoczność w odpowiedziach modeli językowych ChatGPT, Perplexity i Gemini.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/dominikkuta',
    repoUrl: 'https://github.com/dominikkuta/seo-schema-engine',
    qrCodeUrl: 'https://github.com/dominikkuta/seo-schema-engine',
    qrCodeColor: '#059669',
    tags: ['SEO', 'Structured Data', 'JSON-LD', 'AI Optimization', 'GitHub'],
    metrics: '+180% wzrost indeksacji w Google i AI',
    featured: true,
    date: '2026-04'
  },
  {
    id: 'proj-4',
    title: 'EcoLuxe Cosmetics — Custom WordPress Platform',
    category: 'apps',
    platform: 'wordpress',
    platformName: 'WordPress / WooCommerce',
    description: 'Dedykowana platforma e-commerce oparta o zoptymalizowany WordPress, customowe bloki Gutenberg i integrację z systemem ERP.',
    longDescription: 'Bezpieczny, szybki sklep zoptymalizowany pod kątem konwersji mobilnej, z integracją płatności PayU, Stripe oraz marketing automation.',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://wordpress.org',
    wordpressUrl: 'https://wordpress.org',
    qrCodeUrl: 'https://wordpress.org',
    qrCodeColor: '#0284c7',
    tags: ['WordPress', 'WooCommerce', 'Gutenberg Blocks', 'E-commerce SEO'],
    metrics: 'Wzrost sprzedaży o 64% r/r',
    featured: false,
    date: '2026-03'
  },
  {
    id: 'proj-5',
    title: 'AI Multi-Agent Marketing Funnel Builder',
    category: 'apps',
    platform: 'aistudio',
    platformName: 'Google AI Studio',
    description: 'System orkiestracji agentów AI badających grupę docelową, generujących persony zakupowe i mapujących lejek konwersji.',
    longDescription: 'Integracja z Google AI Studio umożliwia tworzenie dynamicznych lead magnetów oraz generowanie spersonalizowanych sekwencji e-mail w oparciu o profil użytkownika.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://aistudio.google.com',
    aiStudioUrl: 'https://aistudio.google.com',
    repoUrl: 'https://github.com/dominikkuta/ai-marketing-funnel',
    qrCodeUrl: 'https://aistudio.google.com',
    qrCodeColor: '#6366f1',
    tags: ['Google AI Studio', 'Agents', 'Marketing Automation', 'Lead Gen'],
    metrics: 'Średni koszt leada obniżony o 42%',
    featured: true,
    date: '2026-02'
  },
  {
    id: 'proj-6',
    title: 'Omnichannel Brand Identity & Visual Design System',
    category: 'graphics',
    platform: 'figma',
    platformName: 'Figma & Creative Suite',
    description: 'Kompletna identyfikacja wizualna, typografia, palette system i zestaw ponad 120 komponentów do kampanii promocyjnych.',
    longDescription: 'Spójny system graficzny wdrożony w 4 krajach, obejmujący kreacje na billboardy, media społecznościowe, newslettery i UI aplikacji mobilnej.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://behance.net',
    repoUrl: 'https://github.com/dominikkuta',
    qrCodeUrl: 'https://behance.net',
    qrCodeColor: '#ec4899',
    tags: ['Brand System', 'Figma', 'UI/UX', 'Social Creatives', 'Vector Design'],
    metrics: 'Spójność marki w 8 kanałach dotarcia',
    featured: false,
    date: '2026-01'
  }
];

export const initialGraphics: GraphicItem[] = [
  {
    id: 'graph-1',
    title: 'Neon Cyberpunk Identity & Key Visual',
    client: 'CyberCore Tech Summit',
    category: 'branding',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    fullResolutionUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=90',
    description: 'Kompletny key visual konferencji technologicznej z dynamicznymi formami 3D i futurystyczną typografią.',
    tags: ['Key Visual', 'Branding', '3D Graphics', 'Typography'],
    dimensions: '3840 x 2160 px',
    year: '2026',
    qrCodeUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119'
  },
  {
    id: 'graph-2',
    title: 'Minimalist Fintech Dashboard UI/UX System',
    client: 'VaultPay Financial',
    category: 'ui-ux',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    fullResolutionUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=90',
    description: 'Czysty interfejs panelu finansowego zoptymalizowany pod szybki odczyt danych i wysoki kontrast.',
    tags: ['UI/UX', 'Figma', 'Fintech', 'Design System'],
    dimensions: '1920 x 1080 px',
    year: '2026',
    qrCodeUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df'
  },
  {
    id: 'graph-3',
    title: 'Social Media Viral Ad Sets (Meta & TikTok)',
    client: 'EcoRevive Lifestyle',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    fullResolutionUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=90',
    description: 'Seria 24 kreacji reklamowych formatu 9:16 i 1:1 testowanych z wykorzystaniem algorytmów wielowariantowych.',
    tags: ['Social Media', 'Meta Ads', 'High CTR', 'Creative Kit'],
    dimensions: '1080 x 1920 px',
    year: '2025',
    qrCodeUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe'
  },
  {
    id: 'graph-4',
    title: 'Eco Sustainable Packaging & Vector Line Art',
    client: 'PureBotanica Lab',
    category: 'branding',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    fullResolutionUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=90',
    description: 'Projekt opakowań kosmetycznych z wykorzystaniem ekologicznego druku, złoceń i minimalistycznej grafiki.',
    tags: ['Packaging', 'Print Design', 'Branding', 'Vector Art'],
    dimensions: 'Wektory SVG / PDF Druk',
    year: '2025',
    qrCodeUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363'
  }
];

export const initialMarketingCaseStudies: MarketingCaseStudy[] = [
  {
    id: 'case-1',
    title: 'Skalowanie SaaS z 0 do 35 000 użytkowników dzięki SEO i AI Discovery',
    client: 'DocuSync AI',
    strategy: 'Kompleksowa strategia Generative Engine Optimization (GEO), struktura Schema.org, publikacja bazy wiedzy programistycznej oraz optymalizacja lejków onboardingowych.',
    description: 'Wdrożenie semantycznego SEO i technicznego Schema markup sprawiło, że platforma stała się jednym z głównych źródeł cytowań w wynikach Google AI Overviews oraz Perplexity.',
    results: [
      { label: 'Wzrost ruchu organicznego', value: '+420%', change: 'w 6 miesięcy' },
      { label: 'Rejestracje użytkowników', value: '35 400+', change: 'z kanału organicznego' },
      { label: 'Koszt pozyskania (CAC)', value: '-58%', change: 'względem kampanii Paid' },
      { label: 'Pozycje TOP 3 Google', value: '140+ fraz', change: 'kluczowych branżowo' }
    ],
    channels: ['SEO & GEO (AI Search)', 'Content Marketing', 'Technical Schema', 'Product-Led Growth'],
    timeframe: '6 miesięcy (Q3-Q4 2025)',
    keyTakeaways: [
      'Strukturalne dane JSON-LD bezpośrednio wpływają na widoczność aplikacji w silnikach LLM.',
      'Szybkość działania (Core Web Vitals na Cloudflare) zwiększa współczynnik konwersji o 34%.',
      'Interaktywne kody QR w materiałach zewnętrznych pozwoliły mierzyć ruch offline-to-online.'
    ],
    testimonial: {
      quote: 'Dominik łączy głęboką wiedzę inżynierską z marketingowym zmysłem. Wyniki przerosły nasze najśmielsze oczekiwania.',
      author: 'Michał Kowalski',
      company: 'CEO w DocuSync'
    },
    liveUrl: 'https://github.com/dominikkuta',
    qrCodeUrl: 'https://github.com/dominikkuta'
  },
  {
    id: 'case-2',
    title: 'Kampania Omnichannel E-commerce: 4.9x ROAS z Google Ads & Meta Ads',
    client: 'ModaUrban Store',
    strategy: 'Dynamiczny remarketing, kreacje wideo oparte o user-generated content, optymalizacja koszyka zakupowego i testy A/B stron docelowych.',
    description: 'Zbudowanie zintegrowanego systemu analitycznego (Google Tag Manager Server-Side + Cloudflare Worker Proxy) pozwoliło ominąć blokady cookies i precyzyjnie targetować klientów.',
    results: [
      { label: 'Średni zwrot z wydatków (ROAS)', value: '4.9x', change: 'wobec celu 3.2x' },
      { label: 'Wzrost przychodu sklepu', value: '+185%', change: 'rok do roku' },
      { label: 'Konwersja z koszyka', value: '3.82%', change: '+1.4 pp' },
      { label: 'Wygenerowany przychód', value: '840 000 zł', change: 'w 90 dni' }
    ],
    channels: ['Meta Ads (Facebook/Instagram)', 'Google Performance Max', 'Email Automation', 'Server-Side Tracking'],
    timeframe: '90 dni (Q1 2026)',
    keyTakeaways: [
      'Personalizowane kreacje graficzne osiągały o 78% wyższy CTR niż standardowe zdjęcia produktów.',
      'Wdrożenie dynamicznych kodów QR w paczkach podniosło powracalność klientów o 28%.'
    ],
    testimonial: {
      quote: 'Precyzja targetowania i jakość przygotowanych grafik reklamowych wyniosła naszą sprzedaż na zupełnie inny poziom.',
      author: 'Anna Lewandowska',
      company: 'Head of Marketing w ModaUrban'
    },
    liveUrl: 'https://wordpress.org',
    qrCodeUrl: 'https://wordpress.org'
  }
];
