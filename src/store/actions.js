export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      //查找数组中是否有该元素，return 为 true 的话会返回该元素
      let cartGoods = context.state.cartList.find(function(item) {
        return item.iid === payload.iid
      })

      if (cartGoods) {
        resolve('加入购物车成功 ~')
        context.commit('addCount', cartGoods)
      } else {
        resolve('加入购物车成功 ~')
        payload.count = 1
        context.commit('addCart', payload)
      }
    })
  }
}
