'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    num: '01',
    title: 'Strategisk fit',
    subtitle: 'Teknologi og fremtid er riktig retning',
    body: 'BDO har allerede en sterk posisjon i SMB-markedet. Utvidelse til KI-rådgivning er et naturlig neste steg — ikke et risikabelt sideprosjekt.',
  },
  {
    num: '02',
    title: 'Kundebehov',
    subtitle: 'SMB trenger en trygg, pragmatisk partner',
    body: 'SMB-ledere vil ikke ha akademisk teori. De vil ha noen som forstår økonomien, risikoen og gjennomføringen — og som leverer resultater.',
  },
  {
    num: '03',
    title: 'Leveranseevne',
    subtitle: 'Strategi, økonomi, risiko og implementering',
    body: 'BDO kombinerer disipliner som kreves for å lykkes: økonomi, regnskap, revisjon, risikostyring og digital transformasjon.',
  },
]

export default function WhyBDOSection() {
  return (
    <section
      id="why-bdo"
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
            Markedsposisjon
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
          BDO har rett til å eie{' '}
          <span className="text-accent">denne posisjonen</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-cream-400 text-lg max-w-2xl mb-16"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          BDO kan oversette KI til forretningsverdi raskere og tryggere enn mer rendyrkede aktører.
        </motion.p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-7 rounded-sm overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.025)',
                borderTop: '3px solid #C41E3A',
                border: '1px solid rgba(255,255,255,0.07)',
                borderTopColor: '#C41E3A',
              }}
            >
              <span
                className="text-5xl font-extrabold text-accent/15 block mb-5"
                style={{ fontFamily: 'var(--font-jakarta)', lineHeight: 1 }}
              >
                {p.num}
              </span>
              <h3
                className="text-cream-50 font-bold text-xl mb-1"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {p.title}
              </h3>
              <p className="text-accent text-xs font-medium tracking-wide mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                {p.subtitle}
              </p>
              <p className="text-cream-400 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Positioning diagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="rounded-sm p-8"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p className="text-xs tracking-widest uppercase text-cream-500 mb-8 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
            Posisjoneringsanalyse — BDO vs. alternativer
          </p>

          <div className="relative h-56 md:h-72 max-w-2xl mx-auto">
            {/* Axes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
              <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
            </div>

            {/* Axis labels */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0 text-xs text-cream-500 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
              Strategisk dybde
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-cream-500 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
              Teknisk dybde
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-cream-500" style={{ fontFamily: 'var(--font-inter)', writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}>
              Lav SMB-tilgang
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-cream-500" style={{ fontFamily: 'var(--font-inter)', writingMode: 'vertical-rl' }}>
              Høy SMB-tilgang
            </div>

            {/* Actors */}
            {[
              { label: 'Strategihus', x: '20%', y: '15%', color: 'rgba(255,255,255,0.3)', size: 'w-3 h-3' },
              { label: 'Teknologi-leverandør', x: '70%', y: '75%', color: 'rgba(255,255,255,0.3)', size: 'w-3 h-3' },
              { label: 'System-integrator', x: '68%', y: '25%', color: 'rgba(255,255,255,0.3)', size: 'w-3 h-3' },
              { label: 'BDO AI Sprint', x: '60%', y: '40%', color: '#C41E3A', size: 'w-5 h-5', highlight: true },
            ].map((actor) => (
              <div
                key={actor.label}
                className="absolute flex flex-col items-center gap-1.5"
                style={{ left: actor.x, top: actor.y, transform: 'translate(-50%, -50%)' }}
              >
                <div
                  className={`${actor.size} rounded-full ${actor.highlight ? 'ring-2 ring-accent/40' : ''}`}
                  style={{ background: actor.color }}
                />
                <span
                  className={`text-xs font-medium text-center leading-tight ${actor.highlight ? 'text-accent' : 'text-cream-500'}`}
                  style={{ fontFamily: 'var(--font-inter)', maxWidth: '80px' }}
                >
                  {actor.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-cream-400 text-sm mt-4 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            BDO treffer sweet spot: høy SMB-tilgang, sterk strategisk base, pragmatisk leveranse
          </p>
        </motion.div>
      </div>
    </section>
  )
}
