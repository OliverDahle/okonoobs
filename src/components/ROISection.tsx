'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function CountUp({ to, suffix = '', duration = 1.5 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 40
    const increment = to / steps
    const interval = (duration * 1000) / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setVal(to)
        clearInterval(timer)
      } else {
        setVal(Math.floor(start))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {val}{suffix}
    </span>
  )
}

const quantitative = [
  {
    metric: '15–25%',
    label: 'Tidsbesparelse',
    description: 'I repetitive administrative prosesser',
    bar: 0.7,
  },
  {
    metric: '20–30%',
    label: 'Raskere responstid',
    description: 'I kundeservice og henvendelseshåndtering',
    bar: 0.82,
  },
  {
    metric: '30–50%',
    label: 'Raskere førsteutkast',
    description: 'Rapportering og tilbudsskriving',
    bar: 0.9,
  },
]

const qualitative = [
  { icon: '🧠', title: 'Organisatorisk læring', body: 'Intern kompetansebygging på tvers av avdelinger' },
  { icon: '🏛️', title: 'Styringsstruktur', body: 'Klar KI-policy og ansvarsfordeling på plass' },
  { icon: '🔄', title: 'Endringskapasitet', body: 'Organisasjonen er klar for neste initiativ' },
  { icon: '📈', title: 'Skalerbarhet', body: 'Metodikk kan repliseres i nye avdelinger og prosesser' },
]

export default function ROISection() {
  return (
    <section
      id="roi"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5F0EB 0%, #EDE8E2 100%)' }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '24px 24px',
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
            Verdiskaping og økonomi
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl"
          style={{ fontFamily: 'var(--font-jakarta)', color: '#1a1a2e' }}
        >
          Verdien kommer raskt —{' '}
          <span style={{ color: '#C41E3A' }}>uten full transformasjon fra dag én</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg max-w-2xl mb-16"
          style={{ color: '#4b5563', fontFamily: 'var(--font-inter)' }}
        >
          Realistiske estimater basert på dokumenterte KI-effekter i tilsvarende SMB-bedrifter.
        </motion.p>

        {/* ROI summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {[
            { label: 'Sprint-investering', value: '350–500', unit: 'kNOK', note: 'Konsulenthonorar + implementering', light: true },
            { label: 'Estimert årlig gevinst', value: '1,2–2,0', unit: 'MNOK', note: 'Produktivitet + kundeservice + rapportering', highlight: true },
            { label: 'Tilbakebetalingstid', value: '3–6', unit: 'mnd', note: 'Fra go-live på pilotene', light: true },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-sm"
              style={{
                background: card.highlight ? '#C41E3A' : 'rgba(0,0,0,0.05)',
                border: card.highlight ? 'none' : '1px solid rgba(0,0,0,0.08)',
              }}
            >
              <p
                className="text-xs font-medium tracking-wider uppercase mb-3"
                style={{ color: card.highlight ? 'rgba(255,255,255,0.7)' : '#6b7280', fontFamily: 'var(--font-inter)' }}
              >
                {card.label}
              </p>
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: card.highlight ? '#fff' : '#1a1a2e', fontFamily: 'var(--font-jakarta)' }}
                >
                  {card.value}
                </span>
                <span
                  className="text-lg font-semibold"
                  style={{ color: card.highlight ? 'rgba(255,255,255,0.8)' : '#6b7280', fontFamily: 'var(--font-jakarta)' }}
                >
                  {card.unit}
                </span>
              </div>
              <p
                className="text-sm"
                style={{ color: card.highlight ? 'rgba(255,255,255,0.75)' : '#6b7280', fontFamily: 'var(--font-inter)' }}
              >
                {card.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quantitative metrics with bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3
              className="font-bold text-lg mb-6"
              style={{ color: '#1a1a2e', fontFamily: 'var(--font-jakarta)' }}
            >
              Kvantitative gevinster
            </h3>
            <div className="space-y-6">
              {quantitative.map((q, i) => (
                <div key={q.label}>
                  <div className="flex justify-between items-baseline mb-2">
                    <div>
                      <span className="font-semibold text-sm" style={{ color: '#1a1a2e', fontFamily: 'var(--font-jakarta)' }}>
                        {q.label}
                      </span>
                      <span className="text-xs text-gray-500 block" style={{ fontFamily: 'var(--font-inter)' }}>
                        {q.description}
                      </span>
                    </div>
                    <span className="font-extrabold text-accent text-lg" style={{ fontFamily: 'var(--font-jakarta)' }}>
                      {q.metric}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.08)' }}>
                    <motion.div
                      className="h-full rounded-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${q.bar * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Qualitative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <h3
              className="font-bold text-lg mb-6"
              style={{ color: '#1a1a2e', fontFamily: 'var(--font-jakarta)' }}
            >
              Kvalitative gevinster
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualitative.map((q, i) => (
                <motion.div
                  key={q.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="p-4 rounded-sm"
                  style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <span className="text-xl block mb-2">{q.icon}</span>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#1a1a2e', fontFamily: 'var(--font-jakarta)' }}>
                    {q.title}
                  </p>
                  <p className="text-xs" style={{ color: '#6b7280', fontFamily: 'var(--font-inter)' }}>
                    {q.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
