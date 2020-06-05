// @flow

import { connect } from 'react-redux';

export function mapDispatchToProps(dispatch: Function) {
  return {
    searchForRepos(search: string) {
      dispatch({
        type: 'SEARCH_REQUEST',
        payload: {
          search,
        },
      });
    },
  };
}

export default connect(null, mapDispatchToProps);
