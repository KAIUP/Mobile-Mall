<template>
  <div class="profile-calc">
    <div class="balance">
      <span class="num">0.00</span><span>元</span>
      <div>我的余额</div>
    </div>
    <div class="discounts">
      <span class="num">0</span><span>个</span>
      <div>我的优惠</div>
    </div>
    <div class="integral">
      <span class="num">0</span><span>分</span>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .profile-calc {
    font-size: 14px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    border-bottom: 10px solid #eee;
  }

  .profile-calc .num {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-high-text);
  }
</style>