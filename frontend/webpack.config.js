const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

const terserPlugin = new TerserPlugin({
    test: /s/,
    exclude: /node_modules/
});

module.exports = {
    entry: {
        index: ['babel-polyfill', "./src/app.tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: ["babel-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        htmlPlugin
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json', '.tsx', '.jsx']
    },
    optimization: {
        minimizer: [
            terserPlugin
        ]
    }
}