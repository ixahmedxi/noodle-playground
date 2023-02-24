/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  eslint: {
    ignoreDuringBuilds: !!process.env.CI || true,
  },
  typescript: {
    ignoreBuildErrors: !!process.env.CI || true,
  },
};

export default config;
