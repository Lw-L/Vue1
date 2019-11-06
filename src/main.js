import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/index.css'
import "../src/mock/mock"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
