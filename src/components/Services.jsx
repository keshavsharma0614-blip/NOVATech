import React from 'react'

const list = [
  {title:'Brand Websites', desc:'High-converting marketing sites with smooth interactions.'},
  {title:'Design Systems', desc:'Reusable components, tokens, documentation.'},
  {title:'UI/UX Polish', desc:'Micro-animations, empty states, delightful flows.'},
  {title:'Performance Tune', desc:'Core Web Vitals optimized for SEO and UX.'},
  {title:'Landing Pages', desc:'Launch-ready pages that tell your story succinctly.'},
  {title:'Prototyping', desc:'Clickable prototypes for quick stakeholder buy-in.'}
]

export default function Services(){
  return (
    <section id="services">
      <div className="container">
        <h2 className="title-gradient" style={{fontSize:'clamp(28px,4vw,40px)'}}>Services</h2>
        <p style={{color:'var(--muted)', marginTop:8}}>Everything you need to ship a polished brand presence.</p>
        <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', marginTop:18}}>
          {list.map(s => (
            <article key={s.title} className="glass" style={{padding:'18px 16px', minHeight:140}}>
              <h3 style={{marginTop:0}}>{s.title}</h3>
              <p style={{color:'var(--muted)'}}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
