import React, { useState } from "react";
import Popup from "./PopUp";

function Pop() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
                  <input placeholder="Lütfen bir tarih aralığı seçiniz"></input>
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
