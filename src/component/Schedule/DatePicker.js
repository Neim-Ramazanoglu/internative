import React from "react";
import styles from "./DatePicker.css";

function Datepicker() {
  const list = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  var d = new Date();
  var monthName = list[d.getMonth()];
  return (
    <div className="datePicker">
      <div className="dayinterval">
        <text>Eylül 1 - 7, 2021</text>
      </div>
      <div className="weekintervalpicker">
        <button>{"<"}</button>
        <button>{">"}</button>
      </div>
      <div className="dropdown">
        <select value={monthName}>
          {list.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Datepicker;
