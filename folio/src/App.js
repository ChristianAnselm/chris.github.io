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
          {/* <Route path="/users/logout" component={this.logoutUser} />
          <Route path="/users/login" component={LoginUser} />
          <Route path="/users/new" component={NewUser} />
          <Route path='/dashboard' component={Feed} /> */}
        </Switch>

      </div >
    );
  }
}

export default withRouter(App);
