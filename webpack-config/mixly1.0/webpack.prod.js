const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libInfo = `<!--
  type="company"
  block="block/sengo2.js"
  generator="generator/sengo2.js"
  lib="Sentry-Arduino"
  media="media/sengo2"
  language="language/sengo2"
-->
<script type="text/javascript" src="../../blocks/company/sengo2.js"></script>`;


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
                minify: false,
                publicPath: `../../`,
                excludeChunks: [
                    'language/sengo2/zh-hans',
                    'language/sengo2/zh-hant',
                    'language/sengo2/en',
                    'block/sengo2',
                    'generator/sengo2'
                ],
                templateParameters: (compilation, assets, assetTags, options) => {
                    assetTags.headTags.push(libInfo);
                    return {
                        compilation,
                        webpackConfig: compilation.options,
                        htmlWebpackPlugin: {
                            tags: assetTags,
                            files: assets,
                            options
                        }
                    };
                }
            })
        ]
    }
});
