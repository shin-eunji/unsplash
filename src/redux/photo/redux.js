import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    list: [],
    photo: [],
    search: [],
    topics: [],
    photoDetail: false,
    over: false,
    quickMenu: false,
}

export const Action = createActions({
    updateState: ['state'],
    listPhoto: ['data'],
    topicsPhoto: ['data'],
    searchPhoto: ['keyword'],
    search: ['data'],
}, {prefix: 'PHOTO/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})