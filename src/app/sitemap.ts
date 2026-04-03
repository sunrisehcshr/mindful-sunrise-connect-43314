import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sunrisehumancare.com';
  const lastModified = new Date();

  // Core Pages
  const corePages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/appointment',
    '/faq',
    '/medicaid-therapy',
    '/mental-health-darby-pa',
    '/betterhelp-alternatives-pa',
    '/privacy-policy',
    '/terms-of-service',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Service Pages
  const servicePages = [
    '/individual-therapy-darby-pa',
    '/couples-counseling-darby-pa',
    '/family-therapy-darby-pa',
    '/child-therapy-darby-pa',
    '/psychiatric-evaluations-darby-pa',
    '/medication-management-darby-pa',
    '/grief-therapy-darby-pa',
    '/relationship-therapy-darby-pa',
    '/ibhs-darby-pa',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Condition Pages
  const conditionPages = [
    '/anxiety-therapy-darby-pa',
    '/depression-therapy-darby-pa',
    '/adhd-treatment-darby-pa',
    '/bipolar-disorder-therapy-darby-pa',
    '/ocd-therapy-darby-pa',
    '/ptsd-therapy-darby-pa',
    '/bpd-treatment-darby-pa',
    '/schizophrenia-treatment-darby-pa',
    '/substance-use-treatment-darby-pa',
    '/eating-disorders-treatment-darby-pa',
    '/sleep-disorders-treatment-darby-pa',
    '/dissociative-disorders-treatment-darby-pa',
    '/somatic-disorders-treatment-darby-pa',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Geo Pages (New)
  const geoPages = [
    '/mental-health-yeadon-pa',
    '/mental-health-lansdowne-pa',
    '/mental-health-upper-darby-pa',
    '/mental-health-collingdale-pa',
    '/mental-health-sharon-hill-pa',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Provider Pages (New)
  const providerPages = [
    'michael-thevar',
    'holli-odonnell',
    'dr-farah-khan',
    'chevonne-worthy',
    'anthony-obi',
    'michael-flynn',
    'shanada-anderson',
  ].map(slug => ({
    url: `${baseUrl}/team/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Blog Pages
  const blogPages = [
    '/blog',
    '/blog/finding-therapist-darby-pa-guide',
    '/blog/anxiety-treatment-delaware-county-pa',
    '/blog/depression-therapy-darby-pa-complete-guide',
    '/blog/family-therapy-darby-pa-guide',
    '/blog/adhd-treatment-darby-pa-comprehensive-guide',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...corePages,
    ...servicePages,
    ...conditionPages,
    ...geoPages,
    ...providerPages,
    ...blogPages,
  ];
}
