import Vue from 'vue'
import App from './App.vue'

//引入elementUI
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入router
import router from './router'

//引入axios http
import http from './http'
Vue.prototype.$http = http

//引入style.css
import './assets/style.css'
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
