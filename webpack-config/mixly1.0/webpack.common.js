const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { name } = require('../../package.json');

const ORI_DIR = process.cwd();
const DEST_DIR = path.resolve(ORI_DIR, 'dist', name);

module.exports = {
    cache: false,
    target: ['web', 'es5'],
    entry: {
        'block/sengo2': path.resolve(ORI_DIR, 'src/index.js'),
        'generator/sengo2': path.resolve(__dirname, 'generator.js'),
        'language/sengo2/zh-hans': path.resolve(__dirname, 'language/zh-hans.js'),
        'language/sengo2/zh-hant': path.resolve(__dirname, 'language/zh-hant.js'),
        'language/sengo2/en': path.resolve(__dirname, 'language/en.js')
    },
    output: {
        filename: '[name].js',
        path: DEST_DIR,
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 64 * 1024,
                    },
                },
                generator: {
                    filename: 'media/sengo2/[name]_[hash:8][ext]',
                },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { 'legacy': true }],
                            ['@babel/plugin-proposal-class-properties'],
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                },
                include: path.resolve(ORI_DIR, 'src'),
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].[hash:8].css' }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(ORI_DIR, 'origin/libraries/Sentry-Arduino'),
                    to: path.resolve(DEST_DIR, 'Sentry-Arduino'),
                    noErrorOnMissing: false
                }
            ],
        }),
    ],
    externals: {
        'blockly/core': 'Blockly',
        'profile': 'profile',
        'mixly': 'window.Mixly ? Mixly : {}'
    }
};