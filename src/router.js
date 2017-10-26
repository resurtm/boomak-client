import VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Logout from './pages/Logout.vue'
import Register from './pages/Register.vue'
import Settings from './pages/Settings.vue'

import {requireAuth, requireGuest} from "./helpers";

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/log-in', name: 'login', component: Login, beforeEnter: requireGuest},
  {path: '/log-out', name: 'logout', component: Logout, beforeEnter: requireAuth(false)},
  {path: '/sign-up', name: 'register', component: Register, beforeEnter: requireGuest},
  {path: '/settings', name: 'settings', component: Settings, beforeEnter: requireAuth()},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
