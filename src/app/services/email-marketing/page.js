import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Email Marketing — South Florida | GetClicksToday',
  description: 'Full email marketing — 2-4 campaigns/month, automation, segmentation, A/B testing. $500/mo.',
}

export default function Page() {
  return (
    <ServicePage
      title="Email Marketing"
      tagline="that actually converts."
      price="$500"
      priceNote="2–4 campaigns per month + automation · Cancel anytime"
      heroSub="Email delivers the highest ROI of any channel. We build the complete system — campaigns, automated flows, segmentation, and testing — so your list turns into real revenue every month."
      includes={[
        '2–4 fully designed email campaigns per month',
        'Professional copywriting tailored to your brand voice',
        'Custom email design with mobile optimization',
        'Automated flows — welcome series, abandoned cart, win-back',
        'List segmentation based on behavior and purchase history',
        'A/B testing on subject lines, send times, and content',
        'Deliverability monitoring so emails land in inboxes',
        'Monthly performance report with revenue attribution',
      ]}
      forYou={[
        {title:'Ecommerce stores',desc:'Abandoned carts and repeat purchase flows that compound into serious revenue.'},
        {title:'Service businesses',desc:'Stay top-of-mind with past clients and drive referrals with newsletters.'},
        {title:'Med spas & dental',desc:'Re-engage past patients and promote new treatments with segmented campaigns.'},
        {title:'Restaurants',desc:'Fill slow nights, promote events, and build loyalty with regulars.'},
      ]}
      process={[
        {title:'Audit & setup',desc:'Review your list, platform, and engagement. Set up proper segmentation and automation infrastructure.'},
        {title:'Build flows',desc:'Create welcome series, abandoned cart, and win-back sequences that run 24/7 on autopilot.'},
        {title:'Monthly campaigns',desc:'Write, design, and send 2-4 campaigns per month targeting specific segments.'},
        {title:'Optimize & scale',desc:'A/B test everything, monitor deliverability, continuously improve performance.'},
      ]}
      faqs={[
        {q:'What platform do you use?',a:'Whatever you have — Mailchimp, Klaviyo, ActiveCampaign, Constant Contact. If you don\'t have one, we\'ll recommend the right fit and help set it up.'},
        {q:'How many emails per month?',a:'2-4 main campaigns plus your automated flows running continuously. Automations can send dozens of emails per month triggered by customer behavior.'},
        {q:'What if my list is small?',a:'Small lists can be very profitable with good segmentation. We also help grow the list with opt-ins on your website, social media, and at your location.'},
        {q:'Do you write all the copy?',a:'Yes. Subject lines, body, CTAs, preview text — all written in your brand voice. You approve everything before it sends.'},
        {q:'What results should I expect?',a:'Established email programs typically generate 15-30% of total revenue for ecommerce and 10-20% for service businesses. Most clients see meaningful lift within 30-60 days.'},
        {q:'Can this be bundled?',a:'Yes — email pairs especially well with social media. Bundle both for $900/mo (10% off).'},
      ]}
      crossSell={[
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Drive email signups with consistent social presence. $500/mo.'},
        {href:'/services/seo-local-search',title:'SEO & Local Search',desc:'Build organic traffic that grows your list over time. $500/mo.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',desc:'Build your list faster with lead gen ads. $500/mo + ad spend.'},
      ]}
    />
  )
}
