const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (env) => ({
  mode: 'development',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif|svg|webp)$/i,
        loader: 'file-loader',
      },
      {
        test: /\.js|json$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'PORTFOLIO',
      filename: 'remoteEntry.js',
      remotes: {
        PORTFOLIO: 'PORTFOLIO@http://localhost:8080/remoteEntry.js',
        VSCODE: 'VSCODE@http://localhost:1235/remoteEntry.js',
      },
      shared: [{ react: { singleton: true } }],
    }),
    new CopyWebpackPlugin({
      patterns: [
        'src/public/_redirects',
        // { from: 'data/', to: 'data/' },
      ],
    }),
    new MiniCssExtractPlugin({
      chunkFilename: 'styles.css',
    }),
    new HtmlWebPackPlugin({
      title: 'Harish Kumar',
      template: 'src/public/index.html',
    }),
    new webpack.DefinePlugin({ 'process.env': JSON.stringify(env.dev) }),
  ],
  devServer: {
    port: 1234,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      Components: path.resolve(__dirname, './src/components'),
      Icons: path.resolve(__dirname, './src/icons'),
      Images: path.resolve(__dirname, './src/images'),
    },
  },
});
