<template>
  <div class="tab-content">
    <div v-for="(item,index) in categoryData" :key="index" class="show-content">
      <img v-lazy="item.img" alt="" @load="imgLoad">
      <div class="goods-info">
        <p class="title">{{item.title}}</p>
        <span class="price">￥{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'TabContent',
  props: {
    categoryData: {
     type: Array,
     default() {
       return []
     }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }

}
</script>

<style>
  .tab-content {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 10px;
  }

  .show-content {
    width: 48%;
    position: relative;
    padding-bottom: 45px;
    
  }

  .show-content img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
  }

   .goods-info .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect{
    position: relative;
  }

  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>