'use client'

import { motion } from 'framer-motion'

interface UseCase {
  id: number
  title: string
  emoji: string
  tag: string
  wave: string
  features: string[]
  x: number // 0-100 on implementability axis
  y: number // 0-100 on business value axis (higher = more value)
  highlight: boolean
}

const useCases: UseCase[] = [
  {
    id: 1,
    title: 'KI-assistert kundeservice',
    emoji: '💬',
    tag: 'Pilot fase 1',
    wave: 'Bølge 1',
    features: [
      'Automatiske svarutkast',
      'Raskere responstid',
      'Jevnere kvalitet',
      'Human-in-the-loop',
    ],
    x: 72,
    y: 78,
    highlight: true,
  },
  {
    id: 2,
    title: 'Automatisert rapportering',
    emoji: '📊',
    tag: 'Pilot fase 1',
    wave: 'Bølge 1',
    features: [
      'Oppsummering av økonomidata',
      'Raskere månedsrapport',
      'Mindre manuelt arbeid',
      'Bedre beslutningsgrunnlag',
    ],
    x: 80,
    y: 72,
    highlight: true,
  },
  {
    id: 3,
    title: 'Tilbuds- og salgsstøtte',
    emoji: '📝',
    tag: 'Fase 2',
    wave: 'Bølge 2',
    features: [
      'Førsteutkast til tilbud',
      'Kundehistorikk-oppsummering',
      'Raskere tilbudsprosess',
      'Konsistent salgsmateriell',
    ],
    x: 52,
    y: 62,
    highlight: false,
  },
]

export default function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0D1117 100%)' }}
    >
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
            Prioriterte brukscaser
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl md:text-6xl font-extrabold text-cream-50 leading-tight mb-6 max-w-4xl"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Tre brukscaser med{' '}
          <span className="text-accent">høy verdi</span> og lav til moderat kompleksitet
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-cream-400 text-lg max-w-2xl mb-14"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Casene 1 og 2 piloteres i sprint. Case 3 tas i neste bølge.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Use case cards */}
          <div className="flex flex-col gap-5">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-sm overflow-hidden"
                style={{
                  background: uc.highlight ? 'rgba(196,30,58,0.06)' : 'rgba(255,255,255,0.02)',
                  border: uc.highlight
                    ? '1px solid rgba(196,30,58,0.2)'
                    : '1px solid rgba(255,255,255,0.06)',
                  borderLeft: uc.highlight ? '3px solid #C41E3A' : '3px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{uc.emoji}</span>
                    <div>
                      <span
                        className={`text-xs font-medium tracking-wider uppercase px-2 py-0.5 rounded-full ${
                          uc.highlight
                            ? 'text-accent bg-accent/10'
                            : 'text-cream-500 bg-white/5'
                        }`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {uc.wave}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-2xl font-extrabold text-accent/20"
                    style={{ fontFamily: 'var(--font-jakarta)' }}
                  >
                    0{uc.id}
                  </span>
                </div>

                <h3
                  className="text-cream-50 font-bold text-lg mb-3"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {uc.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {uc.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-cream-400 px-2.5 py-1 rounded-sm"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2x2 Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 rounded-sm"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <h4
              className="text-xs tracking-widest uppercase text-cream-500 font-medium mb-5"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Prioriteringsmatrise
            </h4>

            {/* Matrix */}
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Quadrant backgrounds */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-white/5">
                <div className="bg-ink-700/60" />
                <div className="bg-accent/5" />
                <div className="bg-ink-700/60" />
                <div className="bg-ink-700/60" />
              </div>

              {/* Axes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
              </div>

              {/* Axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 -mb-6">
                <span className="text-xs text-cream-500" style={{ fontFamily: 'var(--font-inter)' }}>
                  Lav gjennomførbarhet
                </span>
                <span className="text-xs text-cream-500" style={{ fontFamily: 'var(--font-inter)' }}>
                  Høy gjennomførbarhet
                </span>
              </div>
              <div
                className="absolute top-1/2 -left-16 text-xs text-cream-500"
                style={{
                  fontFamily: 'var(--font-inter)',
                  transform: 'translateY(-50%) rotate(-90deg)',
                  whiteSpace: 'nowrap',
                }}
              >
                ↑ Forretningsverdi
              </div>

              {/* "Pilot her" label in top-right */}
              <div className="absolute top-2 right-2 text-xs text-accent font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                Pilot her ↗
              </div>

              {/* Data points */}
              {useCases.map((uc) => (
                <motion.div
                  key={uc.id}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + uc.id * 0.1, type: 'spring' }}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${uc.x}%`,
                    top: `${100 - uc.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div
                    className={`flex items-center justify-center rounded-full font-bold text-xs transition-transform hover:scale-110 ${
                      uc.highlight ? 'w-10 h-10' : 'w-8 h-8'
                    }`}
                    style={{
                      background: uc.highlight ? '#C41E3A' : 'rgba(255,255,255,0.15)',
                      color: '#fff',
                      fontFamily: 'var(--font-jakarta)',
                      boxShadow: uc.highlight ? '0 0 20px rgba(196,30,58,0.4)' : 'none',
                    }}
                  >
                    0{uc.id}
                  </div>
                  <span
                    className="text-xs mt-1 text-center font-medium"
                    style={{
                      color: uc.highlight ? '#E8E2DA' : '#6b7280',
                      fontFamily: 'var(--font-inter)',
                      maxWidth: '70px',
                      lineHeight: 1.2,
                    }}
                  >
                    {uc.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
