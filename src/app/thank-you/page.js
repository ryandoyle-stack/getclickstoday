'use client'
import { useEffect } from 'react'
import '../globals.css'

export default function ThankYou() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">Get<span>Clicks</span>Today</a>
        <ul className="nav-links">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact" className="nav-cta">Get free audit</a></li>
        </ul>
      </nav>

      <section style={{maxWidth:'860px',margin:'0 auto',padding:'80px 52px 40px',textAlign:'center'}}>
        <div style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'56px',height:'56px',borderRadius:'50%',background:'rgba(0,212,255,0.08)',border:'1px solid rgba(0,212,255,0.2)',marginBottom:'24px'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'0.2em',color:'var(--cyan)',textTransform:'uppercase',marginBottom:'16px'}}>Message received</div>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px, 5vw, 56px)',fontWeight:800,letterSpacing:'-0.04em',lineHeight:1.05,marginBottom:'20px',color:'var(--text)'}}>
          You&apos;re one step away<br />from <em style={{fontStyle:'normal',color:'var(--pink)'}}>real growth.</em>
        </h1>
        <p style={{fontSize:'16px',fontWeight:300,color:'var(--muted)',lineHeight:1.75,maxWidth:'520px',margin:'0 auto 12px'}}>
          We&apos;ve received your message and will be in touch within 24 hours. Want to move faster? Book your free 30-minute strategy audit directly below.
        </p>
        <p style={{fontSize:'13px',color:'var(--muted)',fontWeight:300,marginBottom:'40px',opacity:0.7}}>
          No prep needed. Just show up and we&apos;ll handle the rest.
        </p>
      </section>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ryan-getclickstoday/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=101010&text_color=EFEFED&primary_color=FF2D78"
        style={{minWidth:'320px',height:'700px',margin:'0 auto 80px',maxWidth:'900px',padding:'0 20px'}}
      />

      <section style={{borderTop:'1px solid var(--border)',padding:'48px 52px',maxWidth:'860px',margin:'0 auto',display:'flex',gap:'40px',flexWrap:'wrap',justifyContent:'center'}}>
        {[['100%','Done for you'],['14 days','To first deliverable'],['0','Long-term contracts']].map(([num,label])=>(
          <div key={label} style={{textAlign:'center'}}>
            <div style={{fontFamily:'var(--font-display)',fontSize:'32px',fontWeight:800,letterSpacing:'-0.04em',color:'var(--cyan)'}}>{num}</div>
            <div style={{fontSize:'11px',color:'var(--muted)',letterSpacing:'0.07em',textTransform:'uppercase',marginTop:'4px'}}>{label}</div>
          </div>
        ))}
      </section>

      <footer>
        <a href="/" className="footer-logo">Get<span>Clicks</span>Today</a>
        <ul className="footer-nav">
          <li><a href="/#services">Services</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>
    </>
  )
}
