import CardBasic from "../../components/interfaz/CardBasic";
import {Link, Route, Routes } from 'react-router-dom';
import React from "react";
import DashboardMainScreen from "./DashboardMainScreen";

function DashboardScreen() {
    const MainScreen = () => {
        return (
            <React.Fragment>
                <article className='mb-5'>
                <h2>Dashboard Gestor</h2>
                <hr />
                <ul className='d-flex flex-wrap list-unstyled'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Item Dashboard 1" subtitle="Vencimiento: 30/06/2022">
                            <Link to="">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Item Dashboard 2" subtitle="Vencimiento: 30/06/2022">
                            <Link to="">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Item Dashboard 3" subtitle="Vencimiento: 30/06/2022">
                            <Link to="">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Item Dashboard 4" subtitle="Vencimiento: 30/06/2022">
                            <Link to="">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Item Dashboard 5" subtitle="Vencimiento: 30/06/2022">
                            <Link to="">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
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
                <Route path="impuestos/IIBB" element={<DashboardMainScreen />} />
            </Routes>
        </React.Fragment>
    );
}

export default DashboardScreen;