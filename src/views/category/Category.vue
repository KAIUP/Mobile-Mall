<template>
  <div id="category">
    <nav-bar class="category-navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category-detail">
      <category-subnav :category="category" @currentClick="currentClick"/>
      <scroll class="category-scroll" ref="scroll">
        <div class="content-right">
          <category-content :content="content"/>
          <tab-control :titles="['综合','新品','销量']" class="tab-title" v-if="Object.keys(content).length!==0"></tab-control>
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

import {getCategory,getSubCategory,getCategoryDetail} from 'network/category'

export default {
  name: 'Category',
  components: {
     NavBar,
     Scroll,
    CategorySubnav,
    CategoryContent,
    TabControl
   
  },
  data() {
    return {
      category: [],
      content: [],
    }
  },
  created() {
    this._getCategory()
  },
  methods: {
    /*事件监听*/
    imageLoad() {
      this.$refs.scroll.refresh()
    },

    /*
     网络请求
    */
    // 1.侧边栏标题数据
    _getCategory() {
      getCategory().then(res => {
      this.category = res.data.data.category.list

      //默认请求第一条数据
      this._getSubCategory(0)
      })
    },

    // 2.分类商品数据
    _getSubCategory(index) {
      const maitKey = this.category[index].maitKey;
      getSubCategory(maitKey).then(res => {
         this.content = res.data.data.list
      })
    },

    /* 事件响应 */
    currentClick(index) {
      this._getSubCategory(index)
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
      
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
    height: calc(100% - 44px -49px);
  }

  .category-detail {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 49px;
  }

  /* .subnav {
    flex: 1;
  } */

  .tab-title {
    font-size: 16px;
  }
</style>