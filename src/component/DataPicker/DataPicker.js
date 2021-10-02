import React from "react";
import styles from "./datepicker.css";

function DataPicker() {
  return (
    <div className="pickerContainer">
      <div className="header">
        <td>S</td>
        <td>M</td>
        <td>T</td>
        <td>W</td>
        <td>T</td>
        <td>F</td>
        <td>S</td>
      </div>
      <div className="dates"></div>
    </div>
  );
}

export default DataPicker;
