const webpack = require('webpack')
const path = require('path')
const fileSystem = require('fs')
const env = require('./utils/env')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

// load the secrets
var alias = {}

var secretsPath = path.join(__dirname, ('secrets.' + env.NODE_ENV + '.js'))

if (fileSystem.existsSync(secretsPath)) {
  alias['secrets'] = secretsPath
}

module.exports = {
  entry: {
    popup: path.join(__dirname, 'src', 'js', 'popup.js'),
    options: path.join(__dirname, 'src', 'js', 'options.js'),
    background: path.join(__dirname, 'src', 'js', 'background.js'),
    content: path.join(__dirname, 'src', 'js', 'content.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  },
  resolve: {
    alias: alias,
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: [
    // expose and write the allowed env vars on the compiled bundle
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(env) }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'popup.html'),
      filename: 'popup.html',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'options.html'),
      filename: 'options.html',
      chunks: ['options']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'background.html'),
      filename: 'background.html',
      chunks: ['background']
    }),
    new WriteFilePlugin()
  ]
}
