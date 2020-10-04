import { createStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import rootModule from './rootModule';

const store = createStore(
  {
    extensions: [getThunkExtension()],
  },
  rootModule
);

export default store;
