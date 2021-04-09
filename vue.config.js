const webpack = require('webpack')
module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '127.0.0.1',
        port: 9876,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        before: app => {}
    },
    publicPath:"./",
    outputDir:"dist",
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    chainWebpack: config => {
        config.module
        .rule('md')
        .test(/\.md$/)
        .use('html-loader')
        .loader('html-loader')
        .end()
        .use('markdown-loader')
        .loader('markdown-loader')
        .end()
    }
}
