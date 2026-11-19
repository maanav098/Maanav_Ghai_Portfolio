import type { MetadataRoute } from 'next'
import { profile } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date()

  return [
    {
      url: profile.siteUrl,
      lastModified: updatedAt,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL('/intprep', profile.siteUrl).toString(),
      lastModified: updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
