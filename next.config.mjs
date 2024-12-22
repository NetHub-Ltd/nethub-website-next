/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // Enable experimental Chakra UI package optimizations
  },
};

export default nextConfig;
