const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    // unoptimized: true 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'naprawaprzemysl.pl',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
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
