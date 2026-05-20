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
        <a href="/" className="nav-logo">
          Get<span>Clicks</span>Today
        </a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
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
          Thanks! While you wait,<br /><em style={{fontStyle:'normal',color:'var(--pink)'}}>lock in your audit call.</em>
        </h1>
        <p style={{fontSize:'16px',fontWeight:300,color:'var(--muted)',lineHeight:1.75,maxWidth:'520px',margin:'0 auto 12px'}}>
          We&apos;ll reply within 24 hours — but why wait? Book your free 30-min audit below and skip the queue. Pick whatever time works for you.
        </p>
      </section>

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ryan-getclickstoday/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=13101F&text_color=F2EFF5&primary_color=FF2D78"
        style={{minWidth:'320px',height:'700px',margin:'0 auto 80px',maxWidth:'900px',padding:'0 20px'}}
      />

      <footer>
        <a href="/" className="footer-logo">
          Get<span>Clicks</span>Today
        </a>
        <ul className="footer-nav">
          <li><a href="/services">Services</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>
    </>
  )
}
