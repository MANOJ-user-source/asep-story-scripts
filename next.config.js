/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/asep-story-scripts' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/asep-story-scripts/' : '',
}

module.exports = nextConfig
