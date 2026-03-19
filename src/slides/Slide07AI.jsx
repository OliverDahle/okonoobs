import React from 'react'

const levels = [
  {
    num: '01',
    label: 'Fundament',
    title: 'Regelbasert segmentering',
    desc: 'Identifiser bolilaaskunder uten lønnskonto og aktiv kortbruk direkte i eksisterende systemer. Presist, skalerbart og uten AI-kompleksitet.',
    facts: ['KYC-screening og transaksjonsovervaaaking', 'Segment oppdateres daglig'],
    color: '#90C8E0',
    textColor: '#00005E',
    bg: '#EBF7FD',
  },
  {
    num: '02',
    label: 'Intelligens',
    title: 'Next Best Action i CRM',
    desc: 'ML-modeller analyserer transaksjonshistorikk, livshendelser og atferd for aa levere riktig anbefaling til riktig kunde paa riktig tidspunkt.',
    facts: ['Personalisert tilbud i app og e-post', 'Øker konvertering uten manuell oppfølging'],
    color: '#0079AF',
    textColor: '#fff',
    bg: '#0079AF',
  },
  {
    num: '03',
    label: 'Skalering',
    title: 'AI-assistenter frigjør raadgivertid',
    desc: 'Nova chatbot (5,2M chatter, 78% AI-haandtert) og interne AI-produktivitetsverktøy (18 000+ brukere) frigjør kapasitet til proaktivt salg og raadgivning.',
    facts: ['Raadgiver fokuserer paa høyverdimøter', 'Trusted AI med guardrails og opt-out'],
    color: '#00005E',
    textColor: '#fff',
    bg: '#00005E',
  },
]

export default function Slide07AI({ slideNumber, total }) {
  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#fff' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          07 / Data og AI
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Data og AI muliggør personalisering i stor skala
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex px-14 py-7 gap-7">
        {/* Left: 3-level model */}
        <div className="flex flex-col gap-3" style={{ width: '58%' }}>
          <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>
            Tre nivaaer, én sammenhengende modell
          </div>
          {levels.map((lv, i) => (
            <div
              key={i}
              className="rounded-2xl flex items-start gap-5 p-5 flex-1"
              style={{ background: lv.bg, minHeight: 0 }}
            >
              {/* Number */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2"
                style={{
                  borderColor: lv.textColor === '#fff' ? 'rgba(255,255,255,0.3)' : '#0079AF',
                  color: lv.textColor === '#fff' ? '#fff' : '#0079AF',
                  background: lv.textColor === '#fff' ? 'rgba(255,255,255,0.1)' : 'transparent',
                }}
              >
                {lv.num}
              </div>
              <div className="flex-1">
                {/* Label + title */}
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: lv.textColor === '#fff' ? 'rgba(255,255,255,0.6)' : '#0079AF' }}
                >
                  {lv.label}
                </div>
                <div className="text-base font-bold mb-2" style={{ color: lv.textColor }}>
                  {lv.title}
                </div>
                <p className="text-xs leading-relaxed mb-3" style={{ color: lv.textColor === '#fff' ? 'rgba(255,255,255,0.8)' : '#374151' }}>
                  {lv.desc}
                </p>
                {/* Facts */}
                <div className="flex gap-3">
                  {lv.facts.map((f, j) => (
                    <div
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: lv.textColor === '#fff' ? 'rgba(255,255,255,0.15)' : '#E8F3FB',
                        color: lv.textColor === '#fff' ? 'rgba(255,255,255,0.9)' : '#0079AF',
                      }}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Facts + Guardrails */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Nova fact box */}
          <div
            className="rounded-2xl p-6"
            style={{ background: '#F4F8FC', border: '1px solid #E8F3FB' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>
              Nordeas AI i praksis
            </div>
            <div className="flex flex-col gap-3">
              {[
                { val: '5,2M', desc: 'Nova chatbot-chatter i 2025' },
                { val: '78%', desc: 'Chatter haandtert av AI uten menneskelig innblanding' },
                { val: '18 000+', desc: 'Ansatte med AI-produktivitetsverktøy ved utgangen av 2025' },
                { val: 'KYC', desc: 'AI brukt i hvitvaskingskontroll og transaksjonsovervaaaking' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="text-xl font-bold flex-shrink-0"
                    style={{ color: '#00005E', minWidth: '70px' }}
                  >
                    {item.val}
                  </div>
                  <div className="text-xs" style={{ color: '#4b5563' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Guardrails */}
          <div
            className="rounded-2xl p-6 flex-1"
            style={{ background: '#00005E' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth={1.8} className="w-5 h-5 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-sm font-bold text-white">Trusted AI: Personalisering med kontroll</div>
            </div>
            <div className="flex flex-col gap-2">
              {[
                'Kunden kan alltid se hvorfor de far et tilbud',
                'Opt-out fra AI-basert personalisering',
                'Menneskelig veto ved komplekse raad',
                'Samsvar med GDPR og Finanstilsynets krav',
              ].map((g, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,174,239,0.2)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00AEEF' }} />
                  </div>
                  <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>{g}</span>
                </div>
              ))}
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
