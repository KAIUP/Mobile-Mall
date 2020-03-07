<template>
  <div id="cart">
    <nav-bar class="cart-navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list/>
    <cart-calc-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartCalcBar from './childComps/CartCalcBar'
import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartCalcBar
  },
  computed: {
   ...mapGetters(['cartLength'])
  }
}
</script>

<style>
  #cart {
    height: 100vh;
  }

  .cart-navbar {
    background: var(--color-tint);
    color: #fff;
    font-size: 16px;
    position: relative;
    z-index: 9;
  }
</style>