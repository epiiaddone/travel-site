//webpack wants an absolute path not a relative one
var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js",
  },
  output:{
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename:"[name].js"
  },
  module:{
    rules:[
      {
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
