const nextEnvUrl = process.env.NEXT_PUBLIC_SITE_URL

if (!nextEnvUrl) {
  throw new Error('NEXT_PUBLIC_SITE_URL is required')
}

const nextUrl = new URL(nextEnvUrl)

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      { hostname: 'images.credly.com' },
      { hostname: nextUrl.hostname },
    ],
  },
}

module.exports = nextConfig
