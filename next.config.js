const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  // Handle font loading errors gracefully
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = withNextIntl(nextConfig);
