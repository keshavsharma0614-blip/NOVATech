import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="container">
      <div className="glass" style={{padding:'40px 28px', display:'grid', gap:18}}>
        <span className="chip">🚀 NovaTech</span>
        <h1 className="title-gradient" style={{fontSize: 'clamp(34px, 6vw, 64px)', lineHeight:1.05, margin:0}}>
          Empowering <em style={{fontStyle:'normal', color:'var(--brand-a)'}}>Digital Growth</em> with sleek, modern web experiences.
        </h1>
        <p style={{color:'var(--muted)', fontSize:'18px', maxWidth:720}}>
          We craft fast, accessible, and brand-perfect websites that convert.
          No fluff—just beautiful, maintainable frontends.
        </p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a href="#services" className="btn">Our Services</a>
          <a href="#work" className="btn" style={{background:'rgba(255,255,255,0.08)', color:'var(--fg)', boxShadow:'none', border:'1px solid var(--glass-border)'}}>See Work</a>
        </div>
      </div>
    </section>
  )
}
