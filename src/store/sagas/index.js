// @flow

import { watchRepos } from './Search';
import { watchGetRateLimit } from './RateLimit';

export default function* rootSaga() {
  yield [watchRepos(), watchGetRateLimit()];
}
