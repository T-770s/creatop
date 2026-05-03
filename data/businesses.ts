export type BusinessCategory =
  | 'food' | 'fashion' | 'tech' | 'health' | 'art' | 'music'
  | 'books' | 'sport' | 'beauty' | 'education' | 'finance' | 'travel'
  | 'auto' | 'home' | 'media' | 'spiritual' | 'gaming' | 'nature';

export type ParticleType =
  | 'steam' | 'pages' | 'music-notes' | 'sparkles' | 'leaves'
  | 'snow' | 'petals' | 'coins' | 'pixels' | 'dust' | 'bubbles';

export type AtmosphereStyle =
  | 'warm' | 'cool' | 'electric' | 'organic' | 'minimal'
  | 'luxury' | 'sacred' | 'industrial' | 'dreamy' | 'retro';

export interface BusinessDNA {
  id: string;
  slug: string;
  name_he: string;
  name_en: string;
  tagline_he: string;
  tagline_en: string;
  category: BusinessCategory;
  district: 'center' | 'mall' | 'creative' | 'industry' | 'entertainment' | 'nature';
  floor: number;
  position: [number, number, number];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    glow: string;
  };
  building: {
    shape: 'tower' | 'dome' | 'cube' | 'pyramid' | 'organic' | 'neon-sign';
    height: number;
    width: number;
    depth: number;
    glowIntensity: number;
  };
  atmosphere: AtmosphereStyle;
  particles: {
    type: ParticleType;
    count: number;
    speed: number;
    color: string;
    size: number;
  };
  audio: {
    ambient: string;
    bpm?: number;
  };
  experience: {
    entryAnimation: 'zoom' | 'dissolve' | 'portal' | 'slide' | 'shatter';
    mainFeature: 'menu-3d' | 'gallery-3d' | 'catalog-3d' | 'game' | 'showcase';
    interactivity: 'high' | 'medium' | 'passive';
  };
  tags: string[];
  featured: boolean;
}

export const BUSINESSES: BusinessDNA[] = [
  // ── FOOD & DRINK ──
  {
    id: 'b001',
    slug: 'kafeh-shachar',
    name_he: 'קפה שחר',
    name_en: 'Shachar Coffee',
    tagline_he: 'הבוקר מתחיל כאן',
    tagline_en: 'The morning starts here',
    category: 'food',
    district: 'mall',
    floor: 1,
    position: [-8, 0, -5],
    colors: {
      primary: '#6F4E37',
      secondary: '#C4956A',
      accent: '#FFD700',
      background: '#1A0F08',
      glow: '#FF9500',
    },
    building: { shape: 'cube', height: 1.4, width: 1.2, depth: 1.2, glowIntensity: 0.8 },
    atmosphere: 'warm',
    particles: { type: 'steam', count: 80, speed: 0.3, color: '#FFFFFF', size: 0.06 },
    audio: { ambient: 'cafe-morning', bpm: 72 },
    experience: { entryAnimation: 'zoom', mainFeature: 'menu-3d', interactivity: 'high' },
    tags: ['קפה', 'בוקר', 'חמים'],
    featured: true,
  },
  // ── BOOKSTORE ──
  {
    id: 'b002',
    slug: 'sefer-olam',
    name_he: 'עולם הספר',
    name_en: 'Book Universe',
    tagline_he: 'כל עולם בין שני כריכות',
    tagline_en: 'Every world between two covers',
    category: 'books',
    district: 'creative',
    floor: 2,
    position: [0, 0, -8],
    colors: {
      primary: '#2D4A7A',
      secondary: '#8B6914',
      accent: '#E8C84A',
      background: '#0A0D14',
      glow: '#4A90D9',
    },
    building: { shape: 'tower', height: 2.2, width: 1.0, depth: 1.0, glowIntensity: 0.6 },
    atmosphere: 'dreamy',
    particles: { type: 'pages', count: 60, speed: 0.15, color: '#F4F0E8', size: 0.08 },
    audio: { ambient: 'library-quiet', bpm: 60 },
    experience: { entryAnimation: 'portal', mainFeature: 'gallery-3d', interactivity: 'high' },
    tags: ['ספרים', 'תרבות', 'ידע'],
    featured: true,
  },
  // ── MUSIC STORE ──
  {
    id: 'b003',
    slug: 'musicom',
    name_he: 'מיוזיקום',
    name_en: 'Musicom',
    tagline_he: 'כאן המוזיקה חיה',
    tagline_en: 'Where music lives',
    category: 'music',
    district: 'entertainment',
    floor: 1,
    position: [8, 0, -5],
    colors: {
      primary: '#7C3AED',
      secondary: '#EC4899',
      accent: '#22D3EE',
      background: '#0D0A1A',
      glow: '#A855F7',
    },
    building: { shape: 'organic', height: 1.8, width: 1.4, depth: 1.4, glowIntensity: 1.2 },
    atmosphere: 'electric',
    particles: { type: 'music-notes', count: 100, speed: 0.5, color: '#A855F7', size: 0.07 },
    audio: { ambient: 'music-store-beats', bpm: 128 },
    experience: { entryAnimation: 'shatter', mainFeature: 'showcase', interactivity: 'high' },
    tags: ['מוזיקה', 'כלים', 'ביט'],
    featured: true,
  },
  // ── FASHION ──
  {
    id: 'b004',
    slug: 'moda-elyon',
    name_he: 'מודה עליון',
    name_en: 'Moda Elyon',
    tagline_he: 'לבוש שמספר סיפור',
    tagline_en: 'Fashion that tells a story',
    category: 'fashion',
    district: 'mall',
    floor: 2,
    position: [-4, 0, -12],
    colors: {
      primary: '#1A1A2E',
      secondary: '#C9A96E',
      accent: '#FFD700',
      background: '#0D0D1A',
      glow: '#C9A96E',
    },
    building: { shape: 'tower', height: 2.8, width: 0.8, depth: 0.8, glowIntensity: 0.7 },
    atmosphere: 'luxury',
    particles: { type: 'sparkles', count: 120, speed: 0.1, color: '#FFD700', size: 0.04 },
    audio: { ambient: 'fashion-lounge', bpm: 90 },
    experience: { entryAnimation: 'dissolve', mainFeature: 'gallery-3d', interactivity: 'high' },
    tags: ['אופנה', 'יוקרה', 'סטייל'],
    featured: false,
  },
  // ── TECH ──
  {
    id: 'b005',
    slug: 'techlab',
    name_he: 'טכלאב',
    name_en: 'TechLab',
    tagline_he: 'עתיד כבר כאן',
    tagline_en: 'The future is now',
    category: 'tech',
    district: 'center',
    floor: 1,
    position: [4, 0, -3],
    colors: {
      primary: '#06B6D4',
      secondary: '#0EA5E9',
      accent: '#22D3EE',
      background: '#020B12',
      glow: '#06B6D4',
    },
    building: { shape: 'pyramid', height: 2.0, width: 1.6, depth: 1.6, glowIntensity: 1.5 },
    atmosphere: 'cool',
    particles: { type: 'pixels', count: 200, speed: 0.8, color: '#06B6D4', size: 0.03 },
    audio: { ambient: 'digital-hum', bpm: 110 },
    experience: { entryAnimation: 'portal', mainFeature: 'showcase', interactivity: 'high' },
    tags: ['טכנולוגיה', 'גאדג\'טים', 'עתיד'],
    featured: false,
  },
  // ── BEAUTY ──
  {
    id: 'b006',
    slug: 'yofi-studio',
    name_he: 'סטודיו יופי',
    name_en: 'Beauty Studio',
    tagline_he: 'כשהיופי פוגש אמנות',
    tagline_en: 'When beauty meets art',
    category: 'beauty',
    district: 'mall',
    floor: 1,
    position: [0, 0, 0],
    colors: {
      primary: '#EC4899',
      secondary: '#F9A8D4',
      accent: '#FBCFE8',
      background: '#1A0A12',
      glow: '#F472B6',
    },
    building: { shape: 'dome', height: 1.2, width: 1.8, depth: 1.8, glowIntensity: 0.9 },
    atmosphere: 'dreamy',
    particles: { type: 'petals', count: 90, speed: 0.2, color: '#F9A8D4', size: 0.06 },
    audio: { ambient: 'spa-calm', bpm: 65 },
    experience: { entryAnimation: 'dissolve', mainFeature: 'catalog-3d', interactivity: 'medium' },
    tags: ['יופי', 'טיפוח', 'אסתטיקה'],
    featured: false,
  },
  // ── SPORT ──
  {
    id: 'b007',
    slug: 'sport-max',
    name_he: 'ספורט מקס',
    name_en: 'Sport Max',
    tagline_he: 'גבולות? מה זה גבולות',
    tagline_en: 'No limits',
    category: 'sport',
    district: 'nature',
    floor: 0,
    position: [-12, 0, 4],
    colors: {
      primary: '#FF4D4D',
      secondary: '#FF7700',
      accent: '#FFCC00',
      background: '#0F0808',
      glow: '#FF4D4D',
    },
    building: { shape: 'organic', height: 1.6, width: 2.0, depth: 2.0, glowIntensity: 1.0 },
    atmosphere: 'electric',
    particles: { type: 'dust', count: 150, speed: 1.2, color: '#FF7700', size: 0.04 },
    audio: { ambient: 'sport-energy', bpm: 140 },
    experience: { entryAnimation: 'shatter', mainFeature: 'game', interactivity: 'high' },
    tags: ['ספורט', 'כושר', 'אנרגיה'],
    featured: false,
  },
  // ── SPIRITUAL ──
  {
    id: 'b008',
    slug: 'or-hachaim',
    name_he: 'אור החיים',
    name_en: 'Or HaChaim',
    tagline_he: 'אורות שמחברים נשמות',
    tagline_en: 'Lights that connect souls',
    category: 'spiritual',
    district: 'nature',
    floor: 0,
    position: [0, 0, 12],
    colors: {
      primary: '#D4AF37',
      secondary: '#F9D71C',
      accent: '#FFFFFF',
      background: '#0A0800',
      glow: '#D4AF37',
    },
    building: { shape: 'dome', height: 2.5, width: 2.0, depth: 2.0, glowIntensity: 2.0 },
    atmosphere: 'sacred',
    particles: { type: 'sparkles', count: 200, speed: 0.08, color: '#D4AF37', size: 0.05 },
    audio: { ambient: 'spiritual-ambient', bpm: 55 },
    experience: { entryAnimation: 'portal', mainFeature: 'showcase', interactivity: 'medium' },
    tags: ['רוחניות', 'יהדות', 'אמונה'],
    featured: true,
  },
  // ── ART GALLERY ──
  {
    id: 'b009',
    slug: 'galeria-shira',
    name_he: 'גלריה שירה',
    name_en: 'Shira Art Gallery',
    tagline_he: 'אמנות שנשמה בה',
    tagline_en: 'Art you can breathe in',
    category: 'art',
    district: 'creative',
    floor: 3,
    position: [6, 0, -16],
    colors: {
      primary: '#06B6D4',
      secondary: '#0891B2',
      accent: '#F4F0E8',
      background: '#020B12',
      glow: '#22D3EE',
    },
    building: { shape: 'cube', height: 3.0, width: 2.2, depth: 1.0, glowIntensity: 0.8 },
    atmosphere: 'minimal',
    particles: { type: 'dust', count: 40, speed: 0.05, color: '#F4F0E8', size: 0.04 },
    audio: { ambient: 'gallery-silence', bpm: 50 },
    experience: { entryAnimation: 'slide', mainFeature: 'gallery-3d', interactivity: 'high' },
    tags: ['אמנות', 'גלריה', 'עיצוב'],
    featured: false,
  },
  // ── RESTAURANT ──
  {
    id: 'b010',
    slug: 'mizrach-west',
    name_he: 'מזרח-מערב',
    name_en: 'East-West',
    tagline_he: 'היכן שטעמים נפגשים',
    tagline_en: 'Where flavors collide',
    category: 'food',
    district: 'entertainment',
    floor: 1,
    position: [12, 0, 0],
    colors: {
      primary: '#B45309',
      secondary: '#D97706',
      accent: '#FCD34D',
      background: '#120A02',
      glow: '#F59E0B',
    },
    building: { shape: 'organic', height: 1.6, width: 1.6, depth: 1.6, glowIntensity: 0.9 },
    atmosphere: 'warm',
    particles: { type: 'steam', count: 60, speed: 0.4, color: '#FCD34D', size: 0.08 },
    audio: { ambient: 'restaurant-buzz', bpm: 88 },
    experience: { entryAnimation: 'zoom', mainFeature: 'menu-3d', interactivity: 'high' },
    tags: ['מסעדה', 'אוכל', 'חוויה'],
    featured: false,
  },
];

export const FEATURED_BUSINESSES = BUSINESSES.filter(b => b.featured);
export const getBusinessBySlug = (slug: string) => BUSINESSES.find(b => b.slug === slug);
export const getBusinessesByCategory = (cat: BusinessCategory) => BUSINESSES.filter(b => b.category === cat);
export const getBusinessesByDistrict = (district: string) => BUSINESSES.filter(b => b.district === district);
