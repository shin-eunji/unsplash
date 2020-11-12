import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const enhancer = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;

const store = createStore(reducers, enhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store
