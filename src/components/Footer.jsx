import React from 'react'

export default function Footer(){
  return (
    <footer className="container" style={{paddingBottom:32}}>
      <div className="glass" style={{padding:'16px 18px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10}}>
        <small>© 2025 NovaTech</small>
        <div style={{display:'flex', gap:14}}>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
