const path = require('path')
const nodeExternals = require('webpack-node-externals')

const clientConfig = {
    entry: './src/client.tsx',
    mode: 'production',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        publicPath: 'public',
        filename: 'client.js',
        path: path.resolve(__dirname, 'public'),
    },
}

const serverConfig = {
    entry: './src/server.tsx',
    // target: 'node',
    externals: [nodeExternals()],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        publicPath: 'public',
        filename: 'server.js',
        path: path.resolve(__dirname + 'public'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        hot: true,
        port: 8080,
    },
}

module.exports = [clientConfig, serverConfig]
