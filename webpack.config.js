const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    main: './src/index'
  },
  module: {
    rules: [
      { test: /\.js?$/,
          use: [{loader: 'babel-loader'}],
          exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
    ]
  },
  resolve: {
    extensions: ['.js','.scss']
  },
  output: {
    path: path.join(__dirname, '/lib/app/public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './lib/app/views/',
    hot: true,
    port: 8080,
    headers: {"Access-Control-Allow-Origin": "*"},
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
