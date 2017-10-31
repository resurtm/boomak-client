import axios from 'axios'
import {apiURL, authTokenName} from '../settings'

// getters
export const LOGGED_IN = 'auth/LOGGED_IN';
export const AUTH_TOKEN = 'auth/AUTH_TOKEN';
export const SETTINGS = 'auth/SETTINGS';

// mutations
export const CHANGE_SETTINGS = 'auth/CHANGE_SETTINGS';

// actions
export const LOGIN_USER = 'auth/LOGIN_USER';
export const LOGOUT_USER = 'auth/LOGOUT_USER';
export const REGISTER_USER = 'auth/REGISTER_USER';
export const VALIDATE_AUTH = 'auth/VALIDATE_AUTH';
export const UPDATE_SETTINGS = 'auth/UPDATE_SETTINGS';
export const VERIFY_EMAIL = 'auth/VERIFY_EMAIL';

const authModule = {
  namespaced: true,

  state: {
    _authTokenValue: localStorage.getItem(authTokenName), // only for internal use
    settings: {},
  },

  getters: {
    LOGGED_IN(state) {
      return state._authTokenValue !== null;
    },

    AUTH_TOKEN(state) {
      return state._authTokenValue === null ? false : state._authTokenValue;
    },

    SETTINGS(state) {
      return state.settings;
    },
  },

  mutations: {
    // only for internal use
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

    CHANGE_SETTINGS(state, settings) {
      state.settings = settings;
    },
  },

  actions: {
    LOGIN_USER({commit, dispatch}, params) {
      return axios.post(apiURL + 'login', params).then(resp => {
        commit('_setAuthTokenValue', resp.data);
        dispatch('UPDATE_SETTINGS');
        return Promise.resolve();
      });
    },

    LOGOUT_USER({commit}, params) {
      commit('_setAuthTokenValue', false);
      commit('CHANGE_SETTINGS', {});
    },

    REGISTER_USER(context, params) {
      return axios.post(apiURL + 'register', params);
    },

    VALIDATE_AUTH({getters, dispatch, state}, params) {
      if (!getters.LOGGED_IN) {
        return Promise.reject();
      }
      return axios.post(apiURL + 'check', state._authTokenValue).catch(err => {
        dispatch('LOGOUT_USER');
        return Promise.reject();
      });
    },

    UPDATE_SETTINGS({getters, commit}) {
      if (!getters.LOGGED_IN) {
        return Promise.reject();
      }
      return axios.get(apiURL + 'get-settings').then(resp => {
        commit('CHANGE_SETTINGS', resp.data);
        return resp.data;
      });
    },

    VERIFY_EMAIL({dispatch}, verificationKey) {
      return axios.post(apiURL + 'verify-email', verificationKey).then(resp => {
        dispatch('UPDATE_SETTINGS');
        return Promise.resolve();
      });
    }
  },
};

export default authModule
