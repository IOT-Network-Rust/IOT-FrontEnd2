import React from "react";

interface Props {
  topBar: string[];
  grid: string[][];
  toIndex: boolean;
}

/*
This node can display a grid of data points in
a string format
*/
function TableNode(props: Props) {
  let topBar = props.topBar;
  let grid = props.grid;
  let toIndex = props.toIndex;

  return (
    <table>
      <tbody>
        <tr key={-1}>
          <td></td>
          {topBar.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {toIndex && <td key={-1}>{rowIndex}</td>}
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableNode;
