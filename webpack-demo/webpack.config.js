const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js'
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
            exclude: /node_modules/,
            use: [{
                loader: 'style-loader',
                options: {
                    // insert: 'top'
                }
            }, 'css-loader']
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
        },
        {
            test: /\.less/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
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
        })
    ],
    // 开发服务器配置
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // 配置开发服务器运行时的文件根目录，也就是静态资源访问地址
        host: 'localhost',
        port: '8086',
        compress: true
    }
};