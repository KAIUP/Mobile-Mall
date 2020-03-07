<template>
  <div id="home">
   <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
   <tab-control v-show="isFixed" :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl1"/>
   <scroll class="scroll" ref="scroll" :probe-type="3" :pull-up-load="true" @probeScroll="probeScroll" @pullingUp="pullingUp">
   <home-swiper :banner="banner" @swiperLoad="swiperLoad"/>
   <recommend :recommend="recommend"/>
   <featrue/>
   <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"/>
   <goodsList :goods="showGoods"/>
   </scroll>
   <back-top @click.native="backTop" v-show="isShow"/> <!--click.native(直接监听组件的原生点击)-->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import {debounce} from 'commonjs/utils'

import HomeSwiper from './childComps/HoneSwiper'
import Recommend from './childComps/Recommend'
import Featrue from './childComps/Feature'

import {getHomeData,getHomeGoods} from 'network/home'
import {imgListenerMixin,backTopMixin} from 'commonjs/mixin'

export default {
  name: 'Home',
  components:{
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    Recommend,
    Featrue
  },
  data(){
    return {
      banner:[],
      recommend:[],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isFixed:false,
      saveY: 0,
    } 
  },
  mixins: [imgListenerMixin,backTopMixin],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    //进入该页面时的回调函数
    //回到离开前保存的Y值的位置
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //离开该页面时的回调函数
    //1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    
    //2.取消全局事件的监听
    this.$bus.$off('itemImgLoad', this.imgListener)
  },
  created() {
    //将网络请求getHomeData()封装到methods中再调用methods中的getHomeData()（之所以要在created中调用是因为网络请求需要在组件创建好的时候发送）
    this.getHomeData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 图片加载事件监听
  },
  methods: {
    /* 
    *事件监听相关方法 
    */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    probeScroll(position) {
      //判断backTop是否显示
      this.BackTopShow(position)
      //决定tabControl是否吸顶
      this.isFixed = (-position.y) > this.tabOffsetTop
    },
    //上拉加载更多
    pullingUp() {
      this.getHomeGoods(this.currentType)
    },
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    

    /* 
    *网络请求相关方法 
    */
    getHomeData(){
      getHomeData().then(res => {
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  }

}
</script>

<style>
  #home {
    height: 100vh; /* vh -> viewport 视口 (可以直接看到的界面高度为100vh) */ 
  }

  .home-nav {
    position: relative;;
    top: 0;
    left: 0;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
    z-index: 9;
  }

  .tab-control {
    position: relative;
    background: #fff;
    z-index: 9;
  }

  .scroll {
    position: absolute;
    top: 44px;
    bottom:49px;
    left: 0;
    right: 0;
  }
</style>