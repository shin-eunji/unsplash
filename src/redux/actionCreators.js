import store from './store';
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux'
import {Action as photoAction} from './photo/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
export const photoActions = bindActionCreators(photoAction.Creators, dispatch);
