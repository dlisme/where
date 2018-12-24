import Vue from 'vue'
import App from './App'
import router from 'vue-router'
import fastClick from 'fastclick'
// 300毫秒点击延迟
import './assets/styles/reset.css'
import './assets/styles/border.css'
// border.css解决1像素边框问题




Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  el: "#app",
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')


//路由就是根据网址的不同，返回不同的内容给用户
// 添加router-view显示的是当前路由地址所对应的内容
