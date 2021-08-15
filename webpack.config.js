const path = require('path');
var glob = require('glob');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  mode: 'production',
  entry: glob.sync('./source/_assets/components/**.js').reduce(function (obj, el) {
    obj[path.parse(el).name] = el;
    return obj
  }, {}),
  output: {
    path: path.resolve(__dirname, './public/_assets/components'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
            ]
          }
        }
      }
    ]
  },
};