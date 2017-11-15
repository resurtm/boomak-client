import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './auth'
import toolsModule from './tools'
import bookmarksModule from './bookmarks'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: authModule,
    tools: toolsModule,
    bookmarks: bookmarksModule,
  },
});

export default store
