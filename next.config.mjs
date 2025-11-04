/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', '@headlessui/react', '@heroicons/react']
  }
};

export default nextConfig;
