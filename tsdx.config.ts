const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const static_files = require('rollup-plugin-static-files');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer(), cssnano({ preset: 'default' })],
        inject: false,
        extract: true,
      })
    );

    return config;
  },
};
