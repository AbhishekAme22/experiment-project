const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/experiment-project/', // Set publicPath for GitHub Pages
  devServer: {
    host: '0.0.0.0',
    port: 8081
  }
})
