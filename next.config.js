/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mediresponse.co.za', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mediresponse.co.za',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Disable static generation for pages with complex client components
  experimental: {
    // This helps with the serialization issues
    serverComponentsExternalPackages: ['framer-motion'],
  },
}

module.exports = nextConfig
