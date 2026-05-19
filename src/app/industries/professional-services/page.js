import IndustryPage from '../../components/IndustryPage'

export const metadata = {
  title: 'Professional Services Marketing — South Florida | GetClicksToday',
  description: 'Marketing for SoFlo law firms, financial advisors, consultants, and healthcare providers. Build authority, rank locally, and win high-value clients.',
}

export default function Page() {
  return (
    <IndustryPage
      industry="Professional Services"
      title="Build authority."
      tagline="Win clients."
      ctaLabel="Build my authority →"
      heroSub="Law firms, financial advisors, consultants, healthcare providers — we build digital authority through thought leadership content, SEO, and a web presence that establishes trust before the first call. The right clients are already searching for you."
      stats={[
        {num:'+160%',label:'Organic lead growth'},
        {num:'2×',label:'Consultation bookings'},
        {num:'6 mo',label:'To authority ranking'},
      ]}
      challenges={[
        {title:'Trust is the product',desc:'Clients don\'t hire the cheapest lawyer or advisor — they hire the one that feels most credible. Your digital presence either builds that credibility or destroys it.'},
        {title:'Long sales cycles demand nurture',desc:'Professional service clients research for weeks or months before reaching out. If your content isn\'t educating and nurturing them during that time, a competitor\'s is.'},
        {title:'Referrals plateau',desc:'Every firm starts on referrals. The ones that scale build digital channels that generate inbound leads independent of who you know.'},
        {title:'Compliance limits creativity',desc:'Legal, financial, and healthcare marketing has real constraints. You need a partner who knows what\'s compliant and can still create compelling content within those guardrails.'},
      ]}
      services={[
        {href:'/services/seo-local-search',title:'SEO & Local Search',price:'$500/mo',desc:'Rank for the practice area and location searches your ideal clients use — "estate attorney Fort Lauderdale", "financial advisor Boca Raton", and hundreds more.'},
        {href:'/services/blog-content-marketing',title:'Blog Content Marketing',price:'$600/mo',desc:'4 SEO-optimized articles per month establishing your expertise, answering client questions, and building the authority that ranks and converts.'},
        {href:'/services/reputation-management',title:'Reputation Management',price:'$500/mo',desc:'Monitor and grow your professional reputation across Google, Avvo, Yelp, and industry platforms. Social proof that shortens the sales cycle.'},
        {href:'/services/email-marketing',title:'Email Marketing',price:'$500/mo',desc:'Nurture campaigns for prospects, newsletters for referral partners, and re-engagement flows for past clients who should be sending you more business.'},
      ]}
      process={[
        {title:'Authority gap analysis',desc:'Map your current online presence against top competitors in your practice area. Identify the content and ranking gaps we\'ll close to pull ahead.'},
        {title:'Content strategy and calendar',desc:'Build a 12-month content roadmap targeting the exact questions your ideal clients are searching — articles that rank and build trust simultaneously.'},
        {title:'SEO foundation',desc:'Optimize your website architecture, on-page content, and local citations to rank for high-intent searches in your practice area and geography.'},
        {title:'Reputation and referral systems',desc:'Build a review-ask process, set up referral partner email sequences, and monitor your reputation across every platform where clients evaluate you.'},
      ]}
      faqs={[
        {q:'What types of professional services do you work with?',a:'Law firms (all practice areas), financial advisors, CPAs, management consultants, healthcare providers, therapists, chiropractors, optometrists, and more.'},
        {q:'How do you handle compliance for legal and financial marketing?',a:'We\'re well-versed in bar association advertising rules, FINRA/SEC guidelines, and HIPAA-related marketing restrictions. Compliance review is built into our content process.'},
        {q:'What\'s the ROI of content marketing for a law firm?',a:'One well-ranked article can drive qualified leads for years. Most clients find that their content investment pays back 5–10× over a 12-month horizon as rankings compound.'},
        {q:'How do you generate leads beyond SEO?',a:'SEO + blog content is the foundation. We layer in Google Ads for immediate volume, email marketing for nurture and referrals, and reputation management to close the trust gap.'},
        {q:'Do you understand my specific practice area?',a:'We research your specific practice deeply before writing a word. We also work with you to review and approve all content before it publishes — you\'re the expert, we\'re the amplifier.'},
        {q:'How long until I see new client inquiries?',a:'Paid ads can drive inquiries in week 1. Organic SEO and content typically shows meaningful traffic growth in 3–6 months. We set clear milestones in your onboarding.'},
      ]}
    />
  )
}
