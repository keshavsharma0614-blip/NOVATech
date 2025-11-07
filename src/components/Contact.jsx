import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)
  const onChange = e => setForm({...form, [e.target.name]: e.target.value})
  const onSubmit = (e) => {
    e.preventDefault()
    // No backend: just a demo confirmation
    setSent(true)
    setTimeout(()=> setSent(false), 3500)
    e.target.reset()
  }
  return (
    <section id="contact">
      <div className="container">
        <div className="glass" style={{padding:'30px 24px'}}>
          <h2 className="title-gradient" style={{fontSize:'clamp(28px,4vw,40px)'}}>Contact</h2>
          <p style={{color:'var(--muted)'}}>Tell us a bit about your project.</p>
          <form onSubmit={onSubmit} style={{display:'grid', gap:12, maxWidth:720}}>
            <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'}}>
              <input className="glass" name="name" placeholder="Your name" required onChange={onChange} style={inputStyle}/>
              <input className="glass" name="email" type="email" placeholder="Email" required onChange={onChange} style={inputStyle}/>
            </div>
            <textarea className="glass" name="message" rows="5" placeholder="Project details..." required onChange={onChange} style={inputStyle}></textarea>
            <button className="btn" type="submit">Send Message</button>
            {sent && <div className="chip" role="status">✅ Message captured (demo)</div>}
          </form>
        </div>
      </div>
    </section>
  )
}

const inputStyle = {
  padding:'14px 12px', border:'1px solid var(--glass-border)', borderRadius:12, color:'var(--fg)', outline:'none', background:'rgba(255,255,255,0.05)'
}
