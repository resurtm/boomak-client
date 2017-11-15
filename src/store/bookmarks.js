import axios from 'axios'
import {apiURL} from '../settings'
import {pick} from 'lodash'

// actions
export const CREATE_BOOKMARK = 'bookmarks/CREATE_BOOKMARK';
export const DELETE_BOOKMARK = 'bookmarks/DELETE_BOOKMARK';
export const FETCH_BOOKMARKS = 'bookmarks/FETCH_BOOKMARKS';

const bookmarksModule = {
  namespaced: true,

  actions: {
    CREATE_BOOKMARK(context) {},

    DELETE_BOOKMARK(context) {},

    FETCH_BOOKMARKS(context, params) {
      params = pick(params, ['offset', 'limit']);
      if (!('offset' in params)) {
        params.offset = 0;
      }
      if (!('limit' in params)) {
        params.limit = 10;
      }
      return axios.get(apiURL + 'bookmark', {params}).then(resp => {
        return pick(resp.data, ['count', 'bookmarks']);
      });
    },
  },
};

export default bookmarksModule
