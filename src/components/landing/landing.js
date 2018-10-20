import React, { Component } from "react";
import "./landing.css";
import { BrowserRouter, Route, Link } from 'react-router-dom'


/*** Internal Components */
import AppTopbar from '../toolbar/toolbar';
import AdditionLanding from '../addition/addition-landing'

/*** Material-ui components */
import { Input, Button } from "@material-ui/core";

export default class AppLanding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      giveName: false
    };
  }

  updateInputValue(evt) {
    this.setState({
      name: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="nameSection" hidden={this.state.giveName}>
          <span className='nameSpan'>
            Player Name: &nbsp;
            <Input
              value={this.state.name}
              onChange={evt => this.updateInputValue(evt)}
              placeholder="What is your name?"
              type={'text'}
              required
            />
          </span>
        <br />
          <Button className='nameButton' variant="contained" color={'primary'} onClick={() => this.setState({ giveName: true })}>
            My Name Is: {this.state.name}
          </Button>
        </div>

        <div className="afterName" hidden={!this.state.giveName}>
          <AppTopbar playerName={this.state.name} />

          <div className="gameSelection">
          <AdditionLanding />
            
          </div>
        </div>
      </div>
    );
  }
}
