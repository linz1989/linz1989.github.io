<template>
  <div class="page">
    <h2 class="title">转盘抽奖的前端实现</h2>
    <div class="content">
      <p>转盘抽奖一般用于吸引用户，提升活跃度。上周应产品需求，实现了这个功能。</p>
      <div class="exp turn-table-draw">
        <div>
          <canvas ref="wheel" width="662" height="662" :style="{ transform: 'rotate('+ needRotateDeg +'deg)', 'transition-duration' : needRotateDuration+'s'}" @transitionend="doHandlerRotateEnd()"></canvas>
          <canvas ref="pointer" width="158" height="210" @click="doClickLotteryBtn()"></canvas>
        </div>
      </div>
    </div>
    <footer>2016年12月07日</footer>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return {
        currRotateDeg: 0, // 当前旋转的度数
        needRotateDeg: 0, // 当点击抽奖之后，转盘需要旋转的度数
        needRotateDuration: 5, // 旋转的时间
        inRotating: false, // 是否正在旋转抽奖中
        rewardGift: null, // 当前所中的奖品
        giftList: [
          {name: '移动电源', type: 'material', deg: 0},
          {name: '¥100元现金券', type: 'coupon', deg: 0},
          {name: '谢谢惠顾', type: 'none', deg: 0},
          {name: 'iphone 6s', type: 'material', deg: 0},
          {name: '50元泰式按摩券', type: 'coupon', deg: 0},
          {name: '再来一次', type: 'again', deg: 0}]
      }
    },
    mounted: function () {
      var that = this
      that.$nextTick(function () {
        var codes = document.querySelectorAll('code')
        if (codes.length > 0) {
          for (var k = 0; k < codes.length; k++) {
            hljs.highlightBlock(codes[k])
          }
        }
        // 绘制转盘
        that.drawWheel()
      })
    },
    methods: {
      drawWheel: function () {
        var that = this
        var pi = Math.PI
        // 绘制转盘
        var wheelCtx = that.$refs.wheel.getContext('2d')
        wheelCtx.strokeStyle = '#ffb534'
        wheelCtx.lineWidth = 8
        wheelCtx.arc(331, 331, 323, 0, 2 * pi)
        wheelCtx.stroke()

        wheelCtx.beginPath()
        wheelCtx.strokeStyle = '#de910d'
        wheelCtx.fillStyle = '#f8d300'
        wheelCtx.lineWidth = 1
        wheelCtx.arc(331, 331, 319, 0, 2 * pi)
        wheelCtx.stroke()
        wheelCtx.fill()

        wheelCtx.beginPath()
        wheelCtx.strokeStyle = '#d28500'
        wheelCtx.lineWidth = 11
        wheelCtx.arc(331, 331, 289, 0, 2 * pi)
        wheelCtx.stroke()

        // 绘制白点
        var smallRadius = 6
        var bigRadius = 8
        var dotRadius = 307

        var perDeg = 360 / 18 * (pi / 180)
        var currDeg = pi / 2
        wheelCtx.fillStyle = '#fff'
        for (var k = 0; k < 9; k++) {
          wheelCtx.beginPath()
          wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 - Math.sin(currDeg) * dotRadius, smallRadius, 0, 2 * pi)
          wheelCtx.fill()
          currDeg += perDeg
          wheelCtx.beginPath()
          wheelCtx.arc(331 + Math.cos(currDeg) * dotRadius, 331 - Math.sin(currDeg) * dotRadius, bigRadius, 0, 2 * pi)
          wheelCtx.fill()
          currDeg += perDeg
        }

        // style list
        var giftList = that.giftList
        var pieStyleArr = [{color: '#b92401', bgColor: '#fff6e5'}, {color: '#590202', bgColor: '#ffd488'}, {color: '#b92401', bgColor: '#fee0d5'}]
        perDeg = 360 / giftList.length * (pi / 180)
        var perDegNum = 360 / giftList.length
        var pieRadius = 283
        currDeg = pi / 2
        var currDegNum = 90
        var pieStyle
        wheelCtx.font = 'bold 44px 微软雅黑'
        var pieLineWidth = (2 * pi * pieRadius * 0.58) / giftList.length
        // console.log('pieLineWidth：' + pieLineWidth)
        wheelCtx.textAlign = 'center'
        wheelCtx.textBaseline = 'middle'

        var giftName
        var topText
        var bottomText
        var splitTextPos
        var splitArr
        var gift

        for (k = 0; k < giftList.length; k++) {
          gift = giftList[k]
          wheelCtx.beginPath()
          wheelCtx.moveTo(331, 331)
          wheelCtx.arc(331, 331, pieRadius, currDeg, currDeg + perDeg)
          wheelCtx.lineTo(331, 331)
          pieStyle = pieStyleArr[k % 3]
          wheelCtx.fillStyle = pieStyle.bgColor
          wheelCtx.fill()
          wheelCtx.closePath()
          gift.deg = currDegNum + perDegNum / 2 // 记住礼物的旋转度数
          if (gift.deg > 360) {
            gift.deg = gift.deg - 360
          }
          if (gift.deg < 270) {
            gift.deg = 270 - gift.deg
          } else {
            gift.deg = 360 - (gift.deg - 270)
          }
          // 写入文本
          wheelCtx.fillStyle = pieStyle.color
          wheelCtx.save()

          wheelCtx.translate(331, 331)
          // console.log('旋转：' + (currDeg + perDeg / 2))
          wheelCtx.rotate(currDeg + perDeg / 2 + pi / 2)

          giftName = giftList[k].name
          if (wheelCtx.measureText(giftName).width > pieLineWidth) { // 处理两行字的情况
            splitArr = giftName.split(' ')
            if (splitArr.length == 2) { // 有空格间隔
              topText = splitArr[0]
              bottomText = splitArr[1]
            } else {
              splitTextPos = that.getTextSplitPos(giftName, wheelCtx, pieLineWidth)
              topText = giftName.substr(0, splitTextPos)
              bottomText = giftName.substr(splitTextPos)
            }
            // console.log('topText：' + topText + 'bottomText：' + bottomText)
            wheelCtx.fillText(topText, 0, -pieRadius * 0.72, pieLineWidth)
            wheelCtx.fillText(bottomText, 0, -pieRadius * 0.52, pieLineWidth)
          } else {
            // 一行字直接绘制在中心点
            wheelCtx.fillText(giftName, 0, -pieRadius * 0.65)
          }

          wheelCtx.restore()
          currDeg += perDeg
          currDegNum += perDegNum
        }

        console.dir(giftList)

        // 绘制指针
        var pointerCtx = that.$refs.pointer.getContext('2d')

        pointerCtx.fillStyle = '#ffa406'
        var pointerPanRadius = 79
        var pointerCenter = 210 - pointerPanRadius
        pointerCtx.arc(pointerPanRadius, pointerCenter, pointerPanRadius, 0, 2 * pi)
        pointerCtx.fill()

        pointerCtx.beginPath()
        var pointerHeight = 80
        var pointerWidth = 64
        pointerCtx.fillStyle = '#eb1244'

        pointerCtx.moveTo(pointerPanRadius, 0)
        pointerCtx.lineTo(pointerPanRadius - pointerWidth / 2, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, 0)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.fillStyle = '#b9072f'
        pointerCtx.beginPath()
        pointerCtx.moveTo(pointerPanRadius, 0)
        pointerCtx.lineTo(pointerPanRadius + pointerWidth / 2, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, pointerHeight)
        pointerCtx.lineTo(pointerPanRadius, 0)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.beginPath()
        pointerCtx.fillStyle = '#fa5f75'
        pointerCtx.arc(pointerPanRadius, pointerCenter, pointerPanRadius - 15, 0, 2 * pi)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.beginPath()

        var pointerRadial = pointerCtx.createRadialGradient(pointerPanRadius, pointerCenter, 0, pointerPanRadius, pointerCenter, pointerPanRadius - 25)
        pointerRadial.addColorStop(0, '#f5385f')
        pointerRadial.addColorStop(0.75, '#f5385f')
        pointerRadial.addColorStop(0.82, '#eb1244')
        pointerRadial.addColorStop(1, '#eb1244')

        pointerCtx.fillStyle = pointerRadial
        pointerCtx.arc(pointerPanRadius, pointerCenter, pointerPanRadius - 25, 0, 2 * pi)
        pointerCtx.closePath()
        pointerCtx.fill()

        pointerCtx.font = 'bold 36px 微软雅黑'
        pointerCtx.textAlign = 'center'
        pointerCtx.textBaseline = 'middle'
        pointerCtx.fillStyle = '#fff'
        pointerCtx.fillText('点击', pointerPanRadius, pointerCenter - 24)
        pointerCtx.fillText('抽奖', pointerPanRadius, pointerCenter + 16)
      },
      getTextSplitPos: function (text, ctx, lineWidth) { // 计算出文本换行的分割点
        if (text.length <= 3) {
          return text.length
        }
        if (/^[\u4E00-\u9FFF]+$/.test(text)) { // 文本都是汉字，从中间分隔
          return Math.ceil(text.length / 2)
        } else { // 依据字宽计算出分隔点
          var str = text.substr(0, 3)
          for (var i = 3; i < text.length; i++) {
            str = str + text.charAt(i)
            if (ctx.measureText(str).width > lineWidth) {
              return i + 1
            }
          }
        }
        return text.length
      },
      doClickLotteryBtn: function () {
        var that = this
        if (that.inRotating) {
          return alert('抽奖中...')
        }

        var giftList = that.giftList
        that.rewardGift = giftList[parseInt(Math.random() * giftList.length)]
        that.inRotating = true
        var deltDeg = 360 * 3 + that.rewardGift.deg - that.currRotateDeg % 360
        that.needRotateDuration = 0.75 * (deltDeg / 180)
        that.needRotateDeg = that.currRotateDeg + deltDeg
        console.log('needRotateDeg：' + that.needRotateDeg + 'deltDeg：' + deltDeg + 'duration：' + that.needRotateDuration)
        that.currRotateDeg = that.needRotateDeg
      },
      doHandlerRotateEnd: function () { // 转盘旋转结束的处理
        var that = this
        if (that.inRotating) {
          that.inRotating = false
          alert('当前的中奖：' + that.rewardGift.name)
        }
      }
    }
  }
</script>
