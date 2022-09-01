import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css'
import './assets/css/index.less'

import '../src/request/mock.js'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.http = axios

Vue.use( ElementUI )

new Vue({
  router,
  store,
  axios,
  
  render: h => h(App)
}).$mount('#app')
