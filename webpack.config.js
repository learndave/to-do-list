const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        // library: 'myLib',
        // libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /.svg$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.ttf$/i,
                type: "asset/resource",
            },
        ],
    },
}