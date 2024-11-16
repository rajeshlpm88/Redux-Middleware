import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer } from './reducer';

// Middleware from the previous response
const myLogger = (store) => (next) => (action) => {
  console.log('I am in First Middleware');
  return next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  console.log('I am in Second Middleware');
  return next(action);
};


const stopAtTen = (store) => (next) => (action) => {
  if (store.getState() >= 10) {console.log('I am in Third Middleware');
    return next({ type: 'DECREMENT' });
  }
  return next(action);
};

const store = createStore(counterReducer, applyMiddleware(myLogger, secondMiddleware, stopAtTen));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
