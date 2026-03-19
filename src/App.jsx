import React, { useState, useEffect } from 'react'
import Slide01Cover from './slides/Slide01Cover'
import Slide02Problem from './slides/Slide02Problem'
import Slide03Revenue from './slides/Slide03Revenue'
import Slide04Segment from './slides/Slide04Segment'
import Slide05Journey from './slides/Slide05Journey'
import Slide06Omnichannel from './slides/Slide06Omnichannel'
import Slide07AI from './slides/Slide07AI'
import Slide08Business from './slides/Slide08Business'
import Slide09Risk from './slides/Slide09Risk'

const SLIDES = [
  { component: Slide01Cover,      label: 'Forside' },
  { component: Slide02Problem,    label: 'Problemet' },
  { component: Slide03Revenue,    label: 'Inntekter' },
  { component: Slide04Segment,    label: 'Segment' },
  { component: Slide05Journey,    label: 'Kundereise' },
  { component: Slide06Omnichannel,label: 'Omnikaaal' },
  { component: Slide07AI,         label: 'Data og AI' },
  { component: Slide08Business,   label: 'Business Case' },
  { component: Slide09Risk,       label: 'Risiko' },
]

export default function App() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        setCurrent(prev => Math.min(prev + 1, SLIDES.length - 1))
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        setCurrent(prev => Math.max(prev - 1, 0))
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const goNext = () => setCurrent(prev => Math.min(prev + 1, SLIDES.length - 1))
  const goPrev = () => setCurrent(prev => Math.max(prev - 1, 0))

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col" style={{ userSelect: 'none' }}>
      {/* Top navigation bar */}
      <nav
        className="flex-shrink-0 bg-white border-b border-gray-200 flex items-center justify-between px-6"
        style={{ height: '52px', zIndex: 100 }}
      >
        {/* Left: branding */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm tracking-widest uppercase" style={{ color: '#00005E' }}>
            ØKONOOBS
          </span>
          <span className="text-gray-300 text-sm">|</span>
          <span className="text-gray-400 text-xs font-medium">NM i Økonomi 2026</span>
        </div>

        {/* Center: slide tabs */}
        <div className="flex items-center gap-0.5">
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="px-3 py-1 rounded text-xs font-medium transition-all duration-150"
              style={{
                background: i === current ? '#00005E' : 'transparent',
                color: i === current ? '#fff' : '#6b7280',
              }}
              onMouseEnter={e => {
                if (i !== current) {
                  e.currentTarget.style.background = '#E8F3FB'
                  e.currentTarget.style.color = '#00005E'
                }
              }}
              onMouseLeave={e => {
                if (i !== current) {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#6b7280'
                }
              }}
            >
              {slide.label}
            </button>
          ))}
        </div>

        {/* Right: prev/next */}
        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            disabled={current === 0}
            className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Forrige
          </button>
          <button
            onClick={goNext}
            disabled={current === SLIDES.length - 1}
            className="px-4 py-1.5 text-xs font-semibold text-white rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: current === SLIDES.length - 1 ? '#9ca3af' : '#00005E' }}
          >
            Neste →
          </button>
          <span className="text-gray-300 text-xs ml-2">
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
      </nav>

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        {SLIDES.map(({ component: SlideComponent }, i) => (
          <div
            key={i}
            className="absolute inset-0 slide-fade"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 10 : 1,
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            <SlideComponent slideNumber={i + 1} total={SLIDES.length} />
          </div>
        ))}
      </div>
    </div>
  )
}
