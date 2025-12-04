/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'media.licdn.com',
      'raw.githubusercontent.com',
      'edscoop.com',
      'miro.medium.com',
      '1drv.ms',
      'youtube.com',
      'youtu.be'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig

