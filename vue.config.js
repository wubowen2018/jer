module.exports = {
    publicPath: '', // 公共路径 默认为"/"，建议使用"./"相对路径 是配置从服务器加载资源的路径
    assetsDir: '',  // 静态文件输出目录，基于dist
    outputDir: 'dist',  // build打包输出目录
    indexPath: "index.html",  // 输出html文件名
    productionSourceMap: false, // 取消.map文件的打包，加快打包速度
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
    },
    // 相当于 webpack.config.js
    configureWebpack: (config) => {
        // process.env为环境变量，分别对应.env.development文件和.env.production文件 此处表示加快开发环境打包速度
        if (process.env.NODE_ENV !== 'production') {
            return
        }
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;	//生产环境去掉console.log
        return {  // 此处配置webpack.config.js的相关配置
            plugins: [],
            performance: {}
        };
    }
    
}