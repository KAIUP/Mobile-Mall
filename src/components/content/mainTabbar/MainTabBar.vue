<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#FF6A6A">
        <img slot="item-icon" src="~assets/img/tabbar/home1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home2.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#FF6A6A">
        <img slot="item-icon" src="~assets/img/tabbar/fl1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/fl2.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#FF6A6A">
        <img slot="item-icon" src="~assets/img/tabbar/cart1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/cart2.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#FF6A6A">
        <img slot="item-icon" src="~assets/img/tabbar/mine1.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/mine2.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style>

</style>