import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import { RepoCard } from "./components/RepoCard";

export default () => (
  <App>
    <Route path="/" component={HomePage} />
    <Switch>
      <Route path="/some1" component={RepoCard} />
    </Switch>
  </App>
);
