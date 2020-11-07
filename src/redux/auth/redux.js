import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    isLoading: true,
    isError: false,
    memoList: null,
    user: null,
    onLoad: false,
}

export const Action = createActions({
    updateState: ['state'],
    signUp: ['data'],
    signIn: ['data'],
    signOut: null,
    getUserInfo: null,
}, {prefix: 'AUTH/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})