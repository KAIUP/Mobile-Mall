<template>
  <div class="calc-bar">
    <div class="total">
      <div class="check-box">
        <check-box  :is-checked="checkAll" @click.native="isCheckAll"/>
      </div>
      <span class="check-all">全选</span>
      <span>合计：{{totlePrice}}</span>
    </div>
    <div class="calc-btn">去计算({{checkedLength}})</div>
  </div>
</template>

<script>
import CheckBox from 'components/common/checkbox/CheckBox'

export default {
  name: 'CartCalcBar',
  components: {
    CheckBox
  },
  computed: {
    totlePrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    checkAll() {
      if(this.$store.state.cartList.length === 0) 
        return false
      else {
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    }
  },
  methods: {
    isCheckAll() {
      if(this.checkAll) {  //全部选中
        this.$store.state.cartList.forEach(item => item.checked = false);
      }else {  //部分或全部不选中
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style>
  .calc-bar {
    height: 45px;
    position: fixed;
    left: 0;
    right:0;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
    background: #fff;
  }

  .total {
    line-height: 45px;
    display: flex;
    font-size: 14px;
    padding-left: 15px;
    overflow: hidden;
  }

  .check-box {
    width: 18px;
    display: flex;
    align-items: center;
  }

  .check-all {
    margin: 0 25px 0 5px;
  }

  .calc-btn {
    font-size: 15px;
    line-height: 45px;
    padding: 0 20px;
    color: #fff;
    background: #FF7F24;
  }
</style>