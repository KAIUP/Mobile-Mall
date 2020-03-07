<template>
  <div class="profile-info">
    <div class="user-service">
      <img src="~assets/img/profile/msg.png" alt="" class="profile-icon">
      <span>我的消息</span>
    </div>
    <div class="user-service">
      <img src="~assets/img/profile/integral.png" alt="" class="profile-icon">
      <span>积分商城</span>
    </div>
    <div class="user-service">
      <img src="~assets/img/profile/vip.png" alt="" class="profile-icon">
      <span>会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',
  
}
</script>

<style>

  .profile-info {
    border-bottom: 10px solid #eee;
    font-size: 16px;
  }
  .profile-icon {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    vertical-align: -1px;
  }

  .user-service {
    padding: 12px 20px;
    border-bottom:1px solid #eee;
  }
</style>