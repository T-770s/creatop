import type { MetadataRoute } from 'next';
import { BUSINESSES } from '@/data/businesses';

export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://t-770s.github.io/creatop';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/world/`, lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    { url: `${SITE_URL}/privacy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/accessibility/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
  const businessRoutes: MetadataRoute.Sitemap = BUSINESSES.map(b => ({
    url: `${SITE_URL}/business/${b.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  return [...staticRoutes, ...businessRoutes];
}
