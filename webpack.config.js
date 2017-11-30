const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    entry: path.resolve(__dirname, "src/app.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }, {
            test: /\.vue$/,
            use: ["vue-loader"]
        }, {
            test: /\.(ttf|woff|woff2|eot|svg)$/,
            use: ["file-loader"]
        }]
    }
}