import './wadala.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/config'
import { faviconImage } from '../../lib/wadala-east-mumbai/images'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://raymondrealtyprelaunch.in'),
  title: 'Raymond The Address By GS | 2 & 3 BHK Homes',
  description: 'Discover Raymond The Address By GS in Mumbai. Offering spacious 2 & 3 BHK residences across a sprawling 145-acre township with world-class lifestyle amenities.',
  icons: {
    icon: faviconImage,
    shortcut: faviconImage,
    apple: faviconImage,
  },
  alternates: {
    canonical: 'https://raymondrealtyprelaunch.in',
  },
  openGraph: {
    title: 'Raymond The Address By GS | 2 & 3 BHK Hillside Homes',
    description: 'Discover Raymond The Address By GS in Mumbai. Offering spacious 2 & 3 BHK hillside residences across a sprawling 145-acre township with world-class lifestyle amenities.',
    url: 'https://raymondrealtyprelaunch.in',
    siteName: 'Raymond The Address By GS',
    images: [
      {
        url: '/projects/iris-tower.jpg',
        width: 1200,
        height: 630,
        alt: 'Raymond The Address By GS Mumbai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond The Address By GS | 2 & 3 BHK Hillside Homes',
    description: 'Discover Raymond The Address By GS in Mumbai. Offering spacious 2 & 3 BHK hillside residences across a sprawling 145-acre township with world-class lifestyle amenities.',
    images: ['/projects/iris-tower.jpg'],
  },
}

import SmoothScroll from '../../components/wadala-east-mumbai/components/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <div lang="en" id="wadala-layout">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <div>
        <link rel="icon" href={faviconImage} type="image/webp" />
        <link rel="shortcut icon" href={faviconImage} type="image/webp" />
        <link rel="apple-touch-icon" href={faviconImage} type="image/webp" />
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Raymond The Address By GS",
              "url": "https://raymondrealtyprelaunch.in",
              "logo": "https://raymondrealtyprelaunch.in/projects/iris-tower.jpg",
              "image": "https://raymondrealtyprelaunch.in/projects/iris-tower.jpg",
              "description": "Raymond The Address By GS, Mumbai's premier 145-acre township offering luxurious 2 & 3 BHK residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wadala",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "410210",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 1.20 Cr Onwards",
              "sameAs": [
                "https://raymondrealtyprelaunch.in"
              ]
            })
          }}
        />
      </div>
      <div className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </div>
    </div>
  )
}
