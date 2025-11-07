import React from 'react'

const items = [
  { name:'Aurora Bank', tag:'Fintech', url:'#' },
  { name:'PulseFit', tag:'Health', url:'#' },
  { name:'VoltGrid', tag:'SaaS', url:'#' },
  { name:'MuseSpace', tag:'Creative', url:'#' },
]

export default function Portfolio(){
  return (
    <section id="work">
      <div className="container">
        <h2 className="title-gradient" style={{fontSize:'clamp(28px,4vw,40px)'}}>Selected Work</h2>
        <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', marginTop:18}}>
          {items.map(card => (
            <a key={card.name} href={card.url} className="glass" style={{padding:14, display:'grid', gap:10}}>
              <div style={{height:140, borderRadius:14, background:'linear-gradient(135deg, rgba(0,209,255,0.15), rgba(122,92,255,0.15))', border:'1px solid var(--glass-border)'}} />
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div>
                  <strong>{card.name}</strong>
                  <div style={{color:'var(--muted)', fontSize:14}}>{card.tag}</div>
                </div>
                <span aria-hidden>↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
