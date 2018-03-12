const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

const entries = {
  mochi: './client/index.tsx',
  server: './server/index.ts'
};

module.exports = {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/')
  },
  target: 'node',
  devtool: 'source-map',
  plugins: [
    new TSLintPlugin({
      config: path.resolve(__dirname, './tslint.json'),
      files: [
        './client/**/*.tsx',
        './server/**/*.ts'
      ]
    })
  ]
};
