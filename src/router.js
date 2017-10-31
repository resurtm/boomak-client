import VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Logout from './pages/Logout.vue'
import Register from './pages/Register.vue'
import SettingsBase from './pages/settings/Base.vue'
import SettingsHome from './pages/settings/Home.vue'
import SettingsEmailVerification from './pages/settings/VerifyEmail.vue'
import AllBookmarks from './pages/AllBookmarks.vue'
import Users from './pages/Users.vue'

import {requireAuth, requireGuest} from './helpers'

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/log-in', name: 'login', component: Login, beforeEnter: requireGuest},
  {path: '/log-out', name: 'logout', component: Logout, beforeEnter: requireAuth(false)},
  {path: '/sign-up', name: 'register', component: Register, beforeEnter: requireGuest},
  {path: '/settings', component: SettingsBase, beforeEnter: requireAuth(), children: [
    {path: '', name: 'settings', component: SettingsHome},
    {path: 'email', name: 'email-verification', component: SettingsEmailVerification},
  ]},
  {path: '/all-bookmarks', name: 'all-bookmarks', component: AllBookmarks},
  {path: '/users', name: 'users', component: Users},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router
