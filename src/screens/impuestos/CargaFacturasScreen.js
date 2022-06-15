import React, { useEffect, useState } from "react";
import CardBasic from "../../components/interfaz/CardBasic";
import ModalBasic from "../../components/ModalBasic";
import provincias from '../../data/data_dummy/provincias.json';

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

export default function CargaFacturasScreen() {
    const [provinciasList, setProvinciasList] = useState(provincias.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    }));
    const [cargaManualActive, setCargaManualActive] = useState(false);
    const [impuestoData, setImpuestoData] = useState({ ...dummy_data, totalesPorProvincia: [] });
    const [modifyAnoAnterior, setModifyAnoAnterior] = useState(false);

    useEffect(() => {
        if (cargaManualActive) {
            document.getElementById("inputProvincia").focus();
        }
    });

    function ModalCargaManualFacturacion() {
        return (
            <React.Fragment>
                <ModalBasic modalId={"ModalCargaManualFact"} title="Calculo manual">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="inputPuntoVenta" />
                        <label htmlFor="inputPuntoVenta">Punto de venta</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="inputTotal" />
                        <label htmlFor="inputTotal">Monto total</label>
                    </div>
                </ModalBasic>
            </React.Fragment>);
    }

    function IngresoAnioAnteriorSection() {
        const BodyModifyMode = () => {

            const handleSubmit = (e) => {
                e.preventDefault();
                setImpuestoData({ ...impuestoData, ingresoAnioAnterior: e.target.montoAnoAnterior.value });
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
        // const PuntoVentaInput = ({ className }) => {
        //     return (
        //         <React.Fragment>
        //             <div className={className}>
        //                 <div className="form-floating">
        //                     <select className="form-select" aria-label="Default select example" name="inputPuntoVenta">
        //                         {provinciasList.map((element) => {
        //                             return <option key={element.id} value={element.id}>{element.nombre}</option>
        //                         })}
        //                     </select>
        //                     <label htmlFor="inputPuntoVenta">Punto de venta</label>
        //                 </div>
        //             </div>
        //         </React.Fragment>
        //     );
        // }

        const handleAdd = (e) => {
            e.preventDefault();
            const newList = provinciasList.filter(data => data.id !== e.target.inputProvincia.value);
            const provincia = provinciasList.filter(data => data.id === e.target.inputProvincia.value)[0];
            const montoTotal = Number.parseInt(e.target.inputMontoTotal.value);
            const totales = {
                provincia: provincia,
                total: montoTotal
            };
            setProvinciasList(newList);
            let newData = impuestoData;
            newData.totalesPorProvincia.push(totales);
            setImpuestoData(newData);
        }

        return (
            <React.Fragment>
                <div className={cargaManualActive ? "collapse mb-3 show" : "collapse mb-3"} id="collapseCargaManual">
                    <div className="card card-body">
                        <h6 className="mb-3 mt-2">A continuacion debera sumarizar los montos de las facturas y indicar segun corresponda:</h6>
                        <form className="row flex-row align-items-center mb-3" onSubmit={handleAdd} >
                            {/* <PuntoVentaInput className={"col-3"} /> */}
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
        const RemoveButton = ({btnId}) => {
            const handleRemove = () => {
                let newData = [];
                let provinciaRemoved;

                for(let i = 0; i < impuestoData.totalesPorProvincia.length; i++){
                    if(i !== btnId){
                        newData.push(impuestoData.totalesPorProvincia[i]);
                    }
                    else {
                        provinciaRemoved = provincias.filter(data => Number.parseInt(data.id) === Number.parseInt(impuestoData.totalesPorProvincia[i].provincia.id))[0];
                    }
                }
                
                let newProvinciasList = provinciasList;
                newProvinciasList.push(provinciaRemoved);
                newProvinciasList.sort((a, b) => {
                    if (a.nombre < b.nombre) {
                        return -1;
                    }
                    if (a.nombre > b.nombre) {
                        return 1;
                    }
                    return 0;
                })
                setProvinciasList(newProvinciasList);
                setImpuestoData({...impuestoData, totalesPorProvincia: newData});
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
                <table className="table table-bordered table-hover table-responsive">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Provincia</th>
                            <th scope="col">Total Facturado</th>
                            <th className="text-center" scope="col"><i className="bi bi-trash"></i></th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {impuestoData.totalesPorProvincia.map((element, i) => {
                            return (
                                <tr key={i}>
                                    <td>{element.provincia.nombre}</td>
                                    <td>{"$"+ Intl.NumberFormat('es-AR').format(element.total)}</td>
                                    <td className="text-center"><RemoveButton btnId={i} /></td>
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
            <ModalCargaManualFacturacion />

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
                        <button type='button' className='btn btn-success w-100 text-center'>Importar Excel</button>
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
                            }
                            }>
                            Cargar
                        </button>
                    </CardBasic>
                </section>
            </div>

            <CargaManualSection />

            <h2>Resumen de totales:</h2>
            <hr />
            <TotalesTable />
        </React.Fragment>
    );
}
