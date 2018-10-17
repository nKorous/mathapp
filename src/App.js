import React, { Component } from 'react';
import './App.css';

/*** Internal modules */
import AppLanding from './components/landing/landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLanding />
      </div>
    );
  }
}

export default App;
