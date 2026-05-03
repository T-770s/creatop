'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getBusinessBySlug } from '@/data/businesses';
import MagneticCursor from '@/components/ui/MagneticCursor';

const CoffeeShop = dynamic(() => import('@/components/businesses/CoffeeShop'), { ssr: false });
const Bookstore = dynamic(() => import('@/components/businesses/Bookstore'), { ssr: false });
const MusicStore = dynamic(() => import('@/components/businesses/MusicStore'), { ssr: false });
const WorldScene = dynamic(() => import('@/components/world/WorldScene'), { ssr: false });

function ExperienceCanvas({ slug }: { slug: string }) {
  if (slug === 'kafeh-shachar') return <CoffeeShop />;
  if (slug === 'sefer-olam') return <Bookstore />;
  if (slug === 'musicom') return <MusicStore />;
  return <div className="w-full h-full"><WorldScene /></div>;
}

export default function BusinessClient({ slug }: { slug: string }) {
  const router = useRouter();
  const business = getBusinessBySlug(slug);

  if (!business) {
    return (
      <div className="w-screen h-screen bg-[#030303] flex flex-col items-center justify-center gap-6">
        <p className="text-white/40 font-mono text-sm">עסק לא נמצא</p>
        <button onClick={() => router.push('/world')} className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors" data-hover>← חזור לעולם</button>
      </div>
    );
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <MagneticCursor />

      <div className="absolute inset-0 z-0">
        <ExperienceCanvas slug={slug} />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(3,3,3,0.7) 0%, transparent 25%, transparent 70%, rgba(3,3,3,0.85) 100%)'
      }} />

      {/* Header */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 pt-6">
        <button
          onClick={() => router.push('/world')}
          className="flex items-center gap-2 glass-bright rounded-xl px-4 py-2.5 text-sm text-white/60 hover:text-white transition-all hover:scale-105 hud-border"
          data-hover
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span>חזור לעולם</span>
        </button>
        <span className="text-xs font-mono text-white/20 tracking-widest hidden md:block">CREATOP UNIVERSE</span>
      </div>

      {/* Business info */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-8 pb-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: business.colors.glow }} />
            <span className="text-xs font-mono tracking-[0.4em] text-white/30">
              {business.category.toUpperCase()} · {business.district.toUpperCase()}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{business.name_he}</h1>
          <p className="mt-2 text-white/40 text-lg font-light">{business.tagline_he}</p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {business.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs glass-bright" style={{ borderColor: business.colors.glow + '40', color: business.colors.glow }}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hud-border" style={{ background: business.colors.primary + '30' }} data-hover>
              כנס לעסק
            </button>
            <button className="px-6 py-3 rounded-xl text-sm font-medium text-white/50 glass hover:text-white/80 transition-all" data-hover>
              שמור למועדפים
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-30 h-[2px] pointer-events-none" style={{
        background: `linear-gradient(90deg, transparent, ${business.colors.glow}, transparent)`
      }} />
    </main>
  );
}
