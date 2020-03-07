<template>
  <div class="bottom-bar">
    <div class="bottom-bar-left">
      <div>
        <i class="icon service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-bar-right">
      <div class="cart" @click="addToCart">加入购车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottombar',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style>
  .bottom-bar {
    height: 49px;
    font-size: 14px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 1px 3px rgba(100,100,100,.8);
    display: flex; 
    justify-content: space-between;
    z-index: 9;
  }

  .bottom-bar-left {
    padding: 0 15px;
  }

  .bottom-bar-left, .bottom-bar-right{
    width: 50%;
    display: flex;
    justify-content: space-between;
    
  }
  
  .bottom-bar-left .icon {
    display: block;
    width: 24px;
    height: 24px;
    margin: 4px 0 0 2px;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
  }

  .bottom-bar-left .service {
    background-position: 0 106px;
  }

  .bottom-bar-left .shop {
    background-position: 0 220px;
  }
  
  .bottom-bar-right .cart,.buy {
    width: 50%;
    text-align: center;
    line-height: 49px;
  }

  .bottom-bar-right .cart {
    background: Gold;
    color: #333;
  }

  .bottom-bar-right .buy {
    color: #fff;
    background: var(--color-high-text);
  }
</style>