/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compilerOptions: {
    jsx: "react",
    esModuleInterop: true,
    // Other compiler options...
  },
};

module.exports = nextConfig;
