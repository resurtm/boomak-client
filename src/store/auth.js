import axios from 'axios'
import {apiURL, authTokenName} from '../settings'

// getters
export const LOGGED_IN = 'auth/LOGGED_IN';
export const AUTH_TOKEN = 'auth/AUTH_TOKEN';

// actions
export const LOGIN_USER = 'auth/LOGIN_USER';
export const LOGOUT_USER = 'auth/LOGOUT_USER';
export const REGISTER_USER = 'auth/REGISTER_USER';
export const VALIDATE_AUTH = 'auth/VALIDATE_AUTH';

const authModule = {
  namespaced: true,

  state: {
    _authTokenValue: localStorage.getItem(authTokenName),
  },

  getters: {
    LOGGED_IN(state) {
      return state._authTokenValue !== null;
    },

    AUTH_TOKEN(state) {
      return state._authTokenValue === null ? false : state._authTokenValue;
    },
  },

  mutations: {
    _setAuthTokenValue(state, authTokenValue) {
      if (authTokenValue === false) {
        localStorage.removeItem(authTokenName);
        state._authTokenValue = null;
      } else {
        localStorage.setItem(authTokenName, authTokenValue);
        state._authTokenValue = authTokenValue;
      }

      Object.assign(axios.defaults, {
        headers: {
          Authorization: 'bearer ' + state._authTokenValue,
        },
      });
    },
  },

  actions: {
    LOGIN_USER({commit}, params) {
      return axios.post(apiURL + 'login', params).then(resp => {
        commit('_setAuthTokenValue', resp.data);
      });
    },

    LOGOUT_USER({commit}, params) {
      localStorage.removeItem(authTokenName);
      commit('_setAuthTokenValue', false);
    },

    REGISTER_USER(context, params) {
      return axios.post(apiURL + 'register', params);
    },

    VALIDATE_AUTH({getters, commit, dispatch, state}, params) {
      if (getters.LOGGED_IN) {
        return axios.post(apiURL + 'check', state._authTokenValue).catch(err => {
          dispatch('LOGOUT_USER');
          return Promise.reject();
        });
      }
    },
  },
};

export default authModule
