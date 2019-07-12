const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withPlugins(
  [
    withSass({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
      },
    }),
    withImages,
    withFonts
  ],
  {
    distDir: '../../dist/functions/next'
  }
);
