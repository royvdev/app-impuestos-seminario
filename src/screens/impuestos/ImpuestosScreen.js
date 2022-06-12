import CardBasic from "../../components/interfaz/CardBasic";
import {Link, Route, Routes } from 'react-router-dom';
import React from "react";
import IIBBMainScreen from "./IIBBMainScreen";

function ImpuestosScreen() {
    const MainScreen = () => {
        return (
            <React.Fragment>
                <article className='mb-5'>
                <h2>¿Que impuesto desea declarar?</h2>
                <hr />
                <ul className='d-flex flex-wrap list-unstyled'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Vencimiento: 30/06/2022">
                            <Link to="IIBB">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="SIRADIG" disable={true}>
                            <button type='button' className='btn btn-danger w-100 text-center'>Proximamente</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Bienes Ganaciales" disable={true}>
                            <button type='button' className='btn btn-danger w-100 text-center'>Proximamente</button>
                        </CardBasic>
                    </li>
                </ul>
            </article>
            <article className='mb-5'>
                <h2>Proximos vencimientos</h2>
                <hr />
                <ul className='d-flex flex-wrap list-unstyled'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Vencimiento: 30/06/2022">
                            <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                        </CardBasic>
                    </li>
                </ul>
            </article>
            <article className='mb-5'>
                <h2>Impuestos recientes</h2>
                <hr />
                <ul className='d-flex flex-wrap list-unstyled'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Periodo: Mayo 2022">
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Periodo: Abril 2022">
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Periodo: Marzo 2022">
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Periodo: Febrero 2022">
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Periodo: Enero 2022">
                            <button type='button' className='btn btn-blue w-100 text-center'>Ver</button>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Declaracion Jurada IIBB" subtitle="Periodo: Diciembre 2021">
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
                <Route path="impuestos/IIBB" element={<IIBBMainScreen />} />
            </Routes>
        </React.Fragment>
    );
}

export default ImpuestosScreen;