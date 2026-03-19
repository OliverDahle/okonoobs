import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const DATA = [
  { name: 'Innskudd', value: 34, color: '#00005E', sub: 'Innskuddsvolumer opp 10% i Q4 2025' },
  { name: 'Betaling og annet', value: 25, color: '#0079AF', sub: 'Gebyr/provisjon opp 14% i Q4 2025' },
  { name: 'Bolilaaan', value: 21, color: '#00AEEF', sub: 'Utlaansvolumer opp 1% i Q4 2025' },
  { name: 'Sparing', value: 19, color: '#90C8E0', sub: 'EPK og livsforsikring i sterk vekst' },
]

const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, value }) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius + 28
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text
      x={x}
      y={y}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      style={{ fontSize: '13px', fontWeight: 600, fill: '#00005E', fontFamily: 'Inter, sans-serif' }}
    >
      {value}%
    </text>
  )
}

export default function Slide03Revenue({ slideNumber, total }) {
  return (
    <div className="h-full w-full flex flex-col" style={{ background: '#fff' }}>
      {/* Header */}
      <div className="flex-shrink-0 px-14 py-8" style={{ background: '#00005E' }}>
        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#00AEEF' }}>
          03 / Inntektsmiks
        </div>
        <h2 className="text-4xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
          Bredere kunderelasjoner gir mer robust lønnsomhet
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 flex px-14 py-6 gap-8">
        {/* Left: Donut chart */}
        <div className="flex flex-col items-center justify-center" style={{ width: '42%' }}>
          <div className="text-sm font-semibold mb-2 text-center" style={{ color: '#6b7280' }}>
            Personal Banking inntektsmiks
          </div>
          <div style={{ width: '100%', height: '320px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={2}
                  dataKey="value"
                  labelLine={false}
                  label={CustomLabel}
                >
                  {DATA.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value}%`, 'Andel']}
                  contentStyle={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legend */}
          <div className="flex flex-wrap gap-3 justify-center">
            {DATA.map((d, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: d.color }} />
                <span className="text-xs font-medium" style={{ color: '#374151' }}>{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: revenue cards + insight */}
        <div className="flex-1 flex flex-col gap-3">
          {DATA.map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl px-5 py-4"
              style={{
                background: i === 2 ? '#EBF7FD' : '#F4F8FC',
                border: i === 2 ? '1.5px solid #00AEEF' : '1px solid #E8F3FB',
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: d.color }}
              >
                <span className="text-lg font-bold text-white">{d.value}%</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold mb-0.5" style={{ color: '#00005E' }}>
                  {d.name}
                  {i === 2 && (
                    <span
                      className="ml-2 text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: '#00AEEF', color: '#fff' }}
                    >
                      Strategisk saarbar
                    </span>
                  )}
                </div>
                <div className="text-xs" style={{ color: '#6b7280' }}>{d.sub}</div>
              </div>
              <div
                className="w-24 rounded-full overflow-hidden flex-shrink-0"
                style={{ height: '6px', background: '#E8F3FB' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${d.value * 2.94}%`, background: d.color }}
                />
              </div>
            </div>
          ))}

          {/* Key message box */}
          <div
            className="rounded-xl px-6 py-5 mt-1"
            style={{ background: '#00005E', border: '1px solid #0079AF' }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#00AEEF' }}>
              Strategisk nøkkelinnsikt
            </div>
            <p className="text-sm leading-relaxed text-white">
              Bolilaanmargin alene er saarbar for renteutvikling. Relationship customers som bidrar med innskudd, kort og sparing gir stabil, diversifisert inntekt. Nordeas maal er fee og commission-vekst gjennom sparing, raadgivning og betaling.
            </p>
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
