'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduceMotion) {
      document.body.style.cursor = 'auto';
      return;
    }
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const moveMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: 'power3.out' });
    };

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      gsap.set(ringEl, { x: ring.current.x, y: ring.current.y });
      rafId.current = requestAnimationFrame(animateRing);
    };
    animateRing();

    const onEnter = () => {
      dot.classList.add('cursor-hover');
      ringEl.classList.add('cursor-hover');
    };
    const onLeave = () => {
      dot.classList.remove('cursor-hover');
      ringEl.classList.remove('cursor-hover');
    };

    const attach = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', moveMouse);
    attach();
    // Re-attach when DOM updates (new buttons, links)
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="cursor pointer-events-none" aria-hidden>
      <div ref={dotRef} className="cursor-dot fixed" style={{ top: 0, left: 0 }} />
      <div ref={ringRef} className="cursor-ring fixed" style={{ top: 0, left: 0 }} />
    </div>
  );
}
