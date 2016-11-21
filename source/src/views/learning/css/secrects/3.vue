<style scoped>
  div.exp{
    height:140px;
    margin:15px auto;
    padding:20px 0;
    background: #eee;
    border-radius: 6px;
  }
  div.exp>div{
    width:310px;
    height:100px;
    margin:0 auto;
    background: #fff;
    text-align: center;
    line-height: 60px;
  }
  div.ellipse-1>div{
    background-color: #bc6060;
    border-radius: 155px / 50px;
  }
  div.ellipse-2>div{
    background-color: #bc6060;
    border-radius: 50% / 100% 100% 0 0;
  }
  div.ellipse-3>div{
    width:200px;
    background-color: #bc6060;
    border-radius: 100% 0 0 100%/ 50%;
  }
  div.ellipse-4>div{
    width:200px;
    background-color: #bc6060;
    border-radius: 100% 0 0/ 100% 0 0;
  }
</style>
<template>
  <div class="page">
    <h2 class="title">《CSS 揭秘》笔记之三：形状</h2>
    <div class="content">
      <h3 class="title">自适应的椭圆</h3>
      <p>border-radius可以单独指定水平和垂直半径。用斜杠分隔这两个值。</p>
      <p>指定宽高的一半，可以得到一个精确的椭圆：border-radius: 155px / 50px;</p>
      <div class="exp ellipse-1"><div></div></div>
      <p>border-radius还可以使用百分比值。这个百分比是基于元素的尺寸进行解析。这意味着相同的百分比会计算出不同的水平和垂直半径。</p>
      <p>要创建自适应的椭圆，使用：<strong>border-radius: 50% 50%</strong> 就可以。</p>
      <p>border-radius支持四个角设置成不同的水平和垂直半径。方法是在斜杠之前指定1~4个值，在斜杠之后指定另外的1~4个值。如10px / 5px 20px，展开为10px 10px 10px 10px / 5px 20px 5px 20px。四个角的水平半径为10px，垂直半径则分别为5,20,5,20px。</p>
      <p>半椭圆效果：<strong>border-radius:50% / 100% 100% 0 0</strong></p>
      <div class="exp ellipse-2"><div></div></div>
      <p>沿着纵轴劈开的半椭圆效果：<strong>border-radius:100% 0 0 100% / 50%</strong></p>
      <div class="exp ellipse-3"><div></div></div>
      <p>四分之一椭圆效果：<strong>border-radius: 100% 0 0 / 100% 0 0</strong></p>
      <div class="exp ellipse-4"><div></div></div>
      <h3 class="title">平行四边形</h3>
    </div>
    <footer>2016年11月08日</footer>
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
