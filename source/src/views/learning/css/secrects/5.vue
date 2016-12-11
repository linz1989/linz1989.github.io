<template>
  <div class="page">
    <h2 class="title">《CSS 揭秘》笔记之五：字体排印</h2>
    <div class="content">
      <h3 class="title">连字符断行</h3>
      <p>CSS中的</p>
      <footer>2016年12月05日</footer>
      </div>
  </div>
</template>
<script>
  import { Global } from '../../../../libs/global'

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
      Global.setArticleNavMenu('learning-css-secrects-5')
    }
  }
</script>
