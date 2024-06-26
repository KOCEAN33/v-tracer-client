/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
