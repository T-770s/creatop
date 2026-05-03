import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 50%, #06B6D4 100%)',
          color: 'white',
          fontSize: 130,
          fontWeight: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          letterSpacing: '-0.05em',
        }}
      >
        C
      </div>
    ),
    { ...size },
  );
}
