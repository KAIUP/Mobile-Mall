<template>
  <div v-show="toastShow" class="toast">
    <p class="message">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    toastShow: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 6px 12px;
    background: rgba(0, 0, 0, .7);
    border-radius: 5px;
    transform: translate(-50%,-50%);
  }

  .message {
    font-size: 16px;
    color: #fff;
  }
</style>