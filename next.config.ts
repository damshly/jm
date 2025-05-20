/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // ✅ هذا المفتاح هو الذي يتجاهل أخطاء TypeScript أثناء build
  },
};

module.exports = nextConfig;
