import {all, call, put, select, takeLatest} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../api";
import {navigate} from "../../lib/History";


export default function*() {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function*({data}) {
            console.log("[Saga SEARCH_PHOTOS] data", data);

            const result = yield call(API.searchPhotos, data)
            console.log("[Saga SEARCH_PHOTOS] API", result);

            if(result) {
                yield put(Action.Creators.updateState({
                    list: result.data.results
                }))
                const data = result?.config?.params;
                navigate(`/s/photos/${data?.query}`)
            }
        }),
    ])
}