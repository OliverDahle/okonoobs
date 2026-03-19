import React from 'react'

export default function Slide01Cover({ slideNumber, total }) {
  return (
    <div
      className="h-full w-full flex flex-col relative overflow-hidden"
      style={{ background: '#00005E' }}
    >
      {/* Background geometric shapes */}
      <div
        className="absolute top-0 right-0 h-full"
        style={{
          width: '40%',
          background: 'linear-gradient(135deg, transparent 0%, rgba(0,122,175,0.15) 100%)',
          clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0"
        style={{
          width: '30%',
          height: '40%',
          background: 'rgba(0,174,239,0.07)',
          clipPath: 'polygon(0% 40%, 100% 100%, 0% 100%)',
        }}
      />
      <div
        className="absolute top-10 right-10 rounded-full opacity-5"
        style={{ width: '500px', height: '500px', border: '80px solid #00AEEF' }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-20 text-center relative z-10">
        {/* Badge */}
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-widest uppercase rounded-full"
            style={{ border: '1px solid rgba(0,174,239,0.5)', color: '#00AEEF' }}
          >
            NM i Økonomi 2026 · Nordea Case · Økonoobs
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-bold text-white leading-tight mb-6"
          style={{ fontSize: '4rem', maxWidth: '860px', letterSpacing: '-0.02em' }}
        >
          From Mortgage Provider<br />to Main Bank
        </h1>

        {/* Subtitle */}
        <p
          className="leading-relaxed mb-14"
          style={{ color: '#90B8D0', fontSize: '1.15rem', maxWidth: '740px' }}
        >
          How Nordea can grow relationship customers in Norway through smarter cross-sell,
          digital journeys and AI-enabled personalization
        </p>

        {/* Key stats */}
        <div
          className="flex items-center gap-0 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(0,122,175,0.3)' }}
        >
          <div className="px-10 py-5 text-center" style={{ background: 'rgba(0,122,175,0.15)' }}>
            <div className="text-3xl font-bold" style={{ color: '#00AEEF' }}>+500 000</div>
            <div className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: '#90B8D0' }}>
              Relationship Customer-mål
            </div>
          </div>
          <div style={{ width: '1px', background: 'rgba(0,122,175,0.3)', alignSelf: 'stretch' }} />
          <div className="px-10 py-5 text-center" style={{ background: 'rgba(0,122,175,0.10)' }}>
            <div className="text-3xl font-bold" style={{ color: '#00AEEF' }}>Grow Norway</div>
            <div className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: '#90B8D0' }}>
              Strategisk prioritet 2026-2030
            </div>
          </div>
          <div style={{ width: '1px', background: 'rgba(0,122,175,0.3)', alignSelf: 'stretch' }} />
          <div className="px-10 py-5 text-center" style={{ background: 'rgba(0,122,175,0.15)' }}>
            <div className="text-3xl font-bold" style={{ color: '#00AEEF' }}>ROE &gt;15%</div>
            <div className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: '#90B8D0' }}>
              Lønnsomhetsmål 2026
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex-shrink-0 px-16 py-5 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(0,122,175,0.25)' }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#90B8D0' }}>
          Økonoobs
        </span>
        <span className="text-xs" style={{ color: '#90B8D0' }}>21. mars 2026 · Oslo</span>
        <span className="text-xs font-medium" style={{ color: '#90B8D0' }}>
          {String(slideNumber).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
