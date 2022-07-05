import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import CargaFacturasScreen from "./CargaFacturasScreen";
import './IIBBMainScreen.css'

function IIBBMainScreen() {
  // const [impuestoData, setImpuestoData] = useState({});
  // console.log("Info:", impuestoData);

  function SeleccionPeriodoScreen() {

    // const handleChangePeriodo = (data) => {
    //   setImpuestoData({
    //     periodo: data.target.value
    //   });
    // }

    const dateList = [
      { id: 0, year: 2022, months: [ 
                              {num: 12, name: "Diciembre", status: "noCompletado"},
                              {num: 11, name: "Noviembre", status: "noCompletado"},
                              {num: 10, name: "Octubre", status: "noCompletado"},
                              {num: 9, name: "Septiembre", status: "noCompletado"},
                              {num: 8, name: "Agosto", status: "noCompletado"},
                              {num: 7, name: "Julio", status: "porVencer"},
                              {num: 6, name: "Junio", status: "completado"},
                              {num: 5, name: "Mayo", status: "completado"},
                              {num: 4, name: "Abril", status: "completado"},
                              {num: 3, name: "Marzo", status: "completado"},
                              {num: 2, name: "Febrero", status: "completado"},
                              {num: 1, name: "Enero", status: "completado"} ] },

      { id: 1, year: 2021, months: [ {num: 12, name: "Diciembre", status: "completado"},
                              {num: 11, name: "Noviembre", status: "completado"},
                              {num: 10, name: "Octubre", status: "completado"},
                              {num: 9, name: "Septiembre", status: "completado"},
                              {num: 8, name: "Agosto", status: "completado"},
                              {num: 7, name: "Julio", status: "completado"},
                              {num: 6, name: "Junio", status: "completado"},
                              {num: 5, name: "Mayo", status: "completado"},
                              {num: 4, name: "Abril", status: "completado"},
                              {num: 3, name: "Marzo", status: "completado"},
                              {num: 2, name: "Febrero", status: "completado"},
                              {num: 1, name: "Enero", status: "completado"} ] },

      { id: 2, year: 2020, months: [ {num: 12, name: "Diciembre", status: "completado"},
                              {num: 11, name: "Noviembre", status: "completado"},
                              {num: 10, name: "Octubre", status: "completado"},
                              {num: 9, name: "Septiembre", status: "completado"},
                              {num: 8, name: "Agosto", status: "completado"},
                              {num: 7, name: "Julio", status: "completado"},
                              {num: 6, name: "Junio", status: "completado"},
                              {num: 5, name: "Mayo", status: "completado"},
                              {num: 4, name: "Abril", status: "completado"},
                              {num: 3, name: "Marzo", status: "completado"},
                              {num: 2, name: "Febrero", status: "completado"},
                              {num: 1, name: "Enero", status: "completado"} ] },
                              
      { id: 3, year: 2019, months: [ {num: 12, name: "Diciembre", status: "noCompletado"},
                              {num: 11, name: "Noviembre", status: "noCompletado"},
                              {num: 10, name: "Octubre", status: "noCompletado"},
                              {num: 9, name: "Septiembre", status: "noCompletado"},
                              {num: 8, name: "Agosto", status: "noCompletado"},
                              {num: 7, name: "Julio", status: "noCompletado"},
                              {num: 6, name: "Junio", status: "completado"},
                              {num: 5, name: "Mayo", status: "completado"},
                              {num: 4, name: "Abril", status: "completado"},
                              {num: 3, name: "Marzo", status: "completado"},
                              {num: 2, name: "Febrero", status: "completado"},
                              {num: 1, name: "Enero", status: "completado"} ] },
      ];

    const handleYearClick = (months) => {
      for (let i = 1; i <= 12; i++) {
        const month = document.getElementById("month-" + i);
        month.className = 'row ' + months[12 - i].status;
      }
    };

    const handleMonthClick = (month) => {
      console.log("handleMonthClick: " + month);
    };

    const yearList = [];
    const monthList = [];

    dateList.forEach((date) => {
      yearList.push(<li className="row year" onClick={() => handleYearClick(date.months)}>{date.year}</li>)
    });

    dateList[0].months.forEach((month) => {
      monthList.push(<li id={"month-" + month.num}  className={"row " + month.status} onClick={() => handleMonthClick(month.num)}>{month.name}</li>)
    });
    
    return (
      <React.Fragment>
        <h2>Seleccione un periodo</h2>
        <div className="datePicker">
          <div className="yearSelector">
            <ul>
              { yearList }
            </ul>
          </div>
          <div className="monthSelector">
            <ul>
              { monthList }
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<Navigate to={"periodo"} replace={true} />} />
        <Route path="periodo" element={<SeleccionPeriodoScreen />} />
        <Route path="facturacion" element={<CargaFacturasScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default IIBBMainScreen;
