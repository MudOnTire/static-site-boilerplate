const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev');

const compiler = Webpack(config);

const server = new WebpackDevServer(compiler, config.devServer);

module.exports = server;