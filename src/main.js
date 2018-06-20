// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.timeout=1000 //全局超时设置
axios.interceptors.request.use(function(config){  //请求拦截器
  //在发送请求之前做某事

  //console.log(config) //设置
  return config;
})

Vue.prototype.$axios = axios

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
