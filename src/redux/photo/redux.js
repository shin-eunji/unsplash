import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    post: [],
    photo: {},
    photoDetail: false,
    toggleOver: false,
    over: false,
    quickMenu: false,
}

export const Action = createActions({
    updateState: ['state'],
}, {prefix: 'PHOTO/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})