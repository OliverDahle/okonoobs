import React from 'react'

const assumptions = [
  { label: 'Maalgrupperingstørrelse', value: '100 000 kunder' },
  { label: 'Konverteringsrate (12 mnd)', value: '10%  =  10 000 kunder' },
  { label: 'Ekstra innskudd per konvertert', value: 'NOK 75 000' },
  { label: 'Netto arlig innskuddsmargin', value: '0,8%' },
  { label: 'Netto arlig betalingsinntekt per kort', value: 'NOK 400' },
  { label: 'Andel med sparing og pensjon', value: '30%  =  3 000 kunder' },
  { label: 'Arlig fee per sparing og pensjons-kunde', value: 'NOK 600' },
]

const revenues = [
  { label: 'Innskudd', calc: '10 000 × 75 000 × 0,8%', value: 60, color: '#00005E' },
  { label: 'Kort og betaling', calc: '10 000 × 400', value: 4, color: '#0079AF' },
  { label: 'Sparing og pensjon', calc: '3 000 × 600', value: 1.8, color: '#00AEEF' },
]

const kpis = [
  'Antall relationship customers',
  'Produkter per kunde',
  'Lønnskonto-andel av bolilaaskunder',
  'Aktiv kortbruksrate',
  'Andel med spareplan',
  'Cost-to-serve per kunde',
  'Digital completion rate',
  'Kundetilfredshet (NPS)',
]

export default function Slide08Business({ slideNumber, total }) {
  const total_rev = revenues.reduce((s, r) => s + r.value, 0)

  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#fff' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          08 / Business Case
        </div>
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Business case: ca. 66 MNOK i ny arlig inntekt
          </h2>
          <div
            className="text-xs px-3 py-1.5 rounded-full font-semibold mb-1"
            style={{ background: 'rgba(245,200,66,0.2)', color: '#F5C842', border: '1px solid rgba(245,200,66,0.4)' }}
          >
            Illustrative assumptions
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex px-14 py-6 gap-7">
        {/* Left: Assumptions + Revenue calc */}
        <div className="flex flex-col gap-4" style={{ width: '55%' }}>
          {/* Assumptions */}
          <div
            className="rounded-xl p-5"
            style={{ background: '#F4F8FC', border: '1px solid #E8F3FB' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280' }}>
              Forutsetninger
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {assumptions.map((a, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0079AF' }} />
                  <div>
                    <span className="text-xs" style={{ color: '#6b7280' }}>{a.label}: </span>
                    <span className="text-xs font-semibold" style={{ color: '#00005E' }}>{a.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue table */}
          <div className="flex flex-col gap-2 flex-1">
            <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>
              Estimert arlig inntektseffekt
            </div>
            {revenues.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl px-5 py-3"
                style={{ background: '#F4F8FC', border: '1px solid #E8F3FB' }}
              >
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: r.color }} />
                <div className="flex-1">
                  <div className="text-sm font-semibold" style={{ color: '#00005E' }}>{r.label}</div>
                  <div className="text-xs" style={{ color: '#9ca3af' }}>{r.calc}</div>
                </div>
                <div
                  className="font-bold text-lg flex-shrink-0"
                  style={{ color: r.color }}
                >
                  {r.value} MNOK
                </div>
                {/* Bar */}
                <div className="flex-shrink-0" style={{ width: '80px' }}>
                  <div className="rounded-full overflow-hidden" style={{ height: '6px', background: '#E8F3FB' }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(r.value / total_rev) * 100}%`, background: r.color }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Total */}
            <div
              className="flex items-center justify-between rounded-xl px-5 py-4"
              style={{ background: '#00005E' }}
            >
              <div>
                <div className="text-sm font-bold text-white">Totalinntekt</div>
                <div className="text-xs mt-0.5" style={{ color: '#90B8D0' }}>
                  Før gjennomføringskostnader. Illustrative assumptions.
                </div>
              </div>
              <div className="text-3xl font-black" style={{ color: '#00AEEF' }}>
                ca. {total_rev} MNOK
              </div>
            </div>
          </div>
        </div>

        {/* Right: KPIs */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#6b7280' }}>
            KPI-rammeverk
          </div>
          <div className="flex flex-col gap-2 flex-1">
            {kpis.map((kpi, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-5 py-3.5"
                style={{
                  background: i === 0 || i === 1 ? '#00005E' : '#F4F8FC',
                  border: i === 0 || i === 1 ? 'none' : '1px solid #E8F3FB',
                }}
              >
                <div
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{
                    background: i === 0 || i === 1 ? 'rgba(0,174,239,0.2)' : '#E8F3FB',
                    color: i === 0 || i === 1 ? '#00AEEF' : '#0079AF',
                  }}
                >
                  {i + 1}
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: i === 0 || i === 1 ? '#fff' : '#00005E' }}
                >
                  {kpi}
                </span>
              </div>
            ))}
          </div>

          {/* C/I target */}
          <div
            className="rounded-xl px-5 py-4"
            style={{ background: '#E8F3FB', border: '1px solid #b0d8ee' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#0079AF' }}>
              Nordeas lønnsomhetsmaal
            </div>
            <div className="flex gap-6">
              <div>
                <div className="text-xl font-bold" style={{ color: '#00005E' }}>45%</div>
                <div className="text-xs" style={{ color: '#6b7280' }}>Cost-to-income 2026</div>
              </div>
              <div>
                <div className="text-xl font-bold" style={{ color: '#00005E' }}>40-42%</div>
                <div className="text-xs" style={{ color: '#6b7280' }}>Cost-to-income 2030</div>
              </div>
              <div>
                <div className="text-xl font-bold" style={{ color: '#00005E' }}>&gt;15%</div>
                <div className="text-xs" style={{ color: '#6b7280' }}>ROE-maal 2026</div>
              </div>
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
