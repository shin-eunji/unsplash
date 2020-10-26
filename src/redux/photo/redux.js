import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    post: [],
    photo: {},
    toggleOver: false,
    openPopup: false,
    over: false,
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