import React, { Component } from "react";
import "./landing.css";

/*** Internal Components */
import AppTopbar from '../toolbar/toolbar';

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
          <span>
            Player Name: &nbsp;
            <Input
              value={this.state.name}
              onChange={evt => this.updateInputValue(evt)}
              placeholder="What is your name?"
              type={'text'}
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
            
          </div>
        </div>
      </div>
    );
  }
}
