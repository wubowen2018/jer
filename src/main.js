import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import './assets/styles/global.scss'
import axios from 'axios'

import './mock'



Vue.prototype.$axios = axios

Vue.use(ElementUi)
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
