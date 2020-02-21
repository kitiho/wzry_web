import Vue from 'vue'
import App from './App.vue'
import http from './http'
Vue.prototype.$http = http
//引入scss
import './assets/scss/style.scss'

import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
