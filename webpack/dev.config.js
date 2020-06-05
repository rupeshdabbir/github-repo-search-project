const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const postcssLoader = require('./postcss.loader');
const port = process.env.PORT || 3001;

module.exports = merge(baseConfig, {
  devtool: 'eval-source-map',

  devServer: {
    inline: true,
    contentBase: 'src',
    port: port,
    publicPath: '/',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?importLoaders=1', postcssLoader],
      },
    ],
  },

  plugins: [new webpack.EnvironmentPlugin(['USER_SEARCH_OAUTH'])],
});
