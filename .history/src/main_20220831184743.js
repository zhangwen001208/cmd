import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI, { MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css'
import './assets/css/index.less'

import '../src/request/mock.js'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$confirm = MessageBox.confirm

Vue.use( ElementUI )

new Vue({
  router,
  store,
  
  
  render: h => h(App)
}).$mount('#app')
