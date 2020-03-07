<template>
<div v-if="Object.keys(itemInfo).length !== 0">
  <div class="cart-list-item">
    <div class="cart-goods">
      <div class="check-box">
        <check-box :is-checked="itemInfo.checked" @click.native="clickCheck"/>
      </div>
      <div class="goods-image">
        <img class="image" :src="itemInfo.image"/>
      </div>
      <div class="info">
        <div class="titles">{{itemInfo.title}}</div>
        <p class="desc">{{itemInfo.desc}}</p>
        <div class="info-calc">
          <span class="price">￥{{itemInfo.price}}</span>
          <span class="count">x{{itemInfo.count}}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CheckBox from 'components/common/checkbox/CheckBox'

export default {
  name: 'CartListItem',
  components: {
    CheckBox
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    clickCheck() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style>
  .cart-goods {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }

  .cart-goods .check-box {
    width: 18px;
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .cart-goods .image {
    display: block;
    width: 72px;
    height: 92px;
    border-radius: 5px;
  }

  .info {
    font-size: 16px;
    padding: 0 10px;
    overflow: hidden;
  }

  .titles,.desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
  .info .desc {
    font-size: 14px;
    color: #777;
    padding: 15px 0;
  }

  .info .info-calc {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }

  .info .price {
    color: var(--color-high-text);
  }
</style>