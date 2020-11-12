import store from './store';
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux';
import {Action as photoAction} from './photo/redux';
import {Action as authAction} from './auth/redux';
import {Action as searchAction} from './search/redux';
import {Action as topicsAction} from './topics/redux';

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
export const photoActions = bindActionCreators(photoAction.Creators, dispatch);
export const authActions = bindActionCreators(authAction.Creators, dispatch);
export const searchActions = bindActionCreators(searchAction.Creators, dispatch);
export const topicsActions = bindActionCreators(topicsAction.Creators, dispatch);
