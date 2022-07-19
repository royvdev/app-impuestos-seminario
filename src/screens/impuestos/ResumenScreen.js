import React from "react";
import { Link, NavLink } from 'react-router-dom'
import CardBasic from "../../components/interfaz/CardBasic";
import { Tooltip } from '@mui/material';
import * as DB from '../../components/LocalStorageManager';
import archivoPDF from '../../assets/IIBB_Julio_2022.pdf';
import { useNavigate } from "react-router-dom";


const dummy = {
    "contribuyente": {
        "nombre": "Pablo",
        "apellido": "Rubini",
        "cuil": "20-34374609-2",
        "regimen": "Monotributo",
        "categoria": "C"
    },
    "ingresoAnioAnterior": 20000,
    "puntosVenta": [
        {
            "id": 1,
            "numero": 111,
            "provincia": {
                "id": 1,
                "nombre": "Buenos Aires"
            }
        },
        {
            "id": 2,
            "numero": 121,
            "provincia": {
                "id": 1,
                "nombre": "Buenos Aires"
            }
        }
    ],
    "totalesPorProvincia": [
        {
            "actividad": {
                "id": 682091,
                "descripcion": "Servicios prestados por inmobiliarias"
            },
            "provincia": {
                "nombre_completo": "Provincia de Formosa",
                "fuente": "IGN",
                "iso_id": "AR-P",
                "nombre": "Formosa",
                "id": "34",
                "categoria": "Provincia",
                "iso_nombre": "Formosa",
                "centroide": {
                    "lat": -24.894972594871,
                    "lon": -59.9324405800872
                }
            },
            "total": 11
        },
        {
            "actividad": {
                "id": 451191,
                "descripcion": "Venta de vehículos automotores, nuevos n.c.p."
            },
            "provincia": {
                "nombre_completo": "Provincia de Buenos Aires",
                "fuente": "IGN",
                "iso_id": "AR-B",
                "nombre": "Buenos Aires",
                "id": "06",
                "categoria": "Provincia",
                "iso_nombre": "Buenos Aires",
                "centroide": {
                    "lat": -36.6769415180527,
                    "lon": -60.5588319815719
                }
            },
            "total": 1
        }
    ]
}

// Agregar alicuota
// Total facturado = total * alicuota - deducciones

export default function ResumenScreen() {
    const navigate = useNavigate();
    const impuestoData = DB.getDataFromLocalStorage("facturacionFormData");
    const periodo = {
        anio: DB.getDataFromLocalStorage("selectedYear"),
        mes: DB.getDataFromLocalStorage("selectedMonth")
    }

    console.log("Impuesto", impuestoData)

    function handleFinalizarImpuesto() {
        //window.location.href(archivoPDF);
        navigate("/");
    }

    function TablaResumen(params) {
        return (
            <React.Fragment>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr className="row m-0">
                            <th className="col" scope="col">Actividad</th>
                            <th className="col" scope="col">Provincia</th>
                            <th className="col" scope="col">Deducciones
                                <Tooltip title="Son la sumatoria de todos los descuentos realizados por Percepciones y Retenciones realizadas" placement="top" arrow>
                                    <i className="bi bi-info-circle ms-2"></i>
                                </Tooltip>
                            </th>
                            <th className="col" scope="col">Total Facturado</th>
                            <th className="col" scope="col">Alicuota</th>
                            <th className="col" scope="col">Total a declarar</th>
                        </tr>
                    </thead>
                    <tbody >
                        {impuestoData.totalesPorProvincia.map((element, i) => {
                            return (
                                <tr key={i} className="row m-0">
                                    <td className="col">{element.actividad.id + " - " + element.actividad.descripcion.slice(0,100)+"..."}</td>
                                    <td className="col">{element.provincia.nombre}</td>
                                    <td className="col">{"$" + Intl.NumberFormat('es-AR').format(0)}</td>
                                    <td className="col">{"$" + Intl.NumberFormat('es-AR').format(element.total)}</td>
                                    <td className="col">{"%" + Intl.NumberFormat('es-AR').format(element.actividad.alicuota)}</td>
                                    <td className="col">{"$" + Intl.NumberFormat('es-AR').format(element.total * (element.actividad.alicuota / 100))}</td>
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
            <div className="d-flex flex-column">
                <h2>Resumen:</h2>
                <p><strong>Periodo:</strong> {periodo.anio && periodo.mes ? periodo.anio + "-" + periodo.mes: null}</p>
                <p><strong>Ingreso del año anterior: </strong>{impuestoData.ingresoAnioAnterior ? "$" + Intl.NumberFormat('es-AR').format(impuestoData.ingresoAnioAnterior) : null}</p>

                <CardBasic title="Informacion del contribuyente" className="mb-4">
                    <hr />
                    <p><strong>Nombre: </strong>{"Pablo"}</p>
                    <p><strong>Apellido: </strong>{"Rubini"}</p>
                    <p><strong>CUIT/CUIL: </strong>{"20-34374609-2"}</p>
                    <p><strong>Regimen: </strong>{"Monotributo"}</p>
                    <p><strong>Categoria: </strong>{"C"}</p>
                </CardBasic>

                <TablaResumen />

                <hr />

                <div className="d-flex flex-row">
                    <NavLink to="../pyr" className="w-100">
                        <button type='button' className='btn btn-secondary w-100 text-center mr-2'>Anterior</button>
                    </NavLink>
                    <Link to={archivoPDF} target="_blank" download={"Instructivo.pdf"} className="w-100">
                        <button type='button' className='btn btn-success w-100 text-center ml-2' onClick={handleFinalizarImpuesto}>Finalizar Impuesto</button>
                    </Link>
                </div>
            </div>

        </React.Fragment>
    );
}