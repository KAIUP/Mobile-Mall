<template>
  <div class="detail-shop" v-if="Object.keys(shop).length !== 0">
    <div class="shopInfo-name">
        <img :src="shop.logo" alt="">
        <span>{{shop.name}}</span>
    </div>
    <div class="shopInfo-desc">
      <div class="shopInfo-desc-left">
        <div class="shop-sells">
          <span class="shop-data">{{shopSell}}</span>
          <div>总销量</div>
        </div>
        <div class="shop-goodsCount">
          <span class="shop-data">{{shop.goodsCount}}</span>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shopInfo-desc-right">
        <div v-for="item in shop.score" :key="item.name" class="shop-score">
          <span class="eval-type">{{item.name}}</span>
          <span class="eval-score" :style="{color:item.score>=4.8?'red':'green'}">{{item.score}}</span>
          <span class="high-low" :class="{better:item.isBetter == true}">{{item.isBetter?'高':'低'}}</span>
        </div>
      </div>
    </div>
    <button class="enter-shop">进店逛逛</button>
  </div>
</template>

<script>
export default {
  namee: 'DetailShop',
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    shopSell() {
      return this.shop.sells >= 10000 ? (this.shop.sells/10000).toFixed(1) + '万': this.shop.sells
    }
  }
}
</script>

<style>
  .detail-shop {
    padding: 25px 8px 15px;
    border-bottom:5px solid #eee;
  }

  .shopInfo-name {
    display: flex;
    align-items: center;
  }

  .shopInfo-name img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .shopInfo-desc {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .shopInfo-desc-left {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .shop-sells {
    margin: -1px 10px 0 0;
  }

  .shop-score {
    margin: 10px 0;
  }

  .eval-score {
    margin: 0 12px;
  }

  .high-low {
    float: right;
    color: #fff;
    background: green;
  }

  .shop-data {
    display: inline-block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
  }
  
  .better {
    background: red;
  }

  .enter-shop {
    display: block;
    outline: none;
    border: 0;
    background: #eee;
    padding: 5px 30px;
    border-radius: 4px;
    margin: auto;
  }
</style>