import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';


const config = {
  mode: "development",
  entry: './_src/js/index.js',
  output: {
    path: path.resolve(__dirname, './_public'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, './_public'),
    port: 8080,
    historyApiFallback: false,
  }
};

export default config;