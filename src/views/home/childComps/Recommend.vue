<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.title" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div class="recommend-title">{{item.title}}</div>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    recommend:{
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style>
  .recommend{
    display: flex;
    font-size: 12px;
    text-align: center;
    padding:10px 0 18px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 68px;
    height: 68px;
    margin-bottom: 8px
  }

  .recommend-title {
    color: #666;
  }
</style>