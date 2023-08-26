/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://localhost:8000/:path*',
  //     },
  //   ];
  // },
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
