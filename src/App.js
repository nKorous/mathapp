import React, { Component } from 'react';
import './App.css';

/*** Internal modules */
import AppNavigation from './components/navigation/app-navigation'


export default class App extends Component {

  render() {
    return (
      <div className="App">
      <AppNavigation />
      </div>
    );
  }
}
