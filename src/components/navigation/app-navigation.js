import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

/*** Material UI */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

/*** Internal Components */
import AppLogin from "../login/login";
import AppMain from "../navigation/app-main";

export default class AppNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: localStorage.getItem("playerName"),
      sidebarOpen: false
    };
  }

  toggleSidebar = open => () => {
    this.setState({
      sidebarOpen: open
    });
  };

  render() {
    return (
      <div>
        <AppBar position="static" className="appbarClass">
          <Toolbar>
            <IconButton>
              <MenuIcon onClick={this.toggleSidebar(true)} />
            </IconButton>
            <span style={{ flex: "1 1" }} />
            Welcome: {this.props.playerName}
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: "sidebarClass"
          }}
          open={this.state.sidebarOpen}
          onClose={this.toggleSidebar(false)}
        >
        <div>
            Welcome: {this.state.playerName}
        </div>
        </Drawer>
        <div className="content">
          <Router>
            <Switch>
              <Route path="/" component={AppLogin} exact />
              <Route path="/home" component={AppMain} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
