import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    submitPhoto: false,
    photo: [],
    clientId: [],
    search: [],
    list: [],
    listPhoto: [],
    collection: [],
}

export const Action = createActions({
    updateState: ['state'],
    searchPhoto: ['keyword'],
    search: ['data'],
    collection: ['data']
}, {prefix: 'PHOTO/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})