import React, { useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import CargaFacturasScreen from "./CargaFacturasScreen";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "../../components/LocalStorageManager";
import SeleccionarPeriodoScreen from "./SeleccionarPeriodoScreen";
import './IIBBMainScreen.css'

function IIBBMainScreen() {
  // const [impuestoData, setImpuestoData] = useState({});
  // console.log("Info:", impuestoData);

  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<Navigate to={"periodo"} replace={true} />} />
        <Route path="periodo" element={<SeleccionarPeriodoScreen />} />
        <Route path="facturacion" element={<CargaFacturasScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default IIBBMainScreen;
