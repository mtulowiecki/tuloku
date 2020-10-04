import rootReducer from 'reducers/rootReducer';

const rootModule = {
  id: 'root-module',
  reducerMap: {
    root: rootReducer,
  },
};

export default rootModule;
