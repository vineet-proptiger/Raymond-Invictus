import './raymond-oceanfront-monogram.css'
import Script from 'next/script'
import { Poppins } from 'next/font/google'
import { CITY_DISPLAY, SITE_URL } from '../../lib/raymond-oceanfront-monogram/config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://raymondrealtyprelaunch.in'),
  title: 'Raymond Invictus By GS | Ultra-Luxury 3 & 4 BHK Residences Mahim, Mumbai',
  description:
    'Raymond Invictus By GS offers exclusive 3 & 4 BHK luxury residences on Mahim-Bandra Bay waterfront with world-class lifestyle amenities. Pre-Launch.',
  alternates: {
    canonical: 'https://raymondrealtyprelaunch.in/raymond-oceanfront-monogram',
  },
  openGraph: {
    title: 'Raymond Invictus By GS | Ultra-Luxury 3 & 4 BHK Residences Mahim, Mumbai',
    description:
      'Raymond Invictus By GS offers exclusive 3 & 4 BHK luxury residences on Mahim-Bandra Bay waterfront with world-class lifestyle amenities. Pre-Launch.',
    url: 'https://raymondrealtyprelaunch.in/raymond-oceanfront-monogram',
    siteName: 'Raymond Realty',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Invictus By GS | Ultra-Luxury 3 & 4 BHK Residences Mahim, Mumbai',
    description:
      'Raymond Invictus By GS offers exclusive 3 & 4 BHK luxury residences on Mahim-Bandra Bay waterfront with world-class lifestyle amenities. Pre-Launch.',
  },
  icons: {
    icon: [
      { url: '/raymond-oceanfront-monogram/favicon/fav.webp', type: 'image/webp' },
      { url: '/raymond-oceanfront-monogram/favicon/fav.png', type: 'image/png' },
    ],
    shortcut: '/raymond-oceanfront-monogram/favicon/fav.webp',
    apple: '/raymond-oceanfront-monogram/favicon/fav.webp',
  },
}

export default function RaymondOceanfrontMonogramLayout({ children }) {
  return (
    <div className={`${poppins.variable} raymond-oceanfront-monogram font-sans text-dark antialiased`}>
      <link rel="icon" href="/raymond-oceanfront-monogram/favicon/fav.webp" type="image/webp" />
      <link rel="shortcut icon" href="/raymond-oceanfront-monogram/favicon/fav.webp" type="image/webp" />
      <link rel="apple-touch-icon" href="/raymond-oceanfront-monogram/favicon/fav.webp" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <Script id="gtag-raymond-oceanfront" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </div>
  )
}
