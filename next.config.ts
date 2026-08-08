/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,  // ✅ هذا المفتاح هو الذي يتجاهل أخطاء TypeScript أثناء build
  },
};

module.exports = nextConfig;
