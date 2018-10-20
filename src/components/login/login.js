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
        <div className="nameSection">
          <span className='nameSpan'>
            Player Name: &nbsp;
            <Input
              onChange={evt => this.updateInputValue(evt)}
              placeholder="What is your name?"
              type={'text'}
              required
            />
          </span>
        <br />
          <Link to='/home'>
            <Button className='nameButton' variant="contained" color={'primary'}>
            My Name Is: {this.state.name}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
