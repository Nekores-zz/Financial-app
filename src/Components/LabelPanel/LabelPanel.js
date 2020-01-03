import React, { Component, Children } from "react";
import { Typography, Paper } from "@material-ui/core";

class LabelPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Paper square elevation={2}>
        <h5 className="sectionTitle">
          Label
        </h5>
        {this.props.children}
        <br/>
      </Paper>
    );
  }
}

export default LabelPanel;
