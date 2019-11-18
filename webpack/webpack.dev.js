process.env.NODE_ENV = 'development'

const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base')
const devWebpackConfig = merge(baseWebpackConfig, {
  output: { //出口文件
    filename: '[name].js',
  },
  devServer: { //配置开发服务功能
    // 你要提供哪里的内容给虚拟服务器用。这里最好填绝对路径。
    contentBase: path.resolve(__dirname, 'dist'),
    // 服务器的IP地址，可以使用IP也可以使用localhost
    host: 'localhost',
    // 服务端压缩是否开启，目前开不开都行，想关你就关
    compress: true,
    // 配置服务端口号，建议别用80，很容易被占用，你要是非要用也是可以的。
    port: 8081,
    clientLogLevel: 'warning',
    historyApiFallback: true, //如果为 true ，页面出错不会弹出 404 页面。
    hot: true, //修改或模块后，保存会自动更新，页面不用刷新呈现最新的效果。
  }
});
module.exports = devWebpackConfig;