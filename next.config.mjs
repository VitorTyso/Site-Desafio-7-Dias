/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/novo-luxo/index.html' },
        { source: '/style.css', destination: '/novo-luxo/style.css' },
        { source: '/app.js', destination: '/novo-luxo/app.js' },
        { source: '/diagnostic.js', destination: '/novo-luxo/diagnostic.js' },
        { source: '/assets/:path*', destination: '/novo-luxo/assets/:path*' }
      ]
    };
  }
};

export default nextConfig;
