const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  experimental: {
    esmExternals: "loose",
  },
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
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
