/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mediresponse.co.za'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mediresponse.co.za',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
