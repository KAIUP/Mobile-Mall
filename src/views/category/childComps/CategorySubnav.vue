<template>
  <scroll class="subnav-scroll">
    <div class="subnav">
      <div v-for="(item,index) in category" :key="index" class="subnav-title" @click="titleClick(index)" :class="{current:index === currentIndex}">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'CategorySubnav',
  components: {
    Scroll
  },
  props: {
    category: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('currentClick',index)
    }
  }

}
</script>

<style>
  .subnav-scroll {
    height: 100%;
  }

  .subnav {
    width: 100px;
    height: 100%;
    font-size: 15px;
    text-align: center;
    background: #f7f7f7;
  }

  .subnav-title {
    padding: 12px 0;
  }

  .current {
    color: var(--color-high-text);
    font-weight: 600;
    background: #fff;
    border-left: 4px solid var(--color-tint);
  }
</style>