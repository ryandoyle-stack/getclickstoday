'use client'
import '../globals.css'
import { useEffect } from 'react'

export default function ServicesIndexClient() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.07 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
  }, [])

  const services = [
    {href:'/services/social-media-management',name:'Social Media Management',price:'$500/mo',desc:'12+ custom posts per month, strategy, and community management across Instagram and Facebook.'},
    {href:'/services/email-marketing',name:'Email Marketing',price:'$500/mo',desc:'2–4 campaigns per month, automated flows, segmentation, and A/B testing for maximum ROI.'},
    {href:'/services/seo-local-search',name:'SEO & Local Search',price:'$500/mo',desc:'Full-stack SEO — technical, on-page, citations, backlinks — to rank for SoFlo searches.'},
    {href:'/services/paid-ads',name:'Paid Ads Management',price:'$500/mo + ad spend',desc:'Meta, Google, and TikTok ads run with weekly optimization and full transparency.'},
    {href:'/services/gbp-management',name:'GBP Management',price:'$500/mo',desc:'Weekly Google Business Profile posts, photos, Q&A, and review replies.'},
    {href:'/services/reputation-management',name:'Reputation & Review Management',price:'$500/mo',desc:'Multi-platform review monitoring, response management, and review growth.'},
    {href:'/services/blog-content-marketing',name:'Blog Content Marketing',price:'$600/mo',desc:'4 SEO-optimized blog posts per month with keyword targeting and internal linking.'},
  ]

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
          <li><a href="/services">Services</a></li>
          <li><a href="/industries">Industries</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#contact" className="nav-cta">Get free audit</a></li>
        </ul>
      </nav>

      <div id="hero-wrap">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
        <section style={{maxWidth:'1280px',margin:'0 auto',padding:'80px 52px 60px',position:'relative',zIndex:5}}>
          <a href="/" className="back-link">Back to home</a>
          <div className="eyebrow" style={{marginBottom:'24px'}}>All services</div>
          <h1 style={{maxWidth:'900px',marginBottom:'24px'}}>
            Everything you need<br />to <em>grow.</em>
          </h1>
          <p style={{fontSize:'17px',fontWeight:300,color:'rgba(242,239,245,0.7)',maxWidth:'640px',lineHeight:1.75,marginBottom:'40px'}}>
            Seven done-for-you marketing services. Each available individually or bundled to save up to 15%. All month-to-month with no contracts.
          </p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="/#contact" className="btn-primary">Get a free audit →</a>
            <a href="/#pricing" className="btn-ghost">See full pricing</a>
          </div>
        </section>
      </div>

      <section style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'12px',overflow:'hidden'}} className="fade-up">
            {services.map((s,i) => (
              <a key={i} href={s.href} style={{background:'var(--bg2)',padding:'32px 36px',textDecoration:'none',color:'var(--text)',transition:'background 0.2s',display:'block'}}>
                <div style={{fontSize:'11px',color:'var(--cyan)',letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:600,marginBottom:'12px'}}>{s.price}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'10px'}}>{s.name}</div>
                <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.7,fontWeight:300,marginBottom:'20px'}}>{s.desc}</p>
                <div style={{fontSize:'12px',color:'var(--cyan)',letterSpacing:'0.04em'}}>Learn more →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'80px 52px',textAlign:'center',maxWidth:'900px'}}>
          <div className="eyebrow" style={{marginBottom:'20px',justifyContent:'center'}}>Ready to grow?</div>
          <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(32px,4.5vw,56px)',letterSpacing:'-0.04em',lineHeight:1.05,marginBottom:'20px'}}>Not sure which<br />service you <em style={{fontStyle:'normal',color:'var(--pink)'}}>need?</em></h2>
          <p style={{fontSize:'16px',color:'var(--muted)',fontWeight:300,maxWidth:'520px',margin:'0 auto 32px',lineHeight:1.75}}>Start with a free 30-minute strategy audit. We&apos;ll tell you exactly what we&apos;d prioritize for your business.</p>
          <a href="/#contact" className="btn-primary">Get your free audit →</a>
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
    </>
  )
}
