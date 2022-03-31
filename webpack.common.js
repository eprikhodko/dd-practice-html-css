const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      /* 
      without html-loader images in html files won't load
      with html-loader image src changes from <img src="../../assets/img/js-logo.png" alt="some alt" />
      to <img src="assets/b591aaa85de6397b1e15.png" alt="some alt" />, and images load up fine 
      */
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // https://webpack.js.org/guides/asset-modules/#custom-output-filename
        generator: {
          filename: 'assets/img/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        // https://webpack.js.org/guides/asset-modules/#custom-output-filename
        generator: {
          filename: 'assets/fonts/[hash][ext][query]',
        },
      },
    ],
  },
};
