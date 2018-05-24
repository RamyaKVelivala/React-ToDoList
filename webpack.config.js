const path = require('path');

//Commented this code related to ExtractTextPlugin as I am using SASS. If we want to use CSS we can uncomment it in future.
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: '../src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
      // {
      //   test: /\.(css|sass|scss)$/,
      //   use: ExtractTextPlugin.extract(
      //     {
      //       fallback: 'style-loader',
      //       use: 'css-loader!sass-loader'
      //     }
      //   )
      // }
    ]
  },
  plugins: [
       // new ExtractTextPlugin(
       //  {filename: 'style.[hash].css', disable: false, allChunks: true}
       // ),
       new MiniCssExtractPlugin({
          filename: 'style.[contenthash].css',
        }),
       new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './index.html',
        filename: 'index.html'
      }),
      new WebpackMd5Hash()
   ]
};
