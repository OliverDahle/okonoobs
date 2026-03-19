'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    num: '01',
    title: 'Feil prioritering av brukscaser',
    body: 'SMB-er starter med teknologien, ikke forretningsproblemet. Resultatet er pilotprosjekter uten strategisk retning.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10m0-10a2 2 0 012 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Implementering stopper i usikkerhet',
    body: 'Manglende intern kompetanse, uklar ansvarsfordeling og fravær av styring fører til at prosjekter dør i oppstartsfasen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Risiko rundt data og kvalitet',
    body: 'Datagrunnlag, personvern og GDPR-samsvar skaper friksjon. Ingen klar KI-policy betyr at linjelederen sier nei.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Gevinster dokumenteres ikke',
    body: 'Uten klare KPI-er og baseline-målinger forblir verdiskapingen usynlig — og budsjettet til neste initiativ forsvinner.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D1117 0%, #080C12 100%)' }}
    >
      {/* Dark, analytical texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #E8E2DA 0px, #E8E2DA 1px, transparent 1px, transparent 60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
            Situasjonsanalyse
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
          Utfordringen er ikke om KI finnes —{' '}
          <span className="text-cream-400">men hvordan SMB faktisk tar det i bruk</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-cream-400 text-lg max-w-2xl mb-16"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          KI-teknologien er tilgjengelig. Gapet er mellom teknologi og forretningsverdi.
          Det er her SMB-er trenger ekstern hjelp.
        </motion.p>

        {/* Problem grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group p-7 rounded-sm overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Hover reveal */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-4xl font-extrabold text-accent/20"
                    style={{ fontFamily: 'var(--font-jakarta)', lineHeight: 1 }}
                  >
                    {p.num}
                  </span>
                  <span className="text-accent/60">{p.icon}</span>
                </div>
                <h3
                  className="text-cream-100 font-semibold text-lg mb-3"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {p.title}
                </h3>
                <p className="text-cream-400 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "Før-situasjonen" visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-sm"
          style={{
            background: 'rgba(196,30,58,0.05)',
            border: '1px solid rgba(196,30,58,0.15)',
          }}
        >
          <p className="text-xs tracking-widest uppercase text-accent mb-5 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
            Typisk SMB — før AI Sprint
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Fragmenterte systemer',
              'Manuelle prosesser',
              'Ingen KI-policy',
              'Lav beslutningsklarhet',
              'Uklar ansvarsfordeling',
              'Pilot-trøtthet',
              'Ingen baseline-KPI-er',
              'Kompetansegap',
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs text-cream-400 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
