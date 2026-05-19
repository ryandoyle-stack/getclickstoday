'use client'
import '../globals.css'
import { useEffect } from 'react'

const posts = [
  {
    href: '/blog/meta-ads-med-spas-south-florida-2025',
    category: 'Paid Ads',
    date: 'May 19, 2025',
    title: 'The 2025 Meta Ads Playbook for South Florida Med Spas',
    excerpt: 'How to turn Instagram scrollers into booked consultations. The three-layer campaign structure, creative that converts, and the metrics that actually matter.',
  },
  {
    href: '/blog/google-business-profile-local-marketing-2025',
    category: 'Local SEO',
    date: 'May 12, 2025',
    title: 'Why Your Google Business Profile Is More Valuable Than Your Website',
    excerpt: '46% of searches have local intent — and the map pack wins most of those clicks. Here\'s what actually moves your GBP ranking in 2025.',
  },
]

export default function BlogIndexClient() {
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
          <a href="/" className="back-link">Back to home</a>
          <div className="eyebrow" style={{marginBottom:'24px'}}>Marketing insights</div>
          <h1 style={{maxWidth:'900px',marginBottom:'24px'}}>
            The playbook.<br /><em>Straight from the field.</em>
          </h1>
          <p style={{fontSize:'17px',fontWeight:300,color:'rgba(242,239,245,0.7)',maxWidth:'580px',lineHeight:1.75}}>
            Tactics, strategies, and real-world frameworks for South Florida businesses that want to grow.
          </p>
        </section>
      </div>

      <section style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap" style={{padding:'80px 52px',maxWidth:'900px'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'1px',background:'var(--border)',border:'1px solid var(--border)',borderRadius:'12px',overflow:'hidden'}} className="fade-up">
            {posts.map((post, i) => (
              <a key={i} href={post.href} style={{background:'var(--bg2)',padding:'36px 40px',textDecoration:'none',color:'var(--text)',display:'block',transition:'background 0.2s'}}>
                <div style={{display:'flex',gap:'12px',alignItems:'center',marginBottom:'14px'}}>
                  <span style={{fontSize:'11px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--cyan)',background:'rgba(0,212,255,0.08)',padding:'3px 10px',borderRadius:'4px'}}>{post.category}</span>
                  <span style={{fontSize:'12px',color:'var(--muted)',fontWeight:300}}>{post.date}</span>
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:700,letterSpacing:'-0.02em',lineHeight:1.2,marginBottom:'12px'}}>{post.title}</div>
                <p style={{fontSize:'14px',color:'var(--muted)',lineHeight:1.7,fontWeight:300,marginBottom:'20px',maxWidth:'600px'}}>{post.excerpt}</p>
                <div style={{fontSize:'12px',color:'var(--pink)',letterSpacing:'0.04em',fontWeight:600}}>Read article →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--bg2)',borderTop:'1px solid var(--border)'}}>
        <div className="wrap" style={{padding:'80px 52px',textAlign:'center',maxWidth:'900px'}}>
          <div className="eyebrow" style={{marginBottom:'20px',justifyContent:'center'}}>Ready to grow?</div>
          <h2 style={{fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(32px,4.5vw,56px)',letterSpacing:'-0.04em',lineHeight:1.05,marginBottom:'20px'}}>Put the playbook<br /><em style={{fontStyle:'normal',color:'var(--pink)'}}>to work.</em></h2>
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
          <li><a href="/blog">Blog</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>
    </>
  )
}
