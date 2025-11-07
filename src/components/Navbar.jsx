import React, { useState, useEffect } from 'react'
import logo from '/novatech-logo.svg'

const links = [
  {href:'#home', label:'Home'},
  {href:'#about', label:'About'},
  {href:'#services', label:'Services'},
  {href:'#work', label:'Work'},
  {href:'#contact', label:'Contact'}
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={"glass"} style={{
      position:'fixed', top:16, left:'50%', transform:'translateX(-50%)',
      width:'min(1120px, calc(100% - 24px))', padding:'10px 14px',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      transition:'all .2s ease', zIndex:1000, backdropFilter: scrolled ? 'blur(14px) saturate(130%)' : undefined
    }}>
      <a href="#home" style={{display:'inline-flex', alignItems:'center', gap:10}}>
        <img src={logo} width="32" height="32" alt="NovaTech logo"/>
        <strong>NovaTech</strong>
      </a>
      <nav className="desktop-nav" style={{display:'none', gap:22, alignItems:'center'}}>
        {links.map(l => <a key={l.href} href={l.href} style={{opacity:.9}}>{l.label}</a>)}
        <a href="#contact" className="btn">Get Started</a>
      </nav>
      <button aria-label="Toggle menu" className="btn" style={{padding:'10px 12px', display:'inline-flex'}} onClick={()=>setOpen(v=>!v)}>
        ☰
      </button>
      {open && (
        <div className="glass" style={{position:'absolute', top:64, right:10, padding:12, display:'grid', gap:6, width:200}}>
          {links.map(l => <a key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</a>)}
          <a href="#contact" className="btn" onClick={()=>setOpen(false)}>Get Started</a>
        </div>
      )}
      <style>{`
        @media (min-width: 900px){
          .desktop-nav{ display: inline-flex !important; }
          header button.btn{ display:none !important; }
        }
        header a{ padding:8px 10px; border-radius:10px; }
        header a:hover{ background: rgba(255,255,255,0.06); }
      `}</style>
    </header>
  )
}
