/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.mp4$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                outputPath: 'static/media/',
                publicPath: '_next/static/media/',
              },
            },
          ],
        });
      }
  
      return config;
    },
  }
  
  module.exports = nextConfig;