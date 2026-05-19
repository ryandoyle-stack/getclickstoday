import IndustryPage from '../../components/IndustryPage'

export const metadata = {
  title: 'Dental & Cosmetic Dentistry Marketing — South Florida | GetClicksToday',
  description: 'Marketing for SoFlo dental and cosmetic dentistry practices. More new patients, more high-value cases. SEO, Meta ads, social media, and reputation management.',
}

export default function Page() {
  return (
    <IndustryPage
      industry="Dental & Cosmetic Dentistry"
      title="More new patients."
      tagline="More high-value cases."
      ctaLabel="Fill my chair →"
      heroSub="Cosmetic dentistry marketing is a game of trust and visibility. We help SoFlo practices rank for high-intent local searches, run Meta campaigns that showcase results, and build the online reputation that turns first-time visitors into lifetime patients."
      stats={[
        {num:'+240%',label:'New patient inquiries'},
        {num:'2.5×',label:'High-ticket case value'},
        {num:'45 days',label:'To booked consultations'},
      ]}
      challenges={[
        {title:'High competition in every zip code',desc:'South Florida has one of the highest dentist-per-capita ratios in the country. Showing up when patients search is non-negotiable — and most practices are invisible.'},
        {title:'Patients research before they call',desc:'Before picking up the phone, patients check Google reviews, your website, and your social proof. A weak online presence loses them before they ever contact you.'},
        {title:'Cosmetic vs. general split',desc:'General patients come from proximity and insurance. Cosmetic patients come from trust and aspiration. Most practices market the same way to both — and underperform on both.'},
        {title:'Review velocity matters',desc:'A practice with 200 4.9-star reviews wins over one with 40 4.7-star reviews every time. Volume and recency both drive rankings and conversions.'},
      ]}
      services={[
        {href:'/services/seo-local-search',title:'SEO & Local Search',price:'$500/mo',desc:'Rank for "dentist near me", "Invisalign Fort Lauderdale", "cosmetic dentist Boca Raton" — the searches your best patients are already making.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',price:'$500/mo + ad spend',desc:'Google and Meta campaigns targeting high-intent patients searching for cosmetic procedures, implants, and whitening in your area.'},
        {href:'/services/reputation-management',title:'Reputation Management',price:'$500/mo',desc:'Build a steady stream of 5-star reviews, respond to every review professionally, and monitor your reputation across all platforms.'},
        {href:'/services/social-media-management',title:'Social Media Management',price:'$500/mo',desc:'Before/after showcases, patient education content, and trust-building posts that turn your social into a new patient engine.'},
      ]}
      process={[
        {title:'Competitive landscape audit',desc:'Map your competitors\' online presence — who\'s ranking, who\'s running ads, what their reviews say. Find the exact gaps we can exploit fast.'},
        {title:'Local SEO foundation',desc:'Optimize your GBP, citations, on-page content, and technical SEO to rank for the searches patients use when they\'re ready to book.'},
        {title:'Paid patient acquisition',desc:'Launch Google Search ads for high-intent terms and Meta ads with result-focused creative to drive consultation requests immediately.'},
        {title:'Review and reputation system',desc:'Deploy a review-ask workflow, respond to every review within 24 hours, and build the social proof that makes choosing you a no-brainer.'},
      ]}
      faqs={[
        {q:'What types of dental practices do you work with?',a:'General, cosmetic, pediatric, orthodontic, and oral surgery practices. We adjust strategy based on your case mix and target patient.'},
        {q:'Can you help attract more implant and Invisalign cases specifically?',a:'Yes — these are our highest-value dental campaigns. We build targeting and creative specifically around high-ticket case acquisition, not just general new patient volume.'},
        {q:'Do you know the compliance rules around dental marketing?',a:'Yes. We follow ADA guidelines, state dental board advertising rules, and platform policies. No misleading claims, proper disclaimers on before/afters.'},
        {q:'How many new patients can I expect per month?',a:'It varies by market, budget, and services. Clients with SEO + paid ads typically add 15–40+ new patients per month within 60–90 days. We set realistic expectations in your audit.'},
        {q:'Will you post on my social media?',a:'Yes — if you add social media management. We handle all content creation, scheduling, and community management across Instagram and Facebook.'},
        {q:'How do I get started?',a:'Book a free 30-minute strategy audit. We\'ll review your current online presence and tell you exactly what we\'d prioritize for your specific practice.'},
      ]}
    />
  )
}
