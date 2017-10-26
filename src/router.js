import VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Logout from './pages/Logout.vue'
import Register from './pages/Register.vue'
import Settings from './pages/Settings.vue'

import store from './store/main'
import {LOGGED_IN} from './store/auth'

const requireAuth = (to, from, next) => {
  if (store.getters[LOGGED_IN]) {
    next();
  } else {
    next({
      name: 'login',
      query: {r: to.fullPath}
    });
  }
};

const routes = [
  {path: '/', name: 'home', component: Home},

  {path: '/log-in', name: 'login', component: Login},
  {path: '/log-out', name: 'logout', component: Logout},
  {path: '/sign-up', name: 'register', component: Register},

  {path: '/settings', name: 'settings', component: Settings, beforeEnter: requireAuth},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
