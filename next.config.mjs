/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  experimental: {
    optimizePackageImports: ['@hugeicons/core-free-icons', 'lucide-react', '@radix-ui/react-icons'],
  },
  allowedDevOrigins: [
    "**.*",
    "localhost",
    "127.0.0.1"
  ],
  // Enable static generation for better performance
  output: 'standalone',
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.cnippet.dev',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'coresg-normal.trae.ai',
      },
    ],
    // Enable modern formats
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL for optimized images (1 year)
    minimumCacheTTL: 31536000,
  },
  // Compression
  compress: true,
  // Headers for caching
  async headers() {
    return [
      {
        // Cache static assets for 1 year
        source: '/:path*.(js|css|woff|woff2|png|jpg|jpeg|gif|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache HTML pages for 1 hour with stale-while-revalidate
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Cache API responses for 5 minutes
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=300, stale-while-revalidate=600',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/services/individual-therapy',
        destination: '/individual-therapy-darby-pa',
        permanent: true,
      },
      {
        source: '/counseling',
        destination: '/individual-therapy-darby-pa',
        permanent: true,
      },
      {
        source: '/bpd-therapy-darby-pa',
        destination: '/bpd-treatment-darby-pa',
        permanent: true,
      },
      {
        source: '/adhd-therapy-darby-pa',
        destination: '/adhd-treatment-darby-pa',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
