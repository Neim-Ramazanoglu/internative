import React from "react";
import User from "../../icons/User.svg";
import styles from "./userInfo.css";
import ArrowDown from "../../icons/ArrowDown.svg";
import Notification from "./Notification";
function UserInfo() {
  return (
    <div className="userMainContainer">
      <Notification />
      <div className="userContainer">
        <img className="userPic" src={User} alt="userPic" />
        <div className="info">
          <span className="userName">Esra İzen</span>
          <br />
          <span className="userJob">Resepsiyon</span>
        </div>

        <img src={ArrowDown} alt="arrowIcon" width="16px" />
      </div>
    </div>
  );
}

export default UserInfo;
