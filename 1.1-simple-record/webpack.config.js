var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: "./app/app.js",
    output: {
        path: path.join(__dirname, "app/__bundle__"),
        publicPath: "app/__bundle__/", // relative path for github pages
        filename: "app.js", // no hash in main.js because index.html is a static page
        chunkFilename: "[hash]/js/[id].js",
        hotUpdateMainFilename: "[hash]/update.json",
        hotUpdateChunkFilename: "[hash]/js/[id].update.js"
    },
    recordsOutputPath: path.join(__dirname, "records.json"),
    watch: true,
    module: {
        loaders: [
            { test: /\.json$/,   loader: "json-loader" },
            { test: /\.coffee$/, loader: "coffee-loader" },
            { test: /\.css$/,    loader: "style-loader!css-loader" },
            { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
            { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
            { test: /\.jsx?$/,   loader: 'jsx-loader?harmony', exclude: [/node_modules/]}
        ]
    },
    amd: { jQuery: true },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 })
    ],
    fakeUpdateVersion: 0
};
function escapeRegExpString(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
function pathToRegExp(p) { return new RegExp("^" + escapeRegExpString(p)); }
