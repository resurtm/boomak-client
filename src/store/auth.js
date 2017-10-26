import axios from 'axios'
import {apiURL, authTokenName} from '../settings'

export const LOGGED_IN = 'auth/LOGGED_IN';
export const LOGIN_USER = 'auth/LOGIN_USER';
export const LOGOUT_USER = 'auth/LOGOUT_USER';
export const REGISTER_USER = 'auth/REGISTER_USER';

const authModule = {
  namespaced: true,

  state: {
    _authTokenValue: localStorage.getItem(authTokenName),
  },

  getters: {
    LOGGED_IN(state) {
      return state._authTokenValue !== null;
    }
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
    }
  },

  actions: {
    LOGIN_USER({commit}, params) {
      return axios.post(apiURL + 'auth', params)
        .then(resp => {
          commit('_setAuthTokenValue', resp.data);
        })
    },

    LOGOUT_USER({commit}, params) {
      localStorage.removeItem(authTokenName);
      commit('_setAuthTokenValue', false);
    },

    REGISTER_USER(context, params) {

    }
  }
};

export default authModule
