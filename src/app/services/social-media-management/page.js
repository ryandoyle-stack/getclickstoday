import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Social Media Management — South Florida | GetClicksToday',
  description: 'Done-for-you social media management. 12+ posts/month, strategy, community management. $500/mo.',
}

export default function Page() {
  return (
    <ServicePage
      title="Social Media"
      tagline="done for you."
      price="$500"
      priceNote="12+ custom posts per month · Cancel anytime"
      heroSub="Stop posting randomly. Our team handles strategy, content, scheduling, and engagement so your social grows while you focus on running your business."
      includes={[
        '12+ custom-designed posts per month across Instagram and Facebook',
        'Monthly content calendar mapped out in advance',
        'Caption writing, hashtag research, and optimal posting schedule',
        'Community management — replies to comments and DMs within 24 hours',
        'Stories and Reels posted consistently to drive reach',
        'Monthly performance report with actionable insights',
        'Quarterly strategy call to refine based on what\'s working',
        'Brand voice development so every post sounds like you',
      ]}
      forYou={[
        {title:'Local businesses',desc:'Restaurants, med spas, dental offices, salons — anyone with a storefront that needs visibility.'},
        {title:'Busy owners',desc:'You know you need to post consistently but can\'t find 15 hours a week to do it yourself.'},
        {title:'Growth-focused',desc:'You\'re ready for content that builds a real audience, not just fills the feed.'},
        {title:'Brand-conscious',desc:'You care how your business looks online and want your social to reflect the quality of your work.'},
      ]}
      process={[
        {title:'Discovery',desc:'30-min kickoff to understand your brand, audience, and goals.'},
        {title:'Strategy build',desc:'Create a 30-day content calendar with themes, captions, and visual direction.'},
        {title:'Content production',desc:'Custom graphics designed, captions written, hashtags researched, posts scheduled.'},
        {title:'Monthly optimization',desc:'Review what performed, adjust strategy, keep pushing on what\'s driving engagement.'},
      ]}
      faqs={[
        {q:'How many posts per month do I get?',a:'12+ custom posts per month across Instagram and Facebook. Roughly 3 posts per week, the sweet spot for local business growth without overposting.'},
        {q:'Do you create the graphics?',a:'Yes. Custom graphics, captions, and hashtags are all included. If you have brand photos, we\'ll use them. If not, we work with stock and designed content until we\'re on-site for photography.'},
        {q:'What platforms do you manage?',a:'Base package covers Instagram and Facebook — highest ROI for most SoFlo businesses. TikTok, LinkedIn, or X can be added as custom add-ons.'},
        {q:'How long until I see results?',a:'Engagement lift within 30-60 days. Follower growth and real business impact (leads, bookings) typically show up in the 60-90 day range.'},
        {q:'Do I have to sign a long contract?',a:'No. Everything is month-to-month. Cancel anytime with 30 days notice.'},
        {q:'Can you bundle this?',a:'Yes — bundle with SEO or email marketing to save 10-15%. The Full Content Engine bundle at $1,275/mo is the most popular.'},
      ]}
      crossSell={[
        {href:'/services/email-marketing',title:'Email Marketing',desc:'Turn followers into customers with campaigns. $500/mo.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',desc:'Rank locally while building social presence. $500/mo.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',desc:'Amplify best organic content with Meta ads. $500/mo + ad spend.'},
      ]}
    />
  )
}
