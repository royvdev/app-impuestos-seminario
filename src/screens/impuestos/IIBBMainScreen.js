import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import CargaFacturasScreen from "./CargaFacturasScreen";
import { saveDataToLocalStorage, getDataFromLocalStorage } from "../../components/LocalStorageManager";
import SeleccionarPeriodoScreen from "./SeleccionarPeriodoScreen";
import './IIBBMainScreen.css'
import PyRScreen from '../RetencionesPercepciones/PYRScreen';
import AgregarPercepScreen from '../RetencionesPercepciones/AgregarPercepcionesScreen';
import AgregarRetencionesScreen from '../RetencionesPercepciones/AgregarRetencionesScreen';
import ResumenScreen from "./ResumenScreen";

function IIBBMainScreen() {
  // const [impuestoData, setImpuestoData] = useState({});
  // console.log("Info:", impuestoData);

  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<Navigate to={"periodo"} replace={true} />} />
        <Route path="periodo" element={<SeleccionarPeriodoScreen />} />
        <Route path="facturacion" element={<CargaFacturasScreen />} />
        <Route path="pyr" element={<PyRScreen />} />
        <Route path="pyr/Percepciones" element={<AgregarPercepScreen />} />
        <Route path="pyr/Retenciones" element={<AgregarRetencionesScreen />} />
        <Route path="resumen" element={<ResumenScreen />} />
      </Routes>
    </React.Fragment>
  );
}

export default IIBBMainScreen;
