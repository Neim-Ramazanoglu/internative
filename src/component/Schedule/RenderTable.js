import React, { useState, setState, useEffect } from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import styles from "./renderTable.css";

function RenderTable() {
  var showdate = new Date();
  var displaytodaysdate = showdate.getDate();
  var months = [
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

  var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  var d = new Date();
  var monthName = months[d.getMonth()];
  var dayName = days[d.getDay()];

  var rows = [
    {
      id: 1,
      pazar: "",
      pazartesi: "",
      salı: "",
      çarşamba: "",
      perşembe: "",
      cuma: "",
      cumartesi: "",
    },
    {
      id: 2,
      pazar: "",
      pazartesi: "",
      salı: "",
      çarşamba: "",
      perşembe: "",
      cuma: "",
      cumartesi: "",
    },
    {
      id: 3,
      pazar: "",
      pazartesi: "",
      salı: "",
      çarşamba: "",
      perşembe: "",
      cuma: "",
      cumartesi: "",
    },
    {
      id: 4,
      pazar: "",
      pazartesi: "",
      salı: "",
      çarşamba: "",
      perşembe: "",
      cuma: "",
      cumartesi: "",
    },
    {
      id: 5,
      pazar: "",
      pazartesi: "",
      salı: "",
      çarşamba: "",
      perşembe: "",
      cuma: "",
      cumartesi: "",
    },
  ];

  const [room, setRoom] = useState(rows);
  const AddEntryClick = () => {
    setRoom([
      ...room,
      {
        id: room.length + 1,
        pazar: "",
        pazartesi: "",
        salı: "",
        çarşamba: "",
        perşembe: "",
        cuma: "",
        cumartesi: "",
      },
    ]);

    debugger;
  };

  const renderHeader = () => {
    return days.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  return (
    <div>
      <span>{monthName} </span>
      <table>
        <thead>
          <tr>
            <th>Odalar</th>
            {renderHeader()}
          </tr>
          {room.map(
            ({
              id,
              pazar,
              pazartesi,
              salı,
              çarşamba,
              perşembe,
              cuma,
              cumartesi,
            }) => (
              <tr>
                <th>Oda {id}</th>
                <th>{pazar}</th>
                <th>{pazartesi}</th>
                <th>{salı}</th>
                <th>{çarşamba}</th>
                <th>{perşembe}</th>
                <th>{cuma}</th>
                <th>{cumartesi}</th>
              </tr>
            )
          )}
        </thead>
        <button className="addButton" onClick={AddEntryClick}>
          Oda Ekle
        </button>
      </table>
    </div>
  );
}

export default RenderTable;
