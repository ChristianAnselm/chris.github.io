import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { withRouter } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>

      </div >
    );
  }
}

export default withRouter(App);
