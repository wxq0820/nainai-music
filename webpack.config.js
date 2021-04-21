const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/index.js',
        list: './src/js/list.js',
        music: './src/js/music.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            [require.resolve('@babel/preset-env'), { modules: false }]
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        // new ExtractTextWebpackPlugin({
        //     filename: '[name].min.css',
        //     allChunks: true // 一开始所有css都打包
        // }),
        new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            chunks: ['index'],
            inject: 'head',
            minify: {  // 压缩html
                collapseWhitespace: true   // 空格
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/page/list.html'),
            filename: 'list.html',
            chunks: ['list'],
            inject: 'head',
            minify: {  // 压缩html
                collapseWhitespace: true   // 空格
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/page/music.html'),
            filename: 'music.html',
            chunks: ['music'],
            inject: 'head',
            minify: {  // 压缩html
                collapseWhitespace: true   // 空格
            }
        })
    ]

}