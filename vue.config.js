module.exports = {
    configureWebpack: { // 在这里重写 webpack 的配置
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('src'),
            }
          }
    }
  }