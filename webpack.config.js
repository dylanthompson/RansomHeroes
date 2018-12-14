const path = require('path');

module.exports = {
    mode: "development",
  entry: "./js/Canvas.js", // string | object | array  // defaults to './src'
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "game.js", // string    // the filename template for entry chunks
    library: "RansomHeroes", // string,
    libraryTarget: "umd", // universal module definition    // the type of the exported library
 },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "js")
        ],
        exclude: [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, "dest")
        ],
        loader: "babel-loader",
      }
    ]
  }
}
    