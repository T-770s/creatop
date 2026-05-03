'use client';

import { useEffect, useState, useRef } from 'react';
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
      className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center gap-10 transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'all' }}
    >
      {/* Logo mark */}
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white animate-pulse-glow"
            style={{ background: 'linear-gradient(135deg, #6D28D9, #8B5CF6, #06B6D4)' }}
          >
            C
          </div>
          <div className="absolute -inset-4 rounded-3xl border border-indigo-500/20 animate-ping-slow" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-lg font-bold tracking-[0.35em] text-white/85 font-mono">CREATOP</p>
          <p className="text-[10px] tracking-[0.6em] text-white/25 font-mono">UNIVERSE</p>
        </div>
      </div>

      {/* Progress */}
      <div className="w-56 space-y-2.5">
        <div className="h-[1px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #6D28D9, #06B6D4)',
            }}
          />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[11px] font-mono text-white/20 animate-breath">
            {progress < 30 ? 'בונה עסקים...' : progress < 60 ? 'מחולל מחוזות...' : progress < 88 ? 'מפעיל אנימציות...' : 'מכין כניסה...'}
          </p>
          <p className="text-[11px] font-mono text-white/20 tabular-nums">{progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [progress, setProgress] = useState(0);
  const [loadDone, setLoadDone] = useState(false);
  const [entering, setEntering] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const steps = [8, 22, 38, 52, 67, 80, 90, 96, 100];
    let i = 0;
    const tick = setInterval(() => {
      if (i < steps.length) setProgress(steps[i++]);
      else {
        clearInterval(tick);
        setTimeout(() => setLoadDone(true), 500);
      }
    }, 260);
    return () => clearInterval(tick);
  }, []);

  const handleEnter = () => {
    setEntering(true);
    setTimeout(() => router.push('/world'), 950);
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#030303]">
      <MagneticCursor />
      <LoadingScreen progress={progress} done={loadDone} />

      {/* 3D world — always mounted so it loads in background */}
      <div className="absolute inset-0 z-0">
        <WorldScene />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none vignette" />

      {/* Scan line */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-30">
        <div className="scan-line" />
      </div>

      {/* ── Entry UI ── */}
      {loadDone && !entering && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">

          {/* Headline */}
          <div
            className="text-center mb-14 animate-slide-up"
            style={{ animationDelay: '0.05s', animationFillMode: 'both', opacity: 0 }}
          >
            <p className="text-[11px] font-mono tracking-[1em] text-white/25 mb-8 uppercase">
              ברוכים הבאים אל
            </p>

            <h1
              className="font-black leading-[0.9] tracking-[-0.03em] select-none"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
            >
              <span className="shimmer-text block">CREATOP</span>
            </h1>

            <p
              className="mt-3 font-mono text-white/12 tracking-[0.6em] uppercase"
              style={{ fontSize: 'clamp(0.55rem, 1.5vw, 0.85rem)' }}
            >
              UNIVERSE
            </p>

            <p className="mt-8 text-white/38 font-light leading-relaxed max-w-sm mx-auto"
               style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}>
              העולם הדיגיטלי התלת-מימדי הראשון לעסקים
            </p>
            <p className="mt-1.5 text-white/18 text-sm font-mono tracking-widest">
              1,000+ עסקים · חוויה אחת
            </p>
          </div>

          {/* CTA */}
          <div
            className="animate-slide-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both', opacity: 0 }}
          >
            <button
              onClick={handleEnter}
              data-hover
              className="group relative px-14 py-4 rounded-2xl text-sm font-semibold tracking-[0.15em] text-white/90 overflow-hidden transition-all duration-400 hover:scale-[1.04] active:scale-[0.98] hud-border"
              style={{ background: 'rgba(109,40,217,0.12)' }}
            >
              {/* Hover fill */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{ background: 'linear-gradient(135deg, rgba(109,40,217,0.22), rgba(6,182,212,0.12))' }} />
              <span className="relative flex items-center gap-3.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                כנס לעולם
                <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1.5 transition-transform duration-300"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Featured businesses strip */}
          <div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 animate-slide-up whitespace-nowrap"
            style={{ animationDelay: '0.55s', animationFillMode: 'both', opacity: 0 }}
          >
            {FEATURED_BUSINESSES.slice(0, 4).map(b => (
              <a
                key={b.id}
                href={`/business/${b.slug}`}
                data-hover
                className="glass-bright rounded-xl px-4 py-3 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group hud-border"
              >
                <div
                  className="w-2 h-2 rounded-full mx-auto mb-2 transition-transform duration-300 group-hover:scale-150"
                  style={{ background: b.colors.glow, boxShadow: `0 0 8px ${b.colors.glow}` }}
                />
                <p className="text-xs text-white/75 font-medium">{b.name_he}</p>
                <p className="text-[9px] text-white/28 mt-0.5 font-mono">{b.category}</p>
              </a>
            ))}
          </div>

          {/* Bottom hint */}
          <p className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/12 tracking-widest animate-breath">
            גרור · זום · לחץ על עסק
          </p>
        </div>
      )}

      {/* Transition overlay */}
      {entering && (
        <div
          ref={overlayRef}
          className="absolute inset-0 z-50 bg-[#030303] animate-fade-in"
        />
      )}
    </main>
  );
}
