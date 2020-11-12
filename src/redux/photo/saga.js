import {all, takeLatest, put, call} from 'redux-saga/effects'
import {Action} from './redux'
import API from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.LIST_PHOTO, function*({data}) {
            console.log("[Saga LIST_PHOTO] data", data);

            const result = yield call(API.listPhotos, {data})
            console.log("[Saga LIST_PHOTO] API", result);

            if (result) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
        }),

    ])
}