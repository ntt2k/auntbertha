import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Firstpage from './Firstpage';
import Dashboard from './Dashboard';

export default class App extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Firstpage />
        )}/>

        <Route path='/dashboard' render={() => (
          <Dashboard />
        )}/>
      </div>
    );
  }
}