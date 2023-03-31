/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // domains: ['13.214.54.19'],
    domains: ["cdn2.thecatapi.com"],
  },
};

module.exports = nextConfig;
