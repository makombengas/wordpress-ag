

/** @type {import('next').NextConfig} */
const nextConfig = {
    fastRefresh: false,
    ssr: false,
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: '/api/:path*',
          },
        ];
      },
     
};

export default nextConfig;
