import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addKeg } from './actions/keg';

const store = configureStore();

store.dispatch(addKeg({
  name: 'Fire Water',
  price: 7,
  brand: 'IPA',
  description: 'Slightly more hoppy than usual'
}));

store.dispatch(addKeg({
  name: 'Voodoo Dougnut IPA',
  price: 8,
  brand: 'Voodoo',
  description: 'Pairs well with a nice maple bar'
}));

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));