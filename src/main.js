import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import ElementUi from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' 
import './element-variables.scss'
import './assets/styles/global.scss'
import axios from 'axios'
import _ from 'lodash'
import './mock'

Vue.prototype.$axios = axios

// Element 全局配置 
Vue.use(ElementUi);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
