const path = require("path");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const _modes = {
  dev: "development",
  prod: "production"
 }

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: _modes.prod,
  watch: true,
  plugins: [
    // Make sure that the plugin is after any plugins that add images
    new CopyWebpackPlugin([{
      from: 'public/img/'
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  module: {
    rules: [
      // {
      //   test: /.js/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: `jshint-loader`,
      //       options: {...options}
      //     }
      //   ]
      // },
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
