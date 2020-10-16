const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // publicPath: path.resolve(__dirname, 'dist'),
        // filename: '[name].[hash:8].js'
        publicPath: ASSET_PATH,
    },
    // 模块转换规则
    module: {
        rules: [{
            test: /\.css$/,
            // 方式1 
            // use: ['style-loader', 'css-loader']
            // 方式2
            // loader:['style-loader','css-loader']
            // 方式3
            // 因为 css-loader是解析处理css里的url路径，并将css文件转换成一个模块，
            // style-loader是 将css文件变成style标签插入到head中的。
            use: [{
                // loader: 'style-loader',
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // publicPath: '/'  
                }
            }, 'css-loader', 'postcss-loader'],
            include: path.join(__dirname, './src'),
            exclude: /node_modules/
        },
        
        {
            test: /\.less/,
            use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader', 'less-loader']
        }, {
            test: /\.scss/,
            use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
            test:/\.(png|jpg|gif|svg|bmp)$/,
            use:{
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024,
                    outputPath: 'images/' // 注意这里的打包之后的路径
                }
            }
        }
        ]
    },
    // 插件
    plugins: [
        //自动产出HTML模版
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            hash: true,
            minify: {
                removeAttributeQuotes: true,
                removeComments: true 
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[hash].css',
            chunkFilename: "style/[id].css"
        })
    ],
    // 开发服务器配置
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'), // 配置开发服务器运行时的文件根目录，也就是静态资源访问地址
        host: 'localhost',
        port: '8086',
        compress: true
    }
};