// @flow

import React from 'react';
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom';
import SearchScreen from 'screens/Search';
import DefaultLayout from 'screens/Default';

import 'css/global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <DefaultLayout exact={true} path="/search" component={SearchScreen} />
        <Redirect to="/search" />
      </Switch>
    </Router>
  );
}
