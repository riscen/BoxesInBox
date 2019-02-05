import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/grid/grid.css";

const Grid = props => {
  const grid = [];
  let row;
  let columns;
  let num;
  for (let i = 0; i < props.rowsNumber; i++) {
    columns = [];
    for (let j = 0; j < props.colsNumber; j++) {
      num = i * props.rowsNumber + j + 1;
      columns.push(
        <div
          key={"col-" + num}
          className="grid-cell"
          style={{ width: 100 / props.colsNumber - 2 + "%" }}
        >
          <span>{num}</span>
        </div>
      );
    }
    row = (
      <div
        key={"row-" + i}
        className="grid-row"
        style={{ height: 100 / props.rowsNumber + "%" }}
      >
        {columns}
      </div>
    );
    grid.push(row);
  }
  return <div className="grid-container">{grid}</div>;
};

Grid.propTypes = {
  colsNumber: PropTypes.any,
  rowsNumber: PropTypes.any
};

export default Grid;
