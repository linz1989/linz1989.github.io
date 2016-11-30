<style>
  @import './styles/page/index.css';
</style>
<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <spinner v-show="global.loading"></spinner>
  </div>
</template>
<script>
  import Spinner from './components/spinner'
  import { Global } from './libs/global'

  module.exports = {
    data: function () {
      return {
        global: Global
      }
    },
    components: {
      spinner: Spinner
    },
    mounted: function () {
      this.$nextTick(function () {
        this.global.loading = true
        document.querySelector('body>header').style.opacity = 1
        document.querySelector('body>footer').style.opacity = 1
      })
    }
  }
</script>
