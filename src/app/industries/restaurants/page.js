import IndustryPage from '../../components/IndustryPage'

export const metadata = {
  title: 'Restaurant & Hospitality Marketing — South Florida | GetClicksToday',
  description: 'Marketing for SoFlo restaurants, bars, and hospitality businesses. More reservations, more repeat guests. Social media, Google visibility, email, and ads — all handled.',
}

export default function Page() {
  return (
    <IndustryPage
      industry="Restaurants & Hospitality"
      title="More reservations."
      tagline="More repeat guests."
      ctaLabel="Fill my seats →"
      heroSub="We know SoFlo's food scene inside and out. We build content strategies that fill seats, grow followings, and turn first-time guests into regulars — Instagram content, Google visibility, email marketing, and ads, all handled."
      stats={[
        {num:'+218%',label:'Average reach growth'},
        {num:'3.2×',label:'Ad return on spend'},
        {num:'90 days',label:'To measurable results'},
      ]}
      challenges={[
        {title:'Discoverability is everything',desc:'When someone searches "restaurants in Fort Lauderdale" or "best brunch Boca Raton", you need to show up. Most restaurants are invisible on Google despite being great.'},
        {title:'Social media is a full-time job',desc:'Posting beautiful food photos consistently while running a kitchen is nearly impossible. But gaps in your posting kill momentum and follower growth.'},
        {title:'One-visit guests don\'t pay the bills',desc:'The restaurants that win build loyalty. Email lists, repeat visit incentives, and a brand people remember are what separate thriving restaurants from struggling ones.'},
        {title:'Reviews make or break you',desc:'86% of consumers read reviews before choosing a restaurant. A handful of recent bad reviews with no response can tank your reservation flow overnight.'},
      ]}
      services={[
        {href:'/services/social-media-management',title:'Social Media Management',price:'$500/mo',desc:'12+ custom posts per month — food photography direction, specials, events, and behind-the-scenes content that builds a real following.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',price:'$500/mo',desc:'Rank on Google Maps and local search for the cuisine and neighborhood searches your customers are already making.'},
        {href:'/services/email-marketing',title:'Email Marketing',price:'$500/mo',desc:'2–4 campaigns per month featuring specials, events, and loyalty offers that drive repeat visits from your existing guest base.'},
        {href:'/services/reputation-management',title:'Reputation Management',price:'$500/mo',desc:'Respond to every review, build review volume, and make sure your first impression online matches the experience you deliver.'},
      ]}
      process={[
        {title:'Brand and audience audit',desc:'Understand your vibe, target guest, and current digital presence. Map the gap between where you are and where you need to be.'},
        {title:'Content strategy and calendar',desc:'Build a 30-day content plan — visuals, captions, posting schedule — that reflects your brand and drives engagement with the right audience.'},
        {title:'Google visibility and reviews',desc:'Optimize your GBP, build citations, and deploy a review-ask system so new guests find you first and trust you immediately.'},
        {title:'Email and loyalty loop',desc:'Set up your email list, welcome flow, and monthly campaigns to turn first-timers into regulars with consistent, well-timed outreach.'},
      ]}
      faqs={[
        {q:'Do you work with all types of restaurants?',a:'Yes — casual dining, fine dining, fast-casual, bars, cafes, food trucks, catering companies, and hospitality groups. We tailor strategy to your concept and price point.'},
        {q:'Can you help promote events like happy hour, trivia nights, or private dining?',a:'Absolutely. Event promotion is one of the highest-ROI use cases for both social media and paid ads. We build event-specific content and targeting.'},
        {q:'What if I don\'t have professional food photos?',a:'We work with what you have and guide you on getting better phone shots. We can also connect you with local food photographers who work on restaurant budgets.'},
        {q:'How do email campaigns work for restaurants?',a:'We build and manage your email list, design branded campaigns, and send 2–4 per month featuring specials, events, and exclusive offers to drive repeat visits.'},
        {q:'Can you run ads to promote delivery or online ordering?',a:'Yes — we run Meta and Google campaigns specifically optimized for delivery and online order conversions, not just foot traffic.'},
        {q:'How long before we see more reservations?',a:'Paid ads move fast — 2–4 weeks to meaningful inquiry volume. SEO and social compound over 60–90 days. Email starts paying off as your list grows, typically 30–45 days in.'},
      ]}
    />
  )
}
