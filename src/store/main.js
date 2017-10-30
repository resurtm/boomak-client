import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './auth'
import toolsModule from './tools'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: authModule,
    tools: toolsModule,
  },
});

export default store
