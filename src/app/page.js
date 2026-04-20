'use client'
import './globals.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.07 })
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el))
    const handleScroll = () => {
      const y = window.scrollY + 80
      document.querySelectorAll('section[id]').forEach(s => {
        const link = document.querySelector(`.nav-links a[href="#${s.id}"]`)
        if (!link) return
        link.style.color = (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) ? 'var(--text)' : ''
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function showInd(id) {
    document.querySelectorAll('.ind-tab').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.ind-panel').forEach(p => p.classList.remove('active'))
    document.querySelector(`[data-ind="${id}"]`).classList.add('active')
    document.getElementById('ind-' + id).classList.add('active')
  }

  function showPricing(id) {
    document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.price-panel').forEach(p => p.classList.remove('active'))
    document.querySelector(`[data-price="${id}"]`).classList.add('active')
    document.getElementById('price-' + id).classList.add('active')
  }

  return (
    <>
      <div className="ann-bar">
        Limited spots available for new clients — <a href="#contact">claim yours before they&apos;re gone →</a>
      </div>

      <nav>
        <a href="#hero" className="nav-logo">Get<span>Clicks</span>Today</a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#bundle-highlight">Bundles</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact" className="nav-cta">Get free audit</a></li>
        </ul>
      </nav>

      <div className="grid-bg" style={{position:'relative',overflow:'hidden'}}>
        <div className="glow-pink" style={{top:'-100px',right:'-200px'}}></div>
        <div className="glow-cyan" style={{bottom:'100px',left:'-200px'}}></div>
        <section id="hero">
          <div className="spots-pill"><span className="spots-dot"></span>Accepting new clients in South Florida</div>
          <div className="eyebrow">Full-Service Marketing Agency · SoFlo</div>
          <h1>We build brands<br />that <em>dominate</em><br />their market.</h1>
          <p className="hero-sub">From websites to paid ads to monthly content — GetClicksToday is your one agency for real, measurable growth. No fluff. No guesswork. No long contracts.</p>
          <div className="hero-guarantee">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
            First deliverable in 14 days or less. Cancel anytime, no penalties.
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get your free audit →</a>
            <a href="#pricing" className="btn-ghost">See pricing</a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">100%</div><div className="stat-label">Done for you</div></div>
            <div><div className="stat-num">14 days</div><div className="stat-label">To first deliverable</div></div>
            <div><div className="stat-num">3×</div><div className="stat-label">Avg. engagement lift</div></div>
            <div><div className="stat-num">0</div><div className="stat-label">Long-term contracts</div></div>
          </div>
        </section>
      </div>

      <div className="proof-bar">
        <div className="proof-inner">
          <div className="proof-label">What clients say</div>
          <div className="testimonial-mini">
            <div className="stars">★★★★★</div>
            <div className="t-quote">&ldquo;Results came faster than I expected. Our phones haven&apos;t stopped.&rdquo;</div>
            <div className="t-author">Restaurant owner · South Florida</div>
          </div>
          <div className="testimonial-mini">
            <div className="stars">★★★★★</div>
            <div className="t-quote">&ldquo;Inbound calls tripled in two months. Had to hire to keep up.&rdquo;</div>
            <div className="t-author">Local service business · South Florida</div>
          </div>
          <div className="testimonial-mini">
            <div className="stars">★★★★★</div>
            <div className="t-quote">&ldquo;Best ROI of any marketing spend we&apos;ve done. Period.&rdquo;</div>
            <div className="t-author">Ecommerce founder · South Florida</div>
          </div>
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {['Content Marketing','Website Design','Paid Ads','SEO','Social Media','Email Marketing','Brand Strategy','GBP Management','Reputation Management','Med Spas','Dental','Ecommerce',
            'Content Marketing','Website Design','Paid Ads','SEO','Social Media','Email Marketing','Brand Strategy','GBP Management','Reputation Management','Med Spas','Dental','Ecommerce'
          ].map((item, i) => (
            <span key={i}><span className="marquee-item">{item}</span><span className="marquee-sep">◆</span></span>
          ))}
        </div>
      </div>

      <section id="services" style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{marginBottom:'14px'}}>What we do</div>
            <h2>Every service you<br />need to <em>grow.</em></h2>
            <p className="section-sub">We handle the full stack — strategy, creative, technical, and paid. One agency, no gaps, no hand-offs.</p>
          </div>
          <div className="svc-grid-top fade-up">
            <div className="svc featured">
              <div className="svc-badge">Most requested</div>
              <div className="svc-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
              <div className="svc-name">Website Design &amp; Development</div>
              <p className="svc-desc">Custom websites built to convert — not just look good. From landing pages to full ecommerce stores, we design, build, and launch sites that work as your best salesperson around the clock.</p>
              <div className="svc-tags">{['Custom design','Mobile-first','SEO-ready','Ecommerce','Landing pages'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
            <div className="svc">
              <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg></div>
              <div className="svc-name">Paid Ads Management</div>
              <p className="svc-desc">Meta, Google, and TikTok ads managed by people who treat your budget like their own. Data-first targeting, scroll-stopping creative, conversion tracking, and weekly optimization. Complete transparency on every dollar spent.</p>
              <div className="svc-tags">{['Meta Ads','Google Ads','TikTok Ads','Retargeting','Conversion tracking'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
          </div>
          <div className="svc-grid-bot fade-up" style={{marginTop:'1px'}}>
            <div className="svc">
              <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg></div>
              <div className="svc-name">Social Media Management</div>
              <p className="svc-desc">12+ custom posts per month, done-for-you. Strategy, captions, hashtags, scheduling, community management, and monthly performance reporting — all handled so you can run your business.</p>
              <div className="svc-tags">{['12+ posts/mo','Content strategy','Community mgmt','Monthly reporting'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
            <div className="svc">
              <div className="svc-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
              <div className="svc-name">SEO &amp; Local Search</div>
              <p className="svc-desc">Rank where your customers are searching. Technical SEO, on-page optimization, keyword research, backlink outreach, and local citation building — a complete SEO engine, not just one piece of it.</p>
              <div className="svc-tags">{['Technical SEO','Keyword research','Local citations','Backlinks','Monthly tracking'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
            <div className="svc">
              <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
              <div className="svc-name">Brand Strategy</div>
              <p className="svc-desc">Positioning, messaging, and identity that makes you unmistakable. Built for businesses ready to stop blending in and start owning their market.</p>
              <div className="svc-tags">{['Positioning','Messaging','Identity'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
          </div>
          <div className="svc-grid-bot fade-up" style={{marginTop:'1px'}}>
            <div className="svc">
              <div className="svc-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <div className="svc-name">GBP Management</div>
              <p className="svc-desc">Your Google Business Profile is often the first thing people see. We keep it optimized, active, and converting — weekly posts, fresh photos, Q&amp;A responses, review replies, and category optimization every single month.</p>
              <div className="svc-tags">{['Weekly posts','Photos','Q&A','Category opt','Review replies'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
            <div className="svc">
              <div className="svc-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
              <div className="svc-name">Reputation &amp; Review Management</div>
              <p className="svc-desc">Your online reputation is your most valuable asset. We monitor, respond to, and grow your reviews across Google, Yelp, and industry platforms so new customers trust you before they even call.</p>
              <div className="svc-tags">{['Review growth','Response mgmt','Multi-platform','Reputation monitoring'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
            <div className="svc">
              <div className="svc-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
              <div className="svc-name">Email Marketing</div>
              <p className="svc-desc">A full email marketing engine, not just a monthly newsletter. 2–4 campaigns per month, automated flows (welcome, abandoned cart, win-back), list segmentation, and A/B testing to continuously improve open and click rates.</p>
              <div className="svc-tags">{['2–4 campaigns/mo','Automation','Segmentation','A/B testing','List growth'].map(t=><span key={t} className="tag">{t}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* BUNDLE HIGHLIGHT SECTION */}
      <section id="bundle-highlight" className="grid-bg">
        <div className="glow-pink" style={{top:'50%',left:'-200px',transform:'translateY(-50%)'}}></div>
        <div className="glow-cyan" style={{top:'20%',right:'-200px'}}></div>
        <div className="bundle-hl-inner">
          <div className="bundle-hl-grid fade-up">
            <div className="bundle-hl-left">
              <div className="eyebrow" style={{marginBottom:'14px'}}>Bundle &amp; Save</div>
              <h2 className="bundle-hl-title">Full-scale marketing.<br /><em>Fractional cost.</em></h2>
              <p className="bundle-hl-sub">The real power is when services work together. Our bundles combine multiple monthly services at up to 15% off — saving you hundreds every month while we build a complete growth engine for your business.</p>
              <div className="bundle-savings">
                <div className="savings-card">
                  <div className="savings-big">$100</div>
                  <div className="savings-label">Saved w/ 2 services</div>
                </div>
                <div className="savings-card">
                  <div className="savings-big">$225</div>
                  <div className="savings-label">Saved w/ 3 services</div>
                </div>
                <div className="savings-card">
                  <div className="savings-big">$300</div>
                  <div className="savings-label">Saved w/ 4 services</div>
                </div>
                <div className="savings-card">
                  <div className="savings-big">$3,600</div>
                  <div className="savings-label">Saved per year (max)</div>
                </div>
              </div>
              <a href="#pricing" className="btn-primary" onClick={()=>setTimeout(()=>showPricing({currentTarget:document.querySelector('[data-price="bundles"]')}),100)}>See all bundles →</a>
            </div>
            <div className="bundle-hl-right">
              <div className="bundle-showcase">
                <div className="bundle-showcase-label">Most popular</div>
                <div className="bundle-showcase-name">Full Content Engine</div>
                <div className="bundle-showcase-tag">3 services · 15% off</div>
                <ul className="bundle-showcase-items">
                  <li><span>Social Media Management</span><span>$500</span></li>
                  <li><span>Email Marketing</span><span>$500</span></li>
                  <li><span>Blog Content Marketing</span><span>$600</span></li>
                </ul>
                <div className="bundle-showcase-total">
                  <span className="bundle-showcase-total-label">Your price</span>
                  <span className="bundle-showcase-total-val">$1,275<span>/mo</span></span>
                </div>
                <div className="bundle-showcase-save">
                  <span className="bundle-showcase-save-label">Bundle savings</span>
                  <span className="bundle-showcase-save-val">— $225/mo</span>
                </div>
                <a href="#contact" className="bundle-showcase-cta">Get started →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" style={{background:'var(--bg2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{marginBottom:'14px'}}>Industries we focus on</div>
            <h2>Built for businesses<br /><em>serious</em> about growth.</h2>
            <p className="section-sub">We specialize in high-value SoFlo industries — from med spas to dental practices to restaurants. Deep industry knowledge, proven playbooks.</p>
          </div>
          <div className="ind-layout fade-up">
            <div className="ind-tabs">
              {[
                ['medspas','Med Spas & Aesthetics',true],
                ['dental','Dental & Cosmetic',true],
                ['restaurants','Restaurants & Hospitality',false],
                ['local','Local Services',false],
                ['ecommerce','Ecommerce',false],
                ['professional','Professional Services',false],
                ['realestate','Real Estate',false],
              ].map(([id,label,hot])=>(
                <div key={id} className={`ind-tab${id==='medspas'?' active':''}`} data-ind={id} onClick={()=>showInd(id)}>
                  {label}{hot && <span className="ind-tab-hot">Hot</span>}
                </div>
              ))}
            </div>
            <div id="ind-medspas" className="ind-panel active">
              <div className="ind-eyebrow">Med Spas &amp; Aesthetics</div>
              <div className="ind-title">Fill your books.<br />Book high-ticket treatments.</div>
              <p className="ind-body">SoFlo med spas are in one of the most competitive markets in the country. We build the marketing systems that turn Instagram scrollers into booked consultations — high-converting landing pages, aesthetic-forward content, targeted Meta ads, and reputation management that builds trust fast.</p>
              <div className="ind-results">
                <div><div className="ind-stat-num">5×</div><div className="ind-stat-lbl">Consultation bookings</div></div>
                <div><div className="ind-stat-num">3.8×</div><div className="ind-stat-lbl">Ad return on spend</div></div>
                <div><div className="ind-stat-num">30 days</div><div className="ind-stat-lbl">To first booked leads</div></div>
              </div>
              <a href="#contact" className="btn-primary">Get a free audit →</a>
            </div>
            <div id="ind-dental" className="ind-panel">
              <div className="ind-eyebrow">Dental &amp; Cosmetic Dentistry</div>
              <div className="ind-title">More new patients.<br />More high-value cases.</div>
              <p className="ind-body">Cosmetic dentistry marketing is a game of trust and visibility. We help SoFlo practices rank for high-intent local searches, run Meta campaigns that showcase before/afters, and build the online reputation that turns first-time visitors into lifetime patients. Perfect for Invisalign, veneers, and implant-focused practices.</p>
              <div className="ind-results">
                <div><div className="ind-stat-num">+240%</div><div className="ind-stat-lbl">New patient inquiries</div></div>
                <div><div className="ind-stat-num">2.5×</div><div className="ind-stat-lbl">High-ticket case value</div></div>
                <div><div className="ind-stat-num">45 days</div><div className="ind-stat-lbl">To booked consultations</div></div>
              </div>
              <a href="#contact" className="btn-primary">Fill my chair →</a>
            </div>
            <div id="ind-restaurants" className="ind-panel">
              <div className="ind-eyebrow">Restaurants &amp; Hospitality</div>
              <div className="ind-title">More reservations.<br />More repeat guests.</div>
              <p className="ind-body">We know SoFlo&apos;s food scene inside and out. We build content strategies that fill seats, grow followings, and turn first-time guests into regulars — Instagram content, Google visibility, email marketing, and ads, all handled.</p>
              <div className="ind-results">
                <div><div className="ind-stat-num">+218%</div><div className="ind-stat-lbl">Avg reach growth</div></div>
                <div><div className="ind-stat-num">3.2×</div><div className="ind-stat-lbl">Ad return on spend</div></div>
                <div><div className="ind-stat-num">90 days</div><div className="ind-stat-lbl">To measurable results</div></div>
              </div>
              <a href="#contact" className="btn-primary">Get a free audit →</a>
            </div>
            <div id="ind-local" className="ind-panel">
              <div className="ind-eyebrow">Local Services</div>
              <div className="ind-title">Dominate your<br />local market.</div>
              <p className="ind-body">Contractors, salons, auto shops, cleaning companies — if you serve SoFlo, we make sure you&apos;re the first business people find and trust. Local SEO, Google Ads, reputation management, and a website that converts visitors into booked appointments.</p>
              <div className="ind-results">
                <div><div className="ind-stat-num">#1</div><div className="ind-stat-lbl">Local map pack goal</div></div>
                <div><div className="ind-stat-num">5×</div><div className="ind-stat-lbl">More Google calls</div></div>
                <div><div className="ind-stat-num">30 days</div><div className="ind-stat-lbl">To first ranking lift</div></div>
              </div>
              <a href="#contact" className="btn-primary">Get your market analysis →</a>
            </div>
            <div id="ind-ecommerce" className="ind-panel">
              <div className="ind-eyebrow">Ecommerce</div>
              <div className="ind-title">Turn browsers<br />into buyers.</div>
              <p className="ind-body">Shopify, WooCommerce, or scratch — we drive qualified traffic and optimize for conversions. Meta product ads, email sequences, and content that compounds into long-term organic sales.</p>
              <div className="ind-results">
                <div><div className="ind-stat-num">4.1×</div><div className="ind-stat-lbl">Avg ROAS on Meta</div></div>
                <div><div className="ind-stat-num">+40%</div><div className="ind-stat-lbl">Email revenue lift</div></div>
                <div><div className="ind-stat-num">60 days</div><div className="ind-stat-lbl">Full funnel live</div></div>
              </div>
              <a href="#contact" className="btn-primary">Grow my store →</a>
            </div>
            <div id="ind-professional" className="ind-panel">
              <div className="ind-eyebrow">Professional Services</div>
              <div className="ind-title">Build authority.<br />Win clients.</div>
              <p className="ind-body">Law firms, financial advisors, consultants, healthcare — we build digital authority through thought leadership content, SEO, and high-converting websites that establish trust before the first call.</p>
              <div className="ind-results">
                <div><div className="ind-stat-num">+160%</div><div className="ind-stat-lbl">Organic lead growth</div></div>
                <div><div className="ind-stat-num">2×</div><div className="ind-stat-lbl">Consultation bookings</div></div>
                <div><div className="ind-stat-num">6 mo</div><div className="ind-stat-lbl">To authority ranking</div></div>
              </div>
              <a href="#contact" className="btn-primary">Build my authority →</a>
            </div>
            <div id="ind-realestate" className="ind-panel">
              <div className="ind-eyebrow">Real Estate</div>
              <div className="ind-title">More listings.<br />More closings.</div>
              <p className="ind-body">Agents and brokerages use us to stay top-of-mind, generate seller leads, and build a personal brand that earns referrals. Social content, email drips, Google Ads, and a website that closes.</p>
              <div className="ind-results">
                <div><div className="ind-stat-num">3×</div><div className="ind-stat-lbl">Lead volume growth</div></div>
                <div><div className="ind-stat-num">+85%</div><div className="ind-stat-lbl">Email open rates</div></div>
                <div><div className="ind-stat-num">45 days</div><div className="ind-stat-lbl">To first inbound lead</div></div>
              </div>
              <a href="#contact" className="btn-primary">Grow my brand →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" style={{background:'var(--bg)'}} className="dot-bg">
        <div className="wrap">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{marginBottom:'14px'}}>How we work</div>
            <h2>Simple process.<br /><em>Real</em> results.</h2>
            <p className="section-sub">No onboarding black holes. From first call to first deliverable in two weeks or less — guaranteed.</p>
          </div>
          <div className="process-grid fade-up">
            {[
              ['01','Free audit','We analyze your website, social, ads, and SEO — and show you exactly where the gaps are and what we\'d fix first.','Day 1'],
              ['02','Strategy call','A focused 30-minute call to align on goals, timelines, and the right services for where you are now.','Day 2–3'],
              ['03','We build','Our team gets to work immediately. First content, site mockup, or campaign draft delivered within two weeks — guaranteed.','Week 1–2'],
              ['04','We optimize','Every month we review performance and push harder on what\'s driving results. No set-it-and-forget-it, ever.','Ongoing'],
            ].map(([num,title,desc,time])=>(
              <div key={num} className="process-step">
                <div className="step-num">{num}</div>
                <div className="step-title">{title}</div>
                <p className="step-desc">{desc}</p>
                <span className="step-time">{time}</span>
              </div>
            ))}
          </div>

          {/* VS OTHER AGENCIES COMPARISON */}
          <div className="compare-strip fade-up">
            <div className="compare-col">
              <div className="compare-label them">Other agencies</div>
              <ul className="compare-list them">
                <li>6–12 month contracts</li>
                <li>Big retainers, little transparency</li>
                <li>Juniors doing the real work</li>
                <li>Cookie-cutter templates</li>
                <li>Reports with vanity metrics</li>
                <li>Slow onboarding, slower execution</li>
              </ul>
            </div>
            <div className="compare-col us">
              <div className="compare-label mine">GetClicksToday</div>
              <ul className="compare-list mine">
                <li>Month-to-month, cancel anytime</li>
                <li>Full transparency on every dollar</li>
                <li>Senior strategists on every account</li>
                <li>Custom strategy per industry</li>
                <li>Reports tied to real revenue</li>
                <li>First deliverable in 14 days</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" style={{background:'var(--bg2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{marginBottom:'14px'}}>Pricing</div>
            <h2>Pick exactly what<br />you <em>need.</em></h2>
            <p className="section-sub">Every service available individually. Bundle two or more and save automatically — no fluff packages, no paying for services you don&apos;t want.</p>
          </div>

          <div className="pricing-tabs fade-up">
            <div className="ptab active" data-price="monthly" onClick={()=>showPricing('monthly')}>Monthly services</div>
            <div className="ptab" data-price="projects" onClick={()=>showPricing('projects')}>One-time projects</div>
            <div className="ptab" data-price="bundles" onClick={()=>showPricing('bundles')}>Bundle &amp; save</div>
          </div>

          <div className="price-panel active" id="price-monthly">
            <div className="svc-price-grid fade-up">
              {[
                ['Social Media Management','12+ posts/mo · strategy · captions · scheduling · community management · reporting','$500'],
                ['Email Marketing','2–4 campaigns/mo · automation · segmentation · A/B testing · list growth','$500'],
                ['SEO & Local Search','Technical SEO · keyword research · local citations · backlinks · monthly tracking','$500'],
                ['Paid Ads Management','Meta or Google · setup · weekly optimization · conversion tracking (ad spend separate)','$500'],
                ['GBP Management','Weekly posts · photos · Q&A · category optimization · review replies','$500'],
                ['Reputation & Review Management','Multi-platform monitoring · response management · review growth strategy','$500'],
                ['Blog Content Marketing','4 SEO-optimized posts/mo · keyword targeting · internal linking · formatting','$600'],
              ].map(([name,includes,price])=>(
                <div key={name} className="svc-price-row">
                  <div>
                    <div className="svc-price-name">{name}</div>
                    <div className="svc-price-includes">{includes}</div>
                  </div>
                  <div className="svc-price-val">{price}<span className="svc-price-sub">/mo</span></div>
                </div>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'8px'}}>
              <a href="#contact" className="btn-primary">Start with a free audit →</a>
              <p style={{fontSize:'12px',color:'var(--muted)',marginTop:'12px'}}>Month-to-month · Cancel anytime · No setup fees</p>
            </div>
          </div>

          <div className="price-panel" id="price-projects">
            <div className="proj-grid fade-up">
              {[
                ['Website','Landing Page','$1,500','One high-converting page. Perfect for a campaign, product launch, or service offering. Designed, built, and deployed.',['Custom design + mobile-first build','Contact form + CTA optimization','Basic SEO setup','30-day post-launch support'],false],
                ['Website · Most popular','Business Site','$2,000–$2,500','A complete business website — up to 6 pages, built to rank on Google and convert visitors into leads or sales.',['Up to 6 custom pages','Full SEO setup + sitemap','Contact form + Calendly embed','Google Analytics setup','30-day post-launch support'],true],
                ['Website','Ecommerce Store','$3,000+','A full online store built to sell. Product pages, checkout flow, payment processing, and a design that builds trust at every step.',['Shopify or custom build','Product catalog setup','Stripe / payment integration','Email capture + abandoned cart','Custom scoped per project'],false],
              ].map(([label,name,price,desc,items,featured])=>(
                <div key={name} className="proj-card" style={featured?{borderTop:'2px solid var(--pink)'}:{}}>
                  <div className="proj-label">{label}</div>
                  <div className="proj-name">{name}</div>
                  <div className="proj-price">{price}</div>
                  <p className="proj-desc">{desc}</p>
                  <ul className="proj-list">{items.map(i=><li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="proj-grid fade-up" style={{marginTop:'1px'}}>
              {[
                ['Brand','Brand Strategy','$1,200–$1,800','Positioning, messaging framework, and brand voice guidelines. The foundation everything else is built on.',['Discovery + competitive analysis','Positioning statement','Messaging hierarchy doc','Brand voice guidelines']],
                ['Brand','Full Brand Identity','$2,000–$2,500','Everything in Brand Strategy plus visual identity — logo direction, color palette, typography, and a brand standards guide.',['Everything in Brand Strategy','Logo concepts (3 directions)','Color + typography system','Brand standards PDF']],
                ['Custom','Not sure? Let\'s talk.','Custom','Have a project that doesn\'t fit a box? We scope custom engagements for campaigns, launches, audits, and more.',['Campaign strategy + execution','Content audits','Ad account audits','SEO audits + roadmaps']],
              ].map(([label,name,price,desc,items])=>(
                <div key={name} className="proj-card">
                  <div className="proj-label">{label}</div>
                  <div className="proj-name">{name}</div>
                  <div className="proj-price">{price}</div>
                  <p className="proj-desc">{desc}</p>
                  <ul className="proj-list">{items.map(i=><li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <div style={{textAlign:'center',marginTop:'24px'}}>
              <a href="#contact" className="btn-primary">Get a custom quote →</a>
              <p style={{fontSize:'12px',color:'var(--muted)',marginTop:'12px'}}>All projects include a free strategy call before any commitment</p>
            </div>
          </div>

          <div className="price-panel" id="price-bundles">
            <p style={{fontSize:'14px',color:'var(--muted)',fontWeight:300,marginBottom:'28px',lineHeight:1.7}}>Bundle any two or more monthly services and save automatically. All bundles are month-to-month with no contracts.</p>
            {[
              ['2 services · 10% off','Growth Starter','You save $100/mo',['Social Media $500','Email Marketing $500'],'$900','$1,000/mo',false],
              ['2 services · 10% off','Visibility Pack','You save $100/mo',['Social Media $500','SEO & Local Search $500'],'$900','$1,000/mo',false],
              ['3 services · 15% off · Most popular','Full Content Engine','You save $225/mo',['Social Media $500','Email Marketing $500','Blog Content $600'],'$1,275','$1,600/mo',true],
              ['4 services · 15% off','Market Dominator','You save $300/mo',['Social Media $500','Email Marketing $500','SEO $500','Blog Content $600'],'$1,700','$2,100/mo',false],
            ].map(([tier,name,save,services,price,was,featured])=>(
              <div key={name} className="bundle-block fade-up" style={featured?{borderColor:'rgba(255,45,120,0.4)'}:{}}>
                <div className="bundle-top">
                  <div>
                    <div style={{fontSize:'10px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:featured?'var(--pink)':'var(--muted)',marginBottom:'8px'}}>{tier}</div>
                    <div className="bundle-name">{name}</div>
                  </div>
                  <div className="bundle-save">{save}</div>
                </div>
                <div className="bundle-services">{services.map(s=><span key={s} className="bundle-tag">{s}</span>)}</div>
                <div className="bundle-price-row">
                  <div className="bundle-price">{price}<span style={{fontSize:'16px',fontWeight:400,fontFamily:'var(--font-body)'}}>/mo</span></div>
                  <div className="bundle-was">{was}</div>
                  <div className="bundle-per">· cancel anytime</div>
                </div>
                <a href="#contact" className="bundle-cta">Get started →</a>
              </div>
            ))}
            <p style={{fontSize:'13px',color:'var(--muted)',textAlign:'center',marginTop:'16px',fontWeight:300}}>Want a custom bundle? <a href="#contact" style={{color:'var(--pink)',textDecoration:'none'}}>Tell us what you need</a> and we&apos;ll build a package around your goals.</p>
          </div>

          <div className="guarantee-strip fade-up">
            <div className="guarantee-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="guarantee-text">
              <strong>Zero-risk guarantee</strong>
              <span>No contracts. No setup fees. Cancel any service anytime with 30 days notice. If we don&apos;t deliver your first content within 14 days of onboarding, your first month is free.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" style={{background:'var(--bg)'}}>
        <div className="wrap">
          <div className="section-head fade-up">
            <div className="eyebrow" style={{marginBottom:'14px'}}>Results</div>
            <h2>What happens when<br />we <em>show up.</em></h2>
            <p className="section-sub">Real businesses. Real outcomes. We let the results do the talking.</p>
          </div>
          <div className="testi-grid fade-up">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-quote">&ldquo;We were posting randomly and getting nothing. Within a month we had a real strategy — and our phone started ringing. Every post now has a <em>purpose.</em>&rdquo;</div>
              <div className="testi-author">Restaurant owner · South Florida</div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-quote">&ldquo;Inbound calls <em>tripled</em> in two months. We had to bring on extra staff to keep up with the new business. Best investment we&apos;ve made.&rdquo;</div>
              <div className="testi-author">Local service business owner · South Florida</div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <div className="testi-quote">&ldquo;First sale came in within 48 hours of the campaign going live. The ROI has been <em>insane</em> — I wish we&apos;d started sooner.&rdquo;</div>
              <div className="testi-author">Ecommerce founder · South Florida</div>
            </div>
          </div>
          <div className="testi-featured fade-up">
            <div>
              <div className="testi-stars">★★★★★</div>
              <div className="testi-featured-quote">&ldquo;We&apos;d tried two other agencies before. Both overpromised and underdelivered. GetClicksToday actually showed us <em>what they were doing</em> and why — and then the results came. I refer every business owner I know.&rdquo;</div>
              <div className="testi-author" style={{marginTop:'20px',fontSize:'12px',color:'var(--muted)'}}>Professional services client · South Florida</div>
            </div>
            <div style={{flexShrink:0}}>
              <a href="#contact" className="btn-primary">Get results like this →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{background:'var(--bg2)',borderTop:'1px solid var(--border)'}}>
        <div className="wrap">
          <div className="contact-grid fade-up">
            <div className="contact-left">
              <div className="eyebrow" style={{marginBottom:'18px'}}>Let&apos;s talk</div>
              <h2>Ready to <em>grow?</em></h2>
              <p>Start with a free 30-minute audit. We&apos;ll look at your current setup and tell you exactly what we&apos;d do first — no charge, no pressure, no pitch.</p>
              <div className="contact-trust">
                {['Free audit — no credit card required','Response within 24 hours','No contracts, cancel anytime','First deliverable in 14 days'].map(t=>(
                  <div key={t} className="trust-row"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>{t}</div>
                ))}
              </div>
              <div className="contact-row"><strong>Location</strong><span>Fort Lauderdale, FL</span></div>
              <div className="contact-row"><strong>Serves</strong><span>SoFlo &amp; nationwide</span></div>
              <div className="contact-row"><strong>Response</strong><span>Within 24 hours</span></div>
            </div>
            <div>
              <form action="https://formspree.io/f/mgopyddw" method="POST">
                <input type="hidden" name="_next" value="https://getclickstoday.com/thank-you" />
                <div className="form-row-2">
                  <div className="form-group"><label className="form-label">First name</label><input className="form-input" type="text" name="first_name" placeholder="Ryan" /></div>
                  <div className="form-group"><label className="form-label">Last name</label><input className="form-input" type="text" name="last_name" placeholder="Smith" /></div>
                </div>
                <div className="form-group"><label className="form-label">Business name</label><input className="form-input" type="text" name="business" placeholder="Your business" /></div>
                <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" name="email" placeholder="you@yourbusiness.com" required /></div>
                <div className="form-group"><label className="form-label">Phone (optional)</label><input className="form-input" type="tel" name="phone" placeholder="(954) 555-0100" /></div>
                <div className="form-group">
                  <label className="form-label">Industry</label>
                  <select className="form-select" name="industry">
                    <option value="">Select your industry...</option>
                    {['Med Spa / Aesthetics','Dental / Cosmetic Dentistry','Restaurant / Hospitality','Local Services','Ecommerce','Professional Services','Real Estate','Other'].map(o=><option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">What do you need most?</label>
                  <select className="form-select" name="service">
                    <option value="">Select a service or bundle...</option>
                    <option>Social Media Management — $500/mo</option>
                    <option>Email Marketing — $500/mo</option>
                    <option>SEO &amp; Local Search — $500/mo</option>
                    <option>Paid Ads Management — $500/mo</option>
                    <option>GBP Management — $500/mo</option>
                    <option>Reputation &amp; Review Management — $500/mo</option>
                    <option>Blog Content Marketing — $600/mo</option>
                    <option>Growth Starter Bundle — $900/mo</option>
                    <option>Full Content Engine Bundle — $1,275/mo</option>
                    <option>Market Dominator Bundle — $1,700/mo</option>
                    <option>Website build (one-time)</option>
                    <option>Not sure — just want the free audit</option>
                  </select>
                </div>
                <div className="form-group"><label className="form-label">What does success look like for you?</label><textarea className="form-textarea" name="message" placeholder="Where are you now, and what would growth look like in 90 days?" /></div>
                <button type="submit" className="form-submit">Send message — it&apos;s free →</button>
                <p className="form-note">No spam. No sales pressure. Just a real conversation about your business.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a href="#hero" className="footer-logo">Get<span>Clicks</span>Today</a>
        <ul className="footer-nav">
          <li><a href="#services">Services</a></li>
          <li><a href="#bundle-highlight">Bundles</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <span className="footer-copy">© 2025 GetClicksToday · Fort Lauderdale, FL</span>
      </footer>
    </>
  )
}
