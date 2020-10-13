const webpack = require('webpack')
module.exports = {
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
