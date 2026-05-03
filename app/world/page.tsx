'use client';

import dynamic from 'next/dynamic';
import MagneticCursor from '@/components/ui/MagneticCursor';
import WorldHUD from '@/components/hud/WorldHUD';

const WorldScene = dynamic(() => import('@/components/world/WorldScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#030303] flex items-center justify-center">
      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <div key={i} className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </div>
    </div>
  ),
});

export default function WorldPage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#030303]">
      <MagneticCursor />
      <WorldHUD />

      {/* 3D World — full screen */}
      <div className="absolute inset-0 z-0">
        <WorldScene />
      </div>

      {/* Vignette edges */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(3,3,3,0.6) 0%, transparent 15%, transparent 85%, rgba(3,3,3,0.6) 100%)'
      }} />

      {/* Corner labels */}
      <div className="absolute top-20 right-6 z-20 text-right pointer-events-none">
        <p className="text-xs font-mono text-white/20 tracking-widest">CREATOP UNIVERSE</p>
        <p className="text-[10px] font-mono text-white/10 mt-0.5">v1.0 · WebGL</p>
      </div>

      {/* Controls hint */}
      <div className="absolute bottom-12 right-6 z-20 text-right pointer-events-none hidden md:block">
        <p className="text-[10px] font-mono text-white/15 leading-relaxed">
          גלגל עכבר — זום<br />
          גרור — סיבוב<br />
          לחץ על עסק — כניסה
        </p>
      </div>
    </main>
  );
}
