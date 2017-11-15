import axios from 'axios'
import {apiURL, enableAPIPing} from '../settings'

// actions
export const PING_API = 'tools/PING_API';

const toolsModule = {
  namespaced: true,

  actions: {
    PING_API(context, mode) {
      if (!enableAPIPing) {
        return Promise.reject();
      }
      const params = {'payload': Math.round(Math.random() * 999999)};
      return axios.post(apiURL + 'test-' + mode, params).then(resp => {
        return resp.data.payload === params.payload ? Promise.resolve() : Promise.reject();
      });
    },
  },
};

export default toolsModule
