import Vue from 'vue'
import App from './App'
import router from './router'
// 300毫秒点击延迟
import fastClick from 'fastclick'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/reset.css'
// border.css解决1像素边框问题
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
// 轮播插件css
import 'swiper/dist/css/swiper.css'
// 使用vuex
import store from './store'



Vue.config.productionTip = false
fastClick.attach(document.body)
// 在vue中使用这个插件
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
}).$mount('#app')


//路由就是根据网址的不同，返回不同的内容给用户
// 添加router-view显示的是当前路由地址所对应的内容
// @代表src目录