import {combineReducers} from 'redux'
import {reducer as appReducer} from './app/redux'
import {reducer as photoReducer} from './photo/redux'

const reducers = combineReducers({
    app: appReducer,
    photo: photoReducer,
})

export default reducers;