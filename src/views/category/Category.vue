<template>
  <div id="category">
    <nav-bar class="category-navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category-detail">
      <category-subnav :category="category" @currentClick="currentClick"/>
      <scroll class="category-scroll" ref="scroll">
        <div class="content-right">
          <category-content :content="content" @imageLoad="imageLoad"/>
          <tab-control :titles="['综合','新品','销量']" class="tab-title" @tabClick="tabClick" v-if="Object.keys(content).length!==0"></tab-control>
          <tab-content :categoryData="showcategory" @imgLoad="imgLoad"/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CategorySubnav from './childComps/CategorySubnav'
import CategoryContent from './childComps/CategoryContent'
import TabControl from 'components/content/tabControl/TabControl'
import TabContent from './childComps/TabContent'

import {getCategory,getSubCategory,getCategoryDetail} from 'network/category'

export default {
  name: 'Category',
  components: {
     NavBar,
     Scroll,
    CategorySubnav,
    CategoryContent,
    TabControl,
    TabContent
  },
  data() {
    return {
      category: [],
      content: [],
      categoryData: {},
      currentIndex: -1,
      currentType: 'pop'
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  created() {
    this._getCategory()
  },
  computed: {
    showcategory() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    /*事件监听*/
    imageLoad() {
      this.$refs.scroll.refresh()
    },
    imgLoad() {
      this.$refs.scroll.refresh()
    },
    tabClick(index) {
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
    },

    /*
     网络请求
    */
    // 1.侧边栏标题数据
    _getCategory() {
      getCategory().then(res => {
      this.category = res.data.data.category.list

      for (let i = 0; i < this.category.length; i++) {
            this.categoryData[i] = {
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
  
      //默认请求第一条数据
      this._getSubCategory(0)
      })
    },

    // 2.分类商品数据
    _getSubCategory(index) {
      this.currentIndex = index
      const maitKey = this.category[index].maitKey;
      getSubCategory(maitKey).then(res => {
         this.content = res.data.data.list

         this._getCategoryDetail('pop')
         this._getCategoryDetail('new')
         this._getCategoryDetail('sell')
      })
    },

    //3.tab栏商品数据
    _getCategoryDetail(type) {
      const miniWallkey = this.category[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey,type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res.data
        this.categoryData = {...this.categoryData}
      })
    },

    /* 事件响应 */
    currentClick(index) {
      this._getSubCategory(index)
      this.$refs.scroll.scrollTo(0,0)
      // this.$nextTick(() => {
      //   this.$refs.scroll.refresh()
      //  })
    }
  }
}
</script>

<style>
  #category {
    height: 100vh;
  }

  .category-navbar {
    position: relative;
    background: var(--color-tint);
    color: #fff;
    font-size: 16px;
    z-index: 9;
  }

  .category-scroll {
    flex: 1;
    height: 100%;
  }

  .category-detail {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 49px;
  }

  .tab-title {
    font-size: 16px;
  }
</style>