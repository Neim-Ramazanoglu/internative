import React, { useState } from "react";
import CalendarPopUp from "./CalendarPopUp";
import DayPicker from "../DayPicker/DayPicker";

function CalPop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendarPopUp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleCalendarPopUp}>Takvim</button>
      {isOpen && (
        <CalendarPopUp
          content={
            <>
              <DayPicker />
            </>
          }
          handleClose={toggleCalendarPopUp}
        />
      )}
    </div>
  );
}

export default CalPop;
