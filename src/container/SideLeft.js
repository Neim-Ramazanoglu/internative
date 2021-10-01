import React, { Component } from "react";
import { NavButton } from "../component/NavButton";
import styles from "./SideLeft.css";
import topluluk from "../icons/topluluk.svg";
import panel from "../icons/panel.svg";
import mesaj from "../icons/mesaj.svg";
import istatistik from "../icons/istatistik.svg";
import oda from "../icons/oda.svg";

const navigations = [
  {
    text: "Yönetim Paneli",
    icon: panel,
    to: "/home",
  },
  {
    text: "Odalar",
    icon: oda,
    to: "/explore",
  },
  {
    text: "Topluluk",
    icon: topluluk,
    to: "/notification",
  },
  {
    text: "Mesajlar",
    icon: mesaj,
    to: "/messages",
  },
  {
    text: "İstatistikler",
    icon: istatistik,
    to: "/bookmarks",
  },
];

class SideLeft extends Component {
  render() {
    return (
      <ul className="nav">
        {navigations.map((navigation, index) => {
          return <NavButton key={index} {...navigation} />;
        })}
      </ul>
    );
  }
}

export default SideLeft;
