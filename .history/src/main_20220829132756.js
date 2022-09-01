import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'normalize.css'
import './assets/css/index.less'

import '../src/request/mock.js'

Vue.config.productionTip = false

Vue.use( ElementUI )

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
