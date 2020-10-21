import store from './store';
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux'

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
