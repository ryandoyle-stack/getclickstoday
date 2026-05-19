'use client'
import '../globals.css'
import { useEffect } from 'react'

export default function IndustryPage({
  industry, title, tagline, heroSub, ctaLabel,
  stats, challenges, services, process, faqs,
}) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.07 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
  }, [])

  return (
    <>
      <div className="ann-bar">
        Limited spots available for new clients — <a href="/#contact">claim yours before they&apos;re gone →</a>
      </div>

      <nav>
        <a href="/" className="nav-logo">
          Get<span>Clicks</span>Today
        </a>
        <ul className="nav-links">
          <li className="nav-dropdown">
            <a href="/services" className="nav-dropdown-toggle">Services</a>
            <div className="nav-dropdown-menu">
              <a href="/services/social-media-management"><strong>Social Media Management</strong><span>$500/mo</span></a>
              <a href="/services/email-marketing"><strong>Email Marketing</strong><span>$500/mo</span></a>
              <a href="/services/seo-local-search"><strong>SEO &amp; Local Search</strong><span>$500/mo</span></a>
              <a href="/services/paid-ads"><strong>Paid Ads Management</strong><span>$500/mo + ad spend</span></a>
              <div className="nav-dropdown-divider"></div>
              <a href="/services" className="all-link">See all services →</a>
              <a href="/#pricing">See pricing →</a>
            </div>
          </li>
          <li className="nav-dropdown">
            <a href="/industries" className="nav-dropdown-toggle">Industries</a>
            <div className="nav-dropdown-menu">
              <a href="/industries/med-spas"><strong>Med Spas &amp; Aesthetics</strong><span style={{color:'var(--pink)'}}>Hot</span></a>
              <a href="/industries/dental"><strong>Dental &amp; Cosmetic Dentistry</strong><span style={{color:'var(--pink)'}}>Hot</span></a>
              <a href="/industries/restaurants"><strong>Restaurants &amp; Hospitality</strong></a>
              <a href="/industries/local-services"><strong>Local Services</strong></a>
              <a href="/industries/ecommerce"><strong>Ecommerce</strong></a>
              <a href="/industries/professional-services"><strong>Professional Services</strong></a>
              <a href="/industries/real-estate"><strong>Real Estate</strong></a>
              <div className="nav-dropdown-divider"></div>
              <a href="/industries" className="all-link">See all industries →</a>
            </div>
          </li>
          <li><a href="/#contact" className="nav-cta">Get free audit</a></li>
        </ul>
      </nav>

      <div id="hero-wrap">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <section style={{maxWidth:'1280px',margin:'0 auto',padding:'80px 52px 60px',position:'relative',zIndex:5}}>
          <a href="/industries" className="back-link">Back to industries</a>
          <div className="eyebrow" style={{marginBottom:'24px'}}>Industry · South Florida</div>
          <h1 style={{maxWidth:'900px',marginBottom:'24px'}}>
            {title}<br /><em>{tagline}</em>
          </h1>
          <p style={{fontSize:'17px',fontWeight:300,color:'rgba(242,239,245,0.7)',maxWidth:'640px',lineHeight:1.75,marginBottom:'40px'}}>{heroSub}</p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="/#contact" className="btn-primary">{ctaLabel || 'Get a free audit →'}</a>
            <a href="/services" className="btn-ghost">See all services</a>
          </div>
        </section>
      </div>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'48px 52px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'12px',overflow:'hidden'}} className="fade-up">
            {stats.map((s, i) => (
              <div key={i} style={{background:'var(--bg)',padding:'32px 28px',textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(36px,4vw,52px)',fontWeight:800,letterSpacing:'-0.04em',color:'var(--pink)',marginBottom:'8px',lineHeight:1}}>{s.num}</div>
                <div style={{fontSize:'13px',color:'var(--muted)',fontWeight:300}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div className="section-head fade-up" style={{marginBottom:'48px'}}>
            <div className="eyebrow" style={{marginBottom:'14px'}}>The challenge</div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(28px,3.5vw,44px)',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'16px'}}>What holds <em style={{fontStyle:'normal',color:'var(--pink)'}}>{industry}</em> businesses back.</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'12px',overflow:'hidden'}} className="fade-up">
            {challenges.map((c, i) => (
              <div key={i} style={{background:'var(--bg2)',padding:'28px 24px'}}>
                <div style={{fontFamily:'var(--font-display)',fontSize:'14px',fontWeight:700,marginBottom:'8px',color:'var(--cyan)'}}>{c.title}</div>
                <div style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.65,fontWeight:300}}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div className="section-head fade-up" style={{marginBottom:'48px'}}>
            <div className="eyebrow" style={{marginBottom:'14px'}}>What we do</div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(28px,3.5vw,44px)',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'16px'}}>Services built for <em style={{fontStyle:'normal',color:'var(--pink)'}}>{industry}.</em></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'12px',overflow:'hidden'}} className="fade-up">
            {services.map((svc, i) => (
              <a key={i} href={svc.href} style={{background:'var(--bg)',padding:'28px 24px',textDecoration:'none',color:'var(--text)',display:'block',transition:'background 0.2s'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'8px'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'15px',fontWeight:700}}>{svc.title}</div>
                  <div style={{fontSize:'13px',color:'var(--pink)',fontWeight:600,flexShrink:0,marginLeft:'12px'}}>{svc.price}</div>
                </div>
                <div style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.65,fontWeight:300,marginBottom:'12px'}}>{svc.desc}</div>
                <div style={{fontSize:'12px',color:'var(--cyan)',letterSpacing:'0.04em'}}>Learn more →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div className="section-head fade-up" style={{marginBottom:'48px'}}>
            <div className="eyebrow" style={{marginBottom:'14px'}}>How we work</div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(28px,3.5vw,44px)',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'16px'}}>The <em style={{fontStyle:'normal',color:'var(--pink)'}}>process.</em></h2>
          </div>
          <div className="process-grid fade-up">
            {process.map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{String(i+1).padStart(2,'0')}</div>
                <div className="step-title">{step.title}</div>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'80px 52px',maxWidth:'900px'}}>
          <div className="section-head fade-up" style={{marginBottom:'48px'}}>
            <div className="eyebrow" style={{marginBottom:'14px'}}>Common questions</div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(28px,3.5vw,44px)',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'16px'}}>Questions we <em style={{fontStyle:'normal',color:'var(--pink)'}}>hear a lot.</em></h2>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'12px',overflow:'hidden'}} className="fade-up">
            {faqs.map((faq, i) => (
              <details key={i} style={{background:'var(--bg)',padding:'0'}}>
                <summary style={{padding:'20px 28px',cursor:'pointer',fontSize:'15px',fontWeight:500,display:'flex',justifyContent:'space-between',alignItems:'center',gap:'16px',listStyle:'none'}}>
                  {faq.q}
                  <span style={{color:'var(--cyan)',fontSize:'20px',fontWeight:300,flexShrink:0}}>+</span>
                </summary>
                <div style={{padding:'0 28px 24px',fontSize:'14px',color:'var(--muted)',fontWeight:300,lineHeight:1.75}}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'80px 52px',textAlign:'center',maxWidth:'900px'}}>
          <div className="fade-up">
            <div className="eyebrow" style={{marginBottom:'20px',justifyContent:'center'}}>Ready to grow?</div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(32px,4.5vw,56px)',letterSpacing:'-0.04em',lineHeight:1.05,marginBottom:'20px'}}>Let&apos;s build your<br /><em style={{fontStyle:'normal',color:'var(--pink)'}}>growth engine.</em></h2>
            <p style={{fontSize:'16px',color:'var(--muted)',fontWeight:300,maxWidth:'520px',margin:'0 auto 32px',lineHeight:1.75}}>Start with a free 30-minute strategy audit. We&apos;ll tell you exactly what we&apos;d do — no charge, no pitch.</p>
            <a href="/#contact" className="btn-primary">Get your free audit →</a>
          </div>
        </div>
      </section>

      <footer>
        <a href="/" className="footer-logo">
          Get<span>Clicks</span>Today
        </a>
        <ul className="footer-nav">
          <li><a href="/services">Services</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>

      <style>{`
        details[open] summary span{transform:rotate(45deg);transition:transform 0.2s}
        details summary span{transition:transform 0.2s;display:inline-block}
      `}</style>
    </>
  )
}
