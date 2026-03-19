import React from 'react'

const steps = [
  {
    num: '01',
    title: 'Lønnskonto',
    trigger: 'Onboarding-offensiv',
    action: 'Kompetitivt tilbud om lønnskonto med bonusrente og cashback det første aaret. Digital signering i Nordea-appen pa under 3 minutter.',
    timing: 'Maaned 1',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    color: '#00005E',
  },
  {
    num: '02',
    title: 'Kort og betaling',
    trigger: 'App-aktivering',
    action: 'Automatisk kortaktivering med personalisert velkomsttilbud. Push-varsler som guider kunden til aktiv kortbruk og Vipps-kobling.',
    timing: 'Maaned 1-2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    color: '#0079AF',
  },
  {
    num: '03',
    title: 'Maanedlig sparing',
    trigger: 'Next Best Action',
    action: 'AI-drevet anbefaling om automatisk sparing basert pa transaksjonsmønster. Enkel oppsett i appen pa under ett minutt.',
    timing: 'Maaned 3-4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: '#00AEEF',
  },
  {
    num: '04',
    title: 'EPK og pensjon',
    trigger: 'Livshendelse',
    action: 'Raagivermøte utløst av livshendelse (jobbytte, barn, renovering). Nordea Liv tilbyr selvvalgt EPK og relevant livsforsikring.',
    timing: 'Maaned 6-12',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: '#005580',
  },
]

export default function Slide05Journey({ slideNumber, total }) {
  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#F4F8FC' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          05 / Løsning
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Fire steg fra bolilaaskunde til helkunde
        </h2>
      </div>

      {/* Journey */}
      <div className="flex-1 flex flex-col px-14 py-7 gap-5">
        {/* Subtitle */}
        <div className="text-sm text-center" style={{ color: '#6b7280' }}>
          En kundeverdi-strategi, ikke aggressivt krysssalg. Nordea gir én relevant anbefaling av gangen, med riktig timing.
        </div>

        {/* Steps row */}
        <div className="flex items-stretch gap-0 flex-1">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              {/* Step card */}
              <div
                className="flex-1 rounded-2xl flex flex-col overflow-hidden"
                style={{ border: '1px solid #E8F3FB', background: '#fff' }}
              >
                {/* Top color bar */}
                <div className="h-1.5 w-full" style={{ background: step.color }} />
                <div className="flex flex-col p-6 flex-1">
                  {/* Icon + number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-13 h-13 rounded-xl flex items-center justify-center"
                      style={{ background: step.color, color: '#fff', width: '52px', height: '52px' }}
                    >
                      {step.icon}
                    </div>
                    <div
                      className="text-5xl font-black opacity-10"
                      style={{ color: step.color, lineHeight: 1 }}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Timing badge */}
                  <div className="mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: '#E8F3FB', color: step.color }}
                    >
                      {step.timing}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="text-lg font-bold mb-1" style={{ color: '#00005E' }}>
                    {step.title}
                  </div>

                  {/* Trigger */}
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: step.color }}>
                    Trigger: {step.trigger}
                  </div>

                  {/* Description */}
                  <p className="text-xs leading-relaxed flex-1" style={{ color: '#4b5563' }}>
                    {step.action}
                  </p>
                </div>
              </div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div className="flex items-center justify-center flex-shrink-0 px-2">
                  <div className="flex flex-col items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0079AF" strokeWidth={2} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex-shrink-0 rounded-xl px-7 py-4 flex items-center justify-between"
          style={{ background: '#00005E' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0,174,239,0.2)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-white">
              Maal: "Vinn lønnskontoen. Vinn hverdagsbanken. Deretter: sparing og pensjon."
            </span>
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#00AEEF' }}>70%</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Digitalt salg 2025</div>
            </div>
            <div style={{ width: '1px', height: '30px', background: 'rgba(0,122,175,0.4)' }} />
            <div className="text-center">
              <div className="text-xl font-bold" style={{ color: '#00AEEF' }}>&gt;80%</div>
              <div className="text-xs" style={{ color: '#90B8D0' }}>Digitalt saalgsmaal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-shrink-0 px-14 py-3 flex items-center justify-between border-t border-gray-200">
        <span className="text-xs text-gray-400 font-medium">Økonoobs | NM i Økonomi 2026</span>
        <span className="text-xs text-gray-400">{String(slideNumber).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
      </div>
    </div>
  )
}
