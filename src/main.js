import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import './assets/styles/global.less'
import axios from 'axios'

Vue.use(ElementUi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
