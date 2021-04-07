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

import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import twLocale from 'element-ui/lib/locale/lang/zh-TW'

Vue.use(VueI18n)

function InitLanguage() {
  return localStorage.getItem('DefaultLanguage') == null ? 'zh-CN' : localStorage.getItem('DefaultLanguage');
}

const i18n = new VueI18n({
  locale:  InitLanguage(), // 语言标识,默认汉语,先去cookie查找，如果存在并有效，cookie值即为默认语言类型；否则默认为中文简体
  messages: {
    'en-US': Object.assign(require("./lang/en"),enLocale),
    'zh-CN': Object.assign(require("./lang/zh-CN"),zhLocale),
    'zh-TW': Object.assign(require("./lang/zh-TW"),twLocale)
  }
});
locale.i18n((key, value) => i18n.t(key, value));//为了之后将element-ui组件本地化

import './assets/less/base.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { i18n: (key, value) => i18n.t(key, value) });

const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
if(flag === null) {
  console.log("pc端");
  Vue.prototype.isMobile = false;
}else {
  console.log("移动端");
  Vue.prototype.isMobile = true;
}

import ECharts from 'vue-echarts/components/ECharts'
import  'echarts/lib/chart/radar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
Vue.component('chart', ECharts)

import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
