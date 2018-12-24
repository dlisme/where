import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/pages/home/Home'


export default new Router({
  routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
  }
]
})
