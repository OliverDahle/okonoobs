'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    name: 'Diagnose',
    weeks: 'Uke 1–3',
    color: '#7F1D1D',
    light: 'rgba(127,29,29,0.15)',
    activities: [
      'Intervjuer med nøkkelpersoner',
      'Prosesskartlegging',
      'KI-modenhetsanalyse',
      'Datarisiko-vurdering',
    ],
    output: 'Potensialkart med rangerte muligheter',
    outputIcon: '🗺️',
  },
  {
    num: '02',
    name: 'Prioritering',
    weeks: 'Uke 4–5',
    color: '#9B1C1C',
    light: 'rgba(155,28,28,0.15)',
    activities: [
      'Valg av 3–5 brukscaser',
      'Verdi/risiko/gjennomførbarhet',
      'Interessentforankring',
      'Teknisk forhåndsvurdering',
    ],
    output: 'Prioritert brukscaseportefølje',
    outputIcon: '📋',
  },
  {
    num: '03',
    name: 'Pilot',
    weeks: 'Uke 6–9',
    color: '#B91C1C',
    light: 'rgba(185,28,28,0.15)',
    activities: [
      'Test av 1–2 brukscaser i drift',
      'Måling av faktisk effekt',
      'Human-in-the-loop-oppsett',
      'Enkel KI-styringsmodell',
    ],
    output: 'Dokumentert gevinst og læring',
    outputIcon: '✅',
  },
  {
    num: '04',
    name: 'Skalering',
    weeks: 'Uke 10–12',
    color: '#C41E3A',
    light: 'rgba(196,30,58,0.15)',
    activities: [
      'Governance og KI-policy',
      'Opplæring og kompetansebygging',
      'KPI-rammeverk',
      'Roadmap 6–12 måneder',
    ],
    output: 'Skaleringsplan og neste sprint',
    outputIcon: '🚀',
  },
]

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #05080D 0%, #080C12 40%, #05080D 100%)' }}
    >
      {/* Red ambient glow */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, #C41E3A 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
            Tjenestekonsept · Vår løsning
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-cream-50 leading-tight mb-4 max-w-5xl"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Vår løsning: et{' '}
          <span className="text-accent">12-ukers AI Sprint</span>{' '}
          i fire faser
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-cream-400 text-lg max-w-2xl mb-16"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Et repeterbart tjenestekonsept for øvre SMB-segment. Standardisert modell, tilpasset den enkelte kunden.
        </motion.p>

        {/* Timeline connector */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Phase number + connector */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{ background: phase.light, border: `1px solid ${phase.color}` }}
                  >
                    <span
                      className="text-sm font-extrabold"
                      style={{ color: '#E02142', fontFamily: 'var(--font-jakarta)' }}
                    >
                      {phase.num}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-cream-500 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                      {phase.weeks}
                    </p>
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-6 rounded-sm flex flex-col"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    borderTop: `3px solid ${phase.color}`,
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderTopColor: phase.color,
                  }}
                >
                  <h3
                    className="text-cream-50 font-bold text-xl mb-5"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    {phase.name}
                  </h3>

                  <ul className="space-y-2 mb-6 flex-1">
                    {phase.activities.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-sm text-cream-400"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        <span className="text-accent mt-0.5 shrink-0">›</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Output */}
                  <div
                    className="pt-4 mt-auto"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <p className="text-xs text-cream-500 mb-1 font-medium uppercase tracking-wider" style={{ fontFamily: 'var(--font-inter)' }}>
                      Output
                    </p>
                    <p className="text-cream-200 text-sm font-semibold" style={{ fontFamily: 'var(--font-jakarta)' }}>
                      {phase.outputIcon} {phase.output}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-cream-50 text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-jakarta)' }}>
              Repeterbart for hele SMB-porteføljen
            </p>
            <p className="text-cream-400 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
              Standardisert metodikk — skalerbar på tvers av kunder og bransjer
            </p>
          </div>
          <div className="flex gap-8">
            {[
              { val: '12', unit: 'uker', label: 'Fra start til gevinst' },
              { val: '4', unit: 'faser', label: 'Strukturert tilnærming' },
              { val: '1–2', unit: 'piloter', label: 'Fokusert testing' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl font-extrabold text-accent"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {stat.val}
                  <span className="text-lg ml-1">{stat.unit}</span>
                </div>
                <div className="text-xs text-cream-500 mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
