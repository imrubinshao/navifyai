/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: process.env.NODE_ENV === 'development',
    images: {
        domains: process.env.IMAGE_DOMAIN.split(','),
      }
};

export default nextConfig;
