/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '',
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
