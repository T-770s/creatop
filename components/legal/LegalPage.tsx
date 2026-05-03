'use client';

import Link from 'next/link';

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, subtitle, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="relative min-h-screen bg-[#030303] text-[#F4F0E8]">
      {/* Subtle background glow */}
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(109,40,217,0.18) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(6,182,212,0.10) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white/40 hover:text-cyan-400 transition-colors mb-12 group"
        >
          <svg
            className="w-3 h-3 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          חזרה לעולם
        </Link>

        {/* Header */}
        <div className="mb-14">
          <p className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase mb-3">
            CREATOP UNIVERSE
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 shimmer-text inline-block">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/60 font-light leading-relaxed">{subtitle}</p>
          )}
          <p className="mt-5 text-xs font-mono text-white/25 tracking-wider">
            עודכן לאחרונה · {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <article className="legal-content space-y-8 text-white/75 leading-relaxed">
          {children}
        </article>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-6 text-xs font-mono text-white/30">
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
            מדיניות פרטיות
          </Link>
          <Link href="/terms" className="hover:text-cyan-400 transition-colors">
            תנאי שימוש
          </Link>
          <Link href="/accessibility" className="hover:text-cyan-400 transition-colors">
            הצהרת נגישות
          </Link>
          <span className="ms-auto">© {new Date().getFullYear()} Creatop Universe</span>
        </footer>
      </div>
    </main>
  );
}
