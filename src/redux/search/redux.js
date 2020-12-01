import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    list: {
        results: []
    },
    collections: {
        results: []
    },
    detail: {}
}

export const Action = createActions({
    updateState: ['state'],
    searchPhotos: ['data'],
    searchCollections: ['data'],
}, {prefix: 'SEARCH/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})