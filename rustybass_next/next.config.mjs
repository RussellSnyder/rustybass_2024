/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  // compiler: { removeConsole: process.env.NODE_ENV === "production" },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: `${process.env.IMAGE_DOMAIN_SERVER_HOSTNAME}`,
      },
    ],
  },
};

export default nextConfig;
