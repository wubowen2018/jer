module.exports = {
    publicPath: './',
    assetsDir: 'static',
    outputDir: 'dist',
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