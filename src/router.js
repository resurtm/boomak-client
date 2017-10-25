import VueRouter from 'vue-router'

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

const routes = [
  {path: '/', name: 'home', component: Home},

  {path: '/log-in', name: 'login', component: Login},
  {path: '/sign-up', name: 'register', component: Register},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
