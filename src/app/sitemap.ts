import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://prabahe.com'
  const lastmod = new Date()

  return [
    { url: `${base}/`, lastModified: lastmod },
    // Add more pages here as you create them:
    // { url: `${base}/about`, lastModified: lastmod },
  ]
}
