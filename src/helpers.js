import store from './store/main'
import {LOGGED_IN} from './store/auth'

export const requireAuth = (useLogin = true) => {
  return (to, from, next) => {
    if (store.getters[LOGGED_IN]) {
      next();
    } else {
      next(useLogin ? {
        name: 'login',
        query: {r: to.fullPath}
      } : {name: 'home'});
    }
  };
};

export const requireGuest = (to, from, next) => {
  if (!store.getters[LOGGED_IN]) {
    next();
  } else {
    next({name: 'home'});
  }
};
