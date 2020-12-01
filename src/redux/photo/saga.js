import {all, takeLatest, put, call} from 'redux-saga/effects'
import {Action} from './redux'
import API from "../../api";
import {select} from "@redux-saga/core/effects";

export default function* () {
    yield all([
        takeLatest(Action.Types.GET_PHOTOS, function*({data}) {
            // console.log("[Saga GET_PHOTOS] data", data);

            const result = yield call(API.getPhotos, data)
            console.log("[Saga GET_PHOTOS] API", result);

            if (result) {
                const state = yield select();
                yield put(Action.Creators.updateState({
                    list: [
                        ...state.photo.list,
                        ...result.data
                    ]
                }))
            }
        }),

        takeLatest(Action.Types.GET_PHOTO_BY_ID, function*({data}) {
            console.log("[Saga GET_PHOTO_BY_ID] data", data);

            const result = yield call(API.getPhotoById, {data})
            console.log("[Saga GET_PHOTO_BY_ID] API", result);

        }),

        takeLatest(Action.Types.PHOTO_RANDOM, function*({data}) {
            console.log("[Saga PHOTO_RANDOM] data", data);

            const result = yield call(API.photoRandom, {data})
            console.log("[Saga PHOTO_RANDOM] API", result);

        }),

        takeLatest(Action.Types.PHOTO_LIKE, function*({data}) {
            console.log("[Saga PHOTO_LIKE] data", data);

            const result = yield call(API.photoLike, {data})
            console.log("[Saga PHOTO_LIKE] API", result);

        }),
    ])
}