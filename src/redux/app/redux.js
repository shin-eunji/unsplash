import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    over: false,
    popup: false,
    quickMenu: false,
    submitPhoto: false,
}

export const Action = createActions({
    updateState: ['state'],
    getUserInfo: null,
}, {prefix: 'PHOTO/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})