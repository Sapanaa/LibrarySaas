/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.com',
        port: '',
        pathname: '/images/I/**',
      },
    ]
  },
}

module.exports = nextConfig
