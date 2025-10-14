/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*', 
      },
    ]
  },
  images: {
    domains: ['localhost'],
  },
  // Для Next.js 15 - только serverExternalPackages
  serverExternalPackages: ['socket.io-client'],
}

module.exports = nextConfig