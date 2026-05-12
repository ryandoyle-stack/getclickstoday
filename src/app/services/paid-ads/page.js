import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Paid Ads Management — Meta, Google, TikTok | GetClicksToday',
  description: 'Expert Meta, Google, and TikTok ads management for South Florida. Full transparency, weekly optimization, conversion tracking. $500/mo + ad spend.',
  keywords: 'meta ads management south florida, google ads agency fort lauderdale, paid ads soflo, facebook ads florida',
}

export default function Page() {
  return (
    <ServicePage
      title="Paid Ads"
      tagline="that actually make money."
      price="$500"
      priceNote="Management fee per platform · Ad spend billed separately"
      heroSub="Meta, Google, and TikTok ads run by people who treat your budget like their own. Data-first targeting, creative that stops the scroll, weekly optimization, and full transparency on every dollar spent."
      includes={[
        'Full ad account setup, audit, or rebuild',
        'Conversion tracking with Meta Pixel / GA4 / Google Tag Manager',
        'Audience research and custom targeting strategy',
        'Ad copy written to stop the scroll and drive clicks',
        'Creative direction for static ads, carousel, and video',
        'Weekly bid adjustments and budget reallocation',
        'A/B testing on headlines, creative, and audiences',
        'Weekly performance reports and monthly strategy calls',
      ]}
      forYou={[
        {title:'Ecommerce ready to scale',desc:'You have a working product and want to pour fuel on the fire with Meta ads and retargeting.'},
        {title:'Local services needing leads',desc:'Contractors, med spas, dentists — anyone who needs qualified phone calls and form fills.'},
        {title:'Businesses with ad budget',desc:'Minimum $1,500/mo ad spend recommended to give campaigns enough data to optimize.'},
        {title:'Growth at any cost',desc:'You want to know exactly what a customer costs and how to scale that predictably.'},
      ]}
      process={[
        {title:'Audit & strategy',desc:'Review existing ad accounts, identify waste, and build a tracking + campaign architecture that actually works.'},
        {title:'Build & launch',desc:'Create campaigns, audiences, ad sets, and creative. Launch with proper conversion tracking from day one.'},
        {title:'Weekly optimization',desc:'Monitor performance daily, pause underperformers, scale winners, and test new creative every week.'},
        {title:'Scale what works',desc:'Once we find winning ads, we systematically increase budget and expand audiences to scale profitably.'},
      ]}
      faqs={[
        {q:'What should my minimum ad budget be?',a:'We recommend a minimum of $1,500/mo in ad spend for Meta or Google to give campaigns enough data to optimize properly. Below that, you&apos;re often learning more than earning.'},
        {q:'Is the $500 on top of ad spend or included?',a:'On top. Our $500 is the management fee. Your ad spend goes directly to Meta or Google, billed to your own card. We never touch or mark up ad spend.'},
        {q:'Can you run ads on multiple platforms?',a:'Yes. Each platform is its own $500/mo management fee because each requires separate work. Most clients start with one platform and expand once they see results.'},
        {q:'How fast will I see results?',a:'Properly set up ads typically start generating leads or sales within 1-2 weeks. Meaningful optimization and consistent returns usually show up by month 2.'},
        {q:'Who owns the ad accounts?',a:'You do. Always. We set up and manage accounts but everything is in your name on your business manager. If we ever part ways, you keep all the data and assets.'},
        {q:'What if my ads aren&apos;t working?',a:'First month we&apos;re heavily in learning mode. If by month 2 campaigns aren&apos;t performing, we pause and rebuild. If after 90 days of honest effort we can&apos;t deliver, you walk away — no hard feelings, no contracts holding you in.'},
      ]}
      crossSell={[
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Organic social builds the audience your ads retarget. $500/mo.'},
        {href:'/services/email-marketing',title:'Email Marketing',desc:'Convert ad clicks into repeat customers with email follow-up. $500/mo.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',desc:'Long-term organic traffic to complement paid. $500/mo.'},
      ]}
    />
  )
}
