import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    search: [],
    values: '',

}

export const Action = createActions({
    updateState: ['state'],
    searchPhoto: ['keyword'],
    getPhoto: ['data']
}, {prefix: 'SEARCH/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})