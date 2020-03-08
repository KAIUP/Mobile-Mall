<template>
  <div class="category-content">
    <div class="content-item" v-for="(item,index) in content" :key="index" :content="item">
      <a :href="item.link" class="item-link">
          <img :src="item.image" alt="" class="item-image" @load="imageLoad">
        <div class="content-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CategoryContent',
  props: {
    content: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  }

}
</script>

<style>
  .category-content {
    font-size: 15px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    
    padding: 15px 10px 0 10px;
  }

  .category-content::after {
    content: '';
    display: block;
    flex: 1;
  }
  .content-item {
    width: 26%;
    margin: 0 9px 20px;
  }

  .item-image {
    width: 80%;
    margin-bottom: 5px;
  }

  .content-title {
    color: #666;
    font-size: 13px;
  }
</style>