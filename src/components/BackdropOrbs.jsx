import React from 'react'
export default function BackdropOrbs(){
  return (
    <div aria-hidden="true">
      <div style={{
        position:'fixed', inset: -200, pointerEvents:'none', zIndex:-1,
        background: 'radial-gradient(600px 400px at 15% 10%, rgba(0,209,255,0.15), transparent 60%), radial-gradient(700px 500px at 85% 0%, rgba(122,92,255,0.16), transparent 55%)'
      }} />
    </div>
  )
}
