import React from 'react'

const channels = [
  {
    color: '#00005E',
    badge: 'Primærkanal',
    badgeColor: '#00AEEF',
    title: 'Nordea-appen',
    subtitle: 'Mobile-first. Digital completion.',
    points: [
      'Lønnskonto-onboarding under 3 minutter',
      'Kortaktivering og Vipps-kobling i appen',
      'Personalisert dashboard med spareforslag',
      'Maal: over 80% digitalt salg',
    ],
    stat: '70%',
    statLabel: 'Digitalt salg 2025',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
      </svg>
    ),
  },
  {
    color: '#0079AF',
    badge: 'Vekstkilde',
    badgeColor: '#0079AF',
    title: 'Service-to-Sales',
    subtitle: 'Fra kundestøtte til mersalg.',
    points: [
      'Kundeservice-møter utløser salgsmuligheter',
      'Nova chatbot haandterer 78% av henvendelser',
      'Frigjort tid gaar til proaktivt salg',
      '5,2 millioner Nova-chatter i 2025',
    ],
    stat: '78%',
    statLabel: 'Nova chatbot-andel',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    color: '#005580',
    badge: 'Høyverdi',
    badgeColor: '#005580',
    title: 'Personlig raadigiver',
    subtitle: 'Der mennesker gjør forskjellen.',
    points: [
      'Aktiveres ved livshendelser og høy CLV',
      'Pensjon, EPK og livsforsikring via Nordea Liv',
      'Hybridmodell: digital forberedelse, menneskelig avslutning',
      'AI-verktøy: 18 000+ brukere øker produktivitet',
    ],
    stat: '18 000+',
    statLabel: 'AI-verktøybrukere 2025',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Slide06Omnichannel({ slideNumber, total }) {
  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#fff' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          06 / Omnikanalmodellen
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
          App-først, raadgiver der det virkelig teller
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-14 py-7 gap-5">
        {/* 3 channel columns */}
        <div className="flex gap-5 flex-1">
          {channels.map((ch, i) => (
            <div
              key={i}
              className="flex-1 rounded-2xl flex flex-col overflow-hidden"
              style={{ border: `1.5px solid ${ch.color}22`, background: '#F4F8FC' }}
            >
              {/* Top color bar */}
              <div className="h-1.5" style={{ background: ch.color }} />
              <div className="flex flex-col p-6 flex-1">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: ch.color, color: '#fff' }}
                  >
                    {ch.icon}
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${ch.badgeColor}18`, color: ch.badgeColor, border: `1px solid ${ch.badgeColor}33` }}
                  >
                    {ch.badge}
                  </span>
                </div>

                {/* Title */}
                <div className="text-xl font-bold mb-1" style={{ color: '#00005E' }}>{ch.title}</div>
                <div className="text-xs font-medium mb-4" style={{ color: ch.color }}>{ch.subtitle}</div>

                {/* Points */}
                <div className="flex flex-col gap-2 flex-1">
                  {ch.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${ch.color}18` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: ch.color }} />
                      </div>
                      <span className="text-xs leading-relaxed" style={{ color: '#374151' }}>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Stat */}
                <div
                  className="mt-4 rounded-xl px-4 py-3 text-center"
                  style={{ background: ch.color }}
                >
                  <div className="text-2xl font-bold text-white">{ch.stat}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>{ch.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar: Nordea digital ambition */}
        <div
          className="flex-shrink-0 rounded-xl px-7 py-4 flex items-center justify-between"
          style={{ background: '#00005E' }}
        >
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <span className="text-sm font-semibold text-white">
              Nordeas omnikanalambisjon: best omnichannel customer experience og over 80% digitalt salg
            </span>
          </div>
          <div className="flex items-center gap-5 flex-shrink-0">
            <div className="text-center">
              <div className="text-lg font-bold" style={{ color: '#00AEEF' }}>Digital-first</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Appen som primærkanal</div>
            </div>
            <div style={{ width: '1px', height: '28px', background: 'rgba(0,122,175,0.4)' }} />
            <div className="text-center">
              <div className="text-lg font-bold" style={{ color: '#00AEEF' }}>Human-when-needed</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Raadgiver ved høy CLV</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 px-14 py-3 flex items-center justify-between border-t border-gray-100">
        <span className="text-xs text-gray-400 font-medium">Økonoobs | NM i Økonomi 2026</span>
        <span className="text-xs text-gray-400">{String(slideNumber).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>
    </div>
  )
}
