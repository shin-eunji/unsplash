import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./redux/store";
import {Router} from 'react-router-dom'
import './scss/style.scss'
import {HISTORY} from "./lib/History";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={HISTORY}>
                <App />
            </Router>
        </Provider>
</React.StrictMode>,
  document.getElementById('root')
);
