const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withPlugins([withSass({}), withImages, withFonts], {
  distDir: '../../dist/functions/next'
});
