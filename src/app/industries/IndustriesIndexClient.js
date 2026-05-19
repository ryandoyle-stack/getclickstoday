'use client'
import '../globals.css'
import { useEffect } from 'react'

export default function IndustriesIndexClient() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.07 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
  }, [])

  const industries = [
    {href:'/industries/med-spas',name:'Med Spas & Aesthetics',hot:true,tagline:'Fill your books. Book high-ticket treatments.',desc:'Meta ads, social content, and reputation management built for SoFlo\'s competitive aesthetic market.'},
    {href:'/industries/dental',name:'Dental & Cosmetic Dentistry',hot:true,tagline:'More new patients. More high-value cases.',desc:'SEO, paid ads, and reputation systems that bring in cosmetic cases and general patients consistently.'},
    {href:'/industries/restaurants',name:'Restaurants & Hospitality',hot:false,tagline:'More reservations. More repeat guests.',desc:'Social, Google visibility, email, and ads — everything a SoFlo restaurant needs to fill seats nightly.'},
    {href:'/industries/local-services',name:'Local Services',hot:false,tagline:'Dominate your local market.',desc:'Local SEO, GBP management, and Google Ads for contractors, salons, cleaners, and service businesses.'},
    {href:'/industries/ecommerce',name:'Ecommerce',hot:false,tagline:'Turn browsers into buyers.',desc:'Meta Shopping ads, email automation, and SEO that drives profitable revenue for DTC brands.'},
    {href:'/industries/professional-services',name:'Professional Services',hot:false,tagline:'Build authority. Win clients.',desc:'Content marketing, SEO, and reputation management for law firms, advisors, consultants, and healthcare.'},
    {href:'/industries/real-estate',name:'Real Estate',hot:false,tagline:'More listings. More closings.',desc:'Social media, email drips, and seller lead campaigns for agents and brokerages in the SoFlo market.'},
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
          <li className="nav-dropdown">
            <a href="/services" className="nav-dropdown-toggle">Services</a>
            <div className="nav-dropdown-menu">
              <a href="/services/social-media-management"><strong>Social Media Management</strong><span>$500/mo</span></a>
              <a href="/services/email-marketing"><strong>Email Marketing</strong><span>$500/mo</span></a>
              <a href="/services/seo-local-search"><strong>SEO &amp; Local Search</strong><span>$500/mo</span></a>
              <a href="/services/paid-ads"><strong>Paid Ads Management</strong><span>$500/mo + ad spend</span></a>
              <div className="nav-dropdown-divider"></div>
              <a href="/services" className="all-link">See all services →</a>
            </div>
          </li>
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
          <div className="eyebrow" style={{marginBottom:'24px'}}>Industries we serve</div>
          <h1 style={{maxWidth:'900px',marginBottom:'24px'}}>
            Deep expertise.<br /><em>Proven playbooks.</em>
          </h1>
          <p style={{fontSize:'17px',fontWeight:300,color:'rgba(242,239,245,0.7)',maxWidth:'640px',lineHeight:1.75,marginBottom:'40px'}}>
            We don&apos;t do generic marketing. We specialize in SoFlo&apos;s highest-value industries — with the strategies, content, and channel mix that actually works for each one.
          </p>
          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="/#contact" className="btn-primary">Get a free audit →</a>
            <a href="/services" className="btn-ghost">See all services</a>
          </div>
        </section>
      </div>

      <section style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap" style={{padding:'80px 52px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'12px',overflow:'hidden'}} className="fade-up">
            {industries.map((ind, i) => (
              <a key={i} href={ind.href} style={{background:'var(--bg2)',padding:'32px 36px',textDecoration:'none',color:'var(--text)',transition:'background 0.2s',display:'block',position:'relative'}}>
                {ind.hot && (
                  <span style={{position:'absolute',top:'20px',right:'20px',background:'var(--pink)',color:'#fff',fontSize:'10px',fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',padding:'3px 8px',borderRadius:'4px'}}>Hot</span>
                )}
                <div style={{fontSize:'13px',color:'var(--cyan)',letterSpacing:'0.06em',textTransform:'uppercase',fontWeight:600,marginBottom:'10px'}}>{ind.tagline}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'10px'}}>{ind.name}</div>
                <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.7,fontWeight:300,marginBottom:'20px'}}>{ind.desc}</p>
                <div style={{fontSize:'12px',color:'var(--cyan)',letterSpacing:'0.04em'}}>See playbook →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'80px 52px',textAlign:'center',maxWidth:'900px'}}>
          <div className="eyebrow" style={{marginBottom:'20px',justifyContent:'center'}}>Don&apos;t see yours?</div>
          <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(32px,4.5vw,56px)',letterSpacing:'-0.04em',lineHeight:1.05,marginBottom:'20px'}}>We work with any<br />SoFlo business <em style={{fontStyle:'normal',color:'var(--pink)'}}>ready to grow.</em></h2>
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
