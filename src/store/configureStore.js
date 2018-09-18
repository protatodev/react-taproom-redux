import { createStore } from 'redux';
import kegReducer from '../reducers/keg';
import { loadState } from './localstorage';

const persistedState = loadState();

export default () => {
  const store = createStore(kegReducer, persistedState);

  return store;
};