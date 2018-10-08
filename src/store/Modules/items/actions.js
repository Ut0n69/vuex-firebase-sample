import * as types from './types';
import HTTPMethods from '@/network/firebase/main';

export default {
  async getItem({
    commit
  }) {
    commit(types.INIT_ITEM, await new HTTPMethods(types.API_PARAMS).getAjax());
  },
  async addItem({
    commit
  }, payload) {
    new HTTPMethods(types.API_PARAMS).postAjax(payload);
    commit(types.ADD_ITEM, payload);
  },
};
