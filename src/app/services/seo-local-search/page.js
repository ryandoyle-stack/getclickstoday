import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'SEO & Local Search — South Florida | GetClicksToday',
  description: 'Rank on Google for SoFlo searches. Technical SEO, local citations, keyword research, backlinks. $500/mo.',
}

export default function Page() {
  return (
    <ServicePage
      title="SEO &"
      tagline="local search domination."
      price="$500"
      priceNote="Full-stack SEO for SoFlo businesses · Cancel anytime"
      heroSub="Rank where your customers are searching. Technical SEO, keyword research, content optimization, local citations, and backlink building — the complete SEO engine, not just one piece."
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
        {title:'Local service pros',desc:'Contractors, plumbers, med spas, dentists — anyone where customers search by location.'},
        {title:'Multi-location brands',desc:'Franchises and multi-location businesses needing consistent visibility.'},
        {title:'Established businesses',desc:'You have a site but aren\'t showing up for searches you should be winning.'},
        {title:'Long-term thinkers',desc:'You understand SEO compounds and want a channel that pays off for years.'},
      ]}
      process={[
        {title:'Technical audit',desc:'Deep dive into site health, page speed, mobile performance, and existing rankings.'},
        {title:'Keyword strategy',desc:'Research what your customers actually search and map to pages on your site.'},
        {title:'On-page execution',desc:'Optimize titles, headers, content, and metadata across every priority page.'},
        {title:'Authority building',desc:'Monthly citation building and backlink outreach to signal trust to Google.'},
      ]}
      faqs={[
        {q:'How long until I see results?',a:'SEO is a long game. Ranking improvements within 2-3 months, traffic lift within 4-6 months, real compounding payoff from month 6 onward.'},
        {q:'Do you guarantee rankings?',a:'No legitimate agency can. What we guarantee is executing best SEO practices consistently — stick with us 6+ months and you\'ll see improvements.'},
        {q:'Is this different from Google Ads?',a:'Yes — completely. SEO is organic traffic you don\'t pay per click. Google Ads is paid advertising. They work well together but are scoped separately.'},
        {q:'Do I need blog content for SEO?',a:'For competitive markets, yes. Content is how you rank for more keywords. We offer blog content marketing as a separate service ($600/mo) that pairs perfectly with SEO.'},
        {q:'What about local SEO specifically?',a:'Major focus. We optimize your Google Business Profile, build local citations, and target location-based keywords so you show up for "[your service] near me" searches.'},
        {q:'Can I pause and restart?',a:'You can cancel anytime, but SEO works through consistent monthly effort. Pausing typically means losing momentum and rankings slip.'},
      ]}
      crossSell={[
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Drive social signals that amplify SEO. $500/mo.'},
        {href:'/services/email-marketing',title:'Email Marketing',desc:'Convert organic traffic into repeat revenue. $500/mo.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',desc:'Capture searches you don\'t rank for yet. $500/mo + ad spend.'},
      ]}
    />
  )
}
