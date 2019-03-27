import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import "bootstrap/dist/css/bootstrap.css";

import { createLogger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'

import "./styles.scss";
import Reducers from './reducers';
import App from './components/App';

const persistConfig = {
  key: 'root',
  storage,
}

const logger = createLogger({
  collapsed: true,
  duration : true,
  timestamp : true,
  level : 'info',
  logErrors : true,
  diff : true
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, Reducers)

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(reduxThunk, logger))
);

let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
