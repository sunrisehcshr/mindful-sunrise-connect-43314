/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  allowedDevOrigins: [
    "**.*",
    "localhost",
    "127.0.0.1"
  ],
    async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co https://www.google.com https://www.gstatic.com https://www.googletagmanager.com; connect-src 'self' wss: https:; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-src https://www.google.com;"
          }
        ]
      }
    ]
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
    ],
  },
};

export default nextConfig;
