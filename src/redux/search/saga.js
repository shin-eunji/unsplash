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
                    list: result.data.results
                }))
            }
        }),

        // takeLatest(Action.Types.GET_TOPICS, function*({data}) {
        //     console.log("[Saga TOPICS] data", data);
        //     // ids
        //     // page
        //     // per_page
        //     // order_by
        //
        //     const result = yield call(API.getTopics, data)
        //     console.log("[Saga GET_TOPICS] API", result);
        //
        //     if (result) {
        //         yield put(Action.Creators.updateState({
        //             list: result.data
        //         }))
        //     }
        // }),
        // takeLatest(Action.Types.GET_TOPICS_BY_SLUG, function*({slug}) {
        //     const result = yield call(API.getTopicsBySlug, slug)
        //     console.log("[Saga GET_TOPICS_BY_SLUG] API", result);
        //
        //     if (result) {
        //
        //         const {topics} = yield select()
        //         yield put(Action.Creators.updateState({
        //             detail: {
        //                 ...topics.detail,
        //                 [result?.data?.slug]: result.data
        //             }
        //         }))
        //     }
        // })
        // takeLatest(Action.Types.SEARCH_PHOTO, function*({keyword}) {
        //     console.log("[Saga SEARCH_PHOTO] keyword", keyword);
        //
        //     const data = {
        //         page: 1,
        //         query: keyword
        //     }
        //
        //     const result = yield call(API.searchPhotos, data)
        //     console.log("[Saga SEARCH_PHOTO] API", result);
        //
        //     if (result) {
        //         yield put(Action.Creators.updateState({
        //             values: result.data
        //         }))
        //     }
        // }),
    ])
}