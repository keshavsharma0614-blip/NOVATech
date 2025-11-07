import React from 'react'

export default function CTA(){
  return (
    <section>
      <div className="container">
        <div className="glass" style={{padding:'30px 24px', display:'grid', gap:10, alignItems:'center', justifyItems:'center', textAlign:'center'}}>
          <h3 className="title-gradient" style={{fontSize:'clamp(24px,3.2vw,34px)', margin:0}}>Ready to elevate your brand?</h3>
          <p style={{color:'var(--muted)', margin:0}}>Let’s plan a sprint and ship something beautiful.</p>
          <a href="#contact" className="btn">Start a Project</a>
        </div>
      </div>
    </section>
  )
}
