import "./App.css";
import SideLeft from "./container/SideLeft";
import { BrowserRouter as Router } from "react-router-dom";
import SideHeader from "./container/SideHeader";
import LogOut from "./container/LogOut";
import UserInfo from "./component/UserInfo/UserInfo";
import RenderTable from "./component/Schedule/RenderTable";
import Datepicker from "./component/Schedule/DatePicker";
import Navbar from "./component/Schedule/Navbar";
import React, { useState } from "react";
import Pop from "./component/PopUp/Pop";
import DayPicker, { DateUtils } from "react-day-picker";

export default function App() {
  // constructor(props) {
  //   super(props);
  //   this.handleDayClick = this.handleDayClick.bind(this);
  //   this.handleResetClick = this.handleResetClick.bind(this);
  //   // this.state = this.getInitialState();
  //   useState = { from: "", to: "" };
  // }
  const initialState = { from: "", to: "" };
  const [dates, setDates] = useState({ initialState });

  const selectedDate = { from: "", to: "" };
  const [date, setSelectedDate] = useState({ selectedDate });
  // getInitialState() {
  //   return {
  //     from: undefined,
  //     to: undefined,
  //   };
  // }
  const selectDateClick = (from, to) => {
    debugger;
    if (from && to) {
      console.log(from);
    }
  };

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, dates);
    setDates(range);
  };

  const handleResetClick = () => {
    setDates(initialState);
  };

  return (
    <div className="main">
      <div className="sidebar">
        <Router>
          <SideHeader />
          <SideLeft />
          <LogOut />
        </Router>
      </div>
      <div className="appointment">
        <Navbar />
        <Datepicker />
        <RenderTable />
        <Pop
          dates={dates}
          setDates={setDates}
          handleDayClick={handleDayClick}
          handleResetClick={handleResetClick}
          date={date}
          selectDateClick={selectDateClick}
        />
      </div>

      <div className="calender">
        <UserInfo />
        <DayPicker />
      </div>
    </div>
  );
}
