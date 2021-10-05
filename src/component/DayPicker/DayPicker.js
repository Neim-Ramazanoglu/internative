import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { useState } from "react";

function Example(props) {
  const { dates, setDates, handleResetClick, handleDayClick } = props;
  // static defaultProps = {
  //   numberOfMonths: 1,
  // };

  // constructor(props) {
  //   super(props);
  //   this.handleDayClick = this.handleDayClick.bind(this);
  //   this.handleResetClick = this.handleResetClick.bind(this);
  //   this.state = this.getInitialState();
  // }

  // getInitialState() {
  //   return {
  //     from: undefined,
  //     to: undefined,
  //   };
  // }

  // handleDayClick(day) {
  //   const range = DateUtils.addDayToRange(day, this.state);
  //   this.setState(range);
  // }

  // handleResetClick() {
  //   this.setState(this.getInitialState());
  // }

  // const { from, to } = currentDay;
  const modifiers = {
    start: dates.from,
    end: dates.to,
  };
  return (
    <div className="RangeExample">
      <DayPicker
        className="Selectable"
        numberOfMonths={dates.numberOfMonths}
        selectedDays={[dates.from, dates.to]}
        modifiers={modifiers}
        onDayClick={handleDayClick}
      />
      <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-radius:6px !important;

  }
  .Selectable .DayPicker-Day--end {
    border-radius:6px !important;
  }
`}</style>
    </div>
  );
}
export default Example;
