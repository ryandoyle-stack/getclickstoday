import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Social Media Management — South Florida | GetClicksToday',
  description: 'Done-for-you social media management for South Florida businesses. 12+ posts per month, strategy, community management, and reporting. $500/mo. No contracts.',
  keywords: 'social media management south florida, instagram management fort lauderdale, soFlo social media agency',
}

export default function Page() {
  return (
    <ServicePage
      title="Social Media"
      tagline="done for you."
      price="$500"
      priceNote="12+ custom posts per month · Cancel anytime"
      heroSub="Stop posting randomly. Our team handles strategy, content creation, scheduling, and engagement so your social grows while you focus on running your business."
      includes={[
        '12+ custom-designed posts per month across Instagram and Facebook',
        'Monthly content calendar with strategy and themes mapped out in advance',
        'Caption writing, hashtag research, and optimal posting schedule',
        'Community management — replies to comments and DMs within 24 hours',
        'Stories and Reels posted consistently to drive reach',
        'Monthly performance report with actionable insights',
        'Quarterly strategy call to refine direction based on what&apos;s working',
        'Brand voice development so every post sounds like you',
      ]}
      forYou={[
        {title:'Local businesses',desc:'Restaurants, med spas, dental offices, salons — anyone with a storefront that needs local visibility.'},
        {title:'Busy owners',desc:'You know you need to post consistently but can&apos;t find 15 hours a week to do it yourself.'},
        {title:'Growth-focused',desc:'You&apos;re ready for content that builds a real audience, not just fills the feed.'},
        {title:'Brand-conscious',desc:'You care how your business looks online and want your social to reflect the quality of your work.'},
      ]}
      process={[
        {title:'Discovery',desc:'30-min kickoff call to understand your brand, audience, and goals. We review competitors and your current presence.'},
        {title:'Strategy build',desc:'We create a 30-day content calendar with post themes, captions, and visual direction tailored to your brand.'},
        {title:'Content production',desc:'Custom graphics designed, captions written, hashtags researched, and posts scheduled.'},
        {title:'Monthly optimization',desc:'We review what performed, adjust strategy, and keep pushing on what&apos;s driving engagement.'},
      ]}
      faqs={[
        {q:'How many posts per month do I get?',a:'You get 12+ custom posts per month across Instagram and Facebook. That&apos;s roughly 3 posts per week, which is the sweet spot for local business growth without overposting.'},
        {q:'Do you create the graphics or do I need to supply them?',a:'We create everything. Custom graphics, caption writing, and hashtag strategy are all included. If you have brand photos or product shots to share, we&apos;ll use them. If not, we work with stock, quotes, and designed content until we&apos;re on-site for photography.'},
        {q:'What platforms do you manage?',a:'The base package covers Instagram and Facebook since they&apos;re the highest-ROI platforms for most South Florida businesses. We can add TikTok, LinkedIn, or X (Twitter) as custom add-ons if your audience is there.'},
        {q:'How long until I see results?',a:'Most clients see meaningful engagement lift within 30-60 days. Follower growth and real business impact — leads, bookings, foot traffic — typically show up in the 60-90 day range. Social is a compounding asset, not a quick hit.'},
        {q:'Do I have to sign a long contract?',a:'No. Everything is month-to-month. If we&apos;re not delivering value, cancel anytime with 30 days notice.'},
        {q:'Can you bundle this with other services?',a:'Yes — bundling social media with SEO or email marketing saves you 10-15%. Most clients find the best ROI in the Full Content Engine bundle at $1,275/mo.'},
      ]}
      crossSell={[
        {href:'/services/email-marketing',title:'Email Marketing',desc:'Turn followers into customers with campaigns that drive repeat business. $500/mo.'},
        {href:'/services/gbp-management',title:'GBP Management',desc:'Dominate local Google search alongside your social presence. $500/mo.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',desc:'Amplify your best organic content with targeted Meta ads. $500/mo + ad spend.'},
      ]}
    />
  )
}
