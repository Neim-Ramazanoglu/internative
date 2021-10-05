import React, { useState } from "react";
import Popup from "./PopUp";
import DayPicker from "../DayPicker/DayPicker";
import CalendarPopUp from "./CalendarPopUp";
function Pop(props) {
  const {
    dates,
    setDates,
    handleResetClick,
    handleDayClick,
    date,
    selectDateClick,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const toggleCalendarPopUp = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={togglePopup}>Pop Up</button>
      {isOpen && (
        <Popup
          content={
            <>
              <div className="odaekle">
                <span
                  style={{
                    color: "#5372e7",
                    fontSize: "16pt",
                    fontWeight: "bold",
                  }}
                >
                  Oda Ekle
                </span>
                <div>
                  <span
                    style={{
                      color: "#bababa",
                      fontSize: "16pt",
                    }}
                  >
                    Kalacak Konuklar
                  </span>
                  <br />
                  <input placeholder="Kişi İsimlerini Giriniz"></input>
                </div>
                <div>
                  <span
                    style={{
                      color: "#bababa",
                      fontSize: "16pt",
                    }}
                  >
                    Tarih
                  </span>
                  <br />
                  <input
                    onClick={toggleCalendarPopUp}
                    placeholder="Lütfen bir tarih aralığı seçiniz"
                    value={dates.from}
                  ></input>
                  {isShown && (
                    <CalendarPopUp
                      content={
                        <>
                          <DayPicker
                            dates={dates}
                            setDates={setDates}
                            handleDayClick={handleDayClick}
                            handleResetClick={handleResetClick}
                            date={date}
                            selectDateClick={selectDateClick}
                          />
                          <button>İptal</button>
                          <button onClick={toggleCalendarPopUp}>Tamam</button>
                        </>
                      }
                      handleClose={toggleCalendarPopUp}
                    />
                  )}
                </div>
                <button
                  style={{
                    width: "100%",
                    color: "#ffffff",
                    backgroundColor: "#5372e7",
                    height: "50px",
                    borderRadius: "12px",
                    border: "0px",
                  }}
                  className="buton"
                >
                  Kaydet
                </button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Pop;
