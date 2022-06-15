import React, { useState } from "react";
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import CargaFacturasScreen from "./CargaFacturasScreen";

function IIBBMainScreen() {
    const [impuestoData, setImpuestoData] = useState({});

    console.log("Info:", impuestoData);

    /*  Esta pantalla es provisoria y debe ser reemplazada por la definitiva */
    function SeleccionPeriodoScreen() {

        const handleChangePeriodo = (data) => {
            setImpuestoData({
                periodo: data.target.value
            });
        }

        return (
            <React.Fragment>
                <h2>Seleccione un periodo</h2>
                <hr />
                <div>
                    <section>
                        <form>
                            <label htmlFor="fechaPeriodo" className="form-label">Selecciona un mes:</label>
                            <input type="month" className="form-control" id="fechaPeriodo" value={impuestoData.periodo} onChange={handleChangePeriodo} />
                            <nav className="mt-3">
                                <button type="button" className="btn btn-secondary m-2">Anterior</button>
                                <Link to="../facturacion" >
                                    <button type="button" className="btn btn-success m-2">Siguiente</button>
                                </Link>
                            </nav>
                        </form>
                    </section>
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