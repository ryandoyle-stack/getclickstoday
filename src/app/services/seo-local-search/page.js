import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'SEO & Local Search — South Florida | GetClicksToday',
  description: 'Rank on Google for South Florida searches. Technical SEO, local citations, keyword research, backlinks. $500/mo. No contracts.',
  keywords: 'SEO south florida, local SEO fort lauderdale, seo agency soflo, google ranking south florida',
}

export default function Page() {
  return (
    <ServicePage
      title="SEO &"
      tagline="local search domination."
      price="$500"
      priceNote="Full-stack SEO for SoFlo businesses · Cancel anytime"
      heroSub="Rank where your customers are searching. We handle technical SEO, keyword research, content optimization, local citations, and backlink building — the complete SEO engine, not just one piece of it."
      includes={[
        'Full technical SEO audit and ongoing fixes',
        'Keyword research targeting high-intent local searches',
        'On-page optimization for every important page',
        'Monthly local citation building (Yelp, BBB, Apple Maps, etc.)',
        'Quality backlink outreach to authoritative sites',
        'Schema markup for Google rich results',
        'Site speed and Core Web Vitals optimization',
        'Monthly ranking reports with keyword tracking',
      ]}
      forYou={[
        {title:'Local service pros',desc:'Contractors, plumbers, med spas, dentists — any business where customers search by location.'},
        {title:'Multi-location brands',desc:'Franchises and multi-location businesses needing consistent visibility across SoFlo.'},
        {title:'Established businesses',desc:'You have a site but aren&apos;t showing up for searches you should be winning.'},
        {title:'Long-term thinkers',desc:'You understand SEO compounds and want a channel that pays off for years.'},
      ]}
      process={[
        {title:'Technical audit',desc:'Deep dive into site health, page speed, mobile performance, crawlability, and existing rankings.'},
        {title:'Keyword strategy',desc:'Research the searches your customers are actually making and map them to pages on your site.'},
        {title:'On-page execution',desc:'Optimize titles, headers, content, and metadata across every priority page for maximum relevance.'},
        {title:'Authority building',desc:'Monthly citation building and backlink outreach to signal trust to Google.'},
      ]}
      faqs={[
        {q:'How long until I see results from SEO?',a:'SEO is a long game. Most clients see ranking improvements within 2-3 months, meaningful traffic lift within 4-6 months, and the compounding payoff from month 6 onward. It&apos;s the best long-term investment in your marketing but not a quick hit.'},
        {q:'Do you guarantee rankings?',a:'No agency legitimately can. Google&apos;s algorithm has hundreds of factors we don&apos;t control. What we guarantee is executing the best SEO practices consistently — if you stick with us for 6+ months, you will see ranking improvements.'},
        {q:'Is this different from Google Ads?',a:'Yes — completely. SEO is organic traffic you don&apos;t pay for per click. Google Ads is paid advertising. They work well together but we scope them separately.'},
        {q:'Do I need to publish blog content for SEO?',a:'For competitive markets, yes. Content is how you rank for more keywords. We offer blog content marketing as a separate service ($600/mo) that pairs perfectly with SEO.'},
        {q:'What about local SEO specifically?',a:'Local SEO is a major focus. We optimize your Google Business Profile, build local citations, and target location-based keywords so you show up when someone searches "[your service] near me."'},
        {q:'Can I pause and restart?',a:'You can cancel anytime, but SEO works through consistent monthly effort. Pausing for a few months typically means you lose momentum and rankings slip. We recommend clients commit to at least 6 months for meaningful results.'},
      ]}
      crossSell={[
        {href:'/services/gbp-management',title:'GBP Management',desc:'Google Business Profile optimization amplifies local SEO. $500/mo.'},
        {href:'/services/blog-content-marketing',title:'Blog Content Marketing',desc:'Content fuels SEO with new keyword opportunities monthly. $600/mo.'},
        {href:'/services/reputation-management',title:'Reputation Management',desc:'Reviews boost local rankings and conversion. $500/mo.'},
      ]}
    />
  )
}
