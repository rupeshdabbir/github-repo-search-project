// @flow

import mergeAll from 'lodash/fp/mergeAll';
import isUndefined from 'lodash/fp/isUndefined';
import get from 'lodash/fp/get';
import omit from 'lodash/fp/omit';

const initialState = {
  search: {},
  profile: {},
  repos: {},
  followers: {},
  rateLimit: {},
};

type addToCacheArgs = {
  state: Object,
  cacheKey: string,
  type: string,
  data: any,
};

export function addToCache({ state, cacheKey, type, data }: addToCacheArgs): Object {
  if (isUndefined(cacheKey) || state[type][cacheKey]) {
    return state;
  }
  const newState = mergeAll([{}, state]);
  newState[type][cacheKey] = omit('entities', data);
  return newState;
}

export function getSearchFromCache(search: string): Function {
  return get(`cache.search.${search}`);
}

export default function cacheReducer(state: Object = initialState, action: Object) {
  switch (action.type) {
    case 'SEARCH_SUCCESS':
      return addToCache({
        state,
        cacheKey: action.payload.search,
        type: 'search',
        data: action.payload,
      });

    case 'API_RATE_LIMIT_SUCCESS': {
      const newState = mergeAll([{}, state]);
      newState.rateLimit.latest = action.payload;
      return newState;
    }

    default:
      return state;
  }
}
