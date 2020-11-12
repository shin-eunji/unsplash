import {all, takeLatest, put, call} from 'redux-saga/effects'
import {Action} from './redux'
import API from "../../api";

export default function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function*({data}) {
            console.log("[Saga GET_PHOTOS] data", data);

            const result = yield call(API.getPhotos, data)
            console.log("[Saga GET_PHOTOS] API", result);

            if (result) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
        }),

        takeLatest(Action.Types.GET_PHOTO_BY_ID, function*({data}) {
            console.log("[Saga GET_PHOTO_BY_ID] data", data);

            const result = yield call(API.getPhotoById, {data})
            console.log("[Saga GET_PHOTO_BY_ID] API", result);

        }),

    ])
}