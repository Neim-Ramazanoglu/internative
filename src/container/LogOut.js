import React from "react";
import logout from "../icons/logout.svg";
import styles from "./SideHeader.css";

function LogOut() {
  return (
    <div className="logOut">
      <img src={logout} alt="logout" />
      <span>Çıkış</span>
    </div>
  );
}

export default LogOut;
