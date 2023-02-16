import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

//import dataV from '@jiaminghi/data-view'

import App from './App.vue'
import router from './router'

import './assets/main.css'

//Vue.use(dataV)

Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App)
}).$mount('#app')
