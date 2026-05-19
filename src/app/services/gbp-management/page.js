import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Google Business Profile Management | GetClicksToday',
  description: 'Weekly GBP posts, photos, Q&A, review replies, and local pack optimization. Dominate Google Maps for $500/mo.',
}

export default function Page() {
  return (
    <ServicePage
      title="Google Business Profile"
      tagline="that owns the local pack."
      price="$500"
      priceNote="Full GBP management — posts, photos, reviews, and optimization"
      heroSub="Your Google Business Profile is the most valuable piece of real estate in local search. We keep it active, optimized, and converting — so you show up first when customers in your area are ready to buy."
      includes={[
        'Full GBP audit and optimization (categories, services, attributes)',
        '4 weekly posts — offers, updates, photos, and events',
        'Photo strategy and upload cadence to stay algorithm-fresh',
        'Q&A section management — add FAQs, monitor and answer new questions',
        'Review response within 24 hours — every review, every platform',
        'Monthly ranking report for your core local keywords',
        'Citation consistency check across Yelp, Apple Maps, Bing, and 30+ directories',
        'Spam listing monitoring and competitor flag alerts',
      ]}
      forYou={[
        {title:'Brick-and-mortar businesses',desc:'Restaurants, med spas, dental practices, salons — anyone who lives and dies by local foot traffic.'},
        {title:'Service-area businesses',desc:'Plumbers, HVAC, cleaners — you need to show up in the neighborhoods you serve, not just your home base.'},
        {title:'Multi-location operators',desc:'Managing GBP at scale is painful. We handle every location with the same standard of care.'},
        {title:'Businesses getting zero calls from Google',desc:'You exist on Google but you\'re invisible. We fix that fast.'},
      ]}
      process={[
        {title:'Audit & fix the foundation',desc:'Deep dive into your current profile — incomplete fields, wrong categories, missing services. Fix everything before we build on top.'},
        {title:'Optimize for your keywords',desc:'Research the searches your best customers actually use and weave them into every part of your profile the right way.'},
        {title:'Build the posting rhythm',desc:'Weekly posts signal to Google that your business is active and relevant. We write, design, and schedule every post.'},
        {title:'Review and reputation loop',desc:'Respond to every review, flag problems, and build a simple process to generate a steady stream of new 5-star reviews.'},
      ]}
      faqs={[
        {q:'Why does GBP management even matter?',a:'46% of all Google searches have local intent. The local pack (the 3 map results) gets more clicks than organic listings for those searches. Showing up there — and looking great when you do — is the fastest ROI in local marketing.'},
        {q:'Will this help me rank higher on Google Maps?',a:'Yes. Activity signals (posts, photos, Q&A responses) and profile completeness are major ranking factors. Most clients see measurable movement in map rankings within 60–90 days.'},
        {q:'Do you manage reviews on Yelp and other platforms too?',a:'Review responses are included for Google, Yelp, and Facebook. Citation auditing covers 30+ directories. Deep platform management beyond those three is available as an add-on.'},
        {q:'What if I already have a bunch of negative reviews?',a:'We can\'t delete them, but we can bury them with fresh positive ones and craft professional responses that reframe the narrative for anyone reading.'},
        {q:'How do I get more reviews from my customers?',a:'We build a simple review-ask workflow you can hand to your front desk or automate via email/SMS. Consistent ask-rate is the #1 driver of review volume.'},
        {q:'Do you need access to my Google account?',a:'We need manager access to your Google Business Profile — not your full Google account. We\'ll walk you through the 2-minute invite process.'},
      ]}
      crossSell={[
        {href:'/services/seo-local-search',title:'SEO & Local Search',desc:'GBP + on-page SEO is the full local search stack. $500/mo.'},
        {href:'/services/reputation-management',title:'Reputation Management',desc:'Go deeper on review generation and brand monitoring. $500/mo.'},
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Stay visible everywhere your customers are looking. $500/mo.'},
      ]}
    />
  )
}
