var path = require('path');
var webpack = require('webpack');

var nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [nodeModulesPath],
    extensions: ['', '.js', '.jsx', 'less']
  },
  resolveLoader: {
    root: nodeModulesPath
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }]
  }
};
