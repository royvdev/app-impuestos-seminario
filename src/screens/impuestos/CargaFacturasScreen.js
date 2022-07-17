import React, { useEffect, useState } from "react";
import CardBasic from "../../components/interfaz/CardBasic";
import ModalBasic from "../../components/ModalBasic";
import provincias from '../../data/data_dummy/provincias.json';
import actividades from '../../data/data_dummy/actividades.json';
import { NavLink } from 'react-router-dom';
import * as DB from '../../components/LocalStorageManager';
import CSVImportButton from "../../components/csvToJSON";
import {getDataFromLocalStorage} from "../../components/LocalStorageManager.js";

const dummy_data = {
    ingresoAnioAnterior: 2500220,
    puntosVenta: [
        {
            id: 1,
            numero: 111,
            provincia: {
                id: 1,
                nombre: "Buenos Aires"
            }
        },
        {
            id: 2,
            numero: 121,
            provincia: {
                id: 1,
                nombre: "Buenos Aires"
            }
        }
    ]
}

function inicializarFormData(params) {
    DB.saveDataToLocalStorage("facturacionFormData", {
        ingresoAnioAnterior: 0,
        totalesPorProvincia: []
    });
}
export function addUploadedData(key) {
    const data = getDataFromLocalStorage(key);
    const json_facturas = JSON.parse(data);

    console.log(json_facturas);

    var totales_pv = {};

    json_facturas.forEach(factura => {
        var punto_venta = factura['Punto de Venta'];
        var total_no_gravado = factura['Imp. Neto No Gravado'];

        var previous_value = (punto_venta in totales_pv) ? totales_pv[punto_venta] : 0;

        totales_pv[punto_venta] = parseFloat(total_no_gravado) + previous_value;
    });
 
    Object.keys(totales_pv).forEach(pv => {
        var monto_total = totales_pv[pv];

        console.log('punto de venta: ' + pv + ' / total: ' + monto_total);

        // const newList = this.CargaFacturasScreen.provinciasList.filter(data => data.id !== e.target.inputProvincia.value);
        // const provincia = this.CargaFacturasScreen.provinciasList.filter(data => data.id === e.target.inputProvincia.value)[0];
        
        // const montoTotal = Number.parseInt(e.target.inputMontoTotal.value);

        const totales = {
            provincia: pv,
            total: monto_total
        };

        // setProvinciasList(newList);
        // let newData = impuestoData;
        // newData.totalesPorProvincia.push(totales);
        // setImpuestoData(newData);
    });
};

export default function CargaFacturasScreen() {
    const provinciasList = provincias.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });
    //const actividadesList = actividades.sort((a, b) => { return a.id - b.id; });
    const puntosVenta = DB.getDataFromLocalStorage("puntosVenta");
    const [cargaManualActive, setCargaManualActive] = useState(false);
    const [impuestoData, setImpuestoData] = useState({...DB.getDataFromLocalStorage("facturacionFormData")});
    const [modifyAnoAnterior, setModifyAnoAnterior] = useState(false);

    console.log("Puntos de Venta:", puntosVenta)
    console.log("impuestoData:", impuestoData)

    useEffect(() => {
        if (cargaManualActive) {
            document.getElementById("inputActividad").focus();
        }
    });

    if (!DB.getDataFromLocalStorage("facturacionFormData")){
        inicializarFormData();
        setImpuestoData({...DB.getDataFromLocalStorage("facturacionFormData")});
    }

    function IngresoAnioAnteriorSection() {
        const BodyModifyMode = () => {

            const handleSubmit = (e) => {
                const newData = { ...impuestoData, ingresoAnioAnterior: e.target.montoAnoAnterior.value };
                DB.saveDataToLocalStorage("facturacionFormData", newData);
                setImpuestoData({...newData});
                setModifyAnoAnterior(false);
            }

            return (
                <React.Fragment>
                    <form className="row" onSubmit={handleSubmit}>
                        <div className="col-3">
                            <div className="input-group mb-3 ">
                                <span className="input-group-text">$</span>
                                <input type="number" min="0" step="any" className="form-control" name="montoAnoAnterior"
                                    defaultValue={impuestoData.ingresoAnioAnterior}
                                />
                            </div>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-success mr-2">Aceptar</button>
                        </div>
                    </form>
                </React.Fragment>
            );
        }
        
        const BodyDescriptionMode = () => {
            const monto = Intl.NumberFormat('es-AR').format(impuestoData.ingresoAnioAnterior);
            return (
                <React.Fragment>
                    <span className="mr-2">El año anterior usted ha facturado <strong>${monto}</strong></span>
                    <button type="button" className="btn btn-secondary mr-2" onClick={() => { setModifyAnoAnterior(true) }}>
                        <i className="bi bi-pencil"></i>
                    </button>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <div className="mb-3">
                    <h2>Ingreso del año anterior</h2>
                    <hr />
                    {modifyAnoAnterior ? <BodyModifyMode /> : <BodyDescriptionMode />}
                </div>
            </React.Fragment>
        );
    }

    function CargaManualSection() {
        const handleAdd = (e) => {
            e.preventDefault();
            const actividad = puntosVenta.filter(data => String(data.actividad.id) === String(e.target.inputActividad.value))[0].actividad;
            const provincia = provinciasList.filter(data => data.id === e.target.inputProvincia.value)[0];
            const montoTotal = Number.parseInt(e.target.inputMontoTotal.value);
            const totales = {
                actividad: actividad,
                provincia: provincia,
                total: montoTotal
            };
            let newData = impuestoData;
            newData.totalesPorProvincia = [...newData.totalesPorProvincia, totales];
            DB.saveDataToLocalStorage("facturacionFormData", newData);
            setImpuestoData({ ...newData });
        }

        return (
            <React.Fragment>
                <div className={cargaManualActive ? "collapse mb-3 show" : "collapse mb-3"} id="collapseCargaManual">
                    <div className="card card-body">
                        <h6 className="mb-3 mt-2">A continuacion debera sumarizar los montos de las facturas e indicar segun corresponda:</h6>
                        <form className="row flex-row align-items-center mb-3" onSubmit={handleAdd} >
                            {/* <PuntoVentaInput className={"col-3"} /> */}
                            <div className="col-3">
                                <div className="form-floating">
                                    <select className="form-select" aria-label="Default select example" name="inputActividad" id="inputActividad" required>
                                        {puntosVenta ? puntosVenta.map((element, index) => {
                                            return <option key={index} value={element.actividad.id}>{element.actividad.id + " - " + element.actividad.descripcion.slice(0,50) + "... " }</option>
                                        }) : null}
                                    </select>
                                    <label htmlFor="inputActividad">Actividad</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-floating">
                                    <select className="form-select" aria-label="Default select example" name="inputProvincia" id="inputProvincia" required>
                                        {provinciasList.map((element) => {
                                            return <option key={element.id} value={element.id}>{element.nombre}</option>
                                        })}
                                    </select>
                                    <label htmlFor="inputProvincia">Provincia</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="form-floating">
                                    <input type="number" min="0" className="form-control" id="inputTotal" name="inputMontoTotal" required />
                                    <label htmlFor="inputTotal">Monto total</label>
                                </div>
                            </div>
                            <div className="col-2">
                                <button type='submit' className='btn btn-blue'>
                                    <i className="bi bi-plus-circle"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    function TotalesTable() {
        const RemoveButton = ({ btnId }) => {
            const handleRemove = () => {
                let newData = [];

                for (let i = 0; i < impuestoData.totalesPorProvincia.length; i++) {
                    if (i !== btnId) {
                        newData.push(impuestoData.totalesPorProvincia[i]);
                    }
                }

                setImpuestoData({ ...impuestoData, totalesPorProvincia: newData });
            };

            return (
                <React.Fragment>
                    <button type="button" className="btn btn-blue" onClick={handleRemove}>
                        <i className="bi bi-trash"></i>
                    </button>
                </React.Fragment>
            );
        };

        return (
            <React.Fragment>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr className="row m-0">
                            <th className="col-5" scope="col">Actividad</th>
                            <th className="col-4" scope="col">Provincia</th>
                            <th className="col-2" scope="col">Total Facturado</th>
                            <th className="text-center col-1" scope="col"><i className="bi bi-trash"></i></th>
                        </tr>
                    </thead>
                    <tbody >
                        {impuestoData.totalesPorProvincia.map((element, i) => {
                            return (
                                <tr key={i} className="row m-0">
                                    <td className="col-5">{element.actividad.id + " - " + element.actividad.descripcion.slice(0,100)+"..."}</td>
                                    <td className="col-4">{element.provincia.nombre}</td>
                                    <td className="col-2">{"$" + Intl.NumberFormat('es-AR').format(element.total)}</td>
                                    <td className="text-center col-1"><RemoveButton btnId={i} /></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>

            <IngresoAnioAnteriorSection />

            <h2>Carga de facturas</h2>
            <hr />
            <div className="mt-4 mb-3 d-flex justify-content-between align-items-stretch">
                <section className="w-50 mr-2">
                    <CardBasic title="Calculo automatico" animate={true} >
                        <div className="mb-3">
                            <h6 className="card-subtitle mb-2 text-danger">(Opcion recomendada)</h6>
                            <p className="card-text">Realiza el calculo automaticamente a partir de la suma de los totales de factura</p>
                        </div>
                        <CSVImportButton key="facturas"/>
                    </CardBasic>
                </section>
                <section className="w-50 ml-2">
                    <CardBasic className="h-100" animate={true} >
                        <h5 className="card-title fw-bold">Calculo manual</h5>
                        <p className="card-text">Calcular e ingresar manualmente los totales facturados por cada punto de venta</p>
                        {/* <button type='button' className='btn btn-blue w-100 text-center' data-bs-toggle="modal" data-bs-target="#ModalCargaManualFact">Cargar</button> */}
                        <button type='button' className='btn btn-blue w-100 text-center' data-bs-toggle="collapse" data-bs-target="#collapseCargaManual" aria-expanded="false" aria-controls="collapseCargaManual"
                            onClick={() => {
                                document.getElementById("inputProvincia").focus();
                                setCargaManualActive(!cargaManualActive);
                            }}>
                            Cargar
                        </button>
                    </CardBasic>
                </section>
            </div>

            <CargaManualSection />

            <h2>Resumen de totales:</h2>
            <hr />
            <div className="d-flex w-100">
                <TotalesTable />
            </div>

            <hr />
            <div className="d-flex flex-row">
                <NavLink to="../periodo" className="w-100">
                    <button type='button' className='btn btn-secondary w-100 text-center mr-2'>Anterior</button>
                </NavLink>
                <NavLink to="../pyr" className="w-100">
                    <button type='button' className='btn btn-success w-100 text-center ml-2'>Siguiente</button>
                </NavLink>
            </div>
        </React.Fragment>
    );
}
