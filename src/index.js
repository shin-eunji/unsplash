import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./redux/store";
import {BrowserRouter} from 'react-router-dom'
import './scss/style.scss'
import {HISTORY} from "./Helpers/History";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter history={HISTORY}>
            <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
