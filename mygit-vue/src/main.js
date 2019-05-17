import Vue from 'vue'
import App from './App'
import router from './router'
// import './assets/styles/reset.css'
// import './assets/styles/border.css'
import store from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
