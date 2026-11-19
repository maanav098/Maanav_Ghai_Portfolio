import { ImageResponse } from 'next/og'
import { profile } from '@/lib/data'

export const runtime = 'edge'
export const alt = `${profile.name} — ${profile.headline}`
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: '72px',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: '#f8fbff',
          background: 'linear-gradient(135deg, #030916 0%, #0b1b31 58%, #123a46 100%)',
        }}
      >
        <div style={{ display: 'flex', color: '#67e8f9', fontSize: 24, letterSpacing: 4 }}>
          PORTFOLIO · 2026
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -4 }}>{profile.name}</div>
          <div style={{ marginTop: 16, color: '#cbd5e1', fontSize: 36 }}>{profile.headline}</div>
          <div style={{ marginTop: 24, color: '#a5f3fc', fontSize: 23 }}>
            Java · Spring AI · RAG · Full-Stack Product Engineering
          </div>
        </div>
        <div style={{ display: 'flex', color: '#cbd5e1', fontSize: 22 }}>
          Available immediately · India / UAE
        </div>
      </div>
    ),
    size,
  )
}
