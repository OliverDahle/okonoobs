'use client'

import { motion } from 'framer-motion'

const pains = [
  { icon: '💬', title: 'Treg kundeservice', body: 'Manuell behandling av henvendelser. Lange responstider. Inkonsistent kvalitet.' },
  { icon: '📊', title: 'Manuell rapportering', body: 'Månedsrapporter tar dager. Kritiske data sitter spredt i ERP og CRM.' },
  { icon: '📝', title: 'Ineffektiv tilbudsprosess', body: 'Tilbudsskriving er tidkrevende og personavhengig. Ikke skalerbart.' },
  { icon: '🧠', title: 'Intern kunnskap utilgjengelig', body: 'Kompetanse sitter hos enkeltpersoner. Ingen systematisk kunnskapsdeling.' },
]

const goals = [
  { title: 'Høyere produktivitet', body: 'Frigjøre tid fra manuelt arbeid til kundeverdi' },
  { title: 'Bedre beslutningsgrunnlag', body: 'Raskere og mer pålitelig innsikt fra egne data' },
  { title: 'Jevnere kundeopplevelse', body: 'Standardisert kvalitet uavhengig av hvem som svarer' },
  { title: 'Trygg KI-innføring', body: 'Kontrollert tilnærming med tydelig styring og policy' },
]

export default function CustomerSection() {
  return (
    <section
      id="customer"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0f1a 0%, #080C12 60%, #0D1117 100%)' }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#E8E2DA 1px, transparent 1px), linear-gradient(90deg, #E8E2DA 1px, transparent 1px)',
          backgroundSize: '40px 40px',
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
            Casekunde · Egne forutsetninger
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl md:text-6xl font-extrabold text-cream-50 leading-tight mb-4 max-w-4xl"
          style={{ fontFamily: 'var(--font-jakarta)' }}
        >
          Nordform AS:{' '}
          <span className="text-cream-400">typisk SMB med høyt potensial og lav modenhet</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-widest uppercase text-cream-500 mb-14"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          * Konstruert casekunde — egne forutsetninger
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 p-7 rounded-sm"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h3
              className="text-cream-50 font-bold text-xl mb-1"
              style={{ fontFamily: 'var(--font-jakarta)' }}
            >
              Nordform AS
            </h3>
            <p className="text-accent text-xs font-medium tracking-wide mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
              B2B handel og distribusjon
            </p>

            <dl className="space-y-4">
              {[
                ['Ansatte', '~220'],
                ['Omsetning', '~280 MNOK'],
                ['Sektor', 'B2B distribusjon'],
                ['Systemer', 'Microsoft 365, ERP, CRM'],
                ['KI-modenhet', 'Lav til moderat'],
                ['Prosesser', 'Høy andel manuelle'],
                ['Ledelse', 'Positiv, men usikker'],
                ['KI-policy', 'Ingen'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-baseline gap-4">
                  <dt className="text-cream-500 text-xs" style={{ fontFamily: 'var(--font-inter)' }}>{k}</dt>
                  <dd className="text-cream-200 text-sm font-medium text-right" style={{ fontFamily: 'var(--font-inter)' }}>{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Pains + Goals */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Smertepunkter */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-7 rounded-sm"
              style={{
                background: 'rgba(196,30,58,0.04)',
                border: '1px solid rgba(196,30,58,0.12)',
              }}
            >
              <h4 className="text-xs tracking-widest uppercase text-accent font-medium mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
                Smertepunkter i dag
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pains.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-lg shrink-0 mt-0.5">{p.icon}</span>
                    <div>
                      <p className="text-cream-100 text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-jakarta)' }}>
                        {p.title}
                      </p>
                      <p className="text-cream-500 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                        {p.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mål */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-7 rounded-sm"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h4 className="text-xs tracking-widest uppercase text-cream-500 font-medium mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
                Målbilde — 12 måneder frem
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goals.map((g, i) => (
                  <motion.div
                    key={g.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.07 }}
                    className="flex gap-3 items-start"
                  >
                    <svg className="w-4 h-4 text-accent shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-cream-100 text-sm font-semibold mb-0.5" style={{ fontFamily: 'var(--font-jakarta)' }}>
                        {g.title}
                      </p>
                      <p className="text-cream-500 text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                        {g.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
