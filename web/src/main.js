import Vue from 'vue'
import App from './App.vue'

//引入scss
import './assets/scss/style.scss'
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
