import {all} from 'redux-saga/effects';
import appSaga from './app/saga';
import photoSaga from './photo/saga';

export default function*() {
    yield all([
        appSaga(),
        photoSaga()
    ])
}