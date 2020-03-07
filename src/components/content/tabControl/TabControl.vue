<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:index===currentIndex}" @click="isCurrent(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    isCurrent(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    height: 40px;
    font-size: 15px;
    text-align: center;
    line-height: 40px;

  }
  .tab-control-item{
    flex: 1;

  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom:2px solid var(--color-tint);
  }
</style>