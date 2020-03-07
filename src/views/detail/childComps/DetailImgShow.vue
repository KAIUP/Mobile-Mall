<template>
  <div class="detail-img-show" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detailInfo-desc">
    <div class="top-line">
      <div class="top-line-dot"></div>
    </div>
    <div class="desc-text">{{detailInfo.desc}}</div>
    <div class="bottom-line">
      <div class="bottom-line-dot"></div>
    </div>
    <div class="desc-key">{{detailInfo.detailImage[0].key}}</div>
    </div>
    <ul class="img-list">
      <li v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="" @load="imgLoad">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailImgShow',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgListLoad')
    }
  }
}
</script>

<style>
  .detail-img-show {
    border-bottom: 5px solid #eee;
  }

  .detailInfo-desc {
    padding: 20px 15px 10px;
  }

  .top-line,.bottom-line {
    position: relative;
    width: 30%;
    border-top: 1px solid #666;
  }

  .top-line-dot,.bottom-line-dot {
    position: absolute;
    top: -5px;
    width: 5px;
    height: 5px;
    background: #666;
  }

  .top-line-dot {
    left: 0
  }

  .bottom-line-dot {
    right: 0;
  }

  .bottom-line,.bottom-line-dot {
    float: right;
  }

  .desc-text {
    padding: 15px 0;
    color: #999;
    font-size: 13px;
  }

  .desc-key {
    font-size: 16px;
  }

  .img-list img{
    width: 100%;
  }
</style>