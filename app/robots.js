export default function robots() {
  const baseUrl = 'https://raymondrealtyprelaunch.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
