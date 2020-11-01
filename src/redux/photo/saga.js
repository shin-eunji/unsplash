import {all, takeLatest,put, call} from 'redux-saga/effects'
import {Action} from './redux'
import axios from "axios";
import {navigate} from "../../lib/History";
import API from "../../api";

export default function*() {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTO, function*({ keyword }) {
            console.log("keyword", keyword);

            const data = {
                page: 1,
                query: keyword,
            }
            const result = yield call(API.searchPhotos, data)
            console.log("result", result);

            if(result) {
                yield put(Action.Creators.updateState({
                    searchPhotos: result.data
                }))
            }

        })
    ])
}