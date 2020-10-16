const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/';
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
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
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
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
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/static'),
                    to: path.resolve(__dirname, 'dist/static')
                }
            ]
        }),
        new CleanWebpackPlugin(),
        new TerserPlugin({
            parallel: true, // 开启多进程
        }),
        // OptimizeCSSAssetsPlugin 中加载了一个 cssnano 的东西， 
        // cssnano是PostCSS的CSS优化和分解插件，会自动采用格式很好的CSS，
        // 并通过许多优化，以确保最终的生产环境尽可能小。
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp:/\.css$/g,
            cssProcessor:require('cssnano')
        })
    ],
    // 开发服务器配置
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'), // 配置开发服务器运行时的文件根目录，也就是静态资源访问地址
        host: 'localhost',
        port: '8086',
        compress: true,
        proxy :  {
            "/api/test": {
                target: 'http://lohost:3000/', 
                secure: false,  
                changeOrigin: true, 
                pathRewrite: {
                '^/api/test': '/test'
                }
            }
        }
    }
};