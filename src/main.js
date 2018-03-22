// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import eventAgency from './assets/js/eventAgency.min.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  //eventAgency,
  template: '<App/>',
  components: { App }
})
