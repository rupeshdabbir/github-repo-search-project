// @flow

import { combineReducers } from 'redux';
import searchReducer from 'reducers/Search';
import cacheReducer from 'reducers/Cache';
import rateLimitReducer from 'reducers/RateLimit';

export default combineReducers({
  cache: cacheReducer,
  search: searchReducer,
  rateLimit: rateLimitReducer,
});
