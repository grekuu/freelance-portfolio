import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0];

  return [
    {
      url: 'https://prusk.com/',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
