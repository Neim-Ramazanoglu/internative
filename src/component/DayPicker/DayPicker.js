import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { useState } from "react";

function Example(props) {
  const { dates, setDates, handleResetClick, handleDayClick } = props;

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
    background-color: white !important;
    color: #5372e7 !important;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
    color: white;

  }
  .Selectable .DayPicker-Day--start {
    border-radius:6px !important;
    background-color: white !important;
    color: #5372e7 !important;
    

  }
  .Selectable .DayPicker-Day:hover{
    border-radius:6px !important;
    background-color: white !important;
    color: #5372e7 !important;
  }

  .Selectable .DayPicker-Day--end {
    border-radius:6px !important;
    background-color: white !important;
    color: #5372e7 !important;
  }

  .Selectable .DayPicker-Day--selected{
    border-radius:6px !important;
    background-color: white !important;
    color: #5372e7 !important;
  }
`}</style>
    </div>
  );
}
export default Example;
