const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    return {
        entry: [
            'webpack/hot/dev-server',
            path.join(__dirname, '/src/js/index.js')
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: ["babel-loader", "eslint-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        argv.mode !== 'production'
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'pug-loader',
                            options: {
                                pretty: true
                            }
                        }
                    ],
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 70
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name][hash].[ext]'
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'views/index.pug'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            hot: true,
            contentBase: './dist',
            port: 3000
        },
    }
};
