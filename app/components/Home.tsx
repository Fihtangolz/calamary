import * as React from 'react';
import { Route, Switch } from "react-router";

import { SideBar } from './SideBar';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <SideBar/>
      </div>
    );
  }
};
