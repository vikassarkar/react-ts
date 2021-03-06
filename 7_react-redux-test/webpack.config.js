/**
 * 
 * Work on webpack dashboard & chunks of scss/css
 * 
 */
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outDir = path.join(__dirname, "./build/");
const testDir = path.resolve(__dirname, "./src/__test__/");
var routerConfigPath = "./src/configs/env_config.json";

const editRouterBaseConfig = (buildType) => {
    var updateFileContent = function (oldContent, contentReplaceRegx) {
        var newContent = oldContent.replace(contentReplaceRegx, function (e) {
            return buildType;
        });
        return newContent;
    };

    if (fs.existsSync(routerConfigPath)) {
        var contentReplaceRegx = new RegExp("githubBuild|devBuild", "g")
        var oldContent = fs.readFileSync(routerConfigPath, 'utf8');
        var newContent = updateFileContent(oldContent, contentReplaceRegx);
        fs.writeFileSync(routerConfigPath, newContent);
    } else {
        console.log("compiling with default devBuild config")
    }
};

const getPlugins = (env) => {
    let plugins = [
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
        new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'src/stabs/'), to: path.resolve(__dirname, 'build/stabs/') }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'my-module',
            chunks: ['bundle'],
            filename: "scripts/my-module.bundle.js",
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
        }),
        new UglifyJsPlugin({ sourceMap: false })
    ];
    return plugins;
};


module.exports = function (env) {
    //editRouterBaseConfig("githubBuild");
    return buildConfigs = {
        entry: {
            "my-module": ["./src/web/module/my-module/MyRouterLoader.tsx"],
            "react": ["react", "react-dom", "react-router", "react-router-dom"],
            "vendors": ["jquery", "reactstrap"]
        },
        output: {
            path: outDir,
            publicPath: "/",
            pathinfo: true,
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
                //{ test: /\.json$/, enforce: "pre", use: ['json-loader'] },
                { test: /\.(gif|png|jpe?g)$/i, use: ["file-loader?limit=20000&name=[name].[ext]&publicPath=/assets/images/&outputPath=assets/images/", "image-webpack-loader"] },
                { test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]' },
                { test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]' },
                { test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]' },
                { test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]' },
                { test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]' },
                {
                    test: /\.(css|scss|sass)$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader", "sass-loader"]
                    })
                }
            ]
        },
        plugins: getPlugins(env),
        performance: {
            hints: "warning", // enum
            maxAssetSize: 1500000, // int (in bytes),
            maxEntrypointSize: 3000000, // int (in bytes)
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
        }
    };
};