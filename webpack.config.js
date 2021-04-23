const path = require('path');
const nodeExternals = require('webpack-node-externals')

const clientConfig = {
  entry: './src/client/index.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: 'public',
    filename: 'client.js',
    path: path.resolve(__dirname, 'public'),
  },
};

const serverConfig = {
  entry: './src/server/index.tsx',
  target: 'node',
  externals: [nodeExternals()],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    publicPath: 'public',
    filename: 'server.js',
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = [clientConfig, serverConfig]