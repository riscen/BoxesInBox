import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/controls/controls.css";

class Controls extends Component {
  render = () => {
    return (
      <div className="controls-container">
        <div className="form-container">
          <div className="sub-title">
            <span>Controls</span>
          </div>
          <form onSubmit={e => this.props.handleSubmit(e)}>
            <div className="form-field">
              <label>
                Rows:
                <input
                  type="number"
                  min="1"
                  max="10"
                  name="rowsNumber"
                  value={this.props.rowsNumber}
                  onChange={e => this.props.handleInputChange(e)}
                />
              </label>
            </div>

            <div className="form-field">
              <label>
                Columns:
                <input
                  type="number"
                  min="1"
                  max="10"
                  name="colsNumber"
                  value={this.props.colsNumber}
                  onChange={e => this.props.handleInputChange(e)}
                />
              </label>
            </div>

            <div className="form-field-submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <div className="result-container">
          <span>Result: {this.props.result}</span>
        </div>
      </div>
    );
  };
}

Controls.propTypes = {
  colsNumber: PropTypes.any,
  handleSubmit: PropTypes.func,
  result: PropTypes.any,
  rowsNumber: PropTypes.any,
  updateGrid: PropTypes.func
};

export default Controls;
