/**
 * main.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import { Global } from './libs/global'

Vue.use(VueRouter)

var pageRouterList = [
  'css',
  'about',
  'learning-css-secrects-1',
  'learning-css-secrects-2',
  'learning-css-secrects-3',
  'learning-css-secrects-4',
  'learning-css-secrects-5'
]  // 页面列表
var pageRouterOption = []         // 构造router

function RouterOption (name) {
  this.path = '/' + name.replace(/-/g, '/')
  this.name = name
  this.component = function (resolve) {
    require(['./views/' + name.replace(/-/g, '/') + '.vue'], resolve)
  }
}

pageRouterList.forEach(function (pageName) {
  pageRouterOption.push(new RouterOption(pageName))
})

// 其他链接
pageRouterOption.push({
  path: '*', redirect: { name: 'css' }
})

// 路由配置
var router = new VueRouter({
  linkActiveClass: 'active',
  routes: pageRouterOption
})

console.dir(router)

// 加载页面之前
router.beforeEach(function (to, from, next) {
  Global.loading = true
  next()
})

// 加载页面之后
router.afterEach(function () {
  Global.loading = false
})

new Vue({router, render: h => h(App)}).$mount('#app')
