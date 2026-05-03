'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BUSINESSES } from '@/data/businesses';

const DISTRICTS = [
  { id: 'center', label_he: 'מרכז העיר', label_en: 'City Center', color: '#06B6D4' },
  { id: 'mall', label_he: 'מגה מול', label_en: 'Mega Mall', color: '#8B5CF6' },
  { id: 'creative', label_he: 'רובע יצירתי', label_en: 'Creative District', color: '#D4AF37' },
  { id: 'entertainment', label_he: 'בידור', label_en: 'Entertainment', color: '#FF4D4D' },
  { id: 'nature', label_he: 'טבע ורוח', label_en: 'Nature & Soul', color: '#22C55E' },
];

export default function WorldHUD() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [district, setDistrict] = useState<string | null>(null);

  const filtered = BUSINESSES.filter(b => {
    const matchSearch = !search || b.name_he.includes(search) || b.name_en.toLowerCase().includes(search.toLowerCase()) || b.tags.some(t => t.includes(search));
    const matchDistrict = !district || b.district === district;
    return matchSearch && matchDistrict;
  });

  return (
    <>
      {/* Top bar */}
      <div className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-3 glass border-b border-white/5">
        <Link href="/" className="flex items-center gap-3 group" data-hover>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-xs font-bold animate-pulse-glow">C</div>
          <span className="font-bold text-sm tracking-widest text-white/80 group-hover:text-white transition-colors">CREATOP UNIVERSE</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="חפש עסק..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white/80 placeholder-white/30 focus:outline-none focus:border-indigo-500 w-56 transition-all focus:w-72 text-right"
              dir="rtl"
            />
            {search && (
              <div className="absolute top-full mt-2 right-0 w-72 glass rounded-xl overflow-hidden shadow-2xl border border-white/10 max-h-64 overflow-y-auto">
                {filtered.slice(0, 8).map(b => (
                  <Link key={b.id} href={`/business/${b.slug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group" onClick={() => setSearch('')} data-hover>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: b.colors.glow }} />
                    <div>
                      <p className="text-sm text-white font-medium">{b.name_he}</p>
                      <p className="text-xs text-white/40">{b.tagline_he}</p>
                    </div>
                  </Link>
                ))}
                {filtered.length === 0 && <p className="px-4 py-3 text-sm text-white/40">לא נמצאו תוצאות</p>}
              </div>
            )}
          </div>

          {/* District filter */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 glass-bright rounded-xl px-4 py-2 text-sm text-white/70 hover:text-white transition-colors hud-border"
            data-hover
          >
            <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h18M7 8h10M11 12h2" />
            </svg>
            <span>מחוזות</span>
          </button>
        </div>
      </div>

      {/* District selector */}
      {open && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex gap-3 px-4 py-3 glass rounded-2xl border border-white/10 shadow-2xl">
          <button
            onClick={() => setDistrict(null)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${!district ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/70'}`}
            data-hover
          >
            הכל
          </button>
          {DISTRICTS.map(d => (
            <button
              key={d.id}
              onClick={() => setDistrict(district === d.id ? null : d.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${district === d.id ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              style={district === d.id ? { background: d.color + '30', border: `1px solid ${d.color}60` } : {}}
              data-hover
            >
              {d.label_he}
            </button>
          ))}
        </div>
      )}

      {/* Bottom stats bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-center gap-8 px-6 py-3 glass border-t border-white/5 text-xs text-white/30">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
          <span>{BUSINESSES.length} עסקים פעילים</span>
        </span>
        <span className="hidden md:block">∞ עולם אינסופי</span>
        <span className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
          WebGL · WebGPU Ready
        </span>
      </div>
    </>
  );
}
