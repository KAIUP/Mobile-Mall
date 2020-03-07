<template>
  <div id="profile">
    <nav-bar class="profile-navbar">
      <div slot="center" class="top-text">我的信息</div>
    </nav-bar>
    <profile-login/>
    <profile-calc/>
    <profile-info/>
    <profile-other/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileLogin from './childComps/ProfileLogin'
import ProfileCalc from './childComps/ProfileCalc'
import ProfileInfo from './childComps/ProfileInfo'
import ProfileOther from './childComps/ProfileOther'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileLogin,
    ProfileCalc,
    ProfileInfo,
    ProfileOther
  }

}
</script>

<style>
  .profile-navbar{
    background: var(--color-tint);
  }

  .top-text {
    color: #fff;
    font-size: 16px;
  }
</style>