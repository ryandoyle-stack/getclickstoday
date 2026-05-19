import IndustryPage from '../../components/IndustryPage'

export const metadata = {
  title: 'Med Spa Marketing — South Florida | GetClicksToday',
  description: 'Marketing for SoFlo med spas and aesthetic practices. Fill your books with high-ticket consultations using Meta ads, SEO, social, and reputation management.',
}

export default function Page() {
  return (
    <IndustryPage
      industry="Med Spas & Aesthetics"
      title="Fill your books."
      tagline="Book high-ticket treatments."
      ctaLabel="Fill my calendar →"
      heroSub="SoFlo med spas are in one of the most competitive aesthetic markets in the country. We build the marketing systems that turn Instagram scrollers into booked consultations — high-converting content, targeted Meta ads, and reputation that builds trust fast."
      stats={[
        {num:'5×',label:'Consultation booking growth'},
        {num:'3.8×',label:'Ad return on spend'},
        {num:'30 days',label:'To first booked leads'},
      ]}
      challenges={[
        {title:'Competition is brutal',desc:'Every city block in SoFlo has another med spa. Standing out online requires more than a nice website — it takes a consistent, strategic presence.'},
        {title:'High-ticket = long trust cycle',desc:'Botox and filler clients don\'t book after one ad. They stalk your Instagram, read your reviews, and check your before/afters. Your funnel has to do that work.'},
        {title:'Visual content is everything',desc:'Aesthetics is a visual business. Low-effort content kills conversions. You need polished, on-brand imagery and copy that speaks to your ideal client.'},
        {title:'Reviews drive decisions',desc:'4.8 stars wins. 4.2 loses the booking to someone else. Your reputation online is your most powerful sales tool and most overlooked one.'},
      ]}
      services={[
        {href:'/services/social-media-management',title:'Social Media Management',price:'$500/mo',desc:'12+ custom posts per month — before/afters, offers, and aesthetic content that builds your following and drives DMs.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',price:'$500/mo + ad spend',desc:'Meta campaigns targeting SoFlo women aged 28–55 interested in aesthetics. Built to book consultations, not just get clicks.'},
        {href:'/services/reputation-management',title:'Reputation Management',price:'$500/mo',desc:'Grow your 5-star reviews, respond to every review professionally, and build the trust that closes high-ticket clients.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',price:'$500/mo',desc:'Rank for "botox near me", "lip filler Fort Lauderdale", and every high-intent local search in your market.'},
      ]}
      process={[
        {title:'Audit your current presence',desc:'Deep dive into your social, ads, GBP, and reviews. Find the gaps costing you bookings before we build anything new.'},
        {title:'Build the content foundation',desc:'Develop your visual brand voice, content strategy, and posting cadence — content that attracts your ideal aesthetic client.'},
        {title:'Launch paid acquisition',desc:'Meta ads targeting your ideal demographic with before/after creative, special offers, and consultation booking flows.'},
        {title:'Optimize and scale',desc:'Weekly ad performance reviews, monthly strategy calls, and continuous content iteration based on what books appointments.'},
      ]}
      faqs={[
        {q:'How fast can I see results?',a:'Paid ads typically generate inquiry volume within the first 2–4 weeks. Organic channels (social, SEO) build over 60–90 days. Most clients see a meaningful uptick in bookings within 30 days of launch.'},
        {q:'Do you work with med spas that do Botox, filler, lasers, and body contouring?',a:'Yes — we work across the full aesthetic service menu. We tailor messaging and targeting to whatever drives your highest-margin bookings.'},
        {q:'Can you help me attract higher-ticket clients and not just discount seekers?',a:'Yes. This is one of our core strategies. We focus creative and targeting on outcome-driven messaging (results, trust, expertise) rather than price-first offers.'},
        {q:'Do you need to be on-site to get content?',a:'No — we work with content you provide (photos, videos from your phone or photographer) plus stock for non-treatment posts. We can also partner with local photographers if needed.'},
        {q:'What if my current reviews aren\'t great?',a:'We build a review-ask system to generate a steady flow of new 5-stars while professionally responding to existing negatives to reframe the narrative.'},
        {q:'How do you handle before/after content compliantly?',a:'We follow FTC and platform guidelines for before/after content — proper disclaimers, avoiding misleading claims. Staying compliant is part of our process.'},
      ]}
    />
  )
}
