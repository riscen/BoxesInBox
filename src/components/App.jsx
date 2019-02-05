import React, { Component } from "react";

import Controls from "./controls/Controls";
import Grid from "./grid/Grid";

import getBoxesInBox from "../script/getBoxesInBox";

import "../styles/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colsNumber: 3,
      result: "Not calculated",
      rowsNumber: 3
    };
  }

  updateGridSize = event => {
    this.setState({
      [event.target.name]: event.target.value,
      result: "Not calculated"
    });
  };

  createGrid = event => {
    this.setState({
      result: getBoxesInBox(this.state.rowsNumber, this.state.colsNumber)
    });
    event.preventDefault();
  };

  render = () => {
    return (
      <div className="app-container">
        <div className="title">
          <span>Boxes in box</span>
        </div>

        <div className="left-pane">
          <Controls
            colsNumber={this.state.colsNumber}
            handleInputChange={this.updateGridSize}
            handleSubmit={this.createGrid}
            result={this.state.result}
            rowsNumber={this.state.rowsNumber}
          />
        </div>

        <div className="right-pane">
          <Grid
            colsNumber={this.state.colsNumber}
            rowsNumber={this.state.rowsNumber}
          />
        </div>
      </div>
    );
  };
}

export default App;
