import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #0b0b14 0%, #2d0b3f 60%, #e23c94 100%)',
          padding: '64px',
          color: '#f8fafc',
          fontFamily: 'Inter'
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 8, textTransform: 'uppercase', opacity: 0.6 }}>
          Conversational Catalyst
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 style={{ fontSize: 72, lineHeight: 1.1, maxWidth: '900px' }}>
            AI chatbots that accelerate support, sales, and operations.
          </h1>
          <p style={{ fontSize: 32, color: 'rgba(248, 250, 252, 0.85)' }}>
            Freelance specialist crafting bespoke assistants for high-impact teams.
          </p>
        </div>
        <div style={{ fontSize: 24, display: 'flex', gap: 32 }}>
          <span>ROI-focused automation</span>
          <span>LLM guardrails</span>
          <span>Integrations & analytics</span>
        </div>
      </div>
    ),
    size
  );
}
