<style>
  @import './styles/page/index.css';
</style>
<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
  module.exports = {
    mounted: function () {
      this.$nextTick(function () {
        document.querySelector('body>header').style.opacity = 1
        document.querySelector('body>footer').style.opacity = 1
      })
    }
  }
</script>
