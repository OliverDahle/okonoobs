'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function HeroSection() {
  const scrollToSolution = () => {
    document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToNext = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #05080D 0%, #080C12 50%, #0a0f1a 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,240,235,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Red accent glow */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C41E3A 0%, transparent 70%)',
          transform: 'translate(20%, -20%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20">
        {/* Label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-accent" />
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase text-cream-400"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            NM i Økonomi 2026 · BDO-caset
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-cream-50 leading-[1.05] tracking-tight mb-8 max-w-5xl"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Hvordan kan BDO hjelpe{' '}
          <span className="text-accent">SMB-er</span> å skape verdi
          med KI — uten å øke risikoen?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-cream-300 max-w-3xl mb-14 leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Vår anbefaling: et standardisert{' '}
          <strong className="text-cream-100 font-semibold">12-ukers AI Sprint</strong>{' '}
          som tar kunden fra usikkerhet til dokumentert effekt.
        </motion.p>

        {/* Three pillars */}
        <motion.div
          {...fadeUp(0.3)}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 max-w-4xl"
        >
          {[
            {
              num: '01',
              text: 'SMB-er mangler struktur, ikke teknologi',
            },
            {
              num: '02',
              text: 'BDO kan eie rollen mellom strategi og gjennomføring',
            },
            {
              num: '03',
              text: 'Verdi skapes gjennom piloter, styring og skalering',
            },
          ].map((p) => (
            <div
              key={p.num}
              className="flex gap-4 items-start p-5 rounded-sm"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <span
                className="text-accent font-extrabold text-xs tracking-widest mt-0.5 shrink-0"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {p.num}
              </span>
              <p
                className="text-cream-200 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToSolution}
            className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 text-sm tracking-wide uppercase transition-all duration-200"
            style={{ fontFamily: 'var(--font-jakarta)', letterSpacing: '0.08em' }}
          >
            Se anbefalingen
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={scrollToNext}
            className="inline-flex items-center gap-3 border border-white/15 hover:border-white/30 text-cream-300 hover:text-cream-100 px-8 py-4 text-sm tracking-wide uppercase transition-all duration-200"
            style={{ fontFamily: 'var(--font-jakarta)', letterSpacing: '0.08em' }}
          >
            Start presentasjon
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-cream-500 tracking-widest uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
