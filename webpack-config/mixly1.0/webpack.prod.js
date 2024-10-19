const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libInfo = `<!--
  type="company"
  block="block/sentry.js"
  generator="generator/sentry.js"
  lib="Sengo2"
  media="media/sentry"
  language="language/sentry"
-->
<script type="text/javascript" src="../../blocks/company/sentry.js"></script>`;


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
                    'language/sentry/zh-hans',
                    'language/sentry/zh-hant',
                    'language/sentry/en',
                    'block/sentry',
                    'generator/sentry'
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
