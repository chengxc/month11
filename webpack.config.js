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
            loader: "vue-loader",
            options: {
                //解决一个坑，如：可以直接将img标签中的src属性的图片编译出来
                transformToRequire: {
                    video: 'src',
                    source: 'src',
                    img: 'src',
                    image: 'xlink:href'
                }
            }
        }, {
            test: /\.(ttf|woff)$/,
            use: ["file-loader"]
        }]
    }
}