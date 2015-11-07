// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/js/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Liveplant',
      template: './src/index.html',
      inject: true
    })
  ],

  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
      {test: /\.scss?$/, loaders: ['style', 'css', 'sass']},
      {test: /\.(png|jpg|jpeg)$/, loader: 'file'}
    ]
  }
};
