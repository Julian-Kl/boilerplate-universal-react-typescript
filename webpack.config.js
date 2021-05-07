const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const clientConfig = {
    name: 'clientConfig',
    entry: './src/client.tsx',
    mode: 'production',
    target: 'web',
    output: {
        publicPath: 'public',
        filename: 'client.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'true',
        }),
    ],
}

const serverConfig = {
    name: 'serverConfig',
    entry: './src/server.tsx',
    mode: 'production',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        publicPath: '/',
        filename: 'server.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: 'false',
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ],
}

const devConfig = {
    name: 'devConfig',
    entry: './src/client.tsx',
    mode: 'development',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dev'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        index: 'index.html',
        compress: true,
        liveReload: false,
        hot: true,
        overlay: {
            warnings: true,
            errors: true,
        },
        stats: 'errors-only',
        port: 3000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}

module.exports = [clientConfig, serverConfig, devConfig]
