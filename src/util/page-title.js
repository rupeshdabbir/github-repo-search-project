// @flow

import isUndefined from 'lodash/fp/isUndefined';

export default function pageTitle(title: string | void): string {
  const base = 'Github Repo search';
  if (isUndefined(title)) {
    return base;
  }
  return `${title} - ${base}`;
}
