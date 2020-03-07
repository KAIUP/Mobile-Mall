<template>
  <div id="detail">
    <detail-navbar class="detail-navbar" @titleClick="titleClick" ref="navbar"/>
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @probeScroll="probeScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop :shop="shop"/>
      <detail-img-show :detail-info="detailInfo" @imgListLoad="imgListLoad"/>
      <detail-params :item-params="itemParams" ref="params"/>
      <detail-comment :comment="comment" ref="comment"/>
      <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <detail-bottombar @addToCart="addToCart"/>
    <back-top @click.native="backTop" v-show="isShow"/>
    <toast :message="message" :toast-show="toastShow"/>
  </div>
</template>

<script>
import DetailNavbar from './childComps/DetailNavbar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShop from './childComps/DetailShop'
import DetailImgShow from './childComps/DetailImgShow'
import DetailParams from './childComps/DetailParams'
import DetailComment from './childComps/DetailComment'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import DetailBottombar from './childComps/DetailBottombar'
import Toast from 'components/common/Toast'

import {getDetail,Goods,Shop,getRecommend} from 'network/detail'
import {imgListenerMixin,backTopMixin} from 'commonjs/mixin'
import {debouce} from 'commonjs/utils'

export default {
  name: 'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailImgShow,
    DetailParams,
    DetailComment,
    GoodsList,
    Scroll,
    DetailBottombar,
    Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      comment: {},
      recommend: [],
      themeTopY: [],
      getThemeTopY: null,
      currentIndex: 0,
      toastShow: false,
      message: ''
    }
  },
  mixins: [imgListenerMixin,backTopMixin],
  created() {
    // 1.获取商品id
    this.iid = this.$route.query.iid
    /* 2.根据id请求数据 */
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result
      this.topImages = data.itemInfo.topImages
      // 3.创建商品对象并传入数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 4.创建店铺对象并传入数据
      this.shop = new Shop(data.shopInfo)
      // 5.获取详细信息
      this.detailInfo = data.detailInfo
      // 6.获取参数信息
      this.itemParams = data.itemParams
      if(data.rate.cRate!==0) {
        this.comment = data.rate.list[0]
      }
      //this.$nextTick()当DOM渲染完后回调(不包含图片)
      // this.$nextTick(() => {}
    })

    // 7.获取详情页推荐商品数据
    getRecommend().then(res => {
       this.recommend = res.data.data.list
    })
    // 8.给themeTopY赋值
    this.getThemeTopY = debouce(() => {
        this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      })
  },
  mounted() {
    
  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.imgListener)
  },
  methods: {
    imgListLoad() {
      this.newRefresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0 , -this.themeTopY[index], 200)
    },
    probeScroll(position) {
      //是否显示bacTop按钮
      this.BackTopShow(position)

      const positionY = -position.y

      let length = this.themeTopY.length
      for(let i = 0; i<length-1; i++) {
        if(this.currentIndex !== i && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) {
          this.currentIndex  = i
          this.$refs.navbar.currentIndex = this.currentIndex
        }
      }
    },
    addToCart() {
      const cartData = {}
      cartData.image = this.topImages[0]
      cartData.title = this.goods.title
      cartData.desc = this.goods.desc
      cartData.price = this.goods.realPrice
      cartData.iid = this.iid

      this.$store.dispatch('addToCart', cartData).then(res => {
        this.toastShow = true;
        this.message = res

        setTimeout(() => {
          this.toastShow = false
          this.message = ''
        },1000)
      })
    }
  }
}
</script>

<style>
  #detail {
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }

  .detail-navbar {
    position: relative;
    z-index: 9;
    background: #fff;
  }

  .detail-scroll {
    position: relative;
    height: calc(100% - 44px - 49px);
  }
</style>