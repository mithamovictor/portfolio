import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '/dynamic/image/**',
      },
      {
        protocol: 'https',
        hostname: 'media2.forem.com',
        pathname: '/dynamic/image/**',
      },
      {
        protocol: 'https',
        hostname: 'dev.to',
      },
      {
        protocol: 'https',
        hostname: 'forem.com',
      },
      {
        protocol: 'https',
        hostname: 'dev-to-uploads.s3.amazonaws.com',
        pathname: '/uploads/articles/**',
      },
      {
        protocol: 'https',
        hostname: 'forem-com-uploads.s3.amazonaws.com',
        pathname: '/uploads/articles/**',
      },
    ],
  },
};

export default nextConfig;
