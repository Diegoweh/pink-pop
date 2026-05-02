import type { MetadataRoute } from 'next';
import { getGroupedProducts } from '@/lib/grouped-products';

const SITE_URL = 'https://www.pinkpop.com.mx';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/coleccion`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = getGroupedProducts().map((p) => ({
    url: `${SITE_URL}/productos/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes];
}
