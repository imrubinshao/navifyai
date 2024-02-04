/** @type {import('next').NextConfig} */

const allowedOriginsArray = process.env.IMAGE_DOMAIN.split(",").map(item => item.trim());
const nextConfig = {
    reactStrictMode: process.env.NODE_ENV === 'development',
    images: {
        domains: allowedOriginsArray,
      }
};

export default nextConfig;
