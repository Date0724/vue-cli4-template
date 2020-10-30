module.exports = {
  outputDir: 'dist',
  assetsDir: 'h5/static',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://agent-tool.airdoc.com', // 代理地址
        changeOrigin: true,
        ws: true // 是否启用websockets
      }
    }
  },
  // chainWebpack: config => {
  //   config
  //   .plugin('webpack-bundle-analyzer')
  //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  // },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'sweetalert': 'sweetalert',
      'view-design': 'ViewDesign'
    }
  }
}
