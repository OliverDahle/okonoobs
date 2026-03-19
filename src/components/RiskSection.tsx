'use client'

import { motion } from 'framer-motion'

const riskItems = [
  {
    risk: 'Datasikkerhet og personvern',
    riskDetail: 'Sensitiv kundeinformasjon i KI-systemer. GDPR-compliance.',
    mitigation: 'Avgrensede piloter med anonymiserte testdata. Juridisk vurdering i diagnosefasen.',
    icon: '🔒',
  },
  {
    risk: 'Feil og hallusinasjoner',
    riskDetail: 'KI produserer upresist eller feil output med høy selvtillit.',
    mitigation: 'Human-in-the-loop i alle produksjonsprosesser. Ingen autonom beslutning.',
    icon: '⚠️',
  },
  {
    risk: 'Uklart eierskap',
    riskDetail: 'Hvem er ansvarlig når KI tar feil? Diffuse ansvarslinjer.',
    mitigation: 'Rolleavklaringer og KI-policy etableres i fase 1. Klar eskaleringsvei.',
    icon: '👤',
  },
  {
    risk: 'Lav brukeradopsjon',
    riskDetail: 'Ansatte er skeptiske eller mangler kompetanse. Endringstrøtthet.',
    mitigation: 'Opplæringsprogram og "KI-ambassadør" i pilotavdelingen. Tidlig involvering.',
    icon: '🤝',
  },
  {
    risk: 'Omdømmerisiko',
    riskDetail: 'Feil KI-output i kundekommunikasjon skader merkevaren.',
    mitigation: 'KPI-oppfølging, kvalitetssjekk og tydelig kommunikasjon om KI-bruk.',
    icon: '🏢',
  },
]

export default function RiskSection() {
  return (
    <section
      id="risk"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D1117 0%, #111827 50%, #0D1117 100%)' }}
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
            Risikostyring · Ansvarlig KI
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
          Trygg innføring er en del av{' '}
          <span className="text-accent">løsningen</span> — ikke et tillegg
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-cream-400 text-lg max-w-2xl mb-14"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Risikohåndtering er bygget inn i sprintens DNA — ikke noe man legger til etterpå.
        </motion.p>

        {/* Risk/mitigation table */}
        <div className="space-y-4">
          {/* Header row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:grid grid-cols-[2fr_3fr_3fr] gap-px px-6 pb-3"
          >
            <span className="text-xs tracking-widest uppercase text-cream-500 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
              Risiko
            </span>
            <span className="text-xs tracking-widest uppercase text-accent/70 font-medium pl-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Beskrivelse
            </span>
            <span className="text-xs tracking-widest uppercase text-green-500/70 font-medium pl-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Tiltak i AI Sprint
            </span>
          </motion.div>

          {riskItems.map((item, i) => (
            <motion.div
              key={item.risk}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[2fr_3fr_3fr] gap-px rounded-sm overflow-hidden"
            >
              {/* Risk label */}
              <div
                className="flex items-center gap-3 p-5"
                style={{ background: 'rgba(196,30,58,0.06)', border: '1px solid rgba(196,30,58,0.12)' }}
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <span className="text-cream-100 font-semibold text-sm" style={{ fontFamily: 'var(--font-jakarta)' }}>
                  {item.risk}
                </span>
              </div>

              {/* Risk detail */}
              <div
                className="p-5"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <p className="text-sm text-cream-400" style={{ fontFamily: 'var(--font-inter)' }}>
                  {item.riskDetail}
                </p>
              </div>

              {/* Mitigation */}
              <div
                className="p-5 flex items-start gap-2"
                style={{ background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.1)' }}
              >
                <svg className="w-4 h-4 text-green-500/70 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-cream-300" style={{ fontFamily: 'var(--font-inter)' }}>
                  {item.mitigation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center gap-6"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-cream-50 font-bold text-lg" style={{ fontFamily: 'var(--font-jakarta)' }}>
                BDOs erfaring innen revisjon og compliance er en fordel
              </p>
              <p className="text-cream-400 text-sm mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                Vi bringer risikoperspektivet inn fra dag én — ikke som ettertanke
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
