import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://prabahe.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/author/'],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
