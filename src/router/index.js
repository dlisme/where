import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(VueRouter)
Vue.config.productionTip = false

export default new VueRouter({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
    // 拖动多个页面会互相影响,解决方法
    scrollBehavior (to, from, savedPosition) {
      return {x: 0, y: 0}
    }
})
