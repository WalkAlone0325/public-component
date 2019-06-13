const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',

  // 生产环境构建文件的目录 defalut: dist
  outputDir: 'dist',

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: 'index.html',

  // 指定生成文件名中包含 hash default: true,如果你无法使用VueCLI生成的 index HTML，你可以通过将这个选项设为false来关闭文件名哈希
  filenameHashing: true,

  // 是否保存时 lint 代码  在生产构建时禁用 eslint-loader
  lintOnSave: process.env.NODE_ENV === 'production',

  /* 是否使用编译器 default: false */
  runtimeCompiler: false,

  // 打包时是否生成 .map 文件，defalut: true，设为 false 可加速打包
  productionSourceMap: true,

  // 上下两种方式，看自己习惯
  // Type: Object | Function
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'assets': '@/assets',
  //       'components': '@/components'
  //     }
  //   }
  // },
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，_c 表示 'src/components'
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))

    // 设置添加loader
    // 此处以 iview 的配置 loader 为例，解决 Vue 限制的两个标签 Switch 和 Circle
    /* config.module
      .rule('vue')
      .use('iview')
      .loader('iview-loader')
      .option({ prefix: false }) */
  },

  // css相关配置
  css: {
    /* 启用 CSS modules for all css / pre-processor files. */
    modules: false,
    /* 是否使用css分离插件 Default: 生产环境下是 true，开发环境下是 false */
    extract: true,
    /* 开启 CSS source maps? */
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      sass: {
        // 这里的选项会传递给 sass-loader 假设你有 `src/variables.scss` 这个文件
        // data: `@import "~@/variables.scss";`
      }
    }
  },

  // webpack-dev-server 相关配置
  devServer: {
    // 端口号
    port: 8080,
    // 是否自动启动浏览器
    open: false,
    // 配置跨域
    proxy: {
      /* '/api': {
        // 代理路径 例如 https://baidu.com
        target: 'https://baidu.com',
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        } */
    }
    /* 配置多个跨域
    '/foo': {
      target: '<other_url>'
    } */
  },
  // PWA 插件
  pwa: {},
  // 第三方插件配置
  pluginOptions: {}
}
