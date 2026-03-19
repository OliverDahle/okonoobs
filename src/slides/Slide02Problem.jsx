import React from 'react'

const problems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Boliglånet er starten, ikke slutten',
    body: 'Mange boliglånskunder bruker en annen bank som primærbank. Lønnskonto, kortbruk og sparing går til konkurrenter, mens Nordea kun sitter med boliglånet.',
    highlight: null,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: '+500 000 relationship customers er målet',
    body: 'Nordea har pekt ut "Grow Norway" som eksplisitt vekststrategi 2026-2030. Cross-sales og relationship customers er kjernen i denne ambisjonen.',
    highlight: '+500 000',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fallende renter presser lånemarginen',
    body: 'I et miljø med lavere renter gir boliglån alene svekket lønnsomhet. Nordea trenger fee og commission-vekst fra sparing, betaling og rådgivning.',
    highlight: null,
  },
]

export default function Slide02Problem({ slideNumber, total }) {
  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#fff' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          02 / Problemet
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Nordea eier boliglånet, men taper hverdagsbanken
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-14 py-8 gap-6">
        {/* Problem cards */}
        <div className="flex gap-5 flex-1">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex-1 rounded-xl p-7 flex flex-col"
              style={{ background: '#F4F8FC', border: '1px solid #E8F3FB' }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: '#E8F3FB', color: '#0079AF' }}
              >
                {p.icon}
              </div>
              {p.highlight && (
                <div className="text-4xl font-bold mb-2" style={{ color: '#00005E' }}>
                  {p.highlight}
                </div>
              )}
              <div className="text-base font-semibold mb-3" style={{ color: '#00005E' }}>
                {p.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom insight bar */}
        <div
          className="flex-shrink-0 rounded-xl px-8 py-5 flex items-center justify-between"
          style={{ background: '#00005E' }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0,174,239,0.2)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Nøkkelinnsikt</div>
              <div className="text-xs mt-0.5" style={{ color: '#90B8D0' }}>
                Q4 2025: Innskuddsvolumer opp 10%, utlansvolumer opp kun 1%. Fremtidig vekst krever bredere relasjoner.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 flex-shrink-0">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#00AEEF' }}>21%</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Boliglaan av inntekter</div>
            </div>
            <div style={{ width: '1px', height: '36px', background: 'rgba(0,122,175,0.4)' }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#00AEEF' }}>79%</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Av mulighetene uten laan</div>
            </div>
            <div style={{ width: '1px', height: '36px', background: 'rgba(0,122,175,0.4)' }} />
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: '#00AEEF' }}>235 000</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Danske Bank-kunder overtatt</div>
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
