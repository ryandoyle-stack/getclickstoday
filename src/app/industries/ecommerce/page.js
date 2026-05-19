import IndustryPage from '../../components/IndustryPage'

export const metadata = {
  title: 'Ecommerce Marketing — South Florida | GetClicksToday',
  description: 'Marketing for SoFlo ecommerce brands. Turn browsers into buyers with Meta ads, email marketing, SEO, and content that compounds into long-term organic sales.',
}

export default function Page() {
  return (
    <IndustryPage
      industry="Ecommerce"
      title="Turn browsers"
      tagline="into buyers."
      ctaLabel="Grow my store →"
      heroSub="Shopify, WooCommerce, or scratch — we drive qualified traffic and optimize for conversions. Meta product ads, email sequences, and content that compounds into long-term organic sales. Built for brands that want real revenue, not vanity metrics."
      stats={[
        {num:'4.1×',label:'Average ROAS on Meta'},
        {num:'+40%',label:'Email revenue lift'},
        {num:'60 days',label:'Full funnel live'},
      ]}
      challenges={[
        {title:'Ad costs keep rising',desc:'Meta and Google CPMs are up. Brands that don\'t have email, SEO, and organic channels building in parallel are at the mercy of paid performance every single month.'},
        {title:'Most traffic doesn\'t convert',desc:'The average ecommerce store converts at 1–3%. That means 97%+ of your paid traffic leaves without buying. Fixing the funnel is as important as driving traffic.'},
        {title:'Email is underutilized',desc:'Email generates $42 for every $1 spent — but most stores have a broken welcome flow, no abandon cart, and no repeat purchase sequences. That\'s pure revenue on the table.'},
        {title:'No brand, just products',desc:'Stores that compete on product alone compete on price. Brands that build a distinct identity and loyal following win long-term — even when competitors copy the product.'},
      ]}
      services={[
        {href:'/services/paid-ads',title:'Paid Ads Management',price:'$500/mo + ad spend',desc:'Meta Shopping, Dynamic Product Ads, and Advantage+ campaigns built to hit 3–5× ROAS. Weekly optimization, transparent reporting.'},
        {href:'/services/email-marketing',title:'Email Marketing',price:'$500/mo',desc:'Full email stack — welcome series, abandon cart, post-purchase, and win-back flows — plus 2–4 campaign sends per month to drive repeat revenue.'},
        {href:'/services/seo-local-search',title:'SEO & Content',price:'$500/mo',desc:'Product page optimization, category SEO, and blog content that drives organic traffic and reduces your dependence on paid channels over time.'},
        {href:'/services/social-media-management',title:'Social Media Management',price:'$500/mo',desc:'12+ posts per month — product content, UGC reposts, lifestyle imagery, and brand storytelling that builds a community around your products.'},
      ]}
      process={[
        {title:'Funnel and analytics audit',desc:'Review your store data — traffic sources, conversion rates, email performance, ad accounts. Find the leaks before adding more volume.'},
        {title:'Email automation build',desc:'Set up the core revenue flows: welcome series, abandon cart, post-purchase upsell, and win-back. These run 24/7 and compound over time.'},
        {title:'Paid acquisition launch',desc:'Build and launch Meta campaigns with proper creative testing, audience segmentation, and conversion tracking. Drive profitable traffic from day one.'},
        {title:'Scale what works',desc:'Weekly performance review, monthly strategy call, and continuous creative iteration. Double down on what drives ROAS, cut what doesn\'t.'},
      ]}
      faqs={[
        {q:'What ecommerce platforms do you work with?',a:'Shopify, WooCommerce, BigCommerce, and custom builds. We integrate with all major platforms for tracking, email, and ad pixels.'},
        {q:'What ROAS should I expect from Meta ads?',a:'Most clients hit 3–5× ROAS within 60 days of a well-built campaign. Initial weeks involve testing — returns improve as we identify winning creatives and audiences. We set realistic benchmarks in your audit.'},
        {q:'How important is email compared to paid ads?',a:'For most stores, email generates 20–40% of total revenue once properly set up — with near-zero marginal cost. It\'s the highest-ROI channel and the first thing we build.'},
        {q:'Do you handle creative production for ads?',a:'We write copy, provide direction, and edit supplied assets. For brands without existing creative, we partner with local video/photo production or guide you on self-shooting.'},
        {q:'Can you help with product launches?',a:'Yes — we build product launch campaigns across email, social, and paid ads with coordinated timing and messaging for maximum impact.'},
        {q:'Do you work with DTC brands or B2B ecommerce?',a:'Primarily DTC. We can work with B2B ecommerce but our systems are built for consumer purchase cycles.'},
      ]}
    />
  )
}
