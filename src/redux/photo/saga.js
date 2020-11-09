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

        takeLatest(Action.Types.TOPICS_PHOTO, function*({data}) {
            console.log("[Saga TOPICS_PHOTO] data", data);

            const result = yield call(API.topicsPhotos, {data})
            console.log("[Saga TOPICS_PHOTO] API", result);

            if (result) {
                yield put(Action.Creators.updateState({
                    topics: result.data
                }))
            }
        }),
    ])
}