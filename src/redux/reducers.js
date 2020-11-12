import {combineReducers} from 'redux';

import {reducer as appReducer} from './app/redux';
import {reducer as photoReducer} from './photo/redux';
import {reducer as authReducer} from './auth/redux';
import {reducer as searchReducer} from './search/redux';
import {reducer as topicsReducer} from './topics/redux';

const reducers = combineReducers({
    app: appReducer,
    photo: photoReducer,
    auth: authReducer,
    search: searchReducer,
    topics: topicsReducer,
})

export default reducers;