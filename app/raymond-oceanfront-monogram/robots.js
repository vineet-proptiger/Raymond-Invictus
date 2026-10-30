import { SITE_URL } from '../../lib/raymond-oceanfront-monogram/config'

const BASE_URL = 'https://raymondrealtyprelaunch.in/raymond-oceanfront-monogram'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
