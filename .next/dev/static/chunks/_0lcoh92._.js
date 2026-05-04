(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/MagneticCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagneticCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MagneticCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const rafId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagneticCursor.useEffect": ()=>{
            const dot = dotRef.current;
            const ringEl = ringRef.current;
            if (!dot || !ringEl) return;
            const moveMouse = {
                "MagneticCursor.useEffect.moveMouse": (e)=>{
                    mouse.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dot, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.08,
                        ease: 'power3.out'
                    });
                }
            }["MagneticCursor.useEffect.moveMouse"];
            const animateRing = {
                "MagneticCursor.useEffect.animateRing": ()=>{
                    ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
                    ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(ringEl, {
                        x: ring.current.x,
                        y: ring.current.y
                    });
                    rafId.current = requestAnimationFrame(animateRing);
                }
            }["MagneticCursor.useEffect.animateRing"];
            animateRing();
            const onEnter = {
                "MagneticCursor.useEffect.onEnter": ()=>{
                    dot.classList.add('cursor-hover');
                    ringEl.classList.add('cursor-hover');
                }
            }["MagneticCursor.useEffect.onEnter"];
            const onLeave = {
                "MagneticCursor.useEffect.onLeave": ()=>{
                    dot.classList.remove('cursor-hover');
                    ringEl.classList.remove('cursor-hover');
                }
            }["MagneticCursor.useEffect.onLeave"];
            window.addEventListener('mousemove', moveMouse);
            document.querySelectorAll('a, button, [data-hover]').forEach({
                "MagneticCursor.useEffect": (el)=>{
                    el.addEventListener('mouseenter', onEnter);
                    el.addEventListener('mouseleave', onLeave);
                }
            }["MagneticCursor.useEffect"]);
            return ({
                "MagneticCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', moveMouse);
                    cancelAnimationFrame(rafId.current);
                }
            })["MagneticCursor.useEffect"];
        }
    }["MagneticCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cursor pointer-events-none",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "cursor-dot fixed",
                style: {
                    top: 0,
                    left: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/MagneticCursor.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                className: "cursor-ring fixed",
                style: {
                    top: 0,
                    left: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/MagneticCursor.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/MagneticCursor.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(MagneticCursor, "ro+w3Lsvs1nJ9pf3KCCnnJnXgmc=");
_c = MagneticCursor;
var _c;
__turbopack_context__.k.register(_c, "MagneticCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/businesses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUSINESSES",
    ()=>BUSINESSES,
    "FEATURED_BUSINESSES",
    ()=>FEATURED_BUSINESSES,
    "getBusinessBySlug",
    ()=>getBusinessBySlug,
    "getBusinessesByCategory",
    ()=>getBusinessesByCategory,
    "getBusinessesByDistrict",
    ()=>getBusinessesByDistrict
]);
const BUSINESSES = [
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
        position: [
            -8,
            0,
            -5
        ],
        colors: {
            primary: '#6F4E37',
            secondary: '#C4956A',
            accent: '#FFD700',
            background: '#1A0F08',
            glow: '#FF9500'
        },
        building: {
            shape: 'cube',
            height: 1.4,
            width: 1.2,
            depth: 1.2,
            glowIntensity: 0.8
        },
        atmosphere: 'warm',
        particles: {
            type: 'steam',
            count: 80,
            speed: 0.3,
            color: '#FFFFFF',
            size: 0.06
        },
        audio: {
            ambient: 'cafe-morning',
            bpm: 72
        },
        experience: {
            entryAnimation: 'zoom',
            mainFeature: 'menu-3d',
            interactivity: 'high'
        },
        tags: [
            'קפה',
            'בוקר',
            'חמים'
        ],
        featured: true
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
        position: [
            0,
            0,
            -8
        ],
        colors: {
            primary: '#2D4A7A',
            secondary: '#8B6914',
            accent: '#E8C84A',
            background: '#0A0D14',
            glow: '#4A90D9'
        },
        building: {
            shape: 'tower',
            height: 2.2,
            width: 1.0,
            depth: 1.0,
            glowIntensity: 0.6
        },
        atmosphere: 'dreamy',
        particles: {
            type: 'pages',
            count: 60,
            speed: 0.15,
            color: '#F4F0E8',
            size: 0.08
        },
        audio: {
            ambient: 'library-quiet',
            bpm: 60
        },
        experience: {
            entryAnimation: 'portal',
            mainFeature: 'gallery-3d',
            interactivity: 'high'
        },
        tags: [
            'ספרים',
            'תרבות',
            'ידע'
        ],
        featured: true
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
        position: [
            8,
            0,
            -5
        ],
        colors: {
            primary: '#7C3AED',
            secondary: '#EC4899',
            accent: '#22D3EE',
            background: '#0D0A1A',
            glow: '#A855F7'
        },
        building: {
            shape: 'organic',
            height: 1.8,
            width: 1.4,
            depth: 1.4,
            glowIntensity: 1.2
        },
        atmosphere: 'electric',
        particles: {
            type: 'music-notes',
            count: 100,
            speed: 0.5,
            color: '#A855F7',
            size: 0.07
        },
        audio: {
            ambient: 'music-store-beats',
            bpm: 128
        },
        experience: {
            entryAnimation: 'shatter',
            mainFeature: 'showcase',
            interactivity: 'high'
        },
        tags: [
            'מוזיקה',
            'כלים',
            'ביט'
        ],
        featured: true
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
        position: [
            -4,
            0,
            -12
        ],
        colors: {
            primary: '#1A1A2E',
            secondary: '#C9A96E',
            accent: '#FFD700',
            background: '#0D0D1A',
            glow: '#C9A96E'
        },
        building: {
            shape: 'tower',
            height: 2.8,
            width: 0.8,
            depth: 0.8,
            glowIntensity: 0.7
        },
        atmosphere: 'luxury',
        particles: {
            type: 'sparkles',
            count: 120,
            speed: 0.1,
            color: '#FFD700',
            size: 0.04
        },
        audio: {
            ambient: 'fashion-lounge',
            bpm: 90
        },
        experience: {
            entryAnimation: 'dissolve',
            mainFeature: 'gallery-3d',
            interactivity: 'high'
        },
        tags: [
            'אופנה',
            'יוקרה',
            'סטייל'
        ],
        featured: false
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
        position: [
            4,
            0,
            -3
        ],
        colors: {
            primary: '#06B6D4',
            secondary: '#0EA5E9',
            accent: '#22D3EE',
            background: '#020B12',
            glow: '#06B6D4'
        },
        building: {
            shape: 'pyramid',
            height: 2.0,
            width: 1.6,
            depth: 1.6,
            glowIntensity: 1.5
        },
        atmosphere: 'cool',
        particles: {
            type: 'pixels',
            count: 200,
            speed: 0.8,
            color: '#06B6D4',
            size: 0.03
        },
        audio: {
            ambient: 'digital-hum',
            bpm: 110
        },
        experience: {
            entryAnimation: 'portal',
            mainFeature: 'showcase',
            interactivity: 'high'
        },
        tags: [
            'טכנולוגיה',
            'גאדג\'טים',
            'עתיד'
        ],
        featured: false
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
        position: [
            0,
            0,
            0
        ],
        colors: {
            primary: '#EC4899',
            secondary: '#F9A8D4',
            accent: '#FBCFE8',
            background: '#1A0A12',
            glow: '#F472B6'
        },
        building: {
            shape: 'dome',
            height: 1.2,
            width: 1.8,
            depth: 1.8,
            glowIntensity: 0.9
        },
        atmosphere: 'dreamy',
        particles: {
            type: 'petals',
            count: 90,
            speed: 0.2,
            color: '#F9A8D4',
            size: 0.06
        },
        audio: {
            ambient: 'spa-calm',
            bpm: 65
        },
        experience: {
            entryAnimation: 'dissolve',
            mainFeature: 'catalog-3d',
            interactivity: 'medium'
        },
        tags: [
            'יופי',
            'טיפוח',
            'אסתטיקה'
        ],
        featured: false
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
        position: [
            -12,
            0,
            4
        ],
        colors: {
            primary: '#FF4D4D',
            secondary: '#FF7700',
            accent: '#FFCC00',
            background: '#0F0808',
            glow: '#FF4D4D'
        },
        building: {
            shape: 'organic',
            height: 1.6,
            width: 2.0,
            depth: 2.0,
            glowIntensity: 1.0
        },
        atmosphere: 'electric',
        particles: {
            type: 'dust',
            count: 150,
            speed: 1.2,
            color: '#FF7700',
            size: 0.04
        },
        audio: {
            ambient: 'sport-energy',
            bpm: 140
        },
        experience: {
            entryAnimation: 'shatter',
            mainFeature: 'game',
            interactivity: 'high'
        },
        tags: [
            'ספורט',
            'כושר',
            'אנרגיה'
        ],
        featured: false
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
        position: [
            0,
            0,
            12
        ],
        colors: {
            primary: '#D4AF37',
            secondary: '#F9D71C',
            accent: '#FFFFFF',
            background: '#0A0800',
            glow: '#D4AF37'
        },
        building: {
            shape: 'dome',
            height: 2.5,
            width: 2.0,
            depth: 2.0,
            glowIntensity: 2.0
        },
        atmosphere: 'sacred',
        particles: {
            type: 'sparkles',
            count: 200,
            speed: 0.08,
            color: '#D4AF37',
            size: 0.05
        },
        audio: {
            ambient: 'spiritual-ambient',
            bpm: 55
        },
        experience: {
            entryAnimation: 'portal',
            mainFeature: 'showcase',
            interactivity: 'medium'
        },
        tags: [
            'רוחניות',
            'יהדות',
            'אמונה'
        ],
        featured: true
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
        position: [
            6,
            0,
            -16
        ],
        colors: {
            primary: '#06B6D4',
            secondary: '#0891B2',
            accent: '#F4F0E8',
            background: '#020B12',
            glow: '#22D3EE'
        },
        building: {
            shape: 'cube',
            height: 3.0,
            width: 2.2,
            depth: 1.0,
            glowIntensity: 0.8
        },
        atmosphere: 'minimal',
        particles: {
            type: 'dust',
            count: 40,
            speed: 0.05,
            color: '#F4F0E8',
            size: 0.04
        },
        audio: {
            ambient: 'gallery-silence',
            bpm: 50
        },
        experience: {
            entryAnimation: 'slide',
            mainFeature: 'gallery-3d',
            interactivity: 'high'
        },
        tags: [
            'אמנות',
            'גלריה',
            'עיצוב'
        ],
        featured: false
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
        position: [
            12,
            0,
            0
        ],
        colors: {
            primary: '#B45309',
            secondary: '#D97706',
            accent: '#FCD34D',
            background: '#120A02',
            glow: '#F59E0B'
        },
        building: {
            shape: 'organic',
            height: 1.6,
            width: 1.6,
            depth: 1.6,
            glowIntensity: 0.9
        },
        atmosphere: 'warm',
        particles: {
            type: 'steam',
            count: 60,
            speed: 0.4,
            color: '#FCD34D',
            size: 0.08
        },
        audio: {
            ambient: 'restaurant-buzz',
            bpm: 88
        },
        experience: {
            entryAnimation: 'zoom',
            mainFeature: 'menu-3d',
            interactivity: 'high'
        },
        tags: [
            'מסעדה',
            'אוכל',
            'חוויה'
        ],
        featured: false
    }
];
const FEATURED_BUSINESSES = BUSINESSES.filter(_c = (b)=>b.featured);
_c1 = FEATURED_BUSINESSES;
const getBusinessBySlug = (slug)=>BUSINESSES.find((b)=>b.slug === slug);
const getBusinessesByCategory = (cat)=>BUSINESSES.filter((b)=>b.category === cat);
const getBusinessesByDistrict = (district)=>BUSINESSES.filter((b)=>b.district === district);
var _c, _c1;
__turbopack_context__.k.register(_c, "FEATURED_BUSINESSES$BUSINESSES.filter");
__turbopack_context__.k.register(_c1, "FEATURED_BUSINESSES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MagneticCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/MagneticCursor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$businesses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/businesses.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const WorldScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/world/WorldScene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/world/WorldScene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-[#030303]"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 11,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = WorldScene;
function LoadingScreen({ progress, done }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center gap-8",
        style: {
            transition: 'opacity 0.8s ease',
            opacity: done ? 0 : 1,
            pointerEvents: done ? 'none' : 'all'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-black animate-pulse-glow",
                                children: "C"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -inset-3 rounded-2xl border border-indigo-500/30 animate-ping"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-[0.3em] text-white/90 font-mono",
                                children: "CREATOP"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[0.5em] text-white/30 text-center mt-1 font-mono",
                                children: "UNIVERSE"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[1px] bg-white/5 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full transition-all duration-300",
                            style: {
                                width: `${progress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-xs font-mono text-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "טוען עולם"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    progress,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-white/20 font-mono tracking-widest animate-breath",
                children: progress < 30 ? 'בונה עסקים...' : progress < 60 ? 'מחולל מחוזות...' : progress < 85 ? 'מפעיל אנימציות...' : 'מכין כניסה...'
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c1 = LoadingScreen;
function HomePage() {
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loadDone, setLoadDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [entering, setEntering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const steps = [
                10,
                25,
                40,
                55,
                70,
                82,
                91,
                97,
                100
            ];
            let i = 0;
            const tick = setInterval({
                "HomePage.useEffect.tick": ()=>{
                    if (i < steps.length) setProgress(steps[i++]);
                    else {
                        clearInterval(tick);
                        setTimeout({
                            "HomePage.useEffect.tick": ()=>setLoadDone(true)
                        }["HomePage.useEffect.tick"], 600);
                    }
                }
            }["HomePage.useEffect.tick"], 280);
            return ({
                "HomePage.useEffect": ()=>clearInterval(tick)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const handleEnter = ()=>{
        setEntering(true);
        setTimeout(()=>router.push('/world'), 900);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-3d3ed89e89b38886" + " " + "relative w-screen h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MagneticCursor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingScreen, {
                progress: progress,
                done: loadDone
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d3ed89e89b38886" + " " + "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorldScene, {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: 'radial-gradient(ellipse at center, transparent 20%, rgba(3,3,3,0.7) 70%, rgba(3,3,3,0.95) 100%)'
                },
                className: "jsx-3d3ed89e89b38886" + " " + "absolute inset-0 z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d3ed89e89b38886" + " " + "absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        animation: 'scan 8s linear infinite'
                    },
                    className: "jsx-3d3ed89e89b38886" + " " + "absolute w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            loadDone && !entering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3d3ed89e89b38886" + " " + "absolute inset-0 z-30 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: 0,
                            animationDelay: '0.1s',
                            animationFillMode: 'forwards'
                        },
                        className: "jsx-3d3ed89e89b38886" + " " + "text-center mb-16 animate-slide-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-3d3ed89e89b38886" + " " + "text-xs font-mono tracking-[0.8em] text-white/30 mb-6",
                                children: "ברוכים הבאים אל"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(3rem,10vw,8rem)'
                                },
                                className: "jsx-3d3ed89e89b38886" + " " + "font-black leading-none tracking-tighter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3d3ed89e89b38886" + " " + "shimmer-text block",
                                        children: "CREATOP"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.35em'
                                        },
                                        className: "jsx-3d3ed89e89b38886" + " " + "block text-white/10 font-light tracking-[0.5em] mt-2",
                                        children: "UNIVERSE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-3d3ed89e89b38886" + " " + "mt-6 text-lg text-white/40 font-light max-w-md mx-auto leading-relaxed",
                                children: [
                                    "העולם הדיגיטלי התלת-מימדי הראשון לעסקים.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-3d3ed89e89b38886"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3d3ed89e89b38886" + " " + "text-white/20 text-sm",
                                        children: "1,000+ עסקים · חוויה אחת"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: 0,
                            animationDelay: '0.4s',
                            animationFillMode: 'forwards'
                        },
                        className: "jsx-3d3ed89e89b38886" + " " + "animate-slide-up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleEnter,
                            style: {
                                background: 'rgba(109,40,217,0.15)'
                            },
                            "data-hover": true,
                            className: "jsx-3d3ed89e89b38886" + " " + "group relative px-12 py-4 rounded-2xl font-semibold text-sm tracking-widest overflow-hidden hud-border transition-all duration-500 hover:scale-105",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-3d3ed89e89b38886" + " " + "absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-3d3ed89e89b38886" + " " + "relative flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-3d3ed89e89b38886" + " " + "w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        "כנס לעולם",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-3d3ed89e89b38886" + " " + "w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                                className: "jsx-3d3ed89e89b38886"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            opacity: 0,
                            animationDelay: '0.7s',
                            animationFillMode: 'forwards'
                        },
                        className: "jsx-3d3ed89e89b38886" + " " + "absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 animate-slide-up",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$businesses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FEATURED_BUSINESSES"].slice(0, 4).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `/business/${b.slug}`,
                                "data-hover": true,
                                className: "jsx-3d3ed89e89b38886" + " " + "glass-bright rounded-xl px-4 py-2.5 text-center hover:scale-105 transition-transform hud-border group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: b.colors.glow
                                        },
                                        className: "jsx-3d3ed89e89b38886" + " " + "w-2 h-2 rounded-full mx-auto mb-1.5 group-hover:scale-150 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-3d3ed89e89b38886" + " " + "text-xs text-white/70 font-medium",
                                        children: b.name_he
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-3d3ed89e89b38886" + " " + "text-[10px] text-white/25 mt-0.5",
                                        children: b.tagline_he
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, b.id, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            entering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: 'fadeIn 0.9s ease forwards',
                    opacity: 0
                },
                className: "jsx-3d3ed89e89b38886" + " " + "absolute inset-0 z-50 bg-black"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3d3ed89e89b38886",
                children: "@keyframes fadeIn{to{opacity:1}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(HomePage, "zVt/vTMzMla4uRXzMMQ5BycMFrU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = HomePage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WorldScene");
__turbopack_context__.k.register(_c1, "LoadingScreen");
__turbopack_context__.k.register(_c2, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0lcoh92._.js.map