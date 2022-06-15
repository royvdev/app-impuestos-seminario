import CardBasic from "../../components/interfaz/CardBasic";
import {Link, Route, Routes } from 'react-router-dom';
import React from "react";
import PyRMainScreen from "./PyRMainScreen";

function PyRScreen() {
    const MainScreen = () => {
        return (
            <React.Fragment>
                <article className='mb-5'>
                <h2>Percepciones</h2>
                <hr />
                <ul className='d-flex flex-wrap list-unstyled'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Percepcion 1" subtitle="Vencimiento: 30/06/2022">
                            <Link to="">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Percepcion 2" subtitle="Vencimiento: 30/06/2022">
                            <Link to="">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                </ul>
            </article>
            <article className='mb-5'>
                <h2>Retenciones</h2>
                <hr />
                <ul className='d-flex flex-wrap list-unstyled'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Retencion 1" subtitle="Periodo: Mayo 2022">
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Retencion 2" subtitle="Periodo: Abril 2022">
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                </ul>
            </article>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Routes>
                <Route index path="" element={<MainScreen />} />
                <Route path="" element={<MainScreen />} />
                <Route path="pyr" element={<PyRMainScreen />} />
            </Routes>
        </React.Fragment>
    );
}

export default PyRScreen;