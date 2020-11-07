import {all, call, put, takeLatest} from 'redux-saga/effects'
import {Action} from "../photo/redux";
import API from "../../api";


export default function*() {
    yield all([
        takeLatest(Action.Types.LIST, function*({data}) {
            console.log("data", data);

            const result = yield call(API.listPhotos)
            console.log("API", result);

            if(result) {
                yield put(Action.Creators.list({
                    listPhoto: result.data
                }))
            }
        }),
    ])
}