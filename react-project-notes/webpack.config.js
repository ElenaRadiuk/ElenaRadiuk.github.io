var webpack = require('webpack');
var path = require('path');



module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        host: `localhost`,
    },
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
   
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: "babel-loader",
                
                exclude: [/node_modules/, /public/],
                use: {
                   loader: 'babel-loader',
                   "query": {
                    "presets": ["@babel/preset-env", "@babel/preset-react"],
                  }
                }
            },
              {
                  test: /\.jsx$/,
                  // loader: "babel-loader",

                  exclude: [/node_modules/, /public/],
                  use: {
                      loader: 'babel-loader',
                      "query": {
                        "presets": ["@babel/preset-env", "@babel/preset-react"],
                      }
                  }
              },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                type: 'javascript/auto'
            }
        ]
    }
}