import React from "react";
import { Paper, Grid } from "@material-ui/core/";

import Container from "@material-ui/core/Container";
import "./App.css";
import LabelPanel from "./Components/LabelPanel/LabelPanel";
import Label from "./Components/Label/Label";

function App() {
  return (
    <Container className="App" fixed>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <LabelPanel>
            <Label labelText="cash" color="#E67E22" />
            <Label labelText="Inventory" color="#FDCB6E" />
            <Label labelText="Inventory" color="#74D47E" />
          </LabelPanel>
        </Grid>
        <Grid item xs={8}>
          <Paper square elevation={2}>
            <h5 className="sectionTitle1">Assets = Liabilites + Owner’s Equity</h5>
            <br/>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <LabelPanel>
            <Label labelText="Accounts Payable" color="#E67E22" />
            <Label labelText="Accrued Wages" color="#FDCB6E" />
            <Label labelText="Notes Payable" color="#74D47E" />
          </LabelPanel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
