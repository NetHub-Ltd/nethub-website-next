/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Dynamically import argon2
      config.externals.push("argon2");
    }

    return config;
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // Enable experimental Chakra UI package optimizations
  },
};

export default nextConfig;
