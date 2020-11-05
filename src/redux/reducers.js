import {combineReducers} from 'redux';

import {reducer as appReducer} from './app/redux';
import {reducer as photoReducer} from './photo/redux';
import {reducer as authReducer} from './auth/redux';

const reducers = combineReducers({
    app: appReducer,
    photo: photoReducer,
    auth: authReducer,
})

export default reducers;