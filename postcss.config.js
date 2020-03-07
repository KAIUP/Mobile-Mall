module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视窗的宽度
      viewportHright: 667, //视窗的高度
      unitPrecision: 5, //指定'px'转换为视窗单位值的保留小数位数（很多时候无法整除）
      viewportUnit: 'vw', //指定需要转换的视窗单位，建议用 vw
      selectorBlackList: ['ignore'], //指定不需要转换的类
      minPixelValue: 1, //小于或等于’1px'不转换为视窗单位
      mediaQuery: false, //允许在媒体查询中转换'px'
      // exclude: [/TabBar/, /NavBar/]
    }
  }
}