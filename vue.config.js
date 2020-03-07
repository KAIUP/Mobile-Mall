module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'commonjs': '@/commonjs',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}