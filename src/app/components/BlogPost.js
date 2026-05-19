'use client'
import '../globals.css'
import { useEffect } from 'react'

export default function BlogPost({ title, category, date, excerpt, children }) {
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
              <a href="/services/gbp-management"><strong>GBP Management</strong><span>$500/mo</span></a>
              <a href="/services/reputation-management"><strong>Reputation Management</strong><span>$500/mo</span></a>
              <a href="/services/blog-content-marketing"><strong>Blog Content Marketing</strong><span>$600/mo</span></a>
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
          <a href="/blog" className="back-link">Back to blog</a>
          <div style={{display:'flex',gap:'10px',alignItems:'center',marginBottom:'20px'}}>
            <span className="eyebrow" style={{margin:0}}>{category}</span>
            <span style={{color:'var(--border)'}}>·</span>
            <span style={{fontSize:'13px',color:'var(--muted)',fontWeight:300}}>{date}</span>
          </div>
          <h1 style={{maxWidth:'860px',marginBottom:'24px',fontSize:'clamp(32px,4vw,52px)'}}>{title}</h1>
          <p style={{fontSize:'17px',fontWeight:300,color:'rgba(242,239,245,0.7)',maxWidth:'640px',lineHeight:1.75}}>{excerpt}</p>
        </section>
      </div>

      <section style={{background:'var(--bg)'}}>
        <div style={{maxWidth:'740px',margin:'0 auto',padding:'72px 52px'}}>
          <article className="blog-body fade-up">
            {children}
          </article>
          <div style={{marginTop:'64px',padding:'32px',background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'14px',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:'-40%',right:'-20%',width:'60%',height:'100%',background:'radial-gradient(circle,rgba(255,45,120,0.12) 0%,transparent 70%)',pointerEvents:'none'}}></div>
            <div style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--muted)',marginBottom:'12px'}}>Want results like this?</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(22px,3vw,30px)',fontWeight:800,letterSpacing:'-0.03em',lineHeight:1.1,marginBottom:'12px'}}>Get a free strategy audit for your business.</div>
            <p style={{fontSize:'14px',color:'var(--muted)',fontWeight:300,lineHeight:1.7,marginBottom:'24px',maxWidth:'480px'}}>30 minutes. No pitch. We&apos;ll tell you exactly what we&apos;d do to grow your business in the next 90 days.</p>
            <a href="/#contact" className="btn-primary">Book my free audit →</a>
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
          <li><a href="/blog">Blog</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>
    </>
  )
}
