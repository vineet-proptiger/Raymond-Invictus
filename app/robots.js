export default function robots() {
  const baseUrl = 'https://raymondtheaddressbygsmumbai.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
