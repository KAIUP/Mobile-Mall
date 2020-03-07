export default {
  addCount(state, payload) {
    payload.count++
  },
  addCart(state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  }
}