import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="transparent" elevation={3}>
        <Toolbar variant="dense">
          <Typography variant="h6">
            <Link component={RouterLink} to="/progress">
              Progress
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link component={RouterLink} to="/faq">
              FAQ
            </Link>
          </Typography>
          <div>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
