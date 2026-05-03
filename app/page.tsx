'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import MagneticCursor from '@/components/ui/MagneticCursor';
import { FEATURED_BUSINESSES } from '@/data/businesses';

const WorldScene = dynamic(() => import('@/components/world/WorldScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#030303]" />,
});

function LoadingScreen({ progress, done }: { progress: number; done: boolean }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center gap-8"
      style={{ transition: 'opacity 0.8s ease', opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'all' }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-black animate-pulse-glow">
            C
          </div>
          <div className="absolute -inset-3 rounded-2xl border border-indigo-500/30 animate-ping" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-[0.3em] text-white/90 font-mono">CREATOP</h1>
          <p className="text-xs tracking-[0.5em] text-white/30 text-center mt-1 font-mono">UNIVERSE</p>
        </div>
      </div>

      <div className="w-64 flex flex-col gap-3">
        <div className="h-[1px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs font-mono text-white/20">
          <span>טוען עולם</span>
          <span>{progress}%</span>
        </div>
      </div>

      <p className="text-xs text-white/20 font-mono tracking-widest animate-breath">
        {progress < 30 ? 'בונה עסקים...' : progress < 60 ? 'מחולל מחוזות...' : progress < 85 ? 'מפעיל אנימציות...' : 'מכין כניסה...'}
      </p>
    </div>
  );
}

export default function HomePage() {
  const [progress, setProgress] = useState(0);
  const [loadDone, setLoadDone] = useState(false);
  const [entering, setEntering] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const steps = [10, 25, 40, 55, 70, 82, 91, 97, 100];
    let i = 0;
    const tick = setInterval(() => {
      if (i < steps.length) setProgress(steps[i++]);
      else {
        clearInterval(tick);
        setTimeout(() => setLoadDone(true), 600);
      }
    }, 280);
    return () => clearInterval(tick);
  }, []);

  const handleEnter = () => {
    setEntering(true);
    setTimeout(() => router.push('/world'), 900);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <MagneticCursor />
      <LoadingScreen progress={progress} done={loadDone} />

      {/* 3D world */}
      <div className="absolute inset-0 z-0">
        <WorldScene />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(3,3,3,0.7) 70%, rgba(3,3,3,0.95) 100%)' }}
      />

      {/* Scan line */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" style={{ animation: 'scan 8s linear infinite' }} />
      </div>

      {/* Entry UI */}
      {loadDone && !entering && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
          {/* Title */}
          <div className="text-center mb-16 animate-slide-up" style={{ opacity: 0, animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <p className="text-xs font-mono tracking-[0.8em] text-white/30 mb-6">ברוכים הבאים אל</p>
            <h1 className="font-black leading-none tracking-tighter" style={{ fontSize: 'clamp(3rem,10vw,8rem)' }}>
              <span className="shimmer-text block">CREATOP</span>
              <span className="block text-white/10 font-light tracking-[0.5em] mt-2" style={{ fontSize: '0.35em' }}>UNIVERSE</span>
            </h1>
            <p className="mt-6 text-lg text-white/40 font-light max-w-md mx-auto leading-relaxed">
              העולם הדיגיטלי התלת-מימדי הראשון לעסקים.
              <br />
              <span className="text-white/20 text-sm">1,000+ עסקים · חוויה אחת</span>
            </p>
          </div>

          {/* Enter CTA */}
          <div className="animate-slide-up" style={{ opacity: 0, animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <button
              onClick={handleEnter}
              className="group relative px-12 py-4 rounded-2xl font-semibold text-sm tracking-widest overflow-hidden hud-border transition-all duration-500 hover:scale-105"
              style={{ background: 'rgba(109,40,217,0.15)' }}
              data-hover
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                כנס לעולם
                <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Featured businesses */}
          <div
            className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 animate-slide-up"
            style={{ opacity: 0, animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            {FEATURED_BUSINESSES.slice(0, 4).map(b => (
              <a
                key={b.id}
                href={`/business/${b.slug}`}
                className="glass-bright rounded-xl px-4 py-2.5 text-center hover:scale-105 transition-transform hud-border group"
                data-hover
              >
                <div className="w-2 h-2 rounded-full mx-auto mb-1.5 group-hover:scale-150 transition-transform" style={{ background: b.colors.glow }} />
                <p className="text-xs text-white/70 font-medium">{b.name_he}</p>
                <p className="text-[10px] text-white/25 mt-0.5">{b.tagline_he}</p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Enter transition overlay */}
      {entering && (
        <div
          className="absolute inset-0 z-50 bg-black"
          style={{ animation: 'fadeIn 0.9s ease forwards', opacity: 0 }}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </main>
  );
}
