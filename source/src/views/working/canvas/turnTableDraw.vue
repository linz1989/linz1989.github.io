<template>
  <div class="page">
    <h2 class="title">转盘抽奖的前端实现</h2>
    <div class="content">
      <p></p>
    </div>
    <footer>2016年12月07日</footer>
  </div>
</template>
<script>
  module.exports = {
    mounted: function () {
      this.$nextTick(function () {
        var codes = document.querySelectorAll('code')
        if (codes.length > 0) {
          for (var k = 0; k < codes.length; k++) {
            hljs.highlightBlock(codes[k])
          }
        }
      })
    },
    methods: {

    }
  }
</script>
