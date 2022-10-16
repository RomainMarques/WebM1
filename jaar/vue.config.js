const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    proxy: { // https://api.sncf.com/v1/
      '/api': {
        target: 'https://api.sncf.com/v1/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}