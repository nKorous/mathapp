import React, { Component } from "react";
import "./toolbar.css";

/*** Material UI */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from '@material-ui/core/Drawer'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

/*** Internal Components */
import AppSidebar from '../sidebar/sidebar'

export default class AppTopbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        sidebarOpen: false
    };
  }

  toggleSidebar = (open) => () => {
    this.setState({
        sidebarOpen: open
    })
}

  render() {
    return (
      <div>
        <AppBar position="static" className='appbarClass'>
          <Toolbar>
            <IconButton>
              <MenuIcon onClick={this.toggleSidebar(true)}/>
            </IconButton>
            <span style={{ flex: "1 1" }} />
            Welcome: {this.props.playerName}
          </Toolbar>
        </AppBar>
        <Drawer
          className='sidebarClass'
          open={this.state.sidebarOpen}
          onClose={this.toggleSidebar(false)}
        >
        <ul>
          <li>Some Link</li>
          <li>Some Other Link</li>
        </ul>
        </Drawer>
      </div>
    );
  }
}
