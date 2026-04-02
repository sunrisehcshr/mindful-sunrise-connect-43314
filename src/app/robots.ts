import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Explicitly allow AI crawlers for Generative Engine Optimization (GEO)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot'],
        allow: '/',
      },
      // Block common scrapers that don't provide value
      {
        userAgent: ['CCBot', 'Bytespider'],
        disallow: '/',
      },
    ],
    sitemap: 'https://sunrisehumancare.com/sitemap.xml',
  };
}