import { createStore } from 'redux';
import kegReducer from '../reducers/keg';

export default () => {
  const store = createStore(kegReducer);

  return store;
};