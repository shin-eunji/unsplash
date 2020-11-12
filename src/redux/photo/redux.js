import {createActions, createReducer} from 'reduxsauce';

const initialState = {
    list: [],
    photo: [],
}

export const Action = createActions({
    updateState: ['state'],
    getPhotos: ['data'],
    getPhotoById: ['data'],
}, {prefix: 'PHOTO/'})

export const reducer = createReducer(initialState, {
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    }),
})