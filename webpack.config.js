import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'excel-formula-beautifier.js',
    library: {
      name: 'ExcelFormulaBeautifier',
      type: 'umd',
      export: 'default',
    },
    globalObject: 'this',
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
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join('dist'),
    },
    port: 3001,
    hot: true,
  },
  mode: 'development',
};

export default config;
