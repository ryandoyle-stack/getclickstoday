import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Paid Ads Management — Meta, Google, TikTok | GetClicksToday',
  description: 'Meta, Google, and TikTok ads. Full transparency, weekly optimization, conversion tracking. $500/mo + ad spend.',
}

export default function Page() {
  return (
    <ServicePage
      title="Paid Ads"
      tagline="that actually make money."
      price="$500"
      priceNote="Management fee per platform · Ad spend billed separately"
      heroSub="Meta, Google, and TikTok ads run by people who treat your budget like their own. Data-first targeting, creative that stops the scroll, weekly optimization, and full transparency."
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
        {title:'Ecommerce ready to scale',desc:'You have a working product and want to pour fuel on the fire with Meta ads.'},
        {title:'Local services',desc:'Contractors, med spas, dentists — anyone who needs qualified phone calls and form fills.'},
        {title:'Businesses with budget',desc:'Minimum $1,500/mo ad spend recommended to give campaigns enough data to optimize.'},
        {title:'Growth at any cost',desc:'You want to know exactly what a customer costs and scale that predictably.'},
      ]}
      process={[
        {title:'Audit & strategy',desc:'Review existing ad accounts, identify waste, build a tracking + campaign architecture that works.'},
        {title:'Build & launch',desc:'Create campaigns, audiences, ad sets, and creative. Launch with proper conversion tracking from day one.'},
        {title:'Weekly optimization',desc:'Monitor daily, pause underperformers, scale winners, test new creative every week.'},
        {title:'Scale what works',desc:'Once we find winning ads, systematically increase budget and expand audiences to scale profitably.'},
      ]}
      faqs={[
        {q:'What should my minimum budget be?',a:'$1,500/mo minimum ad spend for Meta or Google to give campaigns enough data to optimize. Below that, you\'re learning more than earning.'},
        {q:'Is the $500 on top of ad spend?',a:'Yes. $500 is our management fee. Ad spend goes directly to Meta or Google, billed to your card. We never touch or mark up ad spend.'},
        {q:'Can you run multiple platforms?',a:'Yes. Each platform is its own $500/mo management fee. Most clients start with one platform and expand once they see results.'},
        {q:'How fast will I see results?',a:'Properly set up ads typically generate leads within 1-2 weeks. Meaningful optimization and consistent returns usually show up by month 2.'},
        {q:'Who owns the ad accounts?',a:'You do. Always. Accounts are in your name on your business manager. If we ever part ways, you keep all data and assets.'},
        {q:'What if ads aren\'t working?',a:'First month is heavy learning. By month 2, if campaigns aren\'t performing, we pause and rebuild. If after 90 days of honest effort we can\'t deliver, you walk away — no contracts.'},
      ]}
      crossSell={[
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Organic social builds the audience your ads retarget. $500/mo.'},
        {href:'/services/email-marketing',title:'Email Marketing',desc:'Convert ad clicks into repeat customers. $500/mo.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',desc:'Long-term organic traffic to complement paid. $500/mo.'},
      ]}
    />
  )
}
