import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata = {
  title: 'GetClicksToday — Full-Service Marketing Agency | South Florida',
  description: "South Florida's full-service marketing agency. Websites, paid ads, social media, SEO, and content — all done for you. No contracts. Results in 30 days.",
  keywords: 'marketing agency south florida, soflo marketing, website design fort lauderdale, social media management florida, SEO south florida',
  openGraph: {
    title: 'GetClicksToday — Full-Service Marketing Agency',
    description: "South Florida's full-service marketing agency. No contracts. Results in 30 days.",
    url: 'https://getclickstoday.com',
    siteName: 'GetClicksToday',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
