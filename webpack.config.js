'use strict'

const { resolve } = require('path')
const webpack = require('webpack')

const devServer = {
  host: 'http://127.0.0.1',
  port: 8080,
}

module.exports = {
  mode: 'development',
  cache: true,
  devtool: 'inline-source-map',
  entry: [
    `webpack-dev-server/client?${devServer.host}:${devServer.port}`,
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src/index.tsx'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: `${devServer.host}:${devServer.port}/`,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts|.tsx$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: resolve(__dirname, 'src'),
    port: devServer.port,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
