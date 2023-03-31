/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['13.214.54.19'],
    // domains: ["https://ac7e-13-214-54-19.ap.ngrok.io"],
  },
};

module.exports = nextConfig;
