import React from "react";
import New from "../../icons/New.svg";
import styles from "./userInfo.css";

function Notification() {
  return (
    <div className="notification">
      <img src={New} alt="logo" />
    </div>
  );
}

export default Notification;
