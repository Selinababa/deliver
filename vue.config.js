module.exports = {
    devServer: {
      proxy: {
        '/web': {
          target: 'https://dev.mozigu.net/school_helper/api',
          changeOrigin: true
        }
      }
    }
  }
