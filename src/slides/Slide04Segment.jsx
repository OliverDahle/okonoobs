import React from 'react'

const attrs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Høy varighet',
    body: 'Boliglaan varer 20-30 aar. Byttekostnader er høye. Relasjonen er allerede etablert og tilliten til Nordea er til stede.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Høy CLV-oppside',
    body: 'Innskudd, aktive kort, maanedlig sparing og EPK/pensjon representerer fire ekstra produkter per kunde med lang tidshorisont.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Lett aa identifisere i data',
    body: 'Nordea vet hvem som har bolilaanet. Manglende lønnskonto og kortbruk er lett å spore i egne systemer. Segmentet er presist og handlingsbart.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lavest mulig friksjon',
    body: 'Kunden er allerede Nordea-kunde. Det krever ingen nykundeakvisjon, kun aktivering av eksisterende relasjon til full helkundeloeyse.',
  },
]

export default function Slide04Segment({ slideNumber, total }) {
  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#fff' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          04 / Segmentvalg
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Bolilaaskunder uten dagligbankforhold er det mest attraktive segmentet
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex px-14 py-6 gap-6">
        {/* Left: Segment definition + Danske callout */}
        <div className="flex flex-col gap-4" style={{ width: '38%' }}>
          {/* Main segment box */}
          <div
            className="rounded-2xl p-7 flex-1"
            style={{ background: 'linear-gradient(135deg, #00005E 0%, #0079AF 100%)', color: '#fff' }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#00AEEF' }}>
              Valgt segment
            </div>
            <div className="text-xl font-bold leading-snug mb-4">
              Bolilaaskunder uten lønnskonto og aktiv kortbruk hos Nordea
            </div>
            <div
              className="rounded-lg px-4 py-3 mt-3 text-sm"
              style={{ background: 'rgba(0,174,239,0.15)', border: '1px solid rgba(0,174,239,0.3)' }}
            >
              <div className="font-semibold mb-1" style={{ color: '#00AEEF' }}>Definisjon</div>
              <p className="text-xs leading-relaxed" style={{ color: '#b0d0e0' }}>
                Kunder med aktivt bolilaansengasjement i Nordea, men uten registrert lønnskonto og uten aktiv kortbruk de siste 90 dagene.
              </p>
            </div>
          </div>

          {/* Danske callout */}
          <div
            className="rounded-xl px-5 py-4"
            style={{ background: '#FFF8E8', border: '1px solid #F5C842' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#B45309' }}>
              Mulighetsvindu
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#78350F' }}>
              Deler av de 235 000 kundene fra Danske Bank-oppkjøpet kan tilhøre dette segmentet. Migreringen er en enestaaende mulighet til tidlig aktivering før kundevanene setter seg.
            </p>
          </div>
        </div>

        {/* Right: Attractiveness attributes */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="text-sm font-semibold mb-1" style={{ color: '#6b7280' }}>
            Hvorfor dette segmentet er mest attraktivt
          </div>
          {attrs.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl p-5"
              style={{ background: '#F4F8FC', border: '1px solid #E8F3FB' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: '#E8F3FB', color: '#0079AF' }}
              >
                {a.icon}
              </div>
              <div>
                <div className="text-sm font-semibold mb-1" style={{ color: '#00005E' }}>{a.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#4b5563' }}>{a.body}</p>
              </div>
              <div
                className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs text-white"
                style={{ background: '#00005E' }}
              >
                {i + 1}
              </div>
            </div>
          ))}
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
