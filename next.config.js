/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'www.creativehatti.com',
        'media.istockphoto.com',
        'yourhometownllc.com', // ✅ Add this one too
      ],
    },
  };
  
  module.exports = nextConfig;