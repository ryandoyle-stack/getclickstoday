'use client'
import { useEffect, useState } from 'react'
import '../globals.css'

export default function FreeAudit() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { if (document.body.contains(script)) document.body.removeChild(script) }
  }, [])

  return (
    <>
      {/* Minimal nav */}
      <nav style={{position:'sticky',top:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 32px',height:'64px',background:'rgba(10,8,20,0.92)',backdropFilter:'blur(24px)',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
        <a href="/" style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'17px',letterSpacing:'-0.03em',color:'var(--text)',textDecoration:'none'}}>
          Get<span style={{color:'var(--pink)'}}>Clicks</span>Today
        </a>
        <a href="/#contact" style={{fontSize:'13px',color:'var(--muted)',textDecoration:'none',letterSpacing:'0.02em',display:'flex'}} className="mobile-hide">
          Prefer the form? →
        </a>
        <button className={`nav-hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} onClick={e => { if (e.target === e.currentTarget) setMenuOpen(false) }}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <a href="/" style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'17px',letterSpacing:'-0.03em',color:'var(--text)',textDecoration:'none'}} onClick={() => setMenuOpen(false)}>
              Get<span style={{color:'var(--pink)'}}>Clicks</span>Today
            </a>
            <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>×</button>
          </div>
          <div className="mobile-menu-links">
            <a href="/" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/services" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/industries" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Industries</a>
            <a href="/#pricing" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="/blog" className="mobile-menu-link" onClick={() => setMenuOpen(false)}>Blog</a>
          </div>
          <a href="#audit-form" className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>Submit my info →</a>
          <a href="#calendly" className="mobile-menu-cta-ghost" onClick={() => setMenuOpen(false)}>Book a call instead →</a>
        </div>
      </div>

      {/* Urgency bar */}
      <div style={{background:'linear-gradient(90deg,#D42060,#FF2D78)',padding:'10px 20px',textAlign:'center',fontSize:'12px',fontWeight:600,letterSpacing:'0.06em',color:'#fff',textTransform:'uppercase'}}>
        ⚡ Limited spots this week — Only a few free audit slots remaining
      </div>

      {/* Hero */}
      <section style={{maxWidth:'860px',margin:'0 auto',padding:'72px 24px 20px',textAlign:'center'}}>
        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'rgba(0,212,255,0.08)',border:'1px solid rgba(0,212,255,0.25)',borderRadius:'99px',padding:'6px 18px',fontSize:'11px',fontWeight:700,letterSpacing:'0.16em',color:'var(--cyan)',textTransform:'uppercase',marginBottom:'28px'}}>
          <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'var(--cyan)',display:'inline-block',boxShadow:'0 0 10px var(--cyan)',animation:'pulse 2s infinite'}}></span>
          Free · No credit card · No pitch
        </div>
        <h1 style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px,6vw,68px)',fontWeight:800,letterSpacing:'-0.04em',lineHeight:1.0,color:'var(--text)',marginBottom:'24px'}}>
          Claim Your Free<br />
          <em style={{fontStyle:'normal',color:'var(--pink)',textShadow:'0 0 40px rgba(255,45,120,0.4)'}}>30-Minute Strategy Audit</em>
        </h1>
        <p style={{fontSize:'18px',fontWeight:300,color:'rgba(242,239,245,0.75)',lineHeight:1.75,maxWidth:'580px',margin:'0 auto 36px'}}>
          No pitch. No credit card. We&apos;ll show you exactly how we&apos;d grow your business&nbsp;— then you decide.
        </p>
        <div style={{display:'flex',justifyContent:'center',gap:'24px',flexWrap:'wrap',marginBottom:'40px'}}>
          {['Zero obligation','Results you keep','Senior strategist — not a salesperson'].map(label => (
            <div key={label} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'13px',color:'var(--muted)',fontWeight:400}}>
              <span style={{color:'var(--cyan)',fontWeight:700}}>✓</span>{label}
            </div>
          ))}
        </div>
      </section>

      {/* Calendly embed */}
      <div id="calendly" style={{maxWidth:'960px',margin:'0 auto',padding:'0 20px 16px'}}>
        <div style={{background:'var(--bg2)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',overflow:'hidden',boxShadow:'0 0 80px rgba(255,45,120,0.07)'}}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/ryan-getclickstoday/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=13101F&text_color=F2EFF5&primary_color=FF2D78"
            style={{minWidth:'320px',height:'700px'}}
          />
        </div>
      </div>

      {/* Divider */}
      <div style={{maxWidth:'960px',margin:'48px auto 0',padding:'0 20px',display:'flex',alignItems:'center',gap:'20px'}}>
        <div style={{flex:1,height:'1px',background:'rgba(255,255,255,0.08)'}}></div>
        <span style={{fontSize:'11px',fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--muted)',whiteSpace:'nowrap'}}>Or submit your info below</span>
        <div style={{flex:1,height:'1px',background:'rgba(255,255,255,0.08)'}}></div>
      </div>

      {/* Lead capture form */}
      <section id="audit-form" style={{maxWidth:'680px',margin:'0 auto',padding:'40px 24px 0'}}>
        <div style={{background:'var(--bg2)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'40px',boxShadow:'0 0 60px rgba(255,45,120,0.06)'}}>
          <div style={{fontSize:'11px',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--pink)',marginBottom:'8px'}}>Free strategy audit</div>
          <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:800,letterSpacing:'-0.03em',lineHeight:1.2,marginBottom:'8px'}}>Not ready to book? Send us your info.</div>
          <p style={{fontSize:'13px',color:'var(--muted)',fontWeight:300,lineHeight:1.65,marginBottom:'28px'}}>We&apos;ll review your business and reach out within 24 hours to schedule your audit.</p>
          <form action="https://formspree.io/f/mgopyddw" method="POST" style={{display:'flex',flexDirection:'column',gap:'14px'}}>
            <input type="hidden" name="_next" value="/thank-you" />
            <input type="hidden" name="_source" value="free-audit-page" />
            <div className="form-row-2">
              <div className="form-group" style={{marginBottom:0}}>
                <label className="form-label">First name</label>
                <input className="form-input" type="text" name="first_name" placeholder="Ryan" />
              </div>
              <div className="form-group" style={{marginBottom:0}}>
                <label className="form-label">Last name</label>
                <input className="form-input" type="text" name="last_name" placeholder="Smith" />
              </div>
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="form-label">Business name</label>
              <input className="form-input" type="text" name="business" placeholder="Your business" />
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="form-label">Email</label>
              <input className="form-input" type="email" name="email" placeholder="you@yourbusiness.com" required />
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="form-label">Phone (optional)</label>
              <input className="form-input" type="tel" name="phone" placeholder="(954) 555-0100" />
            </div>
            <div className="form-group" style={{marginBottom:0}}>
              <label className="form-label">Industry</label>
              <select className="form-select" name="industry">
                <option value="">Select your industry...</option>
                {['Med Spa / Aesthetics','Dental / Cosmetic Dentistry','Restaurant / Hospitality','Local Services','Ecommerce','Professional Services','Real Estate','Other'].map(o=><option key={o}>{o}</option>)}
              </select>
            </div>
            <button type="submit" className="form-submit" style={{marginTop:'4px'}}>Send my info — it&apos;s free →</button>
            <p className="form-note">No spam. No sales pressure. We&apos;ll be in touch within 24 hours.</p>
          </form>
        </div>
      </section>

      {/* Social proof */}
      <section style={{maxWidth:'960px',margin:'0 auto',padding:'56px 24px'}}>
        <div style={{textAlign:'center',fontSize:'10px',fontWeight:700,letterSpacing:'0.2em',color:'var(--muted)',textTransform:'uppercase',marginBottom:'32px'}}>
          What clients say after their audit
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'20px',marginBottom:'48px'}}>
          {[
            ['"The audit alone was worth it. They spotted issues I didn\'t even know existed — and had a clear fix for each one. We started the next week."','Restaurant owner · South Florida'],
            ['"I\'ve done a dozen agency discovery calls. This was the first one where they told me exactly what they\'d do, in what order, and why. Signed up same day."','Local service business · South Florida'],
          ].map(([quote, author]) => (
            <div key={author} style={{background:'var(--bg2)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'28px'}}>
              <div style={{color:'var(--pink)',fontSize:'13px',letterSpacing:'2px',marginBottom:'14px'}}>★★★★★</div>
              <p style={{fontSize:'14px',fontWeight:300,color:'var(--text)',lineHeight:1.75,fontStyle:'italic',marginBottom:'16px'}}>&ldquo;{quote}&rdquo;</p>
              <div style={{fontSize:'11px',color:'var(--muted)',letterSpacing:'0.04em'}}>{author}</div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div style={{display:'flex',alignItems:'center',gap:'20px',background:'rgba(0,212,255,0.04)',border:'1px solid rgba(0,212,255,0.15)',borderRadius:'12px',padding:'24px 28px',marginBottom:'40px',flexWrap:'wrap'}}>
          <div style={{flexShrink:0,width:'44px',height:'44px',borderRadius:'50%',background:'rgba(0,212,255,0.08)',border:'1px solid rgba(0,212,255,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <div style={{fontWeight:700,fontSize:'14px',color:'var(--text)',marginBottom:'4px'}}>Zero-risk guarantee</div>
            <div style={{fontSize:'13px',fontWeight:300,color:'var(--muted)',lineHeight:1.65}}>No contracts. No setup fees. Cancel any service anytime. The audit is 100% free — we gain nothing unless you see real value and choose to work with us.</div>
          </div>
        </div>

        {/* Industries */}
        <div style={{textAlign:'center'}}>
          <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'0.2em',color:'var(--muted)',textTransform:'uppercase',marginBottom:'16px'}}>Industries we help</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center'}}>
            {['Med Spas & Aesthetics','Dental & Cosmetic Dentistry','Restaurants & Hospitality','Local Services','Ecommerce','Professional Services','Real Estate'].map(ind => (
              <span key={ind} style={{display:'inline-block',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'99px',padding:'6px 16px',fontSize:'12px',color:'var(--muted)',letterSpacing:'0.02em'}}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer style={{borderTop:'1px solid rgba(255,255,255,0.08)',padding:'28px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px',maxWidth:'960px',margin:'0 auto'}}>
        <a href="/" style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'16px',letterSpacing:'-0.03em',color:'var(--text)',textDecoration:'none'}}>
          Get<span style={{color:'var(--pink)'}}>Clicks</span>Today
        </a>
        <span style={{fontSize:'12px',color:'var(--muted)'}}>© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>
    </>
  )
}
