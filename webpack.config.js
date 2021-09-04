const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

const configImport = (mode) => require(`./configs/webpack.${mode}`)(mode);

const commonConfig = (env) => ({
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(jpeg|jpg|png|gif|svg|webp|mp3|woff2)$/i,
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
    new CopyWebpackPlugin({
      patterns: [
        'src/public/_redirects',
        'src/public/chime.mp3',
        'src/public/favicon.ico',
        'src/public/robots.txt',
        { from: 'datas/', to: 'datas/' },
      ],
    }),
    new MiniCssExtractPlugin({
      chunkFilename: 'styles.css',
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

module.exports = (env, { mode }) => merge(commonConfig(env), configImport(mode));
