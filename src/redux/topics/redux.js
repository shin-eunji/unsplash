import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    list: [],
    detail: {},
}

export const Action = createActions({
    updateState: ['state'],
    getTopics: ['data'],
    getTopicsBySlug: ['slug'],
}, {prefix: 'TOPICS/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})