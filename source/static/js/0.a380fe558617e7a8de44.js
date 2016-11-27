webpackJsonp([0,1],[,,,,,function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={author:"zhangjialin",list:[{id:"1",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之一：前言",description:"由W3C CSS工作组特邀专家、CSS语言设计者之一的Lea Verou撰写。被百姓网前段架构师誉之为'十年来最重要的CSS图书，没有之一'的一本进阶书。前言中主要是编程理念，特性检测与CSS编码技巧。",date:"2016/10/30",routerName:"learning-css-secrects-1"},{id:"2",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之二：背景与边框",description:"此书第二章的内容。分别描述了半透明边框、多重边框、背景定位、边框内圆角以及多种多样的条纹背景效果实现技巧。",date:"2016/11/03",routerName:"learning-css-secrects-2"},{id:"3",type:"读书笔记",category:"css",title:"《CSS 揭秘》笔记之三：形状",description:"此书第三章的内容。",date:"2016/11/08",routerName:"learning-css-secrects-3"}]}},,function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=e(5),i=r(a);t.exports={data:function(){return{list:[]}},created:function(){for(var t=this,n=i.default.list,e=[],r=n.length-1;r>=0;r--)"css"==n[r].category&&e.push(n[r]);t.list=e}}},function(t,n){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var n=0;n<t.length;n++)hljs.highlightBlock(t[n])})},methods:{testProperty:function(t){var n=document.documentElement;return t in n.style?void alert("true"):void alert("false")},testValue:function(t,n){var e=document.createElement("p");return e.style[n]=t,e.style[n]?void alert("true"):void alert("false")}}}},function(t,n){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var n=0;n<t.length;n++)hljs.highlightBlock(t[n])})}}},function(t,n){"use strict";t.exports={mounted:function(){this.$nextTick(function(){var t=document.querySelectorAll("code");if(t.length>0)for(var n=0;n<t.length;n++)hljs.highlightBlock(t[n])})}}},,function(t,n,e){var r,a,i=e(18);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,n,e){var r,a;r=e(7);var i=e(23);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,n,e){var r,a,i=e(24);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,n,e){var r,a;r=e(8);var i=e(19);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,n,e){var r,a;r=e(9);var i=e(20);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,n,e){var r,a;r=e(10);var i=e(21);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=i.render,a.staticRenderFns=i.staticRenderFns,t.exports=r},function(t,n){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"page"},[t._h("h2",{staticClass:"title"},["About Me"])," ",t._h("div",{staticClass:"content"},[t._h("p",["一名普通的Programmer，2011年计算机科学与技术专业本科毕业。毕业之后接触过Flex，Java等技术，目前专注于Web前端开发。"])," ",t._h("p",["毕业至今，工作经历普普通通，然每份工作皆尽心尽力："])," ",t._h("ul",[t._h("li",["2011年7月至2013年4月：天津凯发电气股份有限公司"])," ",t._h("li",["2013年4月至2015年4月：北京清软英泰信息技术有限公司(中车信息技术有限公司)"])," ",t._h("li",["2015年5月至今：深圳石豆软件技术有限公司"])])," ",t._h("p",["业余喜欢历史、音乐。看起来一副永远不成熟的样子。不善言辞。"])," ",t._h("p",["博客是自己用Vue.js框架创建的，主要是想记录一些技术知识点，以提升自己的水平。"])," ",t._h("p",["页面样式比较简单，其实也不必复杂。"])," ",t._h("p",["“生命可以随心所欲，但不能随波逐流”一语出自动漫大师宫崎骏，头像也出自宫崎骏的作品《悬崖上的金鱼公主》。"])])," ",t._h("footer",["2016年05月10日"])])}]}},function(t,n){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"page"},[t._h("h2",{staticClass:"title"},["《CSS 揭秘》笔记之一：前言"])," ",t._h("div",{staticClass:"content"},[t._h("p",['"十年来最重要的CSS图书，没有之一"。'])," ",t._m(0)," ",t._h("p",["这并不是一本厚厚的权威指南，并不适合初学者，它的目标读者是正在由中级向高级进阶的CSS开发者。作者在书中揭示了47个鲜为人知的CSS技巧，为前端开发遇到的各种网页难题，探寻出了更优雅的解决方案。主要包括7大主题："])," ",t._m(1)," ",t._m(2)," ",t._m(3)," ",t._m(4)," ",t._m(5)," ",t._m(6)," ",t._m(7)," ",t._h("p",["以下是小段JavaScript代码，实现特性检测并给根元素添加辅助类："])," ",t._m(8)," ",t._h("button",{on:{click:function(n){t.testProperty("textShadow")}}},["检测浏览器是否支持textShadow"])," ",t._h("p",["如果需要检测某个具体的属性值是否支持，则需要把它赋值给相应的属性，然后再检查浏览器是否还保存这个值："])," ",t._m(9)," ",t._h("button",{on:{click:function(n){t.testValue("linear-gradient(red,tan)","backgroundImage")}}},["检测浏览器是否支持linear-gradient(red,tan)"])," ",t._h("p",{staticClass:"dot"},["浏览器可以解析某个CSS特性并不能表示它已经正确实现了这个特性。"])," ",t._m(10)," ",t._m(11)," ",t._h("h3",{staticClass:"sub-title"},["CSS编码技巧："])," ",t._m(12)," ",t._m(13)," ",t._m(14)," ",t._m(15)," ",t._m(16)])," ",t._h("footer",["2016年10月30日"])])},staticRenderFns:[function(){var t=this;return t._h("p",["这本书的作者是W3C CSS工作组特邀专家、CSS语言设计者之一：",t._h("em",["Lea Verou"]),"。令人惊叹的是，这本书完全由HTML5写成，布局与排版由CSS渲染。此书在",t._h("a",{attrs:{href:"https://book.douban.com/subject/26745943/"}},["豆瓣"]),"上的评分高达9.3，是一本诸多前端大师倾情推荐的好书。中文版由",t._h("a",{attrs:{href:"https://github.com/cssmagic/blog/issues/54"}},["CSS 魔法"]),"翻译。"])},function(){var t=this;return t._h("p",[t._h("strong",["背景与边框、形状、视觉效果、字体排印、用户体验、结构与布局、过渡与动画"])])},function(){var t=this;return t._h("p",["这本书不单单只介绍CSS的技巧，作者会深入分析背后的思路，循序渐进地找到解决问题的方法。",t._h("strong",['"理解发现解决方案的过程比解决方案本身更有用"。'])])},function(){var t=this;return t._h("p",["贯穿书中的编程理念是",t._h("em",["DRY"]),"（Don't Repeat\n      Yourself：不应该重复你已经做过的事。在改动某个参数时，做到只改尽量少的地方）、",t._h("em",["可维护"]),"、",t._h("em",["灵活性"]),"、",t._h("em",["轻量级"]),"以及",t._h("em",["要符合标准"]),"。\n    以下是首页到第一章的一些知识点。"])},function(){var t=this;return t._h("p",[t._h("strong",["标准语法应该写在最后；"])])},function(){var t=this;return t._h("p",[t._h("strong",["当使用渐变时，如果需要考虑兼容性，可以使用渐变色的平均值作为回退机制。"])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"css"},["background: rgb(255, 128, 0); // 渐变色的平均值\nbackground: -moz-linear-gradient(0deg, yellow, red);\nbackground: -o-linear-gradient(0deg, yellow, red);\nbackground: -webkit-linear-gradient(0deg, yellow, red);\nbackground: linear-gradient(90deg, yellow, red); // 标准语法"])])},function(){var t=this;return t._h("p",["关于浏览器对样式是否支持的判断，可以使用",t._h("strong",["特性检测：Modernizr或者@supports"])])},function(){var t=this;return t._h("pre",[t._h("code",{staticClass:"javascript"},["function testProperty (property) {\n  var root = document.documentElement\n  if (property in root.style) {\n    root.classList.add(property.toLowerCase())\n    return true\n  }\n  root.classList.add('no' + property.toLowerCase())\n  return false\n}"])])},function(){var t=this;return t._h("pre",[t._h("code",["function testValue (value, property) {\n  var dummy = document.createElement('p')\n  dummy.style[property] = value\n\n  if (dummy.style[property]) {\n    return true\n  }\n  return false\n}"])])},function(){var t=this;return t._h("p",[t._h("strong",["W3C并不产生标准。"]),"CSS规范由CSS工作组的成员来编写，大部分成员来自W3C会员公司。每项规范从最初启动到最终成熟，都会经过多个阶段。"])},function(){var t=this;return t._h("p",["CSS1规范发表于1996年，两年之后，CSS2规范发布了。",t._h("strong",['尽管"CSS3"这个名词非常流行，但实际上并没有在任何规范中定义过。']),"CSS3指的是一个非正式的集合，它包括CSS规范第三版及一些版本号还是1的新规范。"])},function(){var t=this;return t._h("p",[t._h("strong",["尽量减少重复的代码。"]),"当某些值相互依赖时，应该把它们的相互关系用代码表示出来。",t._h("strong",["currentColor是一个特殊的颜色关键字，CSS中有史以来的第一个变量。"]),"减少重复多使用",t._h("strong",["inherit关键字。"])])},function(){var t=this;return t._h("p",[t._h("strong",["相信你的眼睛，而不是数字。"])])},function(){var t=this;return t._h("p",[t._h("strong",["关于响应式布局，应尽最大努力实现弹性可伸缩的布局，并在各个断点区间内指定相应尺寸。"]),"当网页本身的设计足够灵活时，让它变成响应式应该只需要用到简短的媒体查询代码。"])},function(){var t=this;return t._h("p",[t._h("strong",["合理使用简写。"])])},function(){var t=this;return t._h("p",[t._h("strong",["合理使用预处理器。"])])}]}},function(t,n){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"page"},[t._h("h2",{staticClass:"title"},["《CSS 揭秘》笔记之二：背景与边框"])," ",t._h("div",{staticClass:"content"},[t._h("h3",{staticClass:"title"},["半透明边框"])," ",t._h("p",["默认情况下，背景会延伸到边框所在区域的下层，此时即使设置边框为透明的颜色，也无法达到预期的效果。可以通过",t._h("strong",["background-clip"]),"属性来调整。这个属性初始值默认为border-box，设置为padding-box可以用内边距的外沿将背景裁剪掉。"])," ",t._h("div",{staticClass:"exp transparent-border"},[t._h("div",["未设置background-clip"])])," ",t._h("div",{staticClass:"exp transparent-border"},[t._h("div",{staticClass:"act"},["设置background-clip"])])," ",t._h("pre",[t._h("code",{staticClass:"css"},["background: #fff;\nborder:25px dotted rgba(0,0,255,0.1);\nbackground-clip: padding-box;"])])," ",t._h("h3",{staticClass:"title"},["多重边框"])," ",t._h("p",[t._h("strong",["box-shadow方案："]),"利用box-shadow的第四个参数——扩张半径，加上为0的偏移量和模糊值，可以得到一道实线边框。由于box-shadow支持多个投影，因此可以实现多重边框。"])," ",t._h("p",["需要注意的是box-shadow是重重叠加的，需要按一定的规律调整扩张半径；投影不会影响布局，也不会受到box-sizing属性影响。此外投影生成的边框不会响应鼠标事件。"])," ",t._h("div",{staticClass:"exp multiple-border-box-shadow"},[t._h("div")])," ",t._h("pre",[t._h("code",["background-color: white;\nbox-shadow: 0 0 0 5px #655, 0 0 0 10px deeppink, 0 2px 5px 10px rgba(0,0,0,0.6);"])])," ",t._h("p",["可以给box-shadow属性加上",t._h("strong",["inset"]),'关键字，使投影绘制在元素的内圈，此时的"边框"就能响应鼠标事件了。'])," ",t._h("p",[t._h("strong",["outline方案："]),"如果只需要两重边框的话，可以使用border产生常规边框，再使用outline产生外层边框。"])," ",t._h("div",{staticClass:"exp multiple-border-outline"},[t._h("div")])," ",t._h("pre",[t._h("code",["background-color: white;\nborder:5px solid #655;\noutline:5px solid deeppink;"])])," ",t._h("p",["outline并不支持设置多个，并且边框不会贴合border-radius产生的圆角，描边目前只能是直角效果。"])," ",t._h("h3",{staticClass:"title"},["灵活的背景定位"])," ",t._h("p",[t._h("strong",["background-position扩展语法："]),"在CSS3中可以指定背景图片距离任意角的偏移量，只要我们在偏移量前面指定关键字。"])," ",t._h("div",{staticClass:"exp bg bg-position"})," ",t._h("p",["上面的背景图片定位在距容器右侧20px，底部10px的地方，即使改变窗口的宽度。"])," ",t._h("pre",[t._h("code",['background: url("...") no-repeat bottom right rgb(225,213,216);\nbackground-position: right 20px bottom 10px;'])])," ",t._h("p",[t._h("strong",["background-origin方案："]),"每个元素都存在3个矩形框：border-box、padding-box、content-box，background-position默认以padding-box为准。CSS3中增加的background-origin可以改变这种行为。定义如下样式也能达到同样的效果："])," ",t._h("pre",[t._h("code",['background: url("...") no-repeat bottom right rgb(225,213,216);\npadding:10px 20px;\nbackground-origin: content-box;'])])," ",t._h("div",{staticClass:"exp bg bg-origin"})," ",t._h("p",[t._h("strong",["calc()方案："]),"calc()函数可以对位置执行动态计算。"])," ",t._h("pre",[t._h("code",['background: url("...") no-repeat bottom right rgb(225,213,216);\nbackground-position: calc(100% - 20px) calc(100% - 10px);'])])," ",t._h("div",{staticClass:"exp bg bg-calc"})," ",t._h("p",['使用calc()函数需要注意的是操作符"+"、"-"两侧需要留有空白。'])," ",t._h("h3",{staticClass:"title"},["边框内圆角"])," ",t._h("p",[t._h("strong",["描边不会跟着元素的圆角走，而box-shadow确是会的。"]),"两者叠加到一起，box-shadow填充描边和容器圆角之间的空隙，可以达到此种效果。需要注意的是，box-shadow的扩张值大约是border-radius的一半。"])," ",t._h("div",{staticClass:"exp inner-border-radius"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: tan;\nborder-radius: 12px;\nbox-shadow: 0 0 0 6px #655;\noutline:9px solid #655;"])])," ",t._h("h3",{staticClass:"title"},["条纹背景"])," ",t._h("p",[t._h("strong",["对于渐变，当多个色标具有相同的位置时，它们会产生一个无限小的过渡区域。从效果上看，颜色在那个位置突然变化了。"])])," ",t._h("p",["条纹背景示例："])," ",t._h("div",{staticClass:"exp linear-1"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: linear-gradient(#fb3 50%, #58a 50%);\nbackground-size: 100% 30px;"])])," ",t._h("p",[t._h("strong",["如果某个色标的位置比它之前的位置值小，那么它会被解析为前面所有色标位置的最大值。"])])," ",t._h("p",["上例可以写成：background: linear-gradient(#fb3 50%, #58a 0);"])," ",t._h("p",[t._h("strong",["垂直条纹"]),"的效果需要加额外的参数来指定渐变方向：to right"])," ",t._h("div",{staticClass:"exp linear-2"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: linear-gradient(to right ,#fb3 50%, #58a 0);\nbackground-size: 30px 100%;"])])," ",t._h("p",[t._h("strong",[t._h("b",["45度斜向条纹："])])])," ",t._h("p",["方法一：使用linear-gradient，background-size设置为条纹宽度的2*1.414倍"])," ",t._h("div",{staticClass:"exp linear-3"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: linear-gradient(45deg, #fb3 25%, #58a 25%, #58a 50%, #fb3 50%, #fb3 75%, #58a 75%);\nbackground-size: 42.426px 42.426px;"])])," ",t._h("p",["方法二：使用repeating-linear-gradient"])," ",t._h("div",{staticClass:"exp linear-4"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: repeating-linear-gradient(45deg,#fb3, #fb3 15px, #58a 15px, #58a 30px);"])])," ",t._h("p",[t._h("strong",[t._h("b",["同色系条纹："])])])," ",t._h("p",["将最深的颜色指定为背景色，把半透明的白色条纹叠加到背景色之上"])," ",t._h("div",{staticClass:"exp linear-5"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #58a;\nbackground-image: repeating-linear-gradient(30deg,hsla(0, 0%, 100%, .1),\n      hsla(0, 0%, 100%, .1) 15px, transparent 15px, transparent 30px);"])])," ",t._h("p",[t._h("strong",["使用CSS渐变来产生任何种类的几何图案都是可能的。"]),"原理是将多个渐变图案组合起来。"])," ",t._h("p",[t._h("strong",["桌布方格图案："])])," ",t._h("div",{staticClass:"exp linear-6"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: white;\nbackground-image: linear-gradient(90deg, rgba(200,0,0,0.5) 50%, transparent 0),\n      linear-gradient(rgba(200,0,0,0.5) 50%, transparent 0);\nbackground-size: 30px 30px;"])])," ",t._h("p",[t._h("strong",["网格图案："])])," ",t._h("div",{staticClass:"exp linear-7"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #58a;\nbackground-image: linear-gradient(#ccc 1px, transparent 0),\n      linear-gradient(90deg, #ccc 1px, transparent 0);\nbackground-size: 20px 20px;"])])," ",t._h("p",[t._h("strong",["叠加多重渐变的蓝图网格："]),"使用background-size调整间距。"])," ",t._h("div",{staticClass:"exp linear-8"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #58a;\nbackground-image: linear-gradient(white 2px, transparent 0),\n      linear-gradient(90deg, white 2px, transparent 0),\n      linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),\n      linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);\nbackground-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;"])])," ",t._h("p",[t._h("strong",["波点图案："]),"使用径向渐变。"])," ",t._h("div",{staticClass:"exp linear-9"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #655;\nbackground-image: radial-gradient(tan 20%, transparent 0);\nbackground-size: 30px 30px;"])])," ",t._h("p",[t._h("strong",["复杂点的波点图案："]),"使用background-position错开位置。"])," ",t._h("div",{staticClass:"exp linear-10"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #655;\nbackground-image: radial-gradient(tan 20%, transparent 0),\n      radial-gradient(tan 20%, transparent 0);\nbackground-size: 30px 30px;\nbackground-position: 0 0, 15px 15px;"])])," ",t._h("p",[t._h("strong",["信封样式边框："]),"设置两层背景，内层纯白色（使用渐变实现），斜纹背景溢出到边框区域。边框设置为透明。"])," ",t._h("div",{staticClass:"exp linear-11"},[t._h("div")])," ",t._h("pre",[t._h("code",["padding:1em;\nborder:1em solid transparent;\nbackground: linear-gradient(white,white),\n      repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 12.5%,transparent 25%, #58a 25%, #58a 37.5%, transparent 37.5%, transparent 50%);\nbackground-size: 3em 3em;\nbackground-clip: padding-box, border-box;"])])," ",t._h("p",[t._h("strong",[t._h("b",["蚂蚁行军边框："])]),"动起来的关键是使用animation设置background-position。"])," ",t._h("div",{staticClass:"exp marching-ants"},[t._h("div")])," ",t._h("pre",[t._h("code",["@keyframes ants {\n  to {\n    background-position: 100%;\n  }\n}\n\ndiv.marching-ants{\n  padding: 1em;\n  border:1px solid transparent;\n  background: linear-gradient(white,white),\n      repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%);\n  background-clip: padding-box, border-box;\n  background-size: 0.6em 0.6em;\n  animation: ants 12s linear infinite;\n}"])])])," ",t._h("footer",["2016年11月03日"])])}]}},function(t,n,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"page"},[t._h("h2",{staticClass:"title"},["《CSS 揭秘》笔记之三：形状"])," ",t._h("div",{staticClass:"content"},[t._h("h3",{staticClass:"title"},["自适应的椭圆"])," ",t._h("p",["border-radius可以单独指定水平和垂直半径。用斜杠分隔这两个值。"])," ",t._h("p",["指定宽高的一半，可以得到一个精确的椭圆：border-radius: 155px / 60px;"])," ",t._h("div",{staticClass:"exp ellipse-1"},[t._h("div")])," ",t._h("p",["border-radius还可以使用百分比值。这个百分比是基于元素的尺寸进行解析。这意味着相同的百分比会计算出不同的水平和垂直半径。"])," ",t._h("p",["要创建自适应的椭圆，使用：",t._h("strong",["border-radius: 50% 50%"])," 就可以。"])," ",t._h("p",["border-radius支持四个角设置成不同的水平和垂直半径。方法是在斜杠之前指定1~4个值，在斜杠之后指定另外的1~4个值。如10px / 5px 20px，展开为10px 10px 10px 10px / 5px 20px 5px 20px。四个角的水平半径为10px，垂直半径则分别为5,20,5,20px。"])," ",t._h("p",["半椭圆效果：",t._h("strong",["border-radius:50% / 100% 100% 0 0"])])," ",t._h("div",{staticClass:"exp ellipse-2"},[t._h("div")])," ",t._h("p",["沿着纵轴劈开的半椭圆效果：",t._h("strong",["border-radius:100% 0 0 100% / 50%"])])," ",t._h("div",{staticClass:"exp ellipse-3"},[t._h("div")])," ",t._h("p",["四分之一椭圆效果：",t._h("strong",["border-radius: 100% 0 0 / 100% 0 0"])])," ",t._h("div",{staticClass:"exp ellipse-4"},[t._h("div")])," ",t._h("h3",{staticClass:"title"},["平行四边形"])," ",t._h("p",["在视觉设计中，平行四边形可以表达出一种动感。"])," ",t._h("p",[t._h("strong",["方法一：嵌套元素抵消变形"])])," ",t._h("div",{staticClass:"exp paralle-1"},[t._h("div",[t._h("div",["平行四边形"])])])," ",t._h("pre",[t._h("code",["div{\n  background-color: #58a;\n  transform: skewX(-45deg);\n}\ndiv>div{\n  transform: skewX(45deg);\n}"])])," ",t._h("p",[t._h("strong",["方法二：伪元素方案"]),"，伪元素设置z-index为-1，使堆叠层次在主元素之后。此种技巧还适用于其他任何变形样式。"])," ",t._h("pre",[t._h("code",["div{\n  position: relative;\n  z-index:0;\n  background-color: transparent;\n}\ndiv::before{\n  content: '';\n  position: absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  transform: skewX(-45deg);\n  z-index: -1;\n  background-color: #58a;\n}"])])," ",t._h("div",{staticClass:"exp paralle-2"},[t._h("div",["平行四边形"])])," ",t._h("h3",{staticClass:"title"},["菱形图片"])," ",t._h("p",[t._h("strong",["基于变形的方案：旋转并放大1.42倍。"]),"如果不放大将成八角形。"])," ",t._h("div",{staticClass:"exp diamond-1"},[t._h("div",[t._h("img",{attrs:{src:e(1)}})])])," ",t._h("pre",[t._h("code",["div{\n  width:150px;\n  height:150px;\n  transform: rotate(45deg);\n  overflow: hidden;\n}\ndiv>img{\n  width:100%;\n  height:100%;\n  transform: rotate(-45deg) scale(1.42);\n}"])])," ",t._h("p",[t._h("strong",["裁切路径方案。"]),"如果处理的是一张非正方形的图片，上面的方法就会有问题。",t._h("strong",["clip-path"]),"允许将元素裁剪成任何形状，并支持动画。只是浏览器的支持程度有限。"])," ",t._h("div",{staticClass:"exp diamond-2"},[t._h("img",{attrs:{src:e(1)}})])," ",t._h("pre",[t._h("code",["img{\n  width:150px;\n  height:150px;\n  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);\n  transition: clip-path 1s;\n}\nimg:hover{\n  clip-path: polygon(0 0, 100% 0,100% 100%,0 100%);\n}"])])," ",t._h("h3",{staticClass:"title"},["切角效果"])," ",t._h("p",["切角效果是一种流行的设计风格，它的常见形态是将元素的一个或者多个角切成45度的缺口。"])," ",t._h("p",[t._h("strong",["使用渐变实现一个角的切角效果："])])," ",t._h("div",{staticClass:"exp cuttingAngle-1"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #58a;\nbackground: linear-gradient(-45deg, transparent 15px, #58a 15px);"])])," ",t._h("p",[t._h("strong",["使用两层渐变实现两个角的切角效果：（注意需要使用background-size设置每层的渐变宽度为50%，否则会相互覆盖）"])])," ",t._h("div",{staticClass:"exp cuttingAngle-2"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: linear-gradient(-45deg, transparent 15px, #58a 15px) top right, linear-gradient(45deg, transparent 15px, #58a 15px) top left;\nbackground-size: 50% 100%;\nbackground-repeat: no-repeat;"])])," ",t._h("p",[t._h("strong",["使用四层渐变实现四个角的切角效果：（四层渐变的区域各占四分之一）"])])," ",t._h("div",{staticClass:"exp cuttingAngle-3"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #58a;\nbackground: linear-gradient(-45deg, transparent 15px, #58a 15px) bottom right,\n                    linear-gradient(45deg, transparent 15px, #58a 15px) bottom left,\n                    linear-gradient(-135deg, transparent 15px, #58a 15px) top right,\n                    linear-gradient(135deg, transparent 15px, #58a 15px) top left;\nbackground-size: 50% 50%;\nbackground-repeat: no-repeat;"])])," ",t._h("p",[t._h("strong",["弧形切角：使用径向渐变实现内凹圆角效果"])])," ",t._h("div",{staticClass:"exp cuttingAngle-4"},[t._h("div")])," ",t._h("pre",[t._h("code",["background: #58a;\nbackground: radial-gradient(circle at top left, transparent 15px,#58a 15px) top left,\n                    radial-gradient(circle at bottom left, transparent 15px,#58a 15px) bottom left,\n                    radial-gradient(circle at top right, transparent 15px,#58a 15px) top right,\n                    radial-gradient(circle at bottom right, transparent 15px,#58a 15px) bottom right;\nbackground-size: 50% 50%;\nbackground-repeat: no-repeat;"])])," ",t._h("p",[t._h("strong",["使用内联SVG与border-image实现切角效果："]),"border宽度设置为20px，大约是使用渐变实现效果时15px的1.414倍。"])," ",t._h("div",{staticClass:"exp cuttingAngle-5"},[t._h("div")])," ",t._h("pre",[t._h("code",["border:20px solid #58a;\nborder-image: 1 url(\"data:image/svg+xml,\n                      <svg xmlns='http://www.w3.org/2000/svg' width='3' height='3' fill='%2358a'>\n                       <polygon points='0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2'/></svg>\");\nbackground: #58a;\nbackground-clip: padding-box;"])])," ",t._h("p",[t._h("strong",["使用clip-path实现切角效果（适应于元素背景是图片的情况下）："])])," ",t._h("div",{staticClass:"exp cuttingAngle-6"},[t._h("img",{attrs:{src:e(1)}})])," ",t._h("pre",[t._h("code",["clip-path: polygon(20px 0,calc(100% - 20px) 0,100% 20px,100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px, 20px 0);"])])," ",t._h("h3",{staticClass:"title"},["梯形标签页"])," ",t._h("p",["使用3D旋转+伪元素模拟出梯形效果：（对元素使用了3D变形之后，其内部的变形效应几乎是不可逆转的）"])," ",t._h("div",{staticClass:"exp tab-1"},[t._h("div")])," ",t._h("pre",[t._h("code",['position: relative;\npadding: .5em 1em .35em;\ncolor:white;\nz-index:0;\nbackground: transparent;\n&:before{\n  content:"";\n  position: absolute;\n  top:0; left:0; right:0; bottom:0;\n  z-index:-1;\n  background: #58a;\n  transform-origin: bottom;\n  transform: scaleY(2.2) perspective(.5em) rotateX(5deg);\n}'])])," ",t._h("p",["注意在Y轴上需要放大一定的倍数。"])])," ",t._h("footer",["2016年11月08日"])])}]}},,function(t,n){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"page"},[t._h("ul",{staticClass:"article-list"},[t._l(t.list,function(n){return t._h("router-link",{attrs:{tag:"li",to:{name:n.routerName}}},[t._h("h3",[t._s(n.title)])," ",t._h("div",[t._s(n.description)])," ",t._h("div",["【"+t._s(n.type)+"】"+t._s(n.date)])])})])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this;return t._h("div")},staticRenderFns:[]}},function(t,n,e){function r(t){return e(a(t))}function a(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./about.vue":12,"./css.vue":13,"./learning/angular/1.vue":14,"./learning/css/secrects/1.vue":15,"./learning/css/secrects/2.vue":16,"./learning/css/secrects/3.vue":17};r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id=25}]);