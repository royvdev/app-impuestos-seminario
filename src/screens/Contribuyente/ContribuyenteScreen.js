import React, { useState } from "react";
import './PerfilScreen.css';
import profileFoto from '../../assets/persona2.jpg';
import * as DB from '../../components/LocalStorageManager';
import { Autocomplete, TextField, Tooltip } from "@mui/material";
import actividades from '../../data/data_dummy/actividadesAll.json';
import provincias from '../../data/data_dummy/provincias.json';
import { Box } from "@mui/system";

export default function PerfilScreen() {
    const provinciasList = provincias.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
        if (a.nombre > b.nombre) {
            return 1;
        }
        return 0;
    });

    let usr = {
        nombre: "Pablo",
        apellido: "Rubini",
        email: "pablo@rubini.com.ar",
        cuil: "20-34374609-2",
        dni: "34374609",
        regimen: "Monotributista",
        categoria: "H",
        puntosVenta: [],
        contribuyentes: []
    }

    const [editable, setEditable] = useState(false);
    const [userFormData, setUserFormData] = useState(usr);
    const puntosVenta = DB.getDataFromLocalStorage("puntosVenta");

    console.log("Puntos de venta:", puntosVenta)

    // if (!userFormData) {
    //     DB.saveDataToLocalStorage("contribuyente", {
    //         nombre: "Pablo",
    //         apellido: "Rubini",
    //         email: "pablo@rubini.com.ar",
    //         cuil: "20343746092",
    //         dni: "34374609",
    //         regimen: "Monotributista",
    //         categoria: "H",
    //         puntosVenta: [],
    //         contribuyentes: []
    //     });
    //     setUserFormData(DB.getDataFromLocalStorage("contribuyente"));
    // }

    function PerfilSection() {
        function handleEditar() {
            setEditable(true);
        }

        function handleSubmitPerfil(e) {
            //e.preventDefault();
            const data = {
                nombre: e.target.inputNombre.value,
                apellido: e.target.inputApellido.value,
                email: e.target.inputEmail.value,
                cuil: e.target.inputCuil.value,
                dni: e.target.inputDNI.value,
                regimen: e.target.inputRegimen.value,
                categoria: e.target.inputCategoria.value,
                puntosVenta: [],
                contribuyentes: []
            }
            DB.saveDataToLocalStorage("contribuyente", data);
        }

        return (
            <React.Fragment>
                <form onSubmit={handleSubmitPerfil}>
                    <h2>Perfil</h2>
                    <div className="row">
                        <div className="col-3 d-flex flex-column justify-content-between align-content-between h-100">
                            <img src={profileFoto} alt="Foto perfil" className="profile-foto mb-2" />
                            <button type="button" className="btn btn-secondary" disabled={editable} onClick={handleEditar}>Editar</button>
                        </div>
                        <div className="col-9">
                            <div className="d-flex flex-column justify-content-between align-content-between h-100">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputNombre">Nombre</span>
                                    <input type="text" className="form-control" aria-label="inputNombre" aria-describedby="inputNombre" name="inputNombre" required disabled={!editable} defaultValue={userFormData.nombre ? userFormData.nombre : null} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputApellido">Apellido</span>
                                    <input type="text" className="form-control" aria-label="inputApellido" aria-describedby="inputApellido" name="inputApellido" required disabled={!editable} defaultValue={userFormData.apellido ? userFormData.apellido : null} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputEmail">Email</span>
                                    <input type="email" className="form-control" aria-label="inputEmail" aria-describedby="inputEmail" name="inputEmail" required disabled={!editable} defaultValue={userFormData.email ? userFormData.email : null} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputCuil">CUIL</span>
                                    <input type="text" className="form-control" aria-label="inputCuil" aria-describedby="inputCuil" name="inputCuil" required disabled={!editable} defaultValue={userFormData.cuil ? userFormData.cuil : null} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="inputDNI">DNI</span>
                                    <input type="number" className="form-control" aria-label="inputDNI" aria-describedby="inputDNI" name="inputDNI" required disabled={!editable} defaultValue={userFormData.dni ? userFormData.dni : null} />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputRegimen">
                                        Regimen
                                        <Tooltip title="Un régimen impositivo refiere a la legislación que fija el pago de impuestos en un territorio." placement="top" arrow>
                                            <i className="bi bi-info-circle ms-2"></i>
                                        </Tooltip>
                                    </label>
                                    <select className="form-select" id="inputRegimen" disabled={!editable} name="inputRegimen" defaultValue={userFormData.regimen} >
                                        <option defaultValue></option>
                                        <option value="Monotributo">Monotributo</option>
                                        <option value="Autonomo">Autonomo</option>
                                        <option value="Relacion de Dependencia">Relacion de Dependencia</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="inputCategoria">
                                        Categoria
                                        <Tooltip title="La categoría se te asigna en base al detalle de tus actividades, que se separan en dos grandes grupos: prestación de servicios y venta de cosas muebles (productos)." placement="top" arrow>
                                            <i className="bi bi-info-circle ms-2"></i>
                                        </Tooltip>
                                    </label>
                                    <select className="form-select" id="inputCategoria" disabled={!editable} name="inputCategoria" defaultValue={userFormData.categoria}>
                                        <option defaultValue></option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                </div>
                                {editable ? <button type="submit" className="btn btn-success">Guardar</button> : null}
                            </div>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }

    function PuntosDeVentaSection() {
        function BorrarPVButton({ btnID }) {
            const handleRemove = () => {
                let newData = [];

                for (let i = 0; i < puntosVenta.length; i++) {
                    if (i !== btnID) {
                        newData.push(puntosVenta[i]);
                    }
                }

                DB.saveDataToLocalStorage("puntosVenta", newData);
            };

            return (
                <React.Fragment>
                    <button type="submit" className="btn btn-blue" onClick={handleRemove}>
                        <i className="bi bi-trash"></i>
                    </button>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
                <form>
                    <h2>Puntos de Venta</h2>
                    <table className="table table-bordered table-hover">
                        <thead className="table-secondary">
                            <tr className="row m-0">
                                <th className="col-1" scope="col">Numero</th>
                                <th className="col" scope="col">Direccion</th>
                                <th className="col-2" scope="col">Provincia</th>
                                <th className="col-1" scope="col">Actividad</th>
                                <th className="col" scope="col">Descripcion</th>
                                <th className="col-1" scope="col">Alicuota</th>
                                <th className="col-1 text-center" scope="col"><i className="bi bi-trash"></i></th>
                            </tr>
                        </thead>
                        <tbody >
                            {puntosVenta ? puntosVenta.map((element, i) => {
                                return (
                                    <tr key={i} className="row m-0">
                                        <td className="col-1">{element.numero ? element.numero : null}</td>
                                        <td className="col">{element.direccion ? element.direccion : null}</td>
                                        <td className="col-2">{element.provincia.nombre ? element.provincia.nombre : null}</td>
                                        <td className="col-1">{element.actividad ? element.actividad.id : null}</td>
                                        <td className="col">{element.actividad ? element.actividad.descripcion : null}</td>
                                        <td className="col-1">{element.actividad ? element.actividad.alicuota : null}</td>
                                        <td className="col-1 text-center"><BorrarPVButton btnID={i} /></td>
                                    </tr>
                                );
                            }) : null}
                        </tbody>
                    </table>
                </form>
            </React.Fragment>
        );
    }

    function NuevoPuntoVentaSection() {
        function handleSubmitPuntoVenta(e) {
            //e.preventDefault()
            const actividadID = e.target.inputPVActividad.value.split(" ")[0];
            const actividadObj = actividades.filter(data => String(data.id) === String(actividadID))[0];
            const provinciaObj = provinciasList.filter(data => data.id === e.target.inputPVProvincia.value)[0];
            const data = {
                numero: parseInt(e.target.inputPVNumero.value),
                direccion: e.target.inputPVDireccion.value,
                provincia: provinciaObj,
                actividad: actividadObj
            }
            const oldData = DB.getDataFromLocalStorage("puntosVenta");
            let newData;
            if (oldData) {
                newData = [...oldData, data];
            }
            else {
                newData = [data];
            }

            DB.saveDataToLocalStorage("puntosVenta", newData);
        }

        return (
            <React.Fragment>
                <form onSubmit={handleSubmitPuntoVenta}>
                    <fieldset className="punto-venta-fieldset">
                        <legend>Nuevo punto de venta</legend>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="number" min={0} className="form-control" id="inputPVNumero" name="inputPVNumero" placeholder="1" required />
                                    <label htmlFor="inputPVNumero">Numero</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="address" className="form-control" id="inputPVDireccion" name="inputPVDireccion" placeholder="1" required />
                                    <label htmlFor="inputPVDireccion">Direccion</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select className="form-select" aria-label="Default select example" name="inputPVProvincia" id="inputPVProvincia" required>
                                        {provinciasList.map((element) => {
                                            return <option key={element.id} value={element.id}>{element.nombre}</option>
                                        })}
                                    </select>
                                    <label htmlFor="inputPVProvincia">Provincia</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <Autocomplete
                                        aria-required={true}
                                        id="inputPVActividad"
                                        name="inputPVActividad"
                                        options={actividades}
                                        autoHighlight
                                        getOptionLabel={(option) => (option.id + " (" + option.descripcion + ")")}
                                        renderOption={(props, option) => (
                                            <Box component="li" className="bg-light" {...props} key={option.id}>
                                                <div className="bg-light">
                                                    {option.id} ({option.descripcion})
                                                </div>
                                            </Box>
                                        )}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Buscar actividad"
                                                className="bg-light"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="d-flex justify-content-center align-items-center h-100 w-100">
                                    <button type='submit' className='btn btn-blue'>
                                        <i className="bi bi-plus-circle"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="d-flex flex-column">
                <PerfilSection />
                <hr />
                <PuntosDeVentaSection />
                <NuevoPuntoVentaSection />
                <hr />
            </div>
        </React.Fragment>
    );
}