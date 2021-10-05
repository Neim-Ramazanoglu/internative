import React from "react";
import styles from "./Navbar.css";

function Navbar() {
  return (
    <div className="mainDiv">
      <div className="rooms">
        <text>Odalar</text>
      </div>
      <div className="emptyRoom">
        <text>9 Boş Oda</text>
      </div>
      <input className="input"></input>
    </div>
  );
}

export default Navbar;
