module.exports = {
    publicPath: './',
    assetsDir: 'static',
    outputDir: 'dist',
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: 'localhost',
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:8089',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {'^/api': ''}
            }
        }
    },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 以设计稿750为例， 750 / 10 = 75
                        remUnit: 37.5
                    })
                ]
            }
        }
    }
    
}