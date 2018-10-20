import React, { Component } from "react";
import "./login.css";

import { Link } from 'react-router-dom'

/*** Material-ui components */
import { Input, Button } from "@material-ui/core";

export default class AppLogin extends Component {
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

    localStorage.setItem('playerName', evt.target.value)
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
          <Link to='/games'>
            <Button className='nameButton' variant="contained" color={'primary'} onClick={() => this.setState({ giveName: true })}>
            My Name Is: {this.state.name}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
