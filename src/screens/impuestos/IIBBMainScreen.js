import React from "react";
import "./IIBBMainScreen.css";

function IIBBMainScreen() {
  const yearList = [2019, 2020, 2021, 2022];
  const monthList = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <React.Fragment>
      <h2>Seleccione un periodo</h2>
      <div class="datePicker">
        <div class="yearSelector">
          <ul>
            <li class="row month">{yearList[3]}</li>
            <li class="row month">{yearList[2]}</li>
            <li class="row month">{yearList[1]}</li>
            <li class="row month">{yearList[0]}</li>
          </ul>
        </div>
        <div class="monthSelector">
          <ul>
            <li class="row noCompletado">{monthList[5]}</li>
            <li class="row porVencer">{monthList[4]}</li>
            <li class="row completado">{monthList[3]}</li>
            <li class="row completado">{monthList[2]}</li>
            <li class="row completado">{monthList[1]}</li>
            <li class="row completado">{monthList[0]}</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default IIBBMainScreen;
