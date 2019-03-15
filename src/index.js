import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import "./styles.scss";
import Reducers from './reducers';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.css";

const composeEnhancers = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
