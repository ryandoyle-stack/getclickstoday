'use client'
import '../globals.css'
import { useEffect } from 'react'

export default function ServicePage({
  title,
  tagline,
  heroSub,
  price,
  priceNote,
  includes,
  forYou,
  process,
  faqs,
  crossSell,
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
        <a href="/" className="nav-logo">Get<span>Clicks</span>Today</a>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact" className="nav-cta">Get free audit</a></li>
        </ul>
      </nav>

      <div className="grid-bg" style={{position:'relative',overflow:'hidden'}}>
        <div className="glow-pink" style={{top:'-100px',right:'-200px'}}></div>
        <section style={{maxWidth:'1280px',margin:'0 auto',padding:'80px 52px 60px',position:'relative',zIndex:2}}>
          <nav style={{marginBottom:'32px',fontSize:'12px',color:'var(--muted)',letterSpacing:'0.04em'}}>
            <a href="/" style={{color:'var(--muted)',textDecoration:'none'}}>Home</a>
            <span style={{margin:'0 8px',opacity:0.4}}>/</span>
            <a href="/services" style={{color:'var(--muted)',textDecoration:'none'}}>Services</a>
            <span style={{margin:'0 8px',opacity:0.4}}>/</span>
            <span style={{color:'var(--text)'}}>{title}</span>
          </nav>
          <div className="eyebrow" style={{marginBottom:'24px'}}>Service · {price}/mo</div>
          <h1 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(44px,6.5vw,84px)',lineHeight:0.98,letterSpacing:'-0.04em',marginBottom:'24px',maxWidth:'900px'}}>
            {title.split(' ').map((w,i) => <span key={i}>{w} </span>)}
            <em style={{fontStyle:'normal',color:'var(--pink)'}}>{tagline}</em>
          </h1>
          <p style={{fontSize:'17px',fontWeight:300,color:'var(--muted)',maxWidth:'640px',lineHeight:1.75,marginBottom:'40px'}}>{heroSub}</p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="/#contact" className="btn-primary">Get a free audit →</a>
            <a href="/#pricing" className="btn-ghost">See full pricing</a>
          </div>
        </section>
      </div>

      <section style={{background:'var(--bg)',borderTop:'1px solid var(--border)'}} className="dot-bg">
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'start'}} className="sp-grid">
            <div className="fade-up">
              <div className="eyebrow" style={{marginBottom:'14px'}}>What you get</div>
              <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(28px,3.5vw,44px)',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'20px'}}>Every deliverable. Every month.</h2>
              <p style={{fontSize:'15px',color:'var(--muted)',fontWeight:300,lineHeight:1.75,marginBottom:'24px',maxWidth:'480px'}}>We don&apos;t cut corners. Here&apos;s exactly what&apos;s included in your monthly engagement:</p>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'12px'}}>
                {includes.map((item, i) => (
                  <li key={i} style={{display:'flex',gap:'12px',alignItems:'flex-start',fontSize:'14px',color:'var(--text)',lineHeight:1.6}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:'2px'}}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up">
              <div style={{background:'var(--bg2)',border:'2px solid var(--pink)',borderRadius:'12px',padding:'32px',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',top:'-50%',right:'-50%',width:'100%',height:'100%',background:'radial-gradient(circle,rgba(255,45,120,0.15) 0%,transparent 70%)',pointerEvents:'none'}}></div>
                <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'12px'}}>Monthly investment</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'64px',fontWeight:800,letterSpacing:'-0.04em',lineHeight:1,marginBottom:'8px'}}>
                  {price}<span style={{fontSize:'20px',fontWeight:400,fontFamily:'var(--font-body)',color:'var(--muted)'}}>/mo</span>
                </div>
                <div style={{fontSize:'13px',color:'var(--muted)',marginBottom:'28px'}}>{priceNote}</div>
                <div style={{paddingTop:'24px',borderTop:'1px solid var(--border)',display:'flex',flexDirection:'column',gap:'10px'}}>
                  {[
                    'Month-to-month · No contracts',
                    'Cancel anytime, no penalties',
                    'First deliverable in 14 days',
                    'Senior strategists on every account',
                  ].map(t => (
                    <div key={t} style={{display:'flex',alignItems:'center',gap:'10px',fontSize:'13px',color:'var(--muted)'}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
                <a href="/#contact" style={{display:'block',marginTop:'28px',background:'var(--pink)',color:'#fff',padding:'14px 24px',borderRadius:'4px',fontSize:'14px',fontWeight:500,textDecoration:'none',letterSpacing:'0.04em',textAlign:'center',transition:'background 0.2s'}}>
                  Start with a free audit →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div className="section-head fade-up" style={{marginBottom:'48px'}}>
            <div className="eyebrow" style={{marginBottom:'14px'}}>Who this is for</div>
            <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(28px,3.5vw,44px)',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'16px'}}>Built for businesses that <em style={{fontStyle:'normal',color:'var(--pink)'}}>actually grow.</em></h2>
            <p style={{fontSize:'15px',color:'var(--muted)',fontWeight:300,maxWidth:'520px',lineHeight:1.75}}>This service is a perfect fit if you&apos;re one of these:</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'8px',overflow:'hidden'}} className="fade-up">
            {forYou.map((item, i) => (
              <div key={i} style={{background:'var(--bg)',padding:'28px 24px'}}>
                <div style={{fontFamily:'var(--font-display)',fontSize:'14px',fontWeight:700,marginBottom:'8px',color:'var(--cyan)'}}>{item.title}</div>
                <div style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.65,fontWeight:300}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div className="section-head fade-up" style={{marginBottom:'48px'}}>
            <div className="eyebrow" style={{marginBottom:'14px'}}>How we deliver</div>
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
          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'8px',overflow:'hidden'}} className="fade-up">
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

      {crossSell && (
        <section style={{background:'var(--bg)'}}>
          <div className="wrap" style={{padding:'80px 52px'}}>
            <div className="section-head fade-up" style={{marginBottom:'40px'}}>
              <div className="eyebrow" style={{marginBottom:'14px'}}>Works great with</div>
              <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(26px,3vw,40px)',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'16px'}}>Combine &amp; <em style={{fontStyle:'normal',color:'var(--pink)'}}>save up to 15%.</em></h2>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'8px',overflow:'hidden'}} className="fade-up">
              {crossSell.map((cs, i) => (
                <a key={i} href={cs.href} style={{background:'var(--bg2)',padding:'24px 28px',textDecoration:'none',color:'var(--text)',transition:'background 0.2s',display:'block'}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:'15px',fontWeight:700,marginBottom:'6px'}}>{cs.title}</div>
                  <div style={{fontSize:'13px',color:'var(--muted)',lineHeight:1.6,fontWeight:300}}>{cs.desc}</div>
                  <div style={{fontSize:'12px',color:'var(--cyan)',marginTop:'12px',letterSpacing:'0.04em'}}>Learn more →</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

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
        <a href="/" className="footer-logo">Get<span>Clicks</span>Today</a>
        <ul className="footer-nav">
          <li><a href="/services">Services</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>

      <style>{`
        @media(max-width:860px){
          .sp-grid{grid-template-columns:1fr!important;gap:40px!important}
        }
        details[open] summary span{transform:rotate(45deg);transition:transform 0.2s}
        details summary span{transition:transform 0.2s;display:inline-block}
      `}</style>
    </>
  )
}
