import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://prabahe.com';

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
  ];
}
