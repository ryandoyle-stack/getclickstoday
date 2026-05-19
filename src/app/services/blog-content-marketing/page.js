import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Blog Content Marketing — SEO Blog Posts | GetClicksToday',
  description: '4 SEO-optimized blog posts per month with keyword targeting, internal linking, and topic strategy. Build long-term organic traffic for $600/mo.',
}

export default function Page() {
  return (
    <ServicePage
      title="Blog Content Marketing"
      tagline="that ranks and converts."
      price="$600"
      priceNote="4 SEO-optimized blog posts per month · All writing included"
      heroSub="A well-executed blog is the only marketing channel that compounds. Every post we write is built to rank for a specific search, pull in qualified traffic, and convert readers into leads — month after month, for years."
      includes={[
        'Keyword research and monthly content calendar',
        '4 long-form blog posts per month (800–1,500 words each)',
        'On-page SEO optimization — title tags, meta descriptions, headers, schema',
        'Internal linking strategy to boost your existing pages',
        'Custom written in your brand voice — no AI slop',
        'Featured image direction and alt text optimization',
        'Published directly to your site or delivered as formatted drafts',
        'Monthly performance report — rankings, traffic, and top performers',
      ]}
      forYou={[
        {title:'Businesses playing the long game',desc:'You understand that content compounds and you want to own search traffic, not just rent it from ads.'},
        {title:'Local service businesses',desc:'"Best med spa in Fort Lauderdale" and "how to whiten teeth at home" are both buyer-intent searches. Blog content captures both.'},
        {title:'Businesses with complex services',desc:'If your customers need education before they buy, a content strategy shortens your sales cycle dramatically.'},
        {title:'Anyone paying too much for leads',desc:'Organic traffic has a near-zero marginal cost once it\'s ranking. Blog content is how you reduce CPL over time.'},
      ]}
      process={[
        {title:'Keyword research and strategy',desc:'We find the searches your ideal customers are making at every stage of the funnel — awareness, consideration, and decision — and build a 3-month content roadmap around them.'},
        {title:'Writing and optimization',desc:'Every post is written by a human, optimized for a target keyword, and structured to keep readers engaged and moving toward a CTA. No keyword stuffing, no fluff.'},
        {title:'Publishing and internal linking',desc:'We publish directly to your CMS or hand you production-ready drafts. Every post links strategically to your service pages to push SEO authority where it counts.'},
        {title:'Track, learn, and compound',desc:'Monthly reporting on rankings, impressions, and traffic. We double down on topics that gain traction and refine what isn\'t working.'},
      ]}
      faqs={[
        {q:'How long until blog posts start ranking?',a:'New content typically takes 3–6 months to rank on Google. Lower-competition keywords (local, long-tail) can move faster. This is a long game — but every post is an asset that keeps working for you indefinitely.'},
        {q:'Who actually writes the posts?',a:'We do. Real writers, real research, written in your brand voice. We don\'t feed prompts to ChatGPT and call it a day. Google is getting better at detecting AI-generated garbage, and your readers deserve better anyway.'},
        {q:'Do I need to review posts before they go live?',a:'That\'s up to you. Most clients do a quick approval pass the first 2–3 months until they trust the voice, then greenlight publishing directly. We adapt to whatever workflow you prefer.'},
        {q:'What if I already have a blog with old posts?',a:'We audit existing content in the first month. Old posts are often low-hanging fruit — a targeted update can push them from page 3 to page 1 faster than writing from scratch.'},
        {q:'Can you write for my specific industry?',a:'Yes. We research your industry before writing and all posts are reviewed for accuracy. We\'ve written for med spas, dental practices, restaurants, home services, and more.'},
        {q:'Does blogging help my local SEO too?',a:'Absolutely. Location-based posts ("best Botox in Fort Lauderdale"), FAQ content, and service explainers all help with local rankings and GBP relevance. Blog content and local SEO compound each other.'},
      ]}
      crossSell={[
        {href:'/services/seo-local-search',title:'SEO & Local Search',desc:'Blog content without technical SEO is like a great car with no gas. Full SEO for $500/mo.'},
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Repurpose every blog post into social content. $500/mo.'},
        {href:'/services/email-marketing',title:'Email Marketing',desc:'Send your best posts to your list and watch traffic compound. $500/mo.'},
      ]}
    />
  )
}
