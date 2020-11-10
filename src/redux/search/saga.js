import {all, call, put, takeLatest} from 'redux-saga/effects'
import {Action} from "../photo/redux";
import API from "../../api";


export default function*() {
    yield all([
        takeLatest(Action.Types.collection, function*(data) {
            console.log("data", data);

            const result = yield call(API.collection)
            console.log("API", result);
            if(result) {
                yield put(Action.Creators.collection({
                    collection: result.data
                }))
            }
        }),

        takeLatest(Action.Types.SEARCH_PHOTO, function* ({keyword}) {
            console.log("[Saga SEARCH_PHOTO] data", {keyword});

            const data = {
                page: 1,
                query: keyword,
            }
            const result = yield call(API.searchPhotos)
            console.log("[Saga SEARCH_PHOTO] data", data);

            if (result) {
                yield put(Action.Creators.updateState({
                    searchPhotos: result.data.results
                }))
            }

        }),

        takeLatest(Action.Types.SEARCH, function* ({data}) {
            const result = yield call(API.search)
            console.log("[Saga SEARCH] data", data);

            if (result) {
                yield put(Action.Creators.updateState({
                    search: result.data.results
                }))
            }
        }),
    ])
}