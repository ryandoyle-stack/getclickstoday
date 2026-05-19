import IndustryPage from '../../components/IndustryPage'

export const metadata = {
  title: 'Local Services Marketing — South Florida | GetClicksToday',
  description: 'Marketing for SoFlo home services, contractors, salons, and local businesses. Dominate local search, get more calls, and grow your book of business.',
}

export default function Page() {
  return (
    <IndustryPage
      industry="Local Services"
      title="Dominate your"
      tagline="local market."
      ctaLabel="Get my market analysis →"
      heroSub="Contractors, salons, auto shops, cleaning companies — if you serve SoFlo, we make sure you're the first business people find and trust. Local SEO, Google Ads, reputation management, and content that converts visitors into booked appointments."
      stats={[
        {num:'#1',label:'Local map pack goal'},
        {num:'5×',label:'More Google calls'},
        {num:'30 days',label:'To first ranking lift'},
      ]}
      challenges={[
        {title:'You\'re invisible on Google',desc:'When someone searches "plumber near me" or "cleaning service Pembroke Pines", you\'re not showing up. Those are warm leads going straight to your competition.'},
        {title:'Word of mouth only goes so far',desc:'Referrals are great but unpredictable. Building a digital presence gives you a consistent, scalable lead source that works 24/7 without depending on who knows who.'},
        {title:'No time to manage marketing',desc:'You\'re running a business, not a marketing department. Every hour spent on social media or reviews is an hour not spent on jobs. That\'s what we\'re here for.'},
        {title:'Cheap competition undercuts you',desc:'Competing on price is a losing game. Building a strong reputation and visible brand makes price less of a factor — clients pay more for the name they trust.'},
      ]}
      services={[
        {href:'/services/seo-local-search',title:'SEO & Local Search',price:'$500/mo',desc:'Rank in the Google map pack and local organic results for every service and neighborhood you cover. This is your highest-ROI long-term channel.'},
        {href:'/services/gbp-management',title:'GBP Management',price:'$500/mo',desc:'Keep your Google Business Profile active, optimized, and generating calls with weekly posts, photos, and Q&A management.'},
        {href:'/services/reputation-management',title:'Reputation Management',price:'$500/mo',desc:'Build your 5-star reputation systematically, respond to every review, and make sure you look like the obvious choice when customers are comparing options.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',price:'$500/mo + ad spend',desc:'Google Local Services Ads and Search campaigns that put you in front of customers searching for exactly what you offer, right now.'},
      ]}
      process={[
        {title:'Local market audit',desc:'Analyze your local search landscape — who\'s ranking, what keywords matter most, where you\'re invisible. This becomes your roadmap.'},
        {title:'GBP and citation cleanup',desc:'Fix and optimize your Google Business Profile, audit citations across 30+ directories, and build the consistent NAP data Google rewards.'},
        {title:'Review growth system',desc:'Deploy a simple review-ask process your team can execute after every job. Consistent review velocity is the #1 local ranking signal.'},
        {title:'Paid leads while SEO builds',desc:'Google Ads and Local Services Ads generate calls immediately while your organic rankings build over 60–90 days.'},
      ]}
      faqs={[
        {q:'What types of local service businesses do you work with?',a:'Contractors (plumbers, electricians, HVAC, roofers), cleaning services, landscaping, pest control, salons, auto shops, pet services, and more. If you serve SoFlo, we can help.'},
        {q:'How does Local SEO actually work?',a:'We optimize your Google Business Profile, build consistent citations across the web, generate review velocity, and create location-specific content — all signals Google uses to rank you in the local map pack.'},
        {q:'How fast will I see more calls from Google?',a:'GBP optimization and quick-win fixes can show ranking movement in 30 days. Meaningful call volume from SEO typically builds over 60–90 days. Google Ads can drive calls in week one.'},
        {q:'Do I need to cover multiple service areas?',a:'Yes, we build your local presence for every zip code and neighborhood you serve — not just your home base address.'},
        {q:'Can you help me compete with the big franchise companies?',a:'Absolutely. Local independent businesses win on hyper-local relevance, reviews, and community presence — all things we build systematically.'},
        {q:'What if I\'m seasonal?',a:'We adjust campaign spend and strategy around your seasonality. Content and reputation work year-round; ad spend scales up during your peak season.'},
      ]}
    />
  )
}
