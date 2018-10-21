import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'



/*** Internal modules */
import AppLogin from './components/login/login'
import AppNavigation from './components/navigation/app-navigation'


export default class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AppLogin} />
          <Route path="/login" component={AppLogin} />
          <Route path='/home' component={AppNavigation} />

          <Route exact path='**/' component={AppLogin} />
        </Switch>
      </Router>
      </div>
    );
  }
}
