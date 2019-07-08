const nodeExternals = require('webpack-node-externals');

module.exports = () => ({
  target: "node",
  entry: ["./src/index.js"],
  output: {
    filename: "index.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()]
});
