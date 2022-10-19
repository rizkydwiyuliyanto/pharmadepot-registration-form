const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename:"./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: ["style-loader", "css-loader","postcss-loader", "sass-loader"]
            },
            {
                test: /\.(jp|sv|pn)g$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [htmlPlugin]
}