import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'



/*** Internal modules */
import AppLogin from './components/login/login'


export default class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AppLogin} />
          <Route path="/login" component={AppLogin} />
        </Switch>
      </Router>
      </div>
    );
  }
}
