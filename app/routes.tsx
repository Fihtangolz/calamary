import * as React from 'react';
import { Switch, Route } from 'react-router';
import { SideBar } from './components/SideBar';
import { RowConteiner } from './components/Layout';

import GitViewer from "./containers/GitViewer";
import { Dashboard } from "./containers/Dashboard";
import { Setting } from "./containers/Settings"
import { GitClient } from "./containers/GiClient";

export default () => (
  <div
    style={{
      height: "100%",

      display: "grid",
      gridTemplateColumns: "50px 1fr",
    }}
  >
    <Route path="/" component={SideBar} />
    <Switch>
      <Route path="/repoTracker" component={GitViewer}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/gitClient" component={GitClient}/>
      <Route path="/setting" component={Setting}/>
    </Switch>
  </div>
);
