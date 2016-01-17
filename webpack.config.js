var path = require('path');
var webpack = require('webpack');
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor'
});
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    vendor: ['angular'],
    app: path.resolve(__dirname, 'app/scripts/app.js')
  },
  output: {
    path: path.resolve('dist/'),
    publicPath: '/dist/',
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.html$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      loader: 'raw'
    }, {
      test: /\.(css|scss)/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }]
  },
  resolve: {
    extensions: ['', '.js', '.html']
  },
  plugins: [
    commonsChunkPlugin,
    new ExtractTextPlugin('css/app.css')
  ]
};
