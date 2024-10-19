const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('../../package.json');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new HtmlWebpackPlugin({
                inject: false,
                template: path.resolve(process.cwd(), 'src/template.xml'),
                filename: 'Sengo2.xml',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
                publicPath: `./libraries/ThirdParty/${name}/`,
                excludeChunks: ['language/zh-hans', 'language/zh-hant', 'language/en']
            })
        ]
    }
});
