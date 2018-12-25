import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
Vue.use(VueRouter)
Vue.config.productionTip = false

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
