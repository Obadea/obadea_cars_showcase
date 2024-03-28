/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // compilerOptions: {
  //   jsx: 'react',
  //   esModuleInterop: true,
  //   // Other compiler options...
  // },
};

module.exports = nextConfig;
