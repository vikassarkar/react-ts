
const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const outDir = path.join(__dirname, "./build/");
const testDir = path.resolve(__dirname, "./__test__");

module.exports = () => {
    return buildConfigs = {
        entry: {
            module1: ["./src/app.tsx"],
            react: ["react", "react-dom"],
            vendors: ["jquery", "reactstrap"]
        },
        output: {
            path: outDir,
            publicPath: "",
            filename: "[name].bundle.js",
        },
        watch: false,
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".scss", ".sass"]
        },
        devtool: "source-map",
        module: {
            loaders: [
                { test: /\.tsx?$/, use: ["awesome-typescript-loader"], exclude: testDir },
                { test: /\.html$/, use: "raw-loader" },
                { test: /\.json$/, use: "json-loader" },
                { test: /\.(gif|png|jpe?g)$/i, use: ["file-loader?limit=20000&name=[name].[ext]&publicPath=/&outputPath=assets/images/", "image-webpack-loader"] },
                {
                    test: /\.(css|scss|sass)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "sass-loader"]
                    })
                },
                { test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
                { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
                { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
                { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
                { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                showErrors: true,
                minify: false,
                hash: true,
                path: outDir,
                title: "React",
                template: "./src/index.ejs",
                filename: "index.html"
            }),
            new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
            new CleanWebpackPlugin([outDir], process.cwd()),
            new UglifyJsPlugin({ sourceMap: false }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'module1',
                chunks: ['bundle'],
                filename: "scripts/module1.bundle.js",
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'react',
                chunks: ['bundle'],
                filename: "scripts/react.bundle.js",
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendors',
                chunks: ['bundle'],
                filename: "scripts/vendors.bundle.js",
                minChunks: Infinity
            })
        ],
        performance: {
            hints: "warning", // enum
            maxAssetSize: 1500000, // int (in bytes),
            maxEntrypointSize: 4000000, // int (in bytes)
            assetFilter: function (assetFilename) {
                // Function predicate that provides asset filenames
                return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
            }
        },
        stats: {
            assets: true,
            colors: true,
            errors: true,
            errorDetails: true,
            hash: true
        },

    }
}