import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    list: [],
    photo: [],
    topics: [],
}

export const Action = createActions({
    updateState: ['state'],
    listPhoto: ['data'],
    topicsPhoto: ['data'],
}, {prefix: 'PHOTO/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})