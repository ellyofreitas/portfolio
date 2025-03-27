/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        hostname: 'images.credly.com',
      },
    ],
  },
}

module.exports = nextConfig
