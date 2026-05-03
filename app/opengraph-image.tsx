import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Creatop Universe — עולם עסקים תלת מימדי';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#030303',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(109,40,217,0.35) 0%, transparent 60%), radial-gradient(ellipse at top right, rgba(6,182,212,0.25) 0%, transparent 50%)',
          }}
        />
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: 32,
            background: 'linear-gradient(135deg, #6D28D9, #8B5CF6, #06B6D4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 96,
            fontWeight: 900,
            marginBottom: 36,
            boxShadow: '0 0 80px rgba(109,40,217,0.5)',
          }}
        >
          C
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(100deg, #F4F0E8, #22D3EE, #E8C84A, #8B5CF6, #F4F0E8)',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
          }}
        >
          CREATOP
        </div>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5em', marginTop: 6, display: 'flex' }}>
          UNIVERSE
        </div>
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.7)', marginTop: 28, display: 'flex' }}>
          העולם הדיגיטלי התלת-מימדי הראשון לעסקים
        </div>
        <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.35)', marginTop: 12, fontFamily: 'monospace', display: 'flex' }}>
          1,000+ businesses · one experience
        </div>
      </div>
    ),
    { ...size },
  );
}
