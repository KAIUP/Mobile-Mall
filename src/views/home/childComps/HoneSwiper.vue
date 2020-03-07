<template>
  <swiper>
     <swiper-item v-for="item in banner" :key="item.title">
       <a :href="item.link">
         <img :src="item.image" alt="" @load="imgLoad">
       </a>
     </swiper-item>
   </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props:{
    banner: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if(!this.isLoad)
      this.$emit('swiperLoad')
      this.isLoad = true
    }
  }
}
</script>

<style>

</style>