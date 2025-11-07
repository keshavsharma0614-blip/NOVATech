import React from 'react'

const quotes = [
  {q:'NovaTech delivered a site that loads in a blink and looks premium.', a:'Riya M., PM'},
  {q:'Their attention to detail on interactions is top-notch.', a:'Akash S., Founder'},
  {q:'Clean code, clean design—the perfect combo.', a:'Fatima K., Design Lead'}
]

export default function Testimonials(){
  return (
    <section>
      <div className="container">
        <div className="glass" style={{padding:'28px 24px'}}>
          <h2 className="title-gradient" style={{fontSize:'clamp(28px,4vw,40px)'}}>What clients say</h2>
          <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', marginTop:18}}>
            {quotes.map((t,i)=>(
              <blockquote key={i} className="glass" style={{padding:'16px 14px', margin:0}}>
                <p style={{margin:'0 0 8px'}}>“{t.q}”</p>
                <cite style={{color:'var(--muted)'}}>— {t.a}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
