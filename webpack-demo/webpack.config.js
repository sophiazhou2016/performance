const path = require('path')

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
        }]
    },
    // 插件
    plugins: [],
    // 开发服务器配置
    devServer: {

    }
};