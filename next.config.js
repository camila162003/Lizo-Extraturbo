/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  poweredByHeader: false,
  env: {
    VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: process.env.VITE_SUPABASE_ANON_KEY,
    VITE_USE_SUPABASE: process.env.VITE_USE_SUPABASE,
    VITE_EPAYCO_PUBLIC_KEY: process.env.VITE_EPAYCO_PUBLIC_KEY,
    VITE_EPAYCO_TEST_MODE: process.env.VITE_EPAYCO_TEST_MODE,
  }
}

module.exports = nextConfig