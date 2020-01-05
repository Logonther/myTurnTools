import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios

import $ from 'jquery'
window.$ = $
window.jQuery = $

import './assets/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/less/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
