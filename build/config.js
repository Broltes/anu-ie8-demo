var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var port = 18080;

var config = {
  entry: {
    app: [
      './src'
    ]
  },
  alias: {
    '@': path.resolve('src'),
    'react': 'anujs/dist/ReactIE',
    'react-dom': 'anujs/dist/ReactIE'
  },
  sassLoaderOptions: {
    data: '@import "~@/scss/_variables";'
  },
  htmls: [
    new HtmlWebpackPlugin({
      title: 'App',
      filename: 'index.html',
      template: './build/index.ejs',
      inject: true
    })
  ]
};

module.exports = function(ENV) {
  if (ENV === 'development') {
    Object.assign(config, {
      entry: [
        'es5-shim',
        'es5-shim/es5-sham',
        'anujs/dist/polyfill',

        // Enable automatic refresh and HMR by adding scripts,
        // not using `--hot` flag,
        // to avaoiding errors for ie8.
        // BTW ie8 can't automatic refresh or HMR.
        `webpack-dev-server/client?http://localhost:${port}/`,
        'webpack/hot/dev-server',

        './src'
      ],
      port
    });
  }

  return config;
};
