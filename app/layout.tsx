import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://t-770s.github.io/creatop';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030303' },
    { media: '(prefers-color-scheme: light)', color: '#030303' },
  ],
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Creatop Universe — העולם הדיגיטלי התלת-מימדי לעסקים",
    template: "%s · Creatop Universe",
  },
  description: "העולם הדיגיטלי התלת-מימדי הראשון לעסקים. גלה, חווה ותתנסה ב-1000+ עסקים בחוויה ויזואלית מהפכנית — ישירות מהדפדפן, בכל מכשיר.",
  applicationName: "Creatop Universe",
  generator: "Next.js",
  keywords: [
    "עולם תלת מימד", "קניון דיגיטלי", "metaverse עברית", "creatop universe",
    "עסקים תלת מימדיים", "חוויה דיגיטלית", "WebGL", "Three.js",
    "אינטראקטיבי", "AR VR ישראל", "פלטפורמה לעסקים",
  ],
  authors: [{ name: "Creatop" }],
  creator: "Creatop",
  publisher: "Creatop",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: '/',
    languages: { 'he-IL': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: SITE_URL,
    siteName: 'Creatop Universe',
    title: 'Creatop Universe — עולם עסקים תלת מימדי',
    description: 'גלה 1,000+ עסקים בעולם דיגיטלי תלת-מימדי. חוויה אחת, אינסוף אפשרויות.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Creatop Universe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creatop Universe',
    description: 'העולם הדיגיטלי התלת-מימדי הראשון לעסקים',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Creatop',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  category: 'technology',
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Creatop Universe',
  description: 'העולם הדיגיטלי התלת-מימדי הראשון לעסקים',
  url: SITE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  inLanguage: 'he-IL',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'ILS' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', ratingCount: '1' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full bg-[#030303] text-[#F4F0E8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
