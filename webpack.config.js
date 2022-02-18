// @ts-nocheck
__webpack_base_uri__ = 'https://localhost:3000';

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const fileName = (ext) => (isDev ? `assets/bundle.${ext}` : `assets/bundle.[hash].${ext}`);

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-flow',
          '@babel/preset-react',
        ],
      },
    },
  ];

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, './'),
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: fileName('js'),
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: isDev,
    overlay: true,
    open: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: path.resolve(__dirname, 'build/public'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.yaml$/,
        use: 'js-yaml-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(png|jp(e*)g|gif|woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
