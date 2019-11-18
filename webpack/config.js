module.exports = {
  pro: {
    devtool: '#none',
    mode: "production",
    // Paths
    distPath: '../../', //打包后的html文件路径
    cssOutputPath: '../css/[name].[contenthash:8].css', // html页面引入css路径为 publicPath+cssOutputPath
    imgCssPath: '../img/css', //css 引入图片路径
    imgCopyPath: '../img', //复制后的静态资源图片路径
    fontsPath: '../fonts', //fonts 通过webpack输出路径,资源的基础路径
  },
  dev: {
    devtool: '#cheap-module-source-map',
    mode: "development",
    // Paths
    distPath: './',
    cssOutputPath: '[name].css',
    imgCssPath: '',
    imgCopyPath: 'static/img',
    fontsPath: '',
  },
};