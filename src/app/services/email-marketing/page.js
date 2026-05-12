import ServicePage from '../../components/ServicePage'

export const metadata = {
  title: 'Email Marketing — South Florida | GetClicksToday',
  description: 'Full email marketing service for South Florida businesses. 2-4 campaigns/month, automation, segmentation, A/B testing. $500/mo. No contracts.',
  keywords: 'email marketing south florida, email automation fort lauderdale, email agency soflo',
}

export default function Page() {
  return (
    <ServicePage
      title="Email Marketing"
      tagline="that actually converts."
      price="$500"
      priceNote="2–4 campaigns per month + automation · Cancel anytime"
      heroSub="Email delivers the highest ROI of any marketing channel. We build the complete system — campaigns, automated flows, segmentation, and testing — so your list turns into real revenue every month."
      includes={[
        '2–4 fully designed email campaigns per month',
        'Professional copywriting tailored to your brand voice',
        'Custom email design with mobile optimization',
        'Automated flows — welcome series, abandoned cart, win-back, re-engagement',
        'List segmentation based on behavior and purchase history',
        'A/B testing on subject lines, send times, and content',
        'Deliverability monitoring so emails land in inboxes not spam',
        'Monthly performance report with open rates, clicks, and revenue attribution',
      ]}
      forYou={[
        {title:'Ecommerce stores',desc:'Abandoned carts and repeat purchase flows that compound into serious revenue.'},
        {title:'Service businesses',desc:'Stay top-of-mind with past clients and drive referrals with monthly newsletters.'},
        {title:'Med spas & dental',desc:'Re-engage past patients and promote new treatments with segmented campaigns.'},
        {title:'Restaurants',desc:'Fill slow nights, promote events, and build loyalty with your regulars.'},
      ]}
      process={[
        {title:'Audit & setup',desc:'Review your current list, platform, and engagement. Set up proper segmentation and automation infrastructure.'},
        {title:'Build flows',desc:'Create your welcome series, abandoned cart, and win-back sequences that run on autopilot 24/7.'},
        {title:'Monthly campaigns',desc:'Write, design, and send 2-4 campaigns per month targeting specific segments for maximum response.'},
        {title:'Optimize & scale',desc:'A/B test everything, monitor deliverability, and continuously improve performance month over month.'},
      ]}
      faqs={[
        {q:'What email platform do you use?',a:'We work with whatever you have — Mailchimp, Klaviyo, ActiveCampaign, Constant Contact, etc. If you don&apos;t have one, we&apos;ll recommend the right fit for your business and help you set it up.'},
        {q:'How many emails will you actually send per month?',a:'2-4 main campaigns per month, plus all your automated flows running in the background continuously. Automations like welcome series and abandoned cart recovery can send dozens of emails per month on autopilot — all triggered by customer behavior.'},
        {q:'What if my list is small?',a:'Small lists can be extremely profitable with good segmentation and relevance. We also help you grow the list with opt-in strategies on your website, social media, and at your physical location.'},
        {q:'Do you write all the copy?',a:'Yes. Subject lines, body copy, CTAs, preview text — all written by us in your brand voice. You approve everything before it goes out.'},
        {q:'What kind of results should I expect?',a:'Established email programs typically generate 15-30% of total revenue for ecommerce and 10-20% for service businesses. Most clients see meaningful lift within 30-60 days of our automations going live.'},
        {q:'Can this be bundled with other services?',a:'Yes — email pairs especially well with social media management. Bundle both for $900/mo (10% off).'},
      ]}
      crossSell={[
        {href:'/services/social-media-management',title:'Social Media Management',desc:'Drive email signups with consistent social presence. $500/mo.'},
        {href:'/services/blog-content-marketing',title:'Blog Content Marketing',desc:'Repurpose blog content into high-value email newsletters. $600/mo.'},
        {href:'/services/paid-ads',title:'Paid Ads Management',desc:'Build your email list faster with lead gen ads. $500/mo + ad spend.'},
      ]}
    />
  )
}
