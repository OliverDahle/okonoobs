'use client'

import { useEffect, useState, useCallback } from 'react'

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'problem', label: 'Problem' },
  { id: 'why-bdo', label: 'BDO' },
  { id: 'customer', label: 'Kunden' },
  { id: 'solution', label: 'Sprint' },
  { id: 'use-cases', label: 'Cases' },
  { id: 'roi', label: 'Gevinst' },
  { id: 'risk', label: 'Risiko' },
  { id: 'why-win', label: 'Konklusjon' },
  { id: 'final', label: 'Avslutning' },
]

export default function StickyNav() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60)

    const sectionEls = sections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    let current = 'hero'
    for (const el of sectionEls) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 80) {
        current = el.id
      }
    }
    setActive(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/95 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-display font-800 text-sm tracking-widest text-cream-100 uppercase"
          style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, letterSpacing: '0.12em' }}
        >
          Økonoobs
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-3 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-sm ${
                active === s.id
                  ? 'text-accent bg-accent/10 border border-accent/30'
                  : 'text-cream-400 hover:text-cream-100'
              }`}
              style={{ fontFamily: 'var(--font-inter)', letterSpacing: '0.08em' }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Mobile: just show active section number */}
        <div className="md:hidden text-xs text-cream-400 font-medium tracking-widest uppercase">
          {sections.findIndex(s => s.id === active) + 1} / {sections.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-px bg-white/5 w-full">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{
            width: `${((sections.findIndex(s => s.id === active) + 1) / sections.length) * 100}%`,
          }}
        />
      </div>
    </nav>
  )
}
