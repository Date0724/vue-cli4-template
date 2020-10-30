import Vue from 'vue'
import VueRouter from 'vue-router'
import accountNumber from './accountNumber.js'

Vue.use(VueRouter)

const indexRoutes = [{
  // 首页
  path: '/',
  name: 'index',
  component: () => import(/* webpackChunkName: "index" */ '@/views/index.vue')
}, {
  // 404 置后
  path: '*',
  component: {
    beforeCreate () {
      window.swal({
        type: 'warning',
        title: '404 页面不存在',
        button: {
          text: '返回'
        }
      }).then(() => {
        this.$router.go(-1)
      })
    }
  }
}]

const routes = [
  ...indexRoutes,
  ...accountNumber
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
