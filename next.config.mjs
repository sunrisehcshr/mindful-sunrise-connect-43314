/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  allowedDevOrigins: [
    "**.*",
    "localhost",
    "127.0.0.1"
  ],
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
  },
};

export default nextConfig;
