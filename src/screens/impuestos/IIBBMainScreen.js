import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import CargaFacturasScreen from "./CargaFacturasScreen";
import './IIBBMainScreen.css'

function IIBBMainScreen() {
  const [impuestoData, setImpuestoData] = useState({});

  // console.log("Info:", impuestoData);

  /*  Esta pantalla es provisoria y debe ser reemplazada por la definitiva */
  function SeleccionPeriodoScreen() {

    const handleChangePeriodo = (data) => {
      setImpuestoData({
        periodo: data.target.value
      });
    }

    const dateList = [
      { year: 2022, months: [ 
                              // {name: "Diciembre", status: "noCompletado"},
                              // {name: "Noviembre", status: "noCompletado"},
                              // {name: "Octubre", status: "noCompletado"},
                              // {name: "Septiembre", status: "noCompletado"},
                              // {name: "Agosto", status: "noCompletado"},
                              {name: "Julio", status: "porVencer"},
                              {name: "Junio", status: "completado"},
                              {name: "Mayo", status: "completado"},
                              {name: "Abril", status: "completado"},
                              {name: "Marzo", status: "completado"},
                              {name: "Febrero", status: "completado"},
                              {name: "Enero", status: "completado"} ] },

      { year: 2021, months: [ {name: "Diciembre", status: "completado"},
                              {name: "Noviembre", status: "completado"},
                              {name: "Octubre", status: "completado"},
                              {name: "Septiembre", status: "completado"},
                              {name: "Agosto", status: "completado"},
                              {name: "Julio", status: "completado"},
                              {name: "Junio", status: "completado"},
                              {name: "Mayo", status: "completado"},
                              {name: "Abril", status: "completado"},
                              {name: "Marzo", status: "completado"},
                              {name: "Febrero", status: "completado"},
                              {name: "Enero", status: "completado"} ] },

      { year: 2020, months: [ {name: "Diciembre", status: "porVencer"},
                              {name: "Noviembre", status: "porVencer"},
                              {name: "Octubre", status: "porVencer"},
                              {name: "Septiembre", status: "porVencer"},
                              {name: "Agosto", status: "porVencer"},
                              {name: "Julio", status: "porVencer"},
                              {name: "Junio", status: "porVencer"},
                              {name: "Mayo", status: "porVencer"},
                              {name: "Abril", status: "porVencer"},
                              {name: "Marzo", status: "porVencer"},
                              {name: "Febrero", status: "porVencer"},
                              {name: "Enero", status: "porVencer"} ] },
                              
      { year: 2019, months: [ {name: "Diciembre", status: "noCompletado"},
                              {name: "Noviembre", status: "noCompletado"},
                              {name: "Octubre", status: "noCompletado"},
                              {name: "Septiembre", status: "noCompletado"},
                              {name: "Agosto", status: "noCompletado"},
                              {name: "Julio", status: "porVencer"},
                              {name: "Junio", status: "completado"},
                              {name: "Mayo", status: "completado"},
                              {name: "Abril", status: "completado"},
                              {name: "Marzo", status: "completado"},
                              {name: "Febrero", status: "completado"},
                              {name: "Enero", status: "completado"} ] },                              
    ];

    const yearList = [];
    const monthList = [];

    dateList.forEach((date) => {
      yearList.push(<li className="row year" onClick={ console.log("testing onClick") }>{date.year}</li>)
    });

    dateList[0].months.forEach((month) => {
      monthList.push(<li className={"row " + month.status}>{month.name}</li>)
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
