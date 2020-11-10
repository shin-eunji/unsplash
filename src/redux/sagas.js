import {all} from 'redux-saga/effects';
import appSaga from './app/saga';
import photoSaga from './photo/saga';
import authSaga from './auth/saga';
import searchSaga from './search/saga';

export default function*() {
    yield all([
        appSaga(),
        photoSaga(),
        authSaga(),
        searchSaga(),
    ])
}