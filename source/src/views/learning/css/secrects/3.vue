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
    line-height: 100px;
    margin:0 auto;
    text-align: center;
    color:#fff;
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
  div.paralle-1>div{
    background-color: #58a;
    transform: skewX(-45deg);
  }
  div.paralle-1>div>div{
    transform: skewX(45deg);
  }
  div.paralle-2>div{
    position: relative;
    z-index:0;
  }
  div.paralle-2>div::before{
    content: '';
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    transform: skewX(-45deg);
    z-index: -1;
    background-color: #58a;
  }
  div.diamond-1{
    height:220px;
    padding:35px 0;
  }
  div.diamond-1>div{
    width:150px;
    height:150px;
    transform: rotate(45deg);
    overflow: hidden;
  }
  div.diamond-1>div>img{
    width:100%;
    height:100%;
    transform: rotate(-45deg) scale(1.42);
  }
  div.diamond-2{
    text-align: center;
    height:190px;
  }
  div.diamond-2>img{
    width:150px;
    height:150px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: clip-path 1s;
  }
  div.diamond-2>img:hover{
    clip-path: polygon(0 0, 100% 0,100% 100%,0 100%);
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
      <p>在视觉设计中，平行四边形可以表达出一种动感。</p>
      <p><strong>方法一：嵌套元素抵消变形</strong></p>
      <div class="exp paralle-1"><div><div>平行四边形</div></div></div>
      <pre><code>
        div{
          background-color: #58a;
          transform: skewX(-45deg);
        }
        div>div{
          transform: skewX(45deg);
        }
      </code></pre>
      <p><strong>方法二：伪元素方案</strong>，伪元素设置z-index为-1，使堆叠层次在主元素之后。此种技巧还适用于其他任何变形样式。</p>
      <pre><code>
        div{
          position: relative;
          z-index:0;
        }
        div::before{
          content: '';
          position: absolute;
          top:0;
          right:0;
          bottom:0;
          left:0;
          transform: skewX(-45deg);
          z-index: -1;
          background-color: #58a;
        }
      </code></pre>
      <div class="exp paralle-2"><div>平行四边形</div></div>
      <h3 class="title">菱形图片</h3>
      <p><strong>基于变形的方案：旋转并放大1.42倍。</strong>如果不放大将成八角形。</p>
      <div class="exp diamond-1"><div><img src="../../../../assets/header.jpg"/></div></div>
      <pre><code>
        div{
          width:150px;
          height:150px;
          transform: rotate(45deg);
          overflow: hidden;
        }
        div>img{
          width:100%;
          height:100%;
          transform: rotate(-45deg) scale(1.42);
        }
      </code></pre>
      <p><strong>裁切路径方案。</strong>如果处理的是一张非正方形的图片，上面的方法就会有问题。<strong>clip-path</strong>允许将元素裁剪成任何形状，并支持动画。只是浏览器的支持程度有限。</p>
      <div class="exp diamond-2"><img src="../../../../assets/header.jpg"/></div>
      <pre><code>
        img{
          width:150px;
          height:150px;
          clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
          transition: clip-path 1s;
        }
        img:hover{
          clip-path: polygon(0 0, 100% 0,100% 100%,0 100%);
        }
      </code></pre>
      <h3 class="title">切角效果</h3>
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
