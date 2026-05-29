const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './assets/js/script.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist/js'),
        },
        mode: isProduction ? 'production' : 'development',
        // Add source maps for easier debugging
        devtool: isProduction ? 'source-map' : 'eval-source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '../css/style.bundle.css',
            }),
        ],
        devServer: {
            static: {
                // Serve files from the project root
                directory: path.resolve(__dirname),
            },
            port: 8080,
            open: true, // Automatically open the browser
            hot: true, // Enable Hot Module Replacement
        },
    };
};
