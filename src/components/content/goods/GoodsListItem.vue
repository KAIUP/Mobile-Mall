<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
    <p class="title">{{goodsItem.title}}</p>
    <span class="price">￥{{goodsItem.price}}</span>
    <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    itemClick() {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    }
  }
}
</script>

<style>
  .goods-item {
    width: 48%;
    padding-bottom: 45px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .goods-info{
    position: absolute;
    font-size: 14px;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;

  }

  .goods-info .title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
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