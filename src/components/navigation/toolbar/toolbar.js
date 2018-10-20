import React, { Component } from "react";
import "./toolbar.css";

/*** Material UI */
import AppBar  from "@material-ui/core/AppBar";
import  Toolbar  from '@material-ui/core/Toolbar'
import IconButton  from '@material-ui/core/IconButton'
import MenuIcon from "@material-ui/icons/Menu";

export default class AppTopbar extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

  render() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                
                <span style={{ flex: '1 1'}} />

                Welcome: {this.props.playerName}
            </Toolbar>
        </AppBar>
    );
  }
}
