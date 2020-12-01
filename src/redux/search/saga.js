import {all, call, put, select, takeLatest} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../api";


export default function*() {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function*({data}) {
            console.log("[Saga SEARCH_PHOTOS] data", data);

            const result = yield call(API.searchPhotos, data)
            console.log("[Saga SEARCH_PHOTOS] API", result);

            if(result) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
        }),

        takeLatest(Action.Types.SEARCH_COLLECTIONS, function*({data}) {
            console.log("[Saga SEARCH_COLLECTIONS] data", data);

            const result = yield call(API.searchCollections, data)
            console.log("[Saga SEARCH_COLLECTIONS] API", result);

            if(result) {
                yield put(Action.Creators.updateState({
                    collections: result.data
                }))
            }
        }),
    ])
}