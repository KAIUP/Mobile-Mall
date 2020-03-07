<template>
<!--Object.keys(goods).length !== 0 判断goods对象是否为空，为空则不进行渲染-->
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0"> 
    <p class="info-title">{{goods.title}}</p>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <del class="old-price">{{goods.oldPrice}}</del>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-serive">
      <span class="serive-item" v-for="index in goods.services.length-1" :key="index">
        <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .detail-base-info {
    padding: 0 8px;
  }

  .info-title {
    color: #333;
    font-size: 16px;
    padding: 10px 0;
  }
  
  .new-price {
    font-size: 20px;
    color: var(--color-high-text);
  }

  .old-price {
    font-size: 14px;
    color: #999;
    padding: 0 6px;
  }

  .discount {
    background-color: var(--color-high-text);
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    padding: 3px 5px;
    border-radius: 7px;
    vertical-align: top;
  }

  .info-other {
    color: #999;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    padding:15px 0 10px;
    border-bottom: 1px solid #eee;
  }

  .info-serive{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 18px 0;
    border-bottom: 1px solid #eee;
  }

  .info-serive img {
    width: 15px;
    height: 15px;
    vertical-align: -3px;
  }
</style>