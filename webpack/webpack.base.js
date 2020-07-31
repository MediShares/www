const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
//利用glob.sync实现多页面打包
const glob = require('glob-all');
const config = require('./config');

// webpack基础配置
const baseConf = process.env.NODE_ENV === 'production' ? config.pro : config.dev;

//引入语言包
const i18n = {
  cn: require('./static/lang/cn.js'),
  en: require('./static/lang/en.js'),
  ko: require('./static/lang/ko.js')
}

//动态设置entry，htmlwebpackplugin
const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];
  // 官网页面
  const entryFiles = glob.sync([path.join(__dirname, './src/*/index.js')]);
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = entryFile;

    Object.keys(i18n).map(lang => {
      HtmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          filename: baseConf.distPath + lang + '/' + pageName + '.html',
          template: path.join(__dirname, `src/${pageName}/index.html`),
          chunks: [pageName],
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
          },
          // 通过CommonsChunkPlugin持续处理多个块的必要条件
          chunksSortMode: 'dependency',
          i18n: i18n[lang],
          lang: lang,
          path: '/'
        })
      )
    })
  })

  return { entry, HtmlWebpackPlugins }
}

const { entry, HtmlWebpackPlugins } = setMPA();

module.exports = {
  mode: baseConf.mode, //开发模式还是生产模式
  devtool: baseConf.devtool, //将编译后的代码映射回原始源代码以便追踪错误和警告
  entry: entry, //入口文件
  resolve: {
    alias: { //别名
      'static': path.join(__dirname, 'static'),
      'jquery': 'jquery'
    }
  },
  module: { //模块配置,主要用于一些loader的使用，用于转换编译less，sass，图片等文件
    rules: [{
        test: /\.css$/,
        use: [
          MinicssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          }
        ]
      },
      {
        // 对模版文件使用loader
        test: /\.ejs$/,
        use: 'ejs-loader'
      }, {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
            outputPath: baseConf.imgCssPath,
            publicPath: baseConf.imgCssPath
          }
        }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]',
            outputPath: baseConf.fontsPath,
            publicPath: baseConf.fontsPath
          }
        }],
      }
    ]
  },
  plugins: HtmlWebpackPlugins.concat([ //配置插件
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': "jquery"
    }),
    // 提取css
    new MinicssExtractPlugin({
      filename: baseConf.cssOutputPath
    }),
    new CleanWebpackPlugin(),
    // 复制自定义静态资源
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'static/img'), //定义要拷贝的源文件
      to: baseConf.imgCopyPath, //定义要拷贝到的目标文件夹
      ignore: ['.*'] //忽略拷贝指定的文件
    }])
  ])
}