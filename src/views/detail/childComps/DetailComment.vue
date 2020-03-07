<template>
  <div class="detail-comment" v-if="Object.keys(comment).length !== 0">
    <div class="comment-top">
      <div class="title">用户评论</div>
      <div>更多</div>
    </div>
    <div class="user-info">
      <img :src="comment.user.avatar" class="avatar"/>
      <span class="uname">{{comment.user.uname}}</span>
    </div>
    <div class="comment-info">
      <p class="content">{{comment.content}}</p>
      <div class="comment-other">
        <span class="date">{{comment.created | showDate}}</span>
        <span class="type">{{comment.style}}</span>
      </div>
    </div>
    <div class="info-img">
      <img :src="item" v-for="(item,index) in comment.images"  alt="" :key="index">
    </div>
  </div>
</template>

<script>
import {formatDate} from 'commonjs/utils'

export default {
  name: 'DetailComment',
  props: {
    comment: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      //1.将时间戳转换为Data对象
      const date = new Date(value * 1000)

      //2.将Data进行格式化
      return formatDate(date,'yyyy-MM-dd')
    }
  }

}
</script>

<style>
  .detail-comment {
    padding: 0 15px 35px;
    font-size: 14px;
  }

  .comment-top {
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
  }

  .user-info {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }

  .user-info .avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 10px;
  } 

  .comment-info {
    font-size: 13px;
  }

  .comment-other {
    padding: 8px 0;
    color: #aaa;
  }

  .comment-other .date {
    margin-right: 10px;
  }

  .info-img img{
    width: 60px;
    height: 60px;
    margin-right: 3px;
  }
</style>