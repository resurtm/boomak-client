import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import 'bootstrap'
import './main.scss'

import App from './App.vue'
import store from './store/main'
import router from './router'

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
