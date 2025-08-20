const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    // unoptimized: true 
    // imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 320, 384, 448, 520],
    // deviceSizes: [320, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    //   remotePatterns: [
    //     {
    //       protocol: 'https',
    //       hostname: 'naprawaprzemysl.pl',
    //       port: '',
    //       pathname: '/**',
    //     },
    //     {
    //       protocol: 'https',
    //       hostname: 'res.cloudinary.com',
    //       port: '',
    //       pathname: '/**',
    //     },
    //     {
    //       protocol: 'https',
    //       hostname: 'lh3.googleusercontent.com',
    //       port: '',
    //       pathname: '/**',
    //     },
    //   ],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 200, 240, 280, 320, 360, 400, 420, 480, 520],
    deviceSizes: [320, 375, 425, 540, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
    domains: ['lh3.googleusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: { styledComponents: true },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }
    );
    return config;
  },
  trailingSlash: true,
}

// module.exports = nextConfig;
module.exports = withBundleAnalyzer(nextConfig);
