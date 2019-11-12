
export default {
  //命名空间
  namespace: 'example',
  //原始数据
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  //异步操作
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },
  //同步操作
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
