import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Reputation & Review Management | GetClicksToday',
  description: 'Multi-platform review monitoring, professional response management, and review generation strategy. Protect and grow your online reputation for $500/mo.',
}

export default function Page() {
  return (
    <ServicePage
      title="Reputation Management"
      tagline="that turns reviews into revenue."
      price="$500"
      priceNote="Full reputation management across Google, Yelp, Facebook, and more"
      heroSub="85% of consumers trust online reviews as much as personal recommendations. We make sure that when someone looks you up, what they find makes them pick up the phone — not click to your competitor."
      includes={[
        'Review monitoring across Google, Yelp, Facebook, TripAdvisor, and Healthgrades',
        'Professional review responses within 24 hours — every rating, every platform',
        'Review generation playbook and templated ask sequences (email + SMS)',
        'Negative review triage and escalation strategy',
        'Monthly reputation score report with competitor benchmarking',
        'Brand mention monitoring (news, social, forums)',
        'Review removal requests for policy-violating content',
        'Quarterly reputation strategy call',
      ]}
      forYou={[
        {title:'Med spas and dental practices',desc:'Healthcare consumers read more reviews than almost any other category. Your star rating is your #1 conversion tool.'},
        {title:'Restaurants and hospitality',desc:'A single viral negative review can tank a slow week. Proactive reputation management is table stakes.'},
        {title:'Service businesses',desc:'Contractors, cleaners, home services — customers Google you before opening the door. Make sure they like what they see.'},
        {title:'Any business with angry customers',desc:'You can\'t delete bad reviews, but you can outrun them. We build the systems to generate a steady flow of 5-star reviews.'},
      ]}
      process={[
        {title:'Audit your current reputation',desc:'Pull your review data across all platforms, calculate your baseline score, and identify the gaps — both the bad reviews that need addressing and the happy customers who never left one.'},
        {title:'Respond to everything',desc:'We draft and post professional responses to every existing unanswered review. Going forward, every new review gets a response within 24 hours.'},
        {title:'Build your review generation engine',desc:'We create a custom ask sequence — email, SMS, or both — so that every satisfied customer gets nudged to leave a review at the right moment.'},
        {title:'Monitor, report, and adjust',desc:'Monthly reports on your reputation score, new review volume, sentiment trends, and competitor comparisons. Quarterly calls to adjust strategy.'},
      ]}
      faqs={[
        {q:'Can you remove negative reviews?',a:'In most cases, no — and anyone who tells you otherwise is lying. What we can do: flag reviews that violate platform policies for removal, bury them with fresh positives, and respond professionally so the negative review actually builds trust with readers.'},
        {q:'How fast can I improve my star rating?',a:'Most clients see a measurable improvement in their average rating within 60 days once the review generation system is running. The speed depends on your customer volume — more customers = more review opportunities.'},
        {q:'What platforms do you monitor?',a:'Google, Yelp, Facebook, TripAdvisor, Healthgrades, Zocdoc, and any industry-specific platforms relevant to your business. We set up alerts so nothing slips through.'},
        {q:'Do I have to do anything to get reviews?',a:'Your front-line staff plays a role — the best moment to ask for a review is right after a great experience. We build the script and the automated follow-up. You just need your team to trigger the ask.'},
        {q:'What\'s the difference between this and GBP Management?',a:'GBP Management focuses specifically on your Google Business Profile — posts, photos, keywords, and map rankings. Reputation Management goes deeper on reviews and brand monitoring across all platforms. They stack well together.'},
        {q:'What if my industry has strict rules about reviews?',a:'Healthcare, legal, and financial industries have specific compliance considerations. We know them and build your strategy accordingly — no HIPAA risks, no bar association issues.'},
      ]}
      crossSell={[
        {href:'/services/gbp-management',title:'GBP Management',desc:'Pair reputation management with an optimized Google Business Profile. $500/mo.'},
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Build a brand people love before they ever read a review. $500/mo.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',desc:'More visibility means more reviews. Full local SEO for $500/mo.'},
      ]}
    />
  )
}
