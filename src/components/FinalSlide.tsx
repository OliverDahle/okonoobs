'use client'

import { motion } from 'framer-motion'

const points = [
  { num: '01', text: 'Velg riktige brukscaser — ikke de mest imponerende' },
  { num: '02', text: 'Skap tidlig dokumentert effekt — bygg troverdighet internt' },
  { num: '03', text: 'Bygg styring før skalering — ikke etterpå' },
]

export default function FinalSlide() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section
      id="final"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080C12 0%, #05080D 100%)' }}
    >
      {/* Large red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(196,30,58,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,240,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-28 text-center">
        {/* Logo / brand */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
            Økonoobs · NM i Økonomi 2026
          </span>
          <span className="w-8 h-px bg-accent" />
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-cream-50 leading-tight mb-8 max-w-4xl mx-auto"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          BDO bør ikke selge{' '}
          <span className="text-cream-400">KI</span>.
          <br />
          BDO bør selge{' '}
          <span className="text-accent">trygg verdiskaping</span>{' '}
          med KI.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-cream-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Et standardisert AI Sprint gir SMB-kunder raskere gevinst, lavere risiko
          og en tydelig vei til skalering.
        </motion.p>

        {/* Three points */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col items-center gap-3 mb-16"
        >
          {points.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-4 max-w-xl"
            >
              <span
                className="text-accent font-extrabold text-sm shrink-0 w-8"
                style={{ fontFamily: 'var(--font-jakarta)' }}
              >
                {p.num}
              </span>
              <p className="text-cream-300 text-base" style={{ fontFamily: 'var(--font-inter)' }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-24 h-px bg-accent mx-auto mb-10"
        />

        {/* Back to top */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85 }}
          onClick={scrollToTop}
          className="group inline-flex items-center gap-3 border border-white/20 hover:border-accent/50 text-cream-400 hover:text-cream-100 px-8 py-4 text-sm tracking-wide uppercase transition-all duration-200"
          style={{ fontFamily: 'var(--font-jakarta)', letterSpacing: '0.08em' }}
        >
          <svg
            className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Tilbake til toppen
        </motion.button>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 text-xs text-cream-600 tracking-wider"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          økonoobs.no · BDO AI Sprint · NM i Økonomi 2026
        </motion.p>
      </div>
    </section>
  )
}
