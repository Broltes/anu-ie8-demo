var config = require('./config')('development');
var Es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  entry: config.entry,

  output: {
    filename: '[name].js' // for multi chunks
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: config.alias
  },

  plugins: [
    new Es3ifyPlugin()
  ].concat(config.htmls),

  devServer: {
    noInfo: true,
    host: '0.0.0.0',
    port: config.port,
    disableHostCheck: true
  },
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
