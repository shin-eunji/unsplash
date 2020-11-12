import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    search: [],
    value: "",
    photos: [],
    photoPages: null

}

export const Action = createActions({
    updateState: ['state'],
    getPhoto: ['data'],
    searchPhoto: ['keyword'],
}, {prefix: 'SEARCH/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})