process.env.NODE_ENV = 'production'

const path = require('path');
const OtimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base');
const merge = require('webpack-merge');

const proWebpackConfig = merge({
  output: { //出口文件
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../static/js'), //打包后的js文件路径
    publicPath: '/static/js/' //所有资源的基础路径，即html文件引用js路径
  },
  plugins: [
    // 压缩css
    new OtimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
  ]
}, baseWebpackConfig)

module.exports = proWebpackConfig;