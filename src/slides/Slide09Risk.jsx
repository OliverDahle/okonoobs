import React from 'react'

const risks = [
  {
    title: 'Friksjon i lønnskonto-bytte',
    desc: 'Kunder opplever det som tidkrevende og komplisert aa flytte lønnskonto til Nordea. Byttehindre er reelle, og en halvferdig prosess kan gi frustrasjon.',
    mitigations: [
      'Sømløs digital onboarding under 3 minutter',
      'Autofyll og BankID-integrasjon',
      'Kompetitivt velkomsttilbud første aaret',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    riskColor: '#B45309',
    riskBg: '#FFF8E8',
  },
  {
    title: 'Irrelevante tilbud svekker tillit',
    desc: 'Automatiserte anbefalinger som treffer feil kan oppleves som masete og upersonlige. Dette kan skade relasjonen mer enn det hjelper.',
    mitigations: [
      'NBA-modell med relevant timing og kontekst',
      'Begrense antall proaktive henvendelser per maaned',
      'Kunden kan tilpasse hva de ønsker aa høre om',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    riskColor: '#0079AF',
    riskBg: '#EBF7FD',
  },
  {
    title: 'Overaggressiv AI-personalisering',
    desc: 'Kunder kan oppleve detaljert atferdsbasert personalisering som inngripende. Regulatorisk risiko ved GDPR-grensesnitt maa hensyntas.',
    mitigations: [
      'Trusted AI-rammeverk med full apenhet',
      'Tydelig opt-out og forklaring av algoritmene',
      'Samsvar med GDPR og Finanstilsynets krav',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    riskColor: '#00005E',
    riskBg: '#F4F8FC',
  },
]

export default function Slide09Risk({ slideNumber, total }) {
  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#fff' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          09 / Risiko og avslutning
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Haandterbar risiko med klare mottiltak
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-14 py-6 gap-5">
        {/* Risk cards */}
        <div className="flex gap-5" style={{ flex: '1 1 0' }}>
          {risks.map((r, i) => (
            <div
              key={i}
              className="flex-1 rounded-2xl flex flex-col overflow-hidden"
              style={{ background: r.riskBg, border: `1px solid ${r.riskColor}22` }}
            >
              <div className="h-1" style={{ background: r.riskColor }} />
              <div className="flex flex-col p-6 flex-1">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: `${r.riskColor}15`, color: r.riskColor }}
                >
                  {r.icon}
                </div>

                {/* Risk title */}
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: r.riskColor }}>
                  Risiko {i + 1}
                </div>
                <div className="text-base font-bold mb-2" style={{ color: '#00005E' }}>
                  {r.title}
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: '#4b5563' }}>
                  {r.desc}
                </p>

                {/* Mitigations */}
                <div
                  className="rounded-xl p-4 mt-auto"
                  style={{ background: '#fff', border: `1px solid ${r.riskColor}22` }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: r.riskColor }}>
                    Mottiltak
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {r.mitigations.map((m, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <svg viewBox="0 0 24 24" fill="none" stroke={r.riskColor} strokeWidth={2.5} className="w-3.5 h-3.5 flex-shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs" style={{ color: '#374151' }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className="flex-shrink-0 rounded-2xl px-10 py-7 flex flex-col items-center justify-center text-center"
          style={{ background: 'linear-gradient(135deg, #00005E 0%, #0079AF 100%)' }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00AEEF' }}>
            Vaar anbefaling til Nordea
          </div>
          <div
            className="font-bold text-white leading-tight"
            style={{ fontSize: '1.6rem', letterSpacing: '-0.01em', maxWidth: '800px' }}
          >
            "Vinn lønnskontoen. Vinn hverdagsbanken.<br />Deretter: sparing og pensjon."
          </div>
          <div className="mt-4 flex items-center gap-6">
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#00AEEF' }}>10 000</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Nye helkunder paa 12 mnd</div>
            </div>
            <div style={{ width: '1px', height: '28px', background: 'rgba(0,122,175,0.5)' }} />
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#00AEEF' }}>66 MNOK</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Arlig inntektseffekt (illustrativt)</div>
            </div>
            <div style={{ width: '1px', height: '28px', background: 'rgba(0,122,175,0.5)' }} />
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#00AEEF' }}>+500 000</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Strategisk relcustomer-maal</div>
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
