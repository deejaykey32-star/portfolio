import heroImage from '../assets/images/portfolio_hero_workspace_1793196874101.jpg';
import engineerProfileImage from '../assets/images/engineer_profile_1793199037354.jpg';
import zycieDnaImage from '../assets/images/portfolio_zycie_dna_1793196890845.jpg';
import langEduImage from '../assets/images/langedudei_learning.png';
import pdfEditorImage from '../assets/images/portfolio_pdf_publishing_1793196890360.jpg';
import guitarImage from '../assets/images/portfolio_edudei_audio_1793196890615.jpg';
import drogeduImage from '../assets/images/drogedudei_traffic_1793198778598.jpg';
import histadaImage from '../assets/images/histada_game_1793198800613.jpg';
import mapaImage from '../assets/images/portfolio_mapa_orlich_gniazd_1793196891846.jpg';
import wnrAiImage from '../assets/images/wnr_ai_studio_1793198821208.jpg';
import walkieImage from '../assets/images/walkie_talkie_p2p_1793198849648.jpg';
import rhzImage from '../assets/images/rhz_broszura_dtp_1793198870216.jpg';
import eledudeiImage from '../assets/images/eledudei_circuit_1793198890098.jpg';
import embikImage from '../assets/images/embik_media_ai_1793198914853.jpg';
import rgbImage from '../assets/images/rgb_physics_lab_1793198939718.jpg';
import trackerImage from '../assets/images/tracker_analytics_1793198963159.jpg';
import koronkaImage from '../assets/images/koronka_rosary_1793198985746.jpg';
import cvImage from '../assets/images/cv_portfolio_dev_1793199012150.jpg';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'ai' | 'edutech' | 'tools' | 'games' | 'maps';
  categoryLabel: string;
  date: string;
  repoName: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  image?: string;
  badgeHighlight?: string;
  summary: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export const HERO_IMAGE = heroImage;
export const ENGINEER_PROFILE_IMAGE = engineerProfileImage;

export const PROJECTS: Project[] = [
  {
    id: 'zycie-dna',
    slug: 'zycie-dna',
    title: 'Laboratorium Życia (zycieDNA)',
    tagline: 'Edukacyjno-logiczna gra o DNA, bioinformatyce i inżynierii genetycznej',
    category: 'games',
    categoryLabel: 'Gry & Symulacje',
    date: 'Październik 2026',
    repoName: 'zycieDNA',
    githubUrl: 'https://github.com/deejaykey32-star/zycieDNA',
    liveUrl: 'https://zycie.pages.dev',
    featured: true,
    image: zycieDnaImage,
    badgeHighlight: '110 nagrań lektorskich audio · Zero zależności runtime',
    summary: 'Naukowa podróż od pojedynczego nukleotydu i par zasad, przez replikację, transkrypcję i translację, bioinformatykę mutacji w genie hemoglobiny (HBB), aż po biotechnologię: enzym restrykcyjny EcoRI, konstrukcję plazmidu i edycję genomu systemem CRISPR-Cas9.',
    challenge: 'Złożone zjawiska biologii molekularnej są trudne do intuicyjnego zrozumienia w tradycyjnych podręcznikach. Wyzwaniem było stworzenie płynnej, interaktywnej symulacji działającej natychmiastowo w przeglądarce bez żadnych ciężkich silników czy bibliotek, przy zachowaniu 100% wierności naukowej.',
    solution: 'Zaimplementowano architekturę bezramkową (HTML/CSS/JS w jednym, zoptymalizowanym pliku) z autorskim silnikiem renderowania cząsteczek. Doświadczenie wzbogaca dr Ada Helisa – animowany wirtualny przewodnik z bazą 110 nagrań dźwiękowych lektorki, indeksowanych bezkolizyjnym hashem FNV-1a.',
    keyFeatures: [
      'Wizualizacja nukleotydów (A, T, G, C) i mechaniki wiązań wodorowych w podwójnej helisie DNA',
      'Symulacja replikacji z polimerazą DNA oraz transkrypcji do mRNA i translacji w rybosomie',
      'Moduł bioinformatyczny: lokalizacja punktowej mutacji w genie HBB (anemia sierpowata)',
      'Laboratorium inżynierii genetycznej: cięcie enzymem restrykcyjnym EcoRI i ligacja plazmidowa',
      'Moduł CRISPR-Cas9: celowanie sgRNA i precyzyjna naprawa nici DNA',
      'Autorska narracja głosowa z 110 plikami MP3 sterowana zdarzeniami DOM'
    ],
    techStack: ['Vanilla JavaScript', 'Web Audio API', 'HTML5 Canvas', 'SVG Vector Graphics', 'CSS Variables', 'FNV-1a Hashing'],
    metrics: [
      { label: 'Kwestie lektorskie', value: '110 nagrań MP3' },
      { label: 'Złożoność biologiczna', value: '6 etapów molekularnych' },
      { label: 'Zależności runtime', value: '0 (Pure Vanilla)' },
      { label: 'Zgodność naukowa', value: '100% biomedyczna' }
    ],
    codeSnippet: {
      filename: 'audio-dispatcher.js',
      language: 'javascript',
      code: `// Autorski hashing FNV-1a dla natychmiastowego mapowania tekstu na plik MP3
function fnv1a(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0).toString(16);
}

function playDrAdaVoice(phraseText) {
  const fileHash = fnv1a(phraseText.trim());
  const audio = new Audio(\`audio/\${fileHash}.mp3\`);
  audio.play().catch(e => console.warn("Audio autoplay blocked", e));
}`
    }
  },
  {
    id: 'langedudei',
    slug: 'langedudei',
    title: 'LangEduDei — Dwuletni System Angielskiego A1–C2',
    tagline: 'Interaktywny system nauki języka z rozpoznawaniem mowy i lektorem Kurakiem',
    category: 'edutech',
    categoryLabel: 'Edukacja & EdTech',
    date: 'Październik 2026',
    repoName: 'langedudei',
    githubUrl: 'https://github.com/deejaykey32-star/langedudei',
    liveUrl: 'https://langedudei.pages.dev',
    featured: true,
    image: langEduImage,
    badgeHighlight: '104 tygodnie nauki · Metody Doma · Web Speech API',
    summary: 'Autorska platforma do opanowania języka angielskiego od poziomu zerowego (A1) do biegłości native-like (C2) w zaplanowanym cyklu 2 lat (104 tygodnie po 30 minut dziennie). Zbudowana w oparciu o naturalne reguły akwizycji językowej Doma z animowaną postacią Kuraka.',
    challenge: 'Większość aplikacji językowych skupia się na fragmentarycznym zapamiętywaniu słówek bez całościowego zanurzenia w strukturze fonetycznej i żywym dialogu, co uniemożliwia pokonanie bariery mówienia.',
    solution: 'Zaprojektowano modułową architekturę ćwiczeń z natywną integracją Web Speech API w przeglądarkach Chrome/Edge. Użytkownik prowadzi interaktywny dialog, a silnik analizuje intonację, tempo i poprawność fonetyczną, serwując feedback w ułamku sekundy.',
    keyFeatures: [
      'Pełny 104-tygodniowy plan dydaktyczny od elementarnego A1 po uniwersytecki C2',
      'Trening konwersacyjny z rozpoznawaniem mowy i natychmiastowym scoringiem',
      'Dynamiczny lektor syntetyczny wykorzystujący wysokiej jakości głosy neuralne',
      'Repetycja interwałowa (Spaced Repetition) oparta na krzywej zapominania Ebbinghausa',
      'Wdrażanie produkcyjne na globalnej sieci brzegowej Cloudflare Pages'
    ],
    techStack: ['JavaScript', 'Web Speech API', 'Cloudflare Pages', 'HTML5 Audio', 'Tailwind CSS', 'PWA Offline Cache'],
    metrics: [
      { label: 'Horyzont programu', value: '104 tygodnie (2 lata)' },
      { label: 'Skala zaawansowania', value: 'A1 → C2 CEFR' },
      { label: 'Dzienny rytm', value: '30 minut' },
      { label: 'Czas latencji mowy', value: '< 150 ms' }
    ]
  },
  {
    id: 'pdf-editor',
    slug: 'pdf-editor',
    title: 'PDF QR Studio — Kliencki Silnik Poligraficzny A5',
    tagline: 'Statyczny edytor dokumentów A5 do 1500 stron z bezstratnym wstrzykiwaniem kodów QR',
    category: 'tools',
    categoryLabel: 'Narzędzia & Poligrafia',
    date: 'Wrzesień 2026',
    repoName: 'pdf-editor',
    githubUrl: 'https://github.com/deejaykey32-star/pdf-editor',
    liveUrl: 'https://pdf-editor-3f4.pages.dev',
    featured: true,
    image: pdfEditorImage,
    badgeHighlight: '100% Client-Side · Do 1500 stron · Zero-Backend',
    summary: 'Wysoko wydajne, bezserwerowe narzędzie webowe do precyzyjnego podglądu wielkich tomów PDF (standard A5: 148 x 210 mm) oraz bezstratnego osadzania kodów QR w strumieniu wektorowym PDF bez rasteryzacji treści.',
    challenge: 'Narzędzia serwerowe generują ogromny narzut transferu i prywatności przy przetwarzaniu setek megabajtów książek. Typowe biblioteki webowe konwertują strony na rastry, niszcząc ostrość tekstu typograficznego w druku profesjonalnym.',
    solution: 'Zaimplementowano hybrydowy potok oparty na PDF-lib i WebAssembly. Wszystkie operacje modyfikacji drzewa obiektów PDF, koordynatów wektorowych i wstrzykiwania obrazów QR wykonują się w pamięci RAM przeglądarki użytkownika z zachowaniem mikrometrycznej dokładności.',
    keyFeatures: [
      'Bezstratna manipulacja strumieniem PDF (zero ponownej kompresji tekstu i fontów)',
      'Obsługa tomów o objętości do 1500 stron bez wycieków pamięci WebAssembly',
      'Dynamiczny generator matryc QR z konfigurowalną korekcją błędów ECC (L, M, Q, H)',
      'Precyzyjny podgląd spadów (bleeds) i marginesów wewnętrznych dla standardu A5',
      'Zero-backend: gwarancja całkowitej poufności i przetwarzania danych po stronie klienta'
    ],
    techStack: ['PDF-lib', 'WebAssembly', 'JavaScript ESNext', 'Canvas API', 'Cloudflare Pages', 'Web Workers'],
    metrics: [
      { label: 'Maksymalna objętość', value: '1500 stron A5' },
      { label: 'Utrata jakości tekstu', value: '0% (Czyste wektory)' },
      { label: 'Zależność od serwera', value: '0 (100% Client-Side)' },
      { label: 'Standard publikacji', value: 'A5: 148×210 mm' }
    ]
  },
  {
    id: 'guitar-edudei',
    slug: 'guitar-edudei',
    title: 'GuitarEduDei — Wirtualna Szkoła Gitary ze Stroikiem',
    tagline: 'Interaktywny kurs gitary z cyfrowym analizatorem dźwięku przez wejście jack',
    category: 'edutech',
    categoryLabel: 'Edukacja & EdTech',
    date: 'Październik 2026',
    repoName: 'guitar-edudei',
    githubUrl: 'https://github.com/deejaykey32-star/guitar-edudei',
    liveUrl: 'https://guitaredudei.pages.dev',
    featured: false,
    image: guitarImage,
    badgeHighlight: 'Cyfrowy tuner Web Audio · Wejście Jack & Mikrofon',
    summary: 'Interaktywna platforma do praktycznej nauki gry na gitarze klasycznej, akustycznej i elektrycznej. Zawiera interaktywny gryf z wizualizacją chwytów akordowych, animowany metronom oraz cyfrowy tuner częstotliwościowy.',
    challenge: 'Tradycyjna nauka akordów z diagramów na kartce papieru nie daje uczniowi natychmiastowej informacji zwrotnej, czy instrument stroi i czy prawidłowo dociska struny.',
    solution: 'Zaimplementowano analizator częstotliwości podstawowej (algorytm autokorelacji i transformacji Fouriera FFT) przez Web Audio API. Działa z mikrofonem oraz bezpośrednio podłączoną gitarą elektryczną przez interfejs jack.',
    keyFeatures: [
      'Dokładny stroik chromatyczny ze wskaźnikiem centów i automatycznym wykrywaniem struny (EADGBE)',
      'Interaktywny gryf 24 progów z wizualizacją skal, pentatonik i chwytów barre',
      'System punktów doświadczenia XP, lekcje wideo i interaktywne tabulatury',
      'Wsparcie dla urządzeń mobilnych oraz aplikacja Android PWA'
    ],
    techStack: ['JavaScript', 'Web Audio API (FFT & Autocorrelation)', 'Cloudflare Pages', 'HTML5 Canvas', 'SVG', 'PWA'],
    metrics: [
      { label: 'Dokładność tunera', value: '±1 cent' },
      { label: 'Przetwarzanie audio', value: '44.1 / 48 kHz FFT' },
      { label: 'Obsługiwane wejścia', value: 'Mikrofon + Jack USB' }
    ]
  },
  {
    id: 'drogedudei',
    slug: 'drogedudei',
    title: 'DrogEduDei — Kodeks Drogowy & Psychotesty',
    tagline: 'Kompleksowy e-learning prawa jazdy z gamifikacją i bazą znaków SVG',
    category: 'edutech',
    categoryLabel: 'Edukacja & EdTech',
    date: 'Październik 2026',
    repoName: 'drogedudei',
    githubUrl: 'https://github.com/deejaykey32-star/drogedudei',
    liveUrl: 'https://drogedudei.pages.dev',
    featured: false,
    image: drogeduImage,
    badgeHighlight: '36 rozdziałów · 4 moduły · Wektory znaków SVG',
    summary: 'Aplikacja dydaktyczna dla kandydatów na kierowców łącząca przepisy ruchu drogowego, praktykę manewrową, psychotesty kierowców oraz profilaktykę zdrowotną. Oparta na maskotce Kuraka-Szofera.',
    challenge: 'Materiały szkoleniowe do prawa jazdy bywają nużące i rzadko poruszają kluczowe tematy psychofizyki, zmęczenia za kółkiem oraz badań okulistycznych.',
    solution: 'Stworzono modularny podręcznik (36 rozdziałów w 4 sekcjach) zintegrowany z codziennym systemem powtórek (krąg 20 minut, serie dni), symulatorem testów teoretycznych i wektorową bazą znaków.',
    keyFeatures: [
      'Moduł 1: Teoria przepisów, pierwszeństwo przejazdu, skrzyżowania równorzędne i rondo',
      'Moduł 2: Kategorie uprawnień (AM, A1, A, B, B+E, C, D) i dopuszczalne masy zestawów',
      'Moduł 3: Technika jazdy, jazda defensywna, poślizgi i warunki zimowe',
      'Moduł 4: Badania lekarskie, czas reakcji, testy widzenia zmierzchowego i pierwszej pomocy'
    ],
    techStack: ['JavaScript', 'HTML5 Semantic UI', 'CSS Grid/Flexbox', 'Local Storage Persistence', 'Cloudflare Pages'],
    metrics: [
      { label: 'Rozdziały tematyczne', value: '36 rozdziałów' },
      { label: 'Główne sekcje', value: '4 moduły wiedzy' },
      { label: 'Codzienny mikro-nawyk', value: 'Krąg 20 minut' }
    ]
  },
  {
    id: 'histada',
    slug: 'histada',
    title: 'HISTADA · Trylogia — Czterowymiarowa Gra Dziejów',
    tagline: '52 miliony kombinacji opowiadań cywilizacyjnych z generatorem druku',
    category: 'games',
    categoryLabel: 'Gry & Symulacje',
    date: 'Październik 2026',
    repoName: 'histada',
    githubUrl: 'https://github.com/deejaykey32-star/histada',
    liveUrl: 'https://histada.pages.dev',
    featured: false,
    image: histadaImage,
    badgeHighlight: '52 047 360 opowiadań · 432 dwujęzyczne karty do druku',
    summary: 'Epicka gra dydaktyczna w trzech częściach: rozgrywka planszowa 2D/3D (1–12 graczy), "W Kręgu Tajemnicy" oraz "Cyfrowy Diament", wzbogacona o kompletny generator zestawów do druku fizycznego.',
    challenge: 'Połączenie cyfrowej elastyczności generowania narracji historycznej z fizycznym, namacalnym doświadczeniem gry planszowej przy zachowaniu pełnej spójności chronologicznej dziejów.',
    solution: 'Zaprojektowano 4-wymiarową macierz fabularną dającą ponad 52 miliony unikalnych ścieżek narracyjnych oraz zautomatyzowany moduł DTP generujący pliki do wydruku plansz, kości i 432 kart PL/EN.',
    keyFeatures: [
      'Silnik generowania 52 047 360 unikalnych opowieści historycznych i kulturowych',
      'Wirtualna plansza 2D/3D dla grup od 1 do 12 graczy z synchronizacją tur',
      'Moduł DTP do druku: skład 432 kart opowieści (wersje polska i angielska), planszy i kości',
      'Trzy powiązane odsłony tematyczne: Plansza, Krąg Tajemnicy i Cyfrowy Diament'
    ],
    techStack: ['HTML5', 'CSS3 3D Transforms', 'JavaScript ES6', 'Print CSS Media Queries', 'Cloudflare Pages'],
    metrics: [
      { label: 'Kombinacje narracji', value: '52 047 360 wariantów' },
      { label: 'Karty do druku', value: '432 karty PL / EN' },
      { label: 'Liczba graczy', value: '1–12 osób' }
    ]
  },
  {
    id: 'mapa-orlich-gniazd',
    slug: 'mapa-orlich-gniazd',
    title: 'Wielka Pielgrzymka Gwiaździsta 2026 & Szlak Orlich Gniazd',
    tagline: 'Interaktywna platforma multimedialno-geograficzna z trasami i profilami wysokości',
    category: 'maps',
    categoryLabel: 'GIS & Kartografia',
    date: 'Październik 2026',
    repoName: 'mapa',
    githubUrl: 'https://github.com/deejaykey32-star/mapa',
    liveUrl: 'https://mapa-aon.pages.dev',
    featured: true,
    image: mapaImage,
    badgeHighlight: 'System GIS · 3 etapy pielgrzymki · Szlak Jury Krakowsko-Częstochowskiej',
    summary: 'Kartograficzno-multimedialny portal obsługujący 3-etapową Wielką Pielgrzymkę Gwiaździstą 2026: Zbieżność międzynarodowych tras do Częstochowy, wspólny marsz Szlakiem Orlich Gniazd do Krakowa-Łagiewnik oraz Rozesłanie.',
    challenge: 'Wielotysięczne grupy pielgrzymkowe poruszające się zróżnicowanym terenem jurajskim wymagają natychmiastowego dostępu do profilu wzniesień, źródeł wody, punktów medycznych i koordynatów w warunkach słabego zasięgu.',
    solution: 'Zbudowano lekki interfejs mapowy z warstwami wektorowymi GeoJSON, kalkulatorem przewyższeń, indeksacją zabytków i zamków obronnych oraz trybem offline.',
    keyFeatures: [
      'Etap I (Zbieżność): Wizualizacja promienistych tras pielgrzymkowych z całego świata na Jasną Górę',
      'Etap II (Szlak Orlich Gniazd): Przebieg przez zamek Olsztyn, Mirów, Bobolice, Ogrodzieniec i Ojcowski PN',
      'Etap III (Missio): Dojście do Sanktuarium Bożego Miłosierdzia w Łagiewnikach i rozesłanie',
      'Kalkulacja przewyższeń, kilometrażu oraz punktów czerpania wody i noclegów'
    ],
    techStack: ['JavaScript', 'GeoJSON Mapping', 'Leaflet / Vector Tiles', 'HTML5 Geolocation', 'Cloudflare Pages'],
    metrics: [
      { label: 'Długość Szlaku Głównego', value: '163.9 km' },
      { label: 'Główne etapy marszu', value: '3 fazy strategiczne' },
      { label: 'Śledzone zamki i warownie', value: '14 obiektów obronnych' }
    ]
  },
  {
    id: 'ai-studio-wnr',
    slug: 'ai-studio-wnr',
    title: 'WNR 365 — Google AI Studio Multi-Tool',
    tagline: 'Hybrydowy analizator dokumentacji PDF i syntezy wiedzy z Gemini API i Firebase',
    category: 'ai',
    categoryLabel: 'AI & Google AI Studio',
    date: 'Październik 2026',
    repoName: 'wnr',
    githubUrl: 'https://github.com/deejaykey32-star/wnr',
    liveUrl: 'https://wnr365.pages.dev',
    featured: true,
    image: wnrAiImage,
    badgeHighlight: 'Google AI Studio · Gemini API · Firebase Firestore · jsPDF & JSZip',
    summary: 'Aplikacja stworzona w ekosystemie Google AI Studio. Łączy potęgę multimodalnego modelu Gemini z przetwarzaniem dokumentów PDF (PDF.js), generowaniem paczek ZIP, kodami QR i synchronizacją Firebase.',
    challenge: 'Wielostronicowe dokumenty techniczne i edukacyjne wymagają semantycznego streszczenia, generowania pytań sprawdzających oraz automatycznego składu spersonalizowanych certyfikatów i podsumowań PDF.',
    solution: 'Zintegrowano backend Express z Google GenAI SDK, umożliwiając strumieniową analizę promptów i bezstratne tworzenie paczek dystrybucyjnych za pomocą jsPDF i JSZip.',
    keyFeatures: [
      'Bezpośrednia integracja z modelem Gemini API (analiza semantyczna i generowanie treści)',
      'Dwukierunkowy procesor PDF: ekstrakcja tekstu przez PDF.js i dynamiczne renderowanie w jsPDF',
      'Chmurowa synchronizacja stanu i użytkowników z wykorzystaniem Firebase Firestore',
      'Pakowanie i kompresja wsadowa wielu wygenerowanych zasobów do formatu ZIP (JSZip)'
    ],
    techStack: ['@google/genai', 'React', 'TypeScript', 'Express', 'Firebase Firestore', 'jsPDF', 'JSZip', 'PDF.js'],
    metrics: [
      { label: 'Silnik sztucznej inteligencji', value: 'Google Gemini 2.5 / 2.0' },
      { label: 'Formaty wyjściowe', value: 'PDF, ZIP, JSON, QR' },
      { label: 'Architektura', value: 'Serverless / Cloud Run' }
    ]
  },
  {
    id: 'walkie-talkie',
    slug: 'walkie-talkie',
    title: 'Walkie-Talkie P2P & QR Scanner',
    tagline: 'Głosowa łączność radiowa Push-to-Talk w czasie rzeczywistym via WebRTC i Capacitor',
    category: 'tools',
    categoryLabel: 'Narzędzia & Poligrafia',
    date: 'Wrzesień 2026',
    repoName: 'walkie',
    githubUrl: 'https://github.com/deejaykey32-star/walkie',
    liveUrl: 'https://walkie-talkie-p2p.pages.dev',
    featured: false,
    image: walkieImage,
    badgeHighlight: 'WebRTC P2P · PeerJS · Capacitor Android · Skaner QR',
    summary: 'Aplikacja komunikacyjna czasu rzeczywistego typu Walkie-Talkie (Push-to-Talk) dla przeglądarek i telefonów z systemem Android. Błyskawiczne parowanie urządzeń za pomocą skanowania kodu QR.',
    challenge: 'Nawiązanie bezpośredniego kanału audio o zerowym opóźnieniu między dwoma urządzeniami mobilnymi bez konieczności zakładania kont i skomplikowanej konfiguracji IP.',
    solution: 'Zaimplementowano sygnalizację PeerJS/WebSocket z natychmiastowym parowaniem przez kamerę i bibliotekę jsQR. Kompilacja mobilna oparta o Capacitor Android z obsługą uprawnień mikrofonu.',
    keyFeatures: [
      'Klasyczny interfejs radiotelefonu Push-to-Talk (PTT) z fizycznym dźwiękiem squelch',
      'Bezpośredni strumień audio Peer-to-Peer o opóźnieniu poniżej 80 ms przez WebRTC',
      'Szybkie parowanie kanałów: jedno urządzenie wyświetla QR, drugie skanuje kamerą',
      'Wsparcie natywne dla Androida dzięki @capacitor/android i kamerze @capacitor/camera'
    ],
    techStack: ['WebRTC', 'PeerJS', 'Capacitor', 'React', 'TypeScript', 'jsQR', 'WebSocket', 'Tailwind CSS'],
    metrics: [
      { label: 'Opóźnienie transmisji audio', value: '< 80 ms (P2P)' },
      { label: 'Czas parowania QR', value: '< 2 sekundy' },
      { label: 'Wspierane platformy', value: 'Web + Android APK' }
    ]
  },
  {
    id: 'rhz365-broszura',
    slug: 'rhz365-broszura',
    title: 'RHZ365 — Generator Broszur A5 & Amazon KDP',
    tagline: 'Silnik DTP przygotowujący pliki produkcyjne do druku zeszytowego i Amazon Paperback',
    category: 'tools',
    categoryLabel: 'Narzędzia & Poligrafia',
    date: 'Wrzesień 2026',
    repoName: 'rhz365-broszura',
    githubUrl: 'https://github.com/deejaykey32-star/rhz365-broszura',
    liveUrl: 'https://rhz365-broszura.pages.dev',
    featured: false,
    image: rhzImage,
    badgeHighlight: 'Poligrafia DTP · Profile Amazon KDP · Spady 3.0 mm',
    summary: 'Wyspecjalizowany generator plików produkcyjnych dla publikacji książkowej projektu Różaniec Historii Zbawienia (widokinaraj.pl), obsługujący formaty 16 i 20 stron z rygorystycznymi wytycznymi drukarskimi.',
    challenge: 'Drukarnie internetowe oraz Amazon KDP odrzucają pliki z błędnymi spadami, niewłaściwą kolejnością składek (impozycja) lub naruszeniem bezpiecznego marginesu wewnętrznego grzbietu.',
    solution: 'Stworzono zautomatyzowany silnik renderowania geometrii arkusza z automatyczną impozycją stron (tzw. narzucanie składek) i weryfikacją rozdzielczości 300 DPI.',
    keyFeatures: [
      'Profil Druk Lokalny (16 stron): Broszura zeszytowa szyta drutem ze spadem 3.0 mm',
      'Profil Rozszerzony (20 stron): Składka z dodatkową erratą i aneksami modlitewnymi',
      'Profil Amazon KDP Paperback: Zoptymalizowany margines wewnętrzny (gutter) pod klejony grzbiet',
      'Wbudowany walidator przestrzeni barwnej i linii cięcia (crop marks)'
    ],
    techStack: ['HTML5 Print Engine', 'CSS Paged Media (@page)', 'JavaScript', 'PDF Generation', 'DTP Standards'],
    metrics: [
      { label: 'Precyzja spadów', value: '3.0 mm ± 0.1 mm' },
      { label: 'Profile publikacji', value: 'Drukarnia + Amazon KDP' },
      { label: 'Zgodność ze składkami', value: 'Impozycja 16 / 20 str.' }
    ]
  },
  {
    id: 'eledudei',
    slug: 'eledudei',
    title: 'Elektron-SEP — Symulator Elektroenergetyczny',
    tagline: 'Edukacyjna platforma elektrotechniki przygotowująca do egzaminów SEP G1',
    category: 'edutech',
    categoryLabel: 'Edukacja & EdTech',
    date: 'Październik 2026',
    repoName: 'eledudei',
    githubUrl: 'https://github.com/deejaykey32-star/eledudei',
    liveUrl: 'https://eledudei.pages.dev',
    featured: false,
    image: eledudeiImage,
    badgeHighlight: 'Uprawnienia SEP · Sieci TN/TT/IT · Pomiary ochronne',
    summary: 'Aplikacja interaktywna dla elektryków i inżynierów przygotowująca do egzaminów państwowych Stowarzyszenia Elektryków Polskich (Grupa 1: urządzenia, instalacje i sieci elektroenergetyczne).',
    challenge: 'Zrozumienie schematów ochrony przeciwporażeniowej i warunków samoczynnego wyłączenia zasilania (SWZ) wymaga wizualizacji drogi prądu zwarciowego i działania wyłączników RCD.',
    solution: 'Zaimplementowano interaktywne schematy obwodów elektrycznych z możliwością symulacji uszkodzenia izolacji i reakcji zabezpieczeń nadprądowych oraz różnicowoprądowych.',
    keyFeatures: [
      'Wizualizacja układów sieciowych: TN-C, TN-S, TN-C-S, TT oraz IT',
      'Kalkulator pętli zwarcia i warunku samoczynnego wyłączenia zasilania (SWZ)',
      'Symulacja działania wyłączników różnicowoprądowych RCD i aparatury bezpiecznikowej',
      'Baza pytań komisji kwalifikacyjnych SEP na stanowiska eksploatacji (E) i dozoru (D)'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Lucide Icons', 'Tailwind CSS', 'Interactive SVG Circuits'],
    metrics: [
      { label: 'Zakres uprawnień', value: 'Grupa 1 (Elektryczna)' },
      { label: 'Symulowane układy', value: 'TN-C, TN-S, TT, IT' },
      { label: 'Stanowiska', value: 'Eksploatacja (E) i Dozór (D)' }
    ]
  },
  {
    id: 'embik365',
    slug: 'embik365',
    title: 'Embik365 / Droga365 — Multimedialna Fabryka AI',
    tagline: 'Generator multimedialnych materiałów edukacyjnych z modelem Gemini i eksportem',
    category: 'ai',
    categoryLabel: 'AI & Google AI Studio',
    date: 'Październik 2026',
    repoName: 'embik365',
    githubUrl: 'https://github.com/deejaykey32-star/embik365',
    liveUrl: 'https://embik365.pages.dev',
    featured: false,
    image: embikImage,
    badgeHighlight: 'Google GenAI SDK · Fix-WebM-Duration · Multer · jsPDF',
    summary: 'Zintegrowana platforma AI tworząca multimedialne materiały dla projektu Droga365: generowanie treści prompts, przetwarzanie i korekcja nagrań audio/wideo (WebM) oraz automatyczna generacja archiwów ZIP i dokumentów PDF.',
    challenge: 'Nagrania wideo i audio w przeglądarkach w formacie WebM często tracą nagłówki czasu trwania (duration bug), co uniemożliwia ich przewijanie w standardowych odtwarzaczach.',
    solution: 'Zastosowano moduł fix-webm-duration do patchowania metadanych binarnych w locie oraz asynchroniczny potok Express z Gemini API do transkrypcji i wzbogacania treści.',
    keyFeatures: [
      'Dwukierunkowa komunikacja z API Gemini dla dynamicznej generacji scenariuszy',
      'Naprawa nagłówków kontenerów multimedialnych WebM w czasie rzeczywistym',
      'Automatyczny eksport zestawów edukacyjnych do paczek ZIP z kodami QR i PDF',
      'Płynna animacja interfejsu oparta o bibliotekę Motion'
    ],
    techStack: ['@google/genai', 'Express', 'React', 'TypeScript', 'fix-webm-duration', 'jsPDF', 'JSZip', 'Multer'],
    metrics: [
      { label: 'Integracja AI', value: 'Google Gemini Pro / Flash' },
      { label: 'Format multimediów', value: 'WebM + Audio Fix' },
      { label: 'Dystrybucja', value: 'ZIP + PDF Packager' }
    ]
  },
  {
    id: 'symulacja-rgb',
    slug: 'symulacja-rgb',
    title: 'Symulacja Zmiany RGB — Laboratorium Fizyki Barw',
    tagline: 'Interaktywne modelowanie syntezy addytywnej, spektrum światła i barw chromatycznych',
    category: 'games',
    categoryLabel: 'Gry & Symulacje',
    date: 'Wrzesień 2026',
    repoName: 'symulacja-RGB-zmiany',
    githubUrl: 'https://github.com/deejaykey32-star/symulacja-RGB-zmiany',
    featured: false,
    image: rgbImage,
    badgeHighlight: 'Synteza addytywna RGB · Modelowanie światła · Motion UI',
    summary: 'Narzędzie laboratoryjne umożliwiające eksperymentowanie z fizyką fal świetlnych, addytywną syntezą barw (czerwień, zieleń, niebieski) oraz subiektywną percepcją wzrokową oka ludzkiego.',
    challenge: 'Zrozumienie różnicy między addytywnym mieszaniem światła na ekranach (RGB) a subtraktywnym w poligrafii (CMYK) bywa mylące bez możliwości natychmiastowej manipulacji składowymi.',
    solution: 'Zbudowano symulator o wysokiej responsywności z renderowaniem wektorowym wiązek świetlnych i dynamicznym wykresom długości fal.',
    keyFeatures: [
      'Płynna regulacja nasycenia kanałów R, G, B z natychmiastowym przeliczaniem na HSL i HEX',
      'Wizualizacja nakładających się snopów światła i powstawania barw wtórnych (żółty, cyjan, magenta)',
      'Symulacja percepcji barw dla osób z dysfunkcjami widzenia (protanopia, deuteranopia)'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Canvas API'],
    metrics: [
      { label: 'Częstotliwość odświeżania', value: '60 FPS' },
      { label: 'Przestrzenie barwne', value: 'RGB, HSL, HEX, CMYK' }
    ]
  },
  {
    id: 'tracker-postepu',
    slug: 'tracker-postepu',
    title: 'Blog & Project Progress Tracker',
    tagline: 'System śledzenia postępów i zarządzania kamieniami milowymi z Firebase i Gemini',
    category: 'tools',
    categoryLabel: 'Narzędzia & Poligrafia',
    date: 'Sierpień 2026',
    repoName: 'Tracker',
    githubUrl: 'https://github.com/deejaykey32-star/Tracker',
    featured: false,
    image: trackerImage,
    badgeHighlight: 'Firebase Cloud DB · Gemini Copilot · Metryki zadań',
    summary: 'Dedykowany panel kontrolny do rejestrowania postępów w pisaniu bloga, publikacji wpisów technicznych i zarządzania sprintami deweloperskimi projektów.',
    challenge: 'Zarządzanie wieloma projektami jednocześnie (EduDei, RHZ, gry, aplikacje AI) wymagało scentralizowanego narzędzia z historią w chmurze i szybkim dodawaniem notatek.',
    solution: 'Zaimplementowano aplikację React + Firebase z synchronizacją w czasie rzeczywistym i asystentem Gemini sugerującym podsumowania wpisów.',
    keyFeatures: [
      'Rejestracja wpisów i zadań z kategoryzacją tematyczną',
      'Statystyki produktywności i wskaźniki ukończenia projektów',
      'Persystencja w chmurze Firebase Firestore'
    ],
    techStack: ['React', 'TypeScript', 'Firebase Firestore', '@google/genai', 'Tailwind CSS'],
    metrics: [
      { label: 'Baza danych', value: 'Firebase Firestore Realtime' },
      { label: 'Integracja AI', value: 'Gemini Assistant' }
    ]
  },
  {
    id: 'koronka-milosierdzia',
    slug: 'koronka-milosierdzia',
    title: 'Koronka do Miłosierdzia Bożego 2.0 & Koronka365',
    tagline: 'Cyfrowy asystent modlitewny z audio, interaktywnym różańcem i animacjami',
    category: 'maps',
    categoryLabel: 'Kultura & Kartografia',
    date: 'Październik 2026',
    repoName: 'koronka2',
    githubUrl: 'https://github.com/deejaykey32-star/koronka2',
    liveUrl: 'https://koronka2.pages.dev',
    featured: false,
    image: koronkaImage,
    badgeHighlight: 'Interaktywny różaniec · Lektor audio · PWA',
    summary: 'Aplikacja dewocyjna i medytacyjna oferująca interaktywne odliczanie paciorków koronki, podkłady muzyczno-lektorskie oraz archiwizację intencji modlitewnych.',
    challenge: 'Stworzenie aplikacji o podniosłym, wyciszającym charakterze, która umożliwia modlitwę w podróży bez rozpraszających reklam i z pełnym wsparciem offline.',
    solution: 'Zbudowano minimalistyczny interfejs z dotykowym przesuwaniem koralików, delikatną haptyką i zsynchronizowanym nagraniem lektora.',
    keyFeatures: [
      'Wizualny licznik dziesiątek z płynną animacją przejść',
      'Tryb audio z możliwością modlitwy przy wygaszonym ekranie',
      'Możliwość instalacji jako PWA i działanie offline'
    ],
    techStack: ['JavaScript', 'HTML5 Audio', 'CSS Keyframes', 'PWA Manifest', 'Local Storage'],
    metrics: [
      { label: 'Tryb pracy', value: '100% Offline PWA' },
      { label: 'Dostępność', value: 'Wersja 2.0 z lektorem' }
    ]
  },
  {
    id: 'cv-dominik-kuta',
    slug: 'cv-dominik-kuta',
    title: 'Dominik Kuta — Profesjonalne CV & Portfel',
    tagline: 'Nowoczesny życiorys programisty z eksportem PDF, panelem i synchronizacją',
    category: 'tools',
    categoryLabel: 'Narzędzia & Poligrafia',
    date: 'Sierpień 2026',
    repoName: 'cv-dominik-kuta',
    githubUrl: 'https://github.com/deejaykey32-star/cv-dominik-kuta',
    featured: false,
    image: cvImage,
    badgeHighlight: 'Express 5 · Drizzle ORM · PostgreSQL · Orval Codegen',
    summary: 'Aplikacja CV Dominika Kuty zbudowana w architekturze pnpm workspaces z serwerem Express 5, bazą PostgreSQL, typowanymi kontraktami OpenAPI i generowaniem PDF.',
    challenge: 'Utrzymanie zawsze aktualnego CV z wersjami językowymi oraz natychmiastowym generowaniem idealnie sformatowanego pliku PDF do rekrutacji.',
    solution: 'Zaimplementowano pełnostronicowy potok oparty na Drizzle ORM, Zod i generatorze PDF z możliwością edycji danych przez panel administracyjny.',
    keyFeatures: [
      'Wielostronicowy podgląd CV z przełącznikiem motywu jasny / ciemny',
      'Automatyczny eksport do profesjonalnego dokumentu PDF',
      'Autoryzacja Google Auth i panel zarządzania doświadczeniem'
    ],
    techStack: ['Node.js 24', 'TypeScript', 'Express 5', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'Orval'],
    metrics: [
      { label: 'Środowisko', value: 'Node.js 24 + pnpm monorepo' },
      { label: 'Baza danych', value: 'PostgreSQL + Drizzle ORM' }
    ]
  }
];

export const STATS = [
  { label: 'Publiczne Repozytoria GitHub', value: '23+' },
  { label: 'Aplikacje Google AI Studio', value: 'Aktywne' },
  { label: 'Generowane kombinacje narracji', value: '52M+' },
  { label: 'Architektura i Chmura', value: 'Cloudflare & GCP' }
];

export const SKILL_DOMAINS = [
  {
    title: 'Sztuczna Inteligencja & AI Studio',
    desc: 'Projektowanie i wdrażanie aplikacji z modelem Google Gemini API, synteza głosu, prompt engineering, multimodalna analiza dokumentów oraz generowanie paczek produkcyjnych.',
    tools: ['Google AI Studio', 'Gemini API (@google/genai)', 'Multimodal AI', 'Speech-to-Text', 'Prompt Chaining']
  },
  {
    title: 'EdTech & Interaktywne Systemy Dydaktyczne',
    desc: 'Nowatorskie platformy nauki: LangEduDei (język angielski A1–C2, 104 tygodnie), DrogEduDei (kodeks drogowy, psychotesty), GuitarEduDei (stroik Web Audio, gitara).',
    tools: ['Web Speech API', 'Web Audio API', 'Gamifikacja XP', 'Metody Doma', 'Spaced Repetition']
  },
  {
    title: 'Bioinformatyka & Gry Naukowe',
    desc: 'Realistyczne symulatory procesów komórkowych: Laboratorium Życia (zycieDNA) z edycją genomu CRISPR-Cas9, replikacją DNA i lektorem dr Ady Helisy.',
    tools: ['Bioinformatyka', 'CRISPR-Cas9 Modeling', 'FNV-1a Audio Engine', 'Vanilla JS High Performance']
  },
  {
    title: 'Inżynieria Poligraficzna & Client-Side DTP',
    desc: 'Statyczne edytory PDF obsługujące tomy do 1500 stron (PDF QR Studio), bezstratne wstrzykiwanie kodów QR, impozycja arkuszy drukarskich i formaty Amazon KDP Paperback.',
    tools: ['PDF-lib WASM', 'Amazon KDP Spec', 'CSS Paged Media', 'Zero-Backend', 'QR Matrix ECC']
  },
  {
    title: 'GIS, Kartografia & Systemy P2P',
    desc: 'Interaktywne portale mapowe (Wielka Pielgrzymka Gwiaździsta 2026, Szlak Orlich Gniazd) oraz łączność radiowa Push-to-Talk WebRTC P2P w Capacitor Android.',
    tools: ['GeoJSON & Leaflet', 'WebRTC P2P', 'PeerJS', 'Capacitor Android', 'WebSocket']
  }
];
