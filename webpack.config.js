import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: isProduction
      ? 'excel-formula-beautifier.[contenthash].js'
      : 'excel-formula-beautifier.js',
    library: {
      name: 'ExcelFormulaBeautifier',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
    clean: true,
  },
  optimization: {
    minimizer: isProduction ? [new TerserPlugin()] : [],
    splitChunks: isProduction ? { chunks: 'all' } : false,
    runtimeChunk: isProduction ? 'single' : false,
    moduleIds: 'deterministic',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: isProduction && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join('dist'),
    },
    port: 3001,
    hot: true,
    open: true,
    compress: true,
  },
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
};

export default config;
