'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    num: '01',
    title: 'Konkret',
    body: 'Tydelig 4-fasemodell med definerte leveranser, ikke vag strategi. Kunden vet nøyaktig hva de får — uke for uke.',
    accent: '#C41E3A',
  },
  {
    num: '02',
    title: 'Trygg',
    body: 'Gevinst og kontroll håndteres simultant. Risikostyring er bygget inn. BDO eier ansvaret fra første dag.',
    accent: '#C41E3A',
  },
  {
    num: '03',
    title: 'Skalerbar',
    body: 'Metodikken kan repeteres på tvers av BDOs SMB-portefølje. Standardisert leveransemodell gir effektivitetsgevinst.',
    accent: '#C41E3A',
  },
]

export default function WhyWinSection() {
  return (
    <section
      id="why-win"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #05080D 0%, #080C12 100%)' }}
    >
      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #E8E2DA 0px, #E8E2DA 1px, transparent 1px, transparent 40px)',
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
            Konklusjon
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
          Derfor vinner{' '}
          <span className="text-accent">vår løsning</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-cream-400 text-lg max-w-2xl mb-16"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          BDO AI Sprint er ikke et rammeverk. Det er et ferdig tjenestekonsept med dokumenterbar effekt.
        </motion.p>

        {/* Three big statement cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative group p-8 rounded-sm overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: card.accent }}
              />

              <div className="relative z-10">
                <span
                  className="text-6xl font-extrabold block mb-6"
                  style={{ color: 'rgba(196,30,58,0.15)', fontFamily: 'var(--font-jakarta)', lineHeight: 1 }}
                >
                  {card.num}
                </span>
                <h3
                  className="text-cream-50 font-extrabold text-3xl md:text-4xl mb-4"
                  style={{ fontFamily: 'var(--font-jakarta)' }}
                >
                  {card.title}
                </h3>
                <p className="text-cream-400 text-base leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="border-t border-white/5 pt-10"
        >
          <p
            className="text-cream-200 text-xl md:text-2xl font-semibold max-w-3xl leading-relaxed"
            style={{ fontFamily: 'var(--font-jakarta)' }}
          >
            BDO kan vinne i SMB-markedet ved å tilby et standardisert AI Sprint som hjelper kunder å{' '}
            <span className="text-accent">identifisere, pilotere og skalere</span>{' '}
            KI med rask gevinst og kontrollert risiko.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
