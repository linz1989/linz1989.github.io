<template>
  <div class="page">
    <h2 class="title">《CSS 揭秘》笔记之四：视觉效果</h2>
    <div class="content">
      <h3 class="title">单侧投影</h3>
      <p>box-shadow的通常使用方式是指定3个长度值和一个颜色值：</p>
      <pre><code>box-shadow: 2px 3px 4px rgba(0,0,0,.5)</code></pre>
      <div class="exp shadow-1"><div></div></div>
      <p><strong>阴影的绘制原理：</strong></p>
      <p>(1)：以该元素相同的尺寸和位置，绘制一个背景色rgba(0,0,0,.5)的矩形</p>
      <p>(2)：将此矩形右移2px，下移3px</p>
      <p>(3)：使用高斯模糊算法将它进行4px的模糊处理。在阴影的边缘发生阴影色和纯透明色之间的颜色过渡长度近似于模糊半径的两倍。</p>
      <p>(4)：切除模糊后的矩形与原始元素的交集部分</p>
      <p><strong>没有任何阴影是绘制在元素的下层的。</strong>虽然阴影看起来是在元素的“后面”。</p>
      <p>要得到单侧投影的效果需要使用到box-shadow的第四个参数：<strong>扩张半径</strong>。这个参数会根据指定的值去扩大或缩小（当为负值时）投影的尺寸。</p>
      <p>使用负的扩张半径值，使它的值刚好等于模糊半径值，可以使投影的尺寸与元素的尺寸完全一致。此时使用偏移量移动投影，可以得到单侧效果。</p>
      <pre><code>background: #58a;
  box-shadow: 0 8px 4px -4px rgba(0,0,0,.5);</code></pre>
      <div class="exp shadow-2"><div></div></div>
      <p>叠加上面的效果，可以得到<strong>双侧投影：</strong></p>
      <div class="exp shadow-3"><div></div></div>
      <pre><code>background: #58a;
  box-shadow: 8px 0 4px -4px rgba(0,0,0,.5), -8px 0 4px -4px rgba(0,0,0,.5);</code></pre>
    </div>
    <footer>2016年11月20日</footer>
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
    }
  }
</script>
