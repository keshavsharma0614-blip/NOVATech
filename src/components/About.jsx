import React from 'react'

export default function About(){
  return (
    <section id="about">
      <div className="container">
        <div className="glass" style={{padding:'36px 28px'}}>
          <h2 className="title-gradient" style={{fontSize:'clamp(28px,4vw,40px)', marginTop:0}}>About NovaTech</h2>
          <p style={{color:'var(--muted)', maxWidth:900}}>
            NovaTech is a branding-first web studio focused on performance, clarity, and polish. 
            We build React frontends with obsessive attention to detail—from micro-interactions to SEO-friendly structure.
          </p>
          <div style={{display:'grid', gap:14, gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', marginTop:18}}>
            {['Performance-first','Accessible UI','Glassmorphic Aesthetic','Responsive by default','SEO-ready','Component driven'].map(t => (
              <div key={t} className="glass" style={{padding:'16px 14px'}}>
                <strong>{t}</strong>
                <p style={{color:'var(--muted)', margin:'6px 0 0'}}>We bake this into every project.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
