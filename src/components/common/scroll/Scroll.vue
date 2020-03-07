<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    
    // 2.监听滚动位置 
    this.scroll.on('scroll',(position) => {
      //将实时侦测滚动位置使用自定义事件发出去，哪里需要侦测滚动就使用该事件及其参数
      this.$emit('probeScroll',position)
    })
    // 3.上拉加载更多
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    //封装 this.scroll.scrollTo()方法让父组件调用
    // this.scroll.scrollTo(0,0)  返回页面顶部(有3个参数 x:返回到x轴的位置 ，y:返回到y轴的位置 ，time:返回过程所需的时间)
    scrollTo(x,y,time) {
      this.scroll && this.scroll.scrollTo(x,y,time) 
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      //this.scroll &&  判段是否有scroll对象，没有则不执行后面的代码
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll.y ? this.scroll.y : 0
    }
  }
  
}
</script>

<style>

</style>