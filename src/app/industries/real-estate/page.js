import IndustryPage from '../../components/IndustryPage'

export const metadata = {
  title: 'Real Estate Marketing — South Florida | GetClicksToday',
  description: 'Marketing for SoFlo real estate agents and brokerages. More listings, more closings. Social content, email drips, Google Ads, and a personal brand that earns referrals.',
}

export default function Page() {
  return (
    <IndustryPage
      industry="Real Estate"
      title="More listings."
      tagline="More closings."
      ctaLabel="Grow my brand →"
      heroSub="Agents and brokerages use us to stay top-of-mind, generate seller leads, and build a personal brand that earns referrals. Social content, email drips, Google Ads, and a web presence that positions you as the go-to agent in your market."
      stats={[
        {num:'3×',label:'Lead volume growth'},
        {num:'+85%',label:'Email open rates'},
        {num:'45 days',label:'To first inbound lead'},
      ]}
      challenges={[
        {title:'The market is hyper-competitive',desc:'SoFlo has one of the highest agent-per-transaction ratios in the country. Staying visible and top-of-mind is the difference between a thriving pipeline and a dry one.'},
        {title:'Most agents market reactively',desc:'Post when there\'s a listing, go dark between deals. That inconsistency kills brand momentum and makes it hard for referral sources to remember you.'},
        {title:'Digital ads are complex and expensive',desc:'Google and Meta real estate ads have strict policies, compliance requirements, and high CPCs. Running them wrong wastes budget fast.'},
        {title:'Sphere of influence has a ceiling',desc:'Referrals and SOI are the foundation, but they don\'t scale. Digital channels let you expand your reach beyond who you already know — consistently and affordably.'},
      ]}
      services={[
        {href:'/services/social-media-management',title:'Social Media Management',price:'$500/mo',desc:'12+ posts per month — listings, market updates, neighborhood content, and personal brand posts that keep you visible and credible with buyers and sellers.'},
        {href:'/services/email-marketing',title:'Email Marketing',price:'$500/mo',desc:'Monthly market reports, listing alerts, and nurture drips for buyers and sellers in your database. The consistent touchpoint that keeps you top-of-mind.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',price:'$500/mo + ad spend',desc:'Seller lead generation campaigns on Meta and Google, compliant with all real estate advertising policies. Built to generate listing appointments, not just clicks.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',price:'$500/mo',desc:'Rank for neighborhood and buyer/seller searches — "homes for sale Coral Gables", "Boca Raton listing agent" — and capture organic leads passively.'},
      ]}
      process={[
        {title:'Brand and market audit',desc:'Review your current digital presence, define your target client profile (buyer, seller, investor, luxury), and map out the gaps vs. your top competitors.'},
        {title:'Content foundation',desc:'Build your brand voice, content calendar, and posting cadence — market expertise content that positions you as the agent who owns your territory.'},
        {title:'Database activation',desc:'Set up your email infrastructure, segment your past clients and SOI, and deploy automated drip sequences that generate referrals and repeat business.'},
        {title:'Paid lead generation',desc:'Launch seller lead campaigns on Meta (most cost-effective for real estate) and Google Search for buyer intent keywords in your target neighborhoods.'},
      ]}
      faqs={[
        {q:'Do you work with individual agents or just brokerages?',a:'Both. Individual agents building a personal brand and brokerages scaling agent recruitment and lead generation are both clients we work with.'},
        {q:'Can you help me generate seller leads specifically?',a:'Yes — seller lead generation is one of the most requested campaigns we run. Meta lead ads with home valuation offers are the highest-performing format for motivated sellers.'},
        {q:'How do you stay compliant with real estate ad policies?',a:'We\'re familiar with NAR guidelines, state licensing disclosure requirements, and Fair Housing Act compliance in advertising. All campaigns are built with compliance from the start.'},
        {q:'What does the email marketing content look like?',a:'Monthly neighborhood market reports, new listing alerts, price reduction updates, and personalized check-ins with past clients. Content that\'s useful, not spammy.'},
        {q:'Can you help me build my personal brand beyond just listings?',a:'Absolutely. The agents who win long-term are known for their market knowledge and personality — not just their listings. We build content that establishes both.'},
        {q:'How do you measure success?',a:'Lead volume, cost per lead, appointment rate, and email engagement metrics. We report on what actually moves your business, not vanity metrics.'},
      ]}
    />
  )
}
