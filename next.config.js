/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/asep-story-scripts' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/asep-story-scripts/' : '',
  // Skip type checking during build (done separately)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
