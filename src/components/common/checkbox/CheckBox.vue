<template>
  <div class="checkbox" :class="{tick:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
  .checkbox {
    overflow: hidden;
    height: 18px;
    border: 1px solid #aaa; 
    border-radius: 50%;
    font-size: 0;
  }

  .checkbox img {
    width: 16px;
    height: 16px;
    vertical-align: top;
  }

  .tick {
    background: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>