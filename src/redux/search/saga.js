import {all, call, put, takeLatest} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../api";


export default function*() {
    yield all([
        takeLatest(Action.Types.GET_PHOTO, function*({data}) {

            console.log("data getPhoto", data);

            const result = yield call(API.getPhotos, data)
            console.log("[Saga GET_PHOTO] API", result);
            if(result) {
                yield put(Action.Creators.updateState({
                    search: result.data
                }))
            }
        }),
        takeLatest(Action.Types.SEARCH_PHOTO, function*({keyword}) {
            console.log("[Saga SEARCH_PHOTO] keyword", keyword);

            const data = {
                page: 1,
                query: keyword
            }

            const result = yield call(API.searchPhotos, data)
            console.log("[Saga SEARCH_PHOTO] API", result);

            if (result) {
                yield put(Action.Creators.updateState({
                    values: result.data
                }))
            }
        }),
    ])
}