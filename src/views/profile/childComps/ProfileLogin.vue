<template>
  <div class="login-info">
    <div class="user-avatar">
      <img src="~assets/img/profile/user-avatar.png" alt="">
    </div>
    <div class="user-login">
      <a href="javascript:;">登陆</a>
      <span>/</span>
      <a href="javascript:;">注册</a>
      <div class="binding">
        <img src="~assets/img/profile/iphone.png" alt="">
        暂无绑定手机</div>
    </div>
    <div class="more">
      <img src="~assets/img/profile/gt.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>
  
<style>
  .login-info {
    background: var(--color-tint);
    display: flex;
    justify-content: space-between;
    padding: 12px 20px;
    align-items: center;
  }

  .user-login {
    position: absolute;
    left: 80px;
  }

  .user-login,a{
    font-size: 16px;
    color: #fff;
  }

  .binding{
    display: flex;
    align-items: center;
  }

  .user-avatar img {
    width: 45px;
    height: 45px;
  }

  .binding {
    margin-left: -5px;
    font-size: 13px;
  }

  .binding img {
    width: 22px;
    height: 22px;
  }

  .more img{
    width: 22px;
    height: 22px;
  }
</style>