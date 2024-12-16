/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '8080', // Specify the port if necessary
            pathname: '/my-fresh-goods-api/product-images/**', // Pattern to match your image paths
          },
        ],
      },
};

export default nextConfig;
