<template>
  <scroll class="cart-scroll" ref="scroll">
    <div class="cart-list" v-if="Object.keys(cartList).length !== 0">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo="item"/>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'
import {mapGetters} from 'vuex'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style>
  .cart-scroll {
    height: calc(100% - 44px - 49px - 45px);
  }
</style>