const path = require('path');
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin.js');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new CopyrightWebpackPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};